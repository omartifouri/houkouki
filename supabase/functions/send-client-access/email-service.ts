
export const sendEmailWithBrevo = async (to: string, subject: string, htmlContent: string) => {
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
