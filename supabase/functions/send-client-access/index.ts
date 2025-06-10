
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
  console.log("=== DÉBUT TRAITEMENT SEND-CLIENT-ACCESS ===");
  console.log("Méthode:", req.method);
  console.log("URL:", req.url);

  if (req.method === "OPTIONS") {
    console.log("Requête OPTIONS reçue, retour CORS");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Lecture du body de la requête...");
    const requestData: ClientAccessRequest = await req.json();
    
    console.log("=== DONNÉES REÇUES ===");
    console.log("Email destinataire:", requestData.email);
    console.log("Nom complet:", requestData.prenom, requestData.nom);
    console.log("Login:", requestData.login);
    console.log("Mot de passe fourni:", requestData.password ? "Oui" : "Non");

    // Vérifier que toutes les données requises sont présentes
    if (!requestData.email || !requestData.nom || !requestData.prenom || !requestData.login || !requestData.password) {
      console.error("Données manquantes:", { 
        email: !!requestData.email, 
        nom: !!requestData.nom, 
        prenom: !!requestData.prenom, 
        login: !!requestData.login, 
        password: !!requestData.password 
      });
      throw new Error("Données requises manquantes");
    }

    console.log("=== ÉTAPE 1: CRÉATION/MAJ UTILISATEUR SUPABASE ===");
    const authUser = await createOrUpdateSupabaseUser(
      requestData.email, 
      requestData.password, 
      requestData.nom, 
      requestData.prenom
    );
    console.log("Utilisateur Supabase traité avec succès, ID:", authUser.user?.id);

    console.log("=== ÉTAPE 2: GÉNÉRATION TEMPLATE EMAIL ===");
    const emailContent = generateClientAccessEmail(requestData);
    console.log("Template email généré, longueur:", emailContent.length, "caractères");

    console.log("=== ÉTAPE 3: ENVOI EMAIL BREVO ===");
    const brevoResponse = await sendEmailWithBrevo(
      requestData.email,
      "Votre accompagnement Houkouki est activé – bienvenue !",
      emailContent
    );
    console.log("Email Brevo envoyé avec succès, ID:", brevoResponse.messageId);

    console.log("=== SUCCÈS COMPLET ===");
    const successResponse = {
      success: true, 
      message: "Compte créé et email d'accès envoyé avec succès",
      userId: authUser.user?.id,
      messageId: brevoResponse.messageId
    };
    console.log("Réponse de succès:", successResponse);

    return new Response(
      JSON.stringify(successResponse),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("=== ERREUR COMPLÈTE ===");
    console.error("Type d'erreur:", error.constructor.name);
    console.error("Message d'erreur:", error.message);
    console.error("Stack trace complet:", error.stack);
    
    // Logs additionnels pour diagnostic
    if (error.message.includes('Brevo')) {
      console.error("Erreur liée à Brevo détectée");
    }
    if (error.message.includes('Supabase')) {
      console.error("Erreur liée à Supabase détectée");
    }
    
    const errorResponse = {
      error: error.message || "Erreur lors de la création du client",
      details: error.stack,
      timestamp: new Date().toISOString()
    };
    console.error("Réponse d'erreur:", errorResponse);
    
    return new Response(
      JSON.stringify(errorResponse),
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

console.log("=== DÉMARRAGE FONCTION SEND-CLIENT-ACCESS ===");
serve(handler);
