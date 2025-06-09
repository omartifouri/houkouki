import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuestionnaireData {
  nom: string;
  prenom: string;
  age?: string;
  email: string;
  telephone?: string;
  niveauEtudes?: string;
  domaineEtudes?: string;
  experiencesPro?: string;
  occupationActuelle: string;
  qualites?: string[];
  autreQualite?: string;
  tachesPreferees?: string[];
  autreTache?: string;
  creativite?: string;
  activiteArtistique?: string;
  activiteArtistiqueDetails?: string;
  competences?: string[];
  autreCompetence?: string;
  objectifCourtTerme?: string[];
  autreObjectifCourt?: string;
  objectifLongTerme?: string[];
  autreObjectifLong?: string;
  canauxRecherche?: string[];
  autreCanalRecherche?: string;
  obstacles?: string[];
  autreObstacle?: string;
  typeAccompagnement?: string[];
  autreAccompagnement?: string;
  criteresPrincipaux?: string[];
  autreCritere?: string;
  questionSpecifique?: string;
  questionDetails?: string;
  // Contact form fields
  profil?: string;
  message?: string;
}

const formatArrayToString = (arr?: string[]) => {
  return arr && arr.length > 0 ? arr.join(', ') : 'Aucune réponse';
};

const sendEmailWithBrevo = async (to: string, subject: string, htmlContent: string) => {
  const brevoApiKey = Deno.env.get("BREVO_API_KEY");
  
  if (!brevoApiKey) {
    throw new Error("BREVO_API_KEY non configurée");
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": brevoApiKey,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      sender: {
        name: "Houkouki",
        email: "clients@houkouki.com"
      },
      to: [
        {
          email: to,
          name: to.split('@')[0]
        }
      ],
      subject: subject,
      htmlContent: htmlContent
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur Brevo: ${response.status} - ${errorText}`);
  }

  return await response.json();
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

    // Initialiser le client Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

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
      
      // Créer l'objet pour l'insertion dans questionnaire_submissions
      const questionnaireSubmission = {
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        occupation_actuelle: data.occupationActuelle,
        niveau_etudes: data.niveauEtudes || null,
        domaine_etudes: data.domaineEtudes || null,
        experience_professionnelle: data.experiencesPro || null,
        situation_geographique: null, // Pas collecté dans le formulaire actuel
        secteur_activite: null, // Pas collecté dans le formulaire actuel
        objectifs_carriere: [
          ...(data.objectifCourtTerme || []),
          ...(data.objectifLongTerme || []),
          data.autreObjectifCourt ? `Autre court terme: ${data.autreObjectifCourt}` : '',
          data.autreObjectifLong ? `Autre long terme: ${data.autreObjectifLong}` : ''
        ].filter(Boolean).join('; ') || null,
        competences_cles: [
          ...(data.competences || []),
          data.autreCompetence ? `Autre: ${data.autreCompetence}` : ''
        ].filter(Boolean).join('; ') || null,
        langues_parlees: null, // Pas collecté dans le formulaire actuel
        disponibilite_coaching: formatArrayToString(data.typeAccompagnement),
        budget_coaching: null, // Pas collecté dans le formulaire actuel
        autres_informations: [
          data.qualites ? `Qualités: ${formatArrayToString(data.qualites)}${data.autreQualite ? `, ${data.autreQualite}` : ''}` : '',
          data.tachesPreferees ? `Tâches préférées: ${formatArrayToString(data.tachesPreferees)}${data.autreTache ? `, ${data.autreTache}` : ''}` : '',
          data.creativite ? `Créativité: ${data.creativite}` : '',
          data.activiteArtistique ? `Activité artistique: ${data.activiteArtistique}${data.activiteArtistiqueDetails ? ` - ${data.activiteArtistiqueDetails}` : ''}` : '',
          data.canauxRecherche ? `Canaux de recherche: ${formatArrayToString(data.canauxRecherche)}${data.autreCanalRecherche ? `, ${data.autreCanalRecherche}` : ''}` : '',
          data.obstacles ? `Obstacles: ${formatArrayToString(data.obstacles)}${data.autreObstacle ? `, ${data.autreObstacle}` : ''}` : '',
          data.criteresPrincipaux ? `Critères principaux: ${formatArrayToString(data.criteresPrincipaux)}${data.autreCritere ? `, ${data.autreCritere}` : ''}` : '',
          data.questionSpecifique === 'oui' && data.questionDetails ? `Question spécifique: ${data.questionDetails}` : ''
        ].filter(Boolean).join('\n\n') || null
      };

      // Insérer dans la base de données
      const { error: insertError } = await supabase
        .from('questionnaire_submissions')
        .insert(questionnaireSubmission);

      if (insertError) {
        console.error("Erreur insertion questionnaire:", insertError);
        throw new Error(`Erreur insertion questionnaire: ${insertError.message}`);
      }

      console.log("Questionnaire enregistré avec succès");

      // Email avec les données du questionnaire pour l'équipe
      const htmlContent = `
        <h1>Nouveau Questionnaire d'Orientation Professionnelle</h1>
        
        <h2>I. Informations Générales</h2>
        <p><strong>Nom :</strong> ${data.nom}</p>
        <p><strong>Prénom :</strong> ${data.prenom}</p>
        <p><strong>Âge :</strong> ${data.age}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Téléphone :</strong> ${data.telephone}</p>
        <p><strong>Niveau d'études :</strong> ${data.niveauEtudes}</p>
        <p><strong>Domaine d'études :</strong> ${data.domaineEtudes}</p>
        <p><strong>Expériences professionnelles :</strong> ${data.experiencesPro || 'Aucune'}</p>
        <p><strong>Occupation actuelle :</strong> ${data.occupationActuelle}</p>

        <h2>II. Auto-évaluation et Intérêts Professionnels</h2>
        <p><strong>Principales qualités :</strong> ${formatArrayToString(data.qualites)}</p>
        ${data.autreQualite ? `<p><strong>Autre qualité :</strong> ${data.autreQualite}</p>` : ''}
        <p><strong>Tâches préférées :</strong> ${formatArrayToString(data.tachesPreferees)}</p>
        ${data.autreTache ? `<p><strong>Autre tâche :</strong> ${data.autreTache}</p>` : ''}
        <p><strong>Place de la créativité :</strong> ${data.creativite}</p>
        <p><strong>Activité artistique :</strong> ${data.activiteArtistique}</p>
        ${data.activiteArtistiqueDetails ? `<p><strong>Détails activité :</strong> ${data.activiteArtistiqueDetails}</p>` : ''}

        <h2>III. Compétences et Aptitudes</h2>
        <p><strong>Compétences maîtrisées :</strong> ${formatArrayToString(data.competences)}</p>
        ${data.autreCompetence ? `<p><strong>Autre compétence :</strong> ${data.autreCompetence}</p>` : ''}
        <p><strong>Objectifs court terme :</strong> ${formatArrayToString(data.objectifCourtTerme)}</p>
        ${data.autreObjectifCourt ? `<p><strong>Autre objectif court terme :</strong> ${data.autreObjectifCourt}</p>` : ''}
        <p><strong>Objectifs long terme :</strong> ${formatArrayToString(data.objectifLongTerme)}</p>
        ${data.autreObjectifLong ? `<p><strong>Autre objectif long terme :</strong> ${data.autreObjectifLong}</p>` : ''}

        <h2>IV. Stratégie de Recherche et Accompagnement</h2>
        <p><strong>Canaux de recherche :</strong> ${formatArrayToString(data.canauxRecherche)}</p>
        ${data.autreCanalRecherche ? `<p><strong>Autre canal :</strong> ${data.autreCanalRecherche}</p>` : ''}
        <p><strong>Obstacles principaux :</strong> ${formatArrayToString(data.obstacles)}</p>
        ${data.autreObstacle ? `<p><strong>Autre obstacle :</strong> ${data.autreObstacle}</p>` : ''}
        <p><strong>Type d'accompagnement :</strong> ${formatArrayToString(data.typeAccompagnement)}</p>
        ${data.autreAccompagnement ? `<p><strong>Autre accompagnement :</strong> ${data.autreAccompagnement}</p>` : ''}

        <h2>V. Motivation dans un Emploi</h2>
        <p><strong>Critères principaux :</strong> ${formatArrayToString(data.criteresPrincipaux)}</p>
        ${data.autreCritere ? `<p><strong>Autre critère :</strong> ${data.autreCritere}</p>` : ''}

        <h2>VI. Informations Complémentaires</h2>
        <p><strong>Question spécifique :</strong> ${data.questionSpecifique}</p>
        ${data.questionDetails ? `<p><strong>Détails :</strong> ${data.questionDetails}</p>` : ''}
      `;

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
      
      const welcomeHtmlContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #d73527;">Bienvenue sur Houkouki – il ne vous reste qu'un pas pour activer votre accompagnement</h2>
          
          <p>Bonjour ${data.prenom} ${data.nom},</p>
          
          <p>Merci pour votre inscription !</p>
          <p>Vous êtes à un clic de bénéficier d'un accompagnement complet et personnalisé pour vous aider à trouver un stage, un emploi ou repenser votre orientation professionnelle.</p>
          
          <p><strong>Houkouki orientation, c'est :</strong></p>
          <ul>
            <li>Une équipe de juristes et de psychologues à votre écoute</li>
            <li>Un accompagnement à 360° : projet, CV, entretiens, réseau</li>
            <li>Un pilotage simple via votre espace personnel ou WhatsApp</li>
          </ul>
          
          <p>Pour activer votre accompagnement, il vous suffit de <a href="https://houkouki.com/nos-prestations/10?type=particulier" target="_blank" style="color: #d73527; text-decoration: none; font-weight: bold;">choisir votre formule d'abonnement ici</a>.</p>
          
          <p>Et si vous avez la moindre question, nous sommes là pour vous répondre.</p>
          
          <p>Au plaisir de vous accompagner,</p>
          
          <p><strong>L'équipe Houkouki</strong></p>
        </div>
      `;

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
      
      const bankClientHtmlContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #d73527;">Confirmez votre accès Houkouki en quelques secondes</h2>
          
          <p>Bonjour ${data.prenom} ${data.nom},</p>
          
          <p>Merci pour votre inscription sur Houkouki !</p>
          
          <p>Vous indiquez bénéficier de notre accompagnement via la Banque Populaire.<br>
          Afin de valider votre accès, nous devons simplement vérifier que vous faites bien partie des bénéficiaires déclarés par votre établissement.</p>
          
          <p><strong>👉 Pour cela, merci de nous transmettre votre numéro de CIN (Carte d'Identité Nationale), en toute confidentialité.</strong></p>
          
          <p>Vous pouvez choisir le moyen qui vous convient :</p>
          <ul>
            <li>le saisir directement dans votre espace sécurisé : [lien vers l'espace privé]</li>
            <li>nous l'envoyer par WhatsApp au numéro <strong>0526035858</strong></li>
            <li>ou nous appeler directement au numéro <strong>0529009477</strong></li>
          </ul>
          
          <p>Dès réception et validation, vous pourrez :</p>
          <ul>
            <li>remplir votre questionnaire d'orientation (« Parlez-nous de vous »)</li>
            <li>accéder à l'ensemble des services Houkouki : coaching psy, CV, entretiens, réseau</li>
          </ul>
          
          <p>Nous restons à votre écoute pour toute question.</p>
          
          <p>À très vite,</p>
          
          <p><strong>L'équipe Houkouki</strong></p>
        </div>
      `;

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
      
      const contactEmailContent = `
        <h1>Nouveau Formulaire de Contact</h1>
        
        <h2>Informations du Contact</h2>
        <p><strong>Nom :</strong> ${data.nom}</p>
        <p><strong>Prénom :</strong> ${data.prenom}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Téléphone :</strong> ${data.telephone || 'Non renseigné'}</p>
        <p><strong>Profil :</strong> ${profil}</p>
        <p><strong>Message :</strong> ${data.message || 'Aucun message'}</p>
      `;

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
