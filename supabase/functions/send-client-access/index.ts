
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { sendEmailWithBrevo } from './email-service.ts';
import { createOrUpdateSupabaseUser } from './user-service.ts';
import { generateClientAccessEmail, type ClientAccessRequest } from './email-template.ts';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
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
