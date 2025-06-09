
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
    console.log("=== DÉBUT ENVOI RECOMMANDATION ===");
    
    const { friendEmail, yourName, personalMessage } = await req.json();
    
    if (!friendEmail || !yourName) {
      throw new Error("Email de l'ami et nom requis");
    }

    console.log("Envoi de recommandation de", yourName, "vers:", friendEmail);

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Houkouki</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Votre partenaire carrière professionnelle</p>
        </div>
        
        <div style="padding: 30px; background: white; border: 1px solid #e5e5e5; border-radius: 0 0 10px 10px;">
          <h2 style="color: #dc2626; margin-bottom: 20px;">Salut ! ${yourName} pense que Houkouki peut t'aider</h2>
          
          ${personalMessage ? `
            <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 15px; margin: 20px 0; border-radius: 0 5px 5px 0;">
              <p style="margin: 0; font-style: italic; color: #7f1d1d;">"${personalMessage}"</p>
              <p style="margin: 10px 0 0 0; font-size: 14px; color: #991b1b;">- ${yourName}</p>
            </div>
          ` : ''}
          
          <p>Tu cherches un stage, un emploi, ou tu réfléchis à une reconversion ? <strong>Houkouki</strong> propose un accompagnement complet qui combine :</p>
          
          <ul style="color: #4b5563; margin: 20px 0;">
            <li style="margin: 8px 0;">🧠 <strong>Coaching psychologique</strong> avec des professionnels</li>
            <li style="margin: 8px 0;">📋 <strong>Optimisation CV</strong> et préparation entretiens</li>
            <li style="margin: 8px 0;">🎯 <strong>Stratégie de recherche</strong> personnalisée</li>
            <li style="margin: 8px 0;">🤝 <strong>Mise en réseau</strong> avec des recruteurs partenaires</li>
          </ul>
          
          <div style="background: linear-gradient(135deg, #C0997A, #B8926F); padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
            <h3 style="color: white; margin: 0 0 15px 0;">Découvre notre approche complète</h3>
            <a href="https://houkouki.com" style="display: inline-block; background: white; color: #C0997A; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 0 10px 10px 0;">
              Voir nos services
            </a>
            <a href="https://houkouki.com/questionnaire" style="display: inline-block; background: #dc2626; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 0 10px 10px 0;">
              Parle-nous de toi
            </a>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 30px; border-top: 1px solid #e5e5e5; padding-top: 20px;">
            <strong>Houkouki</strong> - Du projet à l'emploi, on t'accompagne<br>
            Contact : contact@houkouki.com | 05 29 045 999
          </p>
        </div>
      </div>
    `;

    const emailResponse = await sendEmailWithBrevo(
      friendEmail,
      `${yourName} te recommande Houkouki pour ton projet professionnel`,
      htmlContent
    );

    console.log("=== RECOMMANDATION ENVOYÉE ===");
    console.log("ID message:", emailResponse.messageId);

    return new Response(JSON.stringify({ 
      success: true,
      messageId: emailResponse.messageId,
      message: "Recommandation envoyée avec succès"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("=== ERREUR RECOMMANDATION ===");
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
