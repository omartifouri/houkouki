
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

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

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': brevoApiKey,
    },
    body: JSON.stringify({
      sender: { 
        name: "Houkouki", 
        email: "clients@houkouki.com" 
      },
      to: [{ email: to }],
      subject: subject,
      htmlContent: htmlContent,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Erreur Brevo:', response.status, errorText);
    throw new Error(`Erreur Brevo: ${response.status} - ${errorText}`);
  }

  return await response.json();
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
    
    console.log("Envoi des accès client à:", requestData.email);

    // Générer le contenu de l'email
    const emailContent = generateClientAccessEmail(requestData);

    // Envoyer l'email via Brevo
    await sendEmailWithBrevo(
      requestData.email,
      "Votre accompagnement Houkouki est activé – bienvenue !",
      emailContent
    );

    console.log("Email d'accès client envoyé avec succès");

    return new Response(
      JSON.stringify({ success: true, message: "Email d'accès envoyé avec succès" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Erreur lors de l'envoi des accès client:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Erreur lors de l'envoi de l'email d'accès"
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
