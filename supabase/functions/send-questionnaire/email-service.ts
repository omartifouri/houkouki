
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

export { sendEmailWithBrevo };
