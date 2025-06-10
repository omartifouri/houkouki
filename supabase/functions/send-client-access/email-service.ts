
export const sendEmailWithBrevo = async (to: string, subject: string, htmlContent: string) => {
  console.log("=== DÉBUT ENVOI EMAIL BREVO ===");
  
  const brevoApiKey = Deno.env.get('BREVO_API_KEY');
  
  if (!brevoApiKey) {
    console.error("Clé API Brevo manquante dans les variables d'environnement");
    throw new Error('BREVO_API_KEY non configurée');
  }

  console.log('Email destinataire:', to);
  console.log('Sujet email:', subject);
  console.log('Clé API Brevo présente:', !!brevoApiKey);
  console.log('Longueur contenu HTML:', htmlContent.length);

  const emailPayload = {
    sender: { 
      name: "Houkouki", 
      email: "noreply@houkouki.com"
    },
    to: [{ email: to }],
    subject: subject,
    htmlContent: htmlContent,
  };

  console.log('=== PAYLOAD EMAIL BREVO ===');
  console.log(JSON.stringify(emailPayload, null, 2));

  console.log('Envoi de la requête vers Brevo...');
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': brevoApiKey,
    },
    body: JSON.stringify(emailPayload),
  });

  console.log('=== RÉPONSE BREVO ===');
  console.log('Statut HTTP:', response.status);
  console.log('Status text:', response.statusText);
  console.log('Headers réponse:', Object.fromEntries(response.headers.entries()));

  if (!response.ok) {
    const errorText = await response.text();
    console.error('=== ERREUR BREVO DÉTAILLÉE ===');
    console.error('Statut:', response.status);
    console.error('Texte erreur brut:', errorText);
    
    // Essayer de parser l'erreur JSON si possible
    try {
      const errorJson = JSON.parse(errorText);
      console.error('Erreur JSON parsée:', errorJson);
    } catch (e) {
      console.error('Impossible de parser l\'erreur JSON');
    }
    
    throw new Error(`Erreur Brevo: ${response.status} - ${errorText}`);
  }

  const result = await response.json();
  console.log('=== SUCCÈS BREVO ===');
  console.log('Réponse complète:', result);
  console.log('Message ID:', result.messageId);
  
  return result;
};
