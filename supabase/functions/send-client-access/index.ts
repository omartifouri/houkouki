
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ClientAccessRequest {
  nom: string;
  prenom: string;
  email: string;
  login: string;
  password: string;
}

const sendEmailWithBrevo = async (to: string, subject: string, htmlContent: string) => {
  const brevoApiKey = Deno.env.get('BREVO_API_KEY');
  
  if (!brevoApiKey) {
    throw new Error('BREVO_API_KEY non configurée');
  }

  console.log('Envoi email via Brevo vers:', to);
  console.log('Clé API Brevo présente:', !!brevoApiKey);

  const emailPayload = {
    sender: { 
      name: "Houkouki", 
      email: "noreply@houkouki.com"
    },
    to: [{ email: to }],
    subject: subject,
    htmlContent: htmlContent,
  };

  console.log('Payload email:', JSON.stringify(emailPayload, null, 2));

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': brevoApiKey,
    },
    body: JSON.stringify(emailPayload),
  });

  console.log('Statut réponse Brevo:', response.status);
  console.log('Headers réponse:', Object.fromEntries(response.headers.entries()));

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Erreur Brevo:', response.status, errorText);
    throw new Error(`Erreur Brevo: ${response.status} - ${errorText}`);
  }

  const result = await response.json();
  console.log('Réponse Brevo complète:', result);
  return result;
};

const createOrUpdateSupabaseUser = async (email: string, password: string, nom: string, prenom: string) => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Variables Supabase manquantes');
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  console.log('Vérification/création du compte utilisateur Supabase pour:', email);

  // D'abord vérifier si l'utilisateur existe déjà
  const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();
  
  if (listError) {
    console.error('Erreur lors de la vérification des utilisateurs:', listError);
    throw new Error(`Erreur vérification utilisateurs: ${listError.message}`);
  }

  const existingUser = existingUsers.users.find(user => user.email === email);

  if (existingUser) {
    console.log('Utilisateur existant trouvé:', existingUser.id);
    
    // Mettre à jour le mot de passe de l'utilisateur existant
    const { data: updatedUser, error: updateError } = await supabase.auth.admin.updateUserById(
      existingUser.id,
      {
        password: password,
        user_metadata: {
          first_name: prenom,
          last_name: nom,
        }
      }
    );

    if (updateError) {
      console.error('Erreur mise à jour utilisateur:', updateError);
      throw new Error(`Erreur mise à jour utilisateur: ${updateError.message}`);
    }

    console.log('Mot de passe utilisateur mis à jour avec succès');
    return { user: updatedUser.user };
  } else {
    console.log('Création d\'un nouvel utilisateur');
    
    // Créer l'utilisateur dans Supabase Auth
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true, // Confirmer automatiquement l'email
      user_metadata: {
        first_name: prenom,
        last_name: nom,
      }
    });

    if (authError) {
      console.error('Erreur création utilisateur Auth:', authError);
      throw new Error(`Erreur création utilisateur: ${authError.message}`);
    }

    console.log('Nouvel utilisateur Auth créé avec succès:', authUser.user?.id);
    return authUser;
  }
};

const generateClientAccessEmail = (data: ClientAccessRequest) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #d73527;">Votre accompagnement Houkouki est activé – bienvenue !</h2>
      
      <p>Bonjour ${data.prenom} ${data.nom},</p>
      
      <p>Merci pour votre inscription !</p>
      <p>Votre abonnement Houkouki vous donne accès à un accompagnement complet, pensé pour vous aider à chaque étape de votre projet professionnel.</p>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #d73527; margin-top: 0;">Vos identifiants de connexion :</h3>
        <p><strong>Email (identifiant) :</strong> ${data.email}</p>
        <p><strong>Mot de passe temporaire :</strong> <code style="background-color: #e9ecef; padding: 2px 6px; border-radius: 4px;">${data.password}</code></p>
        <p style="color: #dc3545; font-weight: bold; margin-top: 15px;">⚠️ Important : Vous devrez changer ce mot de passe lors de votre première connexion.</p>
        <p style="color: #6c757d; font-size: 14px; margin-top: 10px;">Note : Utilisez votre adresse email comme identifiant de connexion.</p>
      </div>
      
      <p><strong>En tant que client abonné, vous pouvez dès maintenant :</strong></p>
      <ul>
        <li>compléter votre profil via le questionnaire « Parlez-nous de vous »</li>
        <li>bénéficier d'un accompagnement personnalisé, incluant coaching psychologique, optimisation de votre CV, préparation aux entretiens, et mise en réseau avec des recruteurs.</li>
      </ul>
      
      <p>Vous pouvez piloter votre accompagnement depuis votre espace privé ou échanger avec notre équipe par tel ou sur WhatsApp au <strong>05 29 04 59 99</strong> selon ce qui vous convient le mieux.</p>
      
      <p>Nous sommes ravis de vous accompagner dans cette étape !</p>
      
      <p>À bientôt,</p>
      <p><strong>L'équipe Houkouki</strong></p>
    </div>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: ClientAccessRequest = await req.json();
    
    console.log("=== DÉBUT CRÉATION CLIENT COMPLET ===");
    console.log("Destinataire:", requestData.email);
    console.log("Nom complet:", requestData.prenom, requestData.nom);

    // 1. Créer ou mettre à jour le compte utilisateur dans Supabase Auth
    const authUser = await createOrUpdateSupabaseUser(
      requestData.email, 
      requestData.password, 
      requestData.nom, 
      requestData.prenom
    );

    // 2. Générer le contenu de l'email
    const emailContent = generateClientAccessEmail(requestData);

    // 3. Envoyer l'email via Brevo
    const brevoResponse = await sendEmailWithBrevo(
      requestData.email,
      "Votre accompagnement Houkouki est activé – bienvenue !",
      emailContent
    );

    console.log("=== CLIENT CRÉÉ ET EMAIL ENVOYÉ ===");
    console.log("ID Utilisateur Auth:", authUser.user?.id);
    console.log("ID Message Brevo:", brevoResponse.messageId);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Compte créé et email d'accès envoyé avec succès",
        userId: authUser.user?.id,
        messageId: brevoResponse.messageId 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("=== ERREUR CRÉATION CLIENT ===");
    console.error("Type d'erreur:", error.constructor.name);
    console.error("Message d'erreur:", error.message);
    console.error("Stack trace:", error.stack);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || "Erreur lors de la création du client",
        details: error.stack
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
};

serve(handler);
