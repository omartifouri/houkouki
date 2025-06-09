
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { sendEmailWithBrevo } from './email-service.ts';
import { saveQuestionnaireToDatabase, type QuestionnaireData } from './database-service.ts';
import { 
  generateQuestionnaireEmailContent,
  generateContactEmailContent,
  generateStudentWelcomeEmail,
  generateBankClientWelcomeEmail
} from './email-templates.ts';

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
    console.log("=== DÉBUT DE LA FONCTION SEND-QUESTIONNAIRE ===");
    
    // Vérifier que la clé API est présente
    const brevoApiKey = Deno.env.get("BREVO_API_KEY");
    console.log("Clé API Brevo présente:", !!brevoApiKey);
    console.log("Longueur de la clé:", brevoApiKey ? brevoApiKey.length : 0);
    
    if (!brevoApiKey) {
      throw new Error("BREVO_API_KEY non configurée");
    }

    const data: QuestionnaireData = await req.json();
    console.log("Données reçues:", { 
      nom: data.nom, 
      prenom: data.prenom, 
      email: data.email, 
      occupationActuelle: data.occupationActuelle,
      profil: data.profil 
    });

    // Vérifier si c'est un questionnaire complet ou juste le formulaire de contact
    const isFullQuestionnaire = data.age && data.telephone && data.niveauEtudes;

    // Si c'est un questionnaire complet, l'enregistrer dans la base de données
    if (isFullQuestionnaire) {
      console.log("=== ENREGISTREMENT QUESTIONNAIRE COMPLET ===");
      
      await saveQuestionnaireToDatabase(data);
      console.log("Questionnaire enregistré avec succès");

      // Email avec les données du questionnaire pour l'équipe
      const htmlContent = generateQuestionnaireEmailContent(data);

      console.log("=== ENVOI EMAIL ÉQUIPE ===");
      console.log("Destinataire:", "clients@houkouki.com");
      console.log("Sujet:", `Nouveau questionnaire de ${data.prenom} ${data.nom}`);
      
      const teamEmailResponse = await sendEmailWithBrevo(
        "clients@houkouki.com",
        `Nouveau questionnaire de ${data.prenom} ${data.nom}`,
        htmlContent
      );

      console.log("=== RÉPONSE EMAIL ÉQUIPE ===");
      console.log("Succès:", !!teamEmailResponse.messageId);
      console.log("ID message:", teamEmailResponse.messageId);
    }

    // Gestion des emails selon le profil pour le formulaire de contact
    let welcomeEmailResponse = null;
    const profil = data.profil || data.occupationActuelle;

    if (profil === "etudiant") {
      console.log("=== ENVOI EMAIL BIENVENUE ÉTUDIANT ===");
      console.log("Email client:", data.email);
      
      const welcomeHtmlContent = generateStudentWelcomeEmail(data);

      welcomeEmailResponse = await sendEmailWithBrevo(
        data.email,
        "Bienvenue sur Houkouki – il ne vous reste qu'un pas pour activer votre accompagnement",
        welcomeHtmlContent
      );

      console.log("=== RÉPONSE EMAIL BIENVENUE ÉTUDIANT ===");
      console.log("Succès:", !!welcomeEmailResponse.messageId);
      console.log("ID message:", welcomeEmailResponse.messageId);
    } else if (profil === "client-banque") {
      console.log("=== ENVOI EMAIL CLIENT BANQUE ===");
      console.log("Email client:", data.email);
      
      const bankClientHtmlContent = generateBankClientWelcomeEmail(data);

      welcomeEmailResponse = await sendEmailWithBrevo(
        data.email,
        "Confirmez votre accès Houkouki en quelques secondes",
        bankClientHtmlContent
      );

      console.log("=== RÉPONSE EMAIL CLIENT BANQUE ===");
      console.log("Succès:", !!welcomeEmailResponse.messageId);
      console.log("ID message:", welcomeEmailResponse.messageId);
    }

    // Envoyer email d'information à l'équipe pour tous les formulaires de contact
    if (!isFullQuestionnaire) {
      console.log("=== ENVOI EMAIL ÉQUIPE POUR FORMULAIRE CONTACT ===");
      
      const contactEmailContent = generateContactEmailContent(data, profil);

      const teamContactResponse = await sendEmailWithBrevo(
        "clients@houkouki.com",
        `Nouveau contact de ${data.prenom} ${data.nom} (${profil})`,
        contactEmailContent
      );

      console.log("=== RÉPONSE EMAIL ÉQUIPE CONTACT ===");
      console.log("Succès:", !!teamContactResponse.messageId);
      console.log("ID message:", teamContactResponse.messageId);
    }

    console.log("=== FIN FONCTION - SUCCÈS ===");
    return new Response(JSON.stringify({ 
      success: true, 
      teamEmailResponse: isFullQuestionnaire ? "Email équipe envoyé (questionnaire)" : "Email équipe envoyé (contact)",
      welcomeEmailResponse: welcomeEmailResponse ? `Email ${profil} envoyé` : `Non envoyé (profil: ${profil})`,
      databaseSaved: isFullQuestionnaire ? "Questionnaire enregistré en base" : "Non enregistré (formulaire de contact)"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("=== ERREUR DANS SEND-QUESTIONNAIRE ===");
    console.error("Message d'erreur:", error.message);
    console.error("Stack trace:", error.stack);
    console.error("Type d'erreur:", error.constructor.name);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.stack,
        type: error.constructor.name
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
