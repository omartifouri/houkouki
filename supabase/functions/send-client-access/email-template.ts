
export interface ClientAccessRequest {
  nom: string;
  prenom: string;
  email: string;
  login: string;
  password: string;
}

export const generateClientAccessEmail = (data: ClientAccessRequest) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #d73527;">Votre accompagnement Houkouki est activé – bienvenue !</h2>
      
      <p>Bonjour ${data.prenom} ${data.nom},</p>
      
      <p>Merci pour votre inscription !</p>
      <p>Votre abonnement Houkouki vous donne accès à un accompagnement complet, pensé pour vous aider à chaque étape de votre projet professionnel.</p>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #d73527; margin-top: 0;">Vos identifiants de connexion :</h3>
        <p><strong>Email (identifiant) :</strong> ${data.email}</p>
        <p><strong>Mot de passe temporaire :</strong> <code style="background-color: #e9ecef; padding: 2px 6px; border-radius: 4px;">${data.password}</code></p>
        <p style="color: #dc3545; font-weight: bold; margin-top: 15px;">⚠️ Important : Vous devrez changer ce mot de passe lors de votre première connexion.</p>
        <p style="color: #6c757d; font-size: 14px; margin-top: 10px;">Note : Utilisez votre adresse email comme identifiant de connexion.</p>
      </div>
      
      <p><strong>En tant que client abonné, vous pouvez dès maintenant :</strong></p>
      <ul>
        <li>compléter votre profil via le questionnaire « Parlez-nous de vous »</li>
        <li>bénéficier d'un accompagnement personnalisé, incluant coaching psychologique, optimisation de votre CV, préparation aux entretiens, et mise en réseau avec des recruteurs.</li>
      </ul>
      
      <p>Vous pouvez piloter votre accompagnement depuis votre espace privé ou échanger avec notre équipe par tel ou sur WhatsApp au <strong>05 29 04 59 99</strong> selon ce qui vous convient le mieux.</p>
      
      <p>Nous sommes ravis de vous accompagner dans cette étape !</p>
      
      <p>À bientôt,</p>
      <p><strong>L'équipe Houkouki</strong></p>
    </div>
  `;
};
