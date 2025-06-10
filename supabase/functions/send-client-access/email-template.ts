
export interface ClientAccessRequest {
  nom: string;
  prenom: string;
  email: string;
  login: string;
  password: string;
}

export const generateClientAccessEmail = (data: ClientAccessRequest) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vos accès Houkouki</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #d73527; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Houkouki</h1>
      </div>
      
      <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
        <h2 style="color: #d73527; margin-top: 0;">Votre accompagnement Houkouki est activé – bienvenue !</h2>
        
        <p>Bonjour ${data.prenom} ${data.nom},</p>
        
        <p>Merci pour votre inscription !</p>
        <p>Votre abonnement Houkouki vous donne accès à un accompagnement complet, pensé pour vous aider à chaque étape de votre projet professionnel.</p>
        
        <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #d73527;">
          <h3 style="color: #d73527; margin-top: 0; font-size: 18px;">🔑 Vos identifiants de connexion :</h3>
          <p style="margin: 15px 0;"><strong>Email (identifiant) :</strong> <span style="background-color: #e9ecef; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${data.email}</span></p>
          <p style="margin: 15px 0;"><strong>Mot de passe temporaire :</strong> <span style="background-color: #e9ecef; padding: 4px 8px; border-radius: 4px; font-family: monospace; font-weight: bold; color: #d73527;">${data.password}</span></p>
          <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px; margin-top: 20px;">
            <p style="color: #856404; font-weight: bold; margin: 0;">⚠️ Important : Vous devrez changer ce mot de passe lors de votre première connexion.</p>
          </div>
          <p style="color: #6c757d; font-size: 14px; margin-top: 15px; margin-bottom: 0;">💡 Conseil : Utilisez votre adresse email comme identifiant de connexion.</p>
        </div>
        
        <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 25px 0;">
          <p style="margin-top: 0;"><strong>🎯 En tant que client abonné, vous pouvez dès maintenant :</strong></p>
          <ul style="margin: 15px 0; padding-left: 20px;">
            <li style="margin-bottom: 8px;">✅ Compléter votre profil via le questionnaire « Parlez-nous de vous »</li>
            <li style="margin-bottom: 8px;">✅ Bénéficier d'un accompagnement personnalisé, incluant coaching psychologique, optimisation de votre CV, préparation aux entretiens, et mise en réseau avec des recruteurs</li>
          </ul>
        </div>
        
        <p>Vous pouvez piloter votre accompagnement depuis votre espace privé ou échanger avec notre équipe par téléphone ou sur WhatsApp au <strong style="color: #d73527;">05 29 04 59 99</strong> selon ce qui vous convient le mieux.</p>
        
        <p>Nous sommes ravis de vous accompagner dans cette étape !</p>
        
        <div style="border-top: 2px solid #f0f0f0; margin-top: 30px; padding-top: 20px;">
          <p style="margin-bottom: 5px;">À bientôt,</p>
          <p style="margin-top: 0;"><strong style="color: #d73527;">L'équipe Houkouki</strong></p>
        </div>
      </div>
    </body>
    </html>
  `;
};
