
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
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
        name: "Houkouki Test",
        email: "o.tifouri@geoso.fr"
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
    console.log("=== DÉBUT TEST EMAIL ===");
    
    const { email } = await req.json();
    
    if (!email) {
      throw new Error("Email requis");
    }

    console.log("Envoi d'email de test vers:", email);

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #d73527;">Test Email - Houkouki</h1>
        
        <p>Bonjour,</p>
        
        <p>Ceci est un email de test pour vérifier que la configuration Brevo fonctionne correctement.</p>
        
        <p><strong>Informations du test :</strong></p>
        <ul>
          <li>Date: ${new Date().toLocaleString('fr-FR')}</li>
          <li>Destinataire: ${email}</li>
          <li>Plateforme: Brevo API</li>
        </ul>
        
        <p>Si vous recevez cet email, la configuration est fonctionnelle ! ✅</p>
        
        <p>Cordialement,<br><strong>L'équipe Houkouki</strong></p>
      </div>
    `;

    const emailResponse = await sendEmailWithBrevo(
      email,
      "Test Email - Configuration Houkouki",
      htmlContent
    );

    console.log("=== EMAIL DE TEST ENVOYÉ ===");
    console.log("ID message:", emailResponse.messageId);

    return new Response(JSON.stringify({ 
      success: true,
      messageId: emailResponse.messageId,
      message: "Email de test envoyé avec succès"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("=== ERREUR TEST EMAIL ===");
    console.error("Message:", error.message);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
