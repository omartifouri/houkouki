export const formatArrayToString = (arr?: string[]) => {
  return arr && arr.length > 0 ? arr.join(', ') : 'Aucune réponse';
};

export const generateQuestionnaireEmailContent = (data: any) => {
  return `
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
};

export const generateContactEmailContent = (data: any, profil: string) => {
  return `
    <h1>Nouveau Formulaire de Contact</h1>
    
    <h2>Informations du Contact</h2>
    <p><strong>Nom :</strong> ${data.nom}</p>
    <p><strong>Prénom :</strong> ${data.prenom}</p>
    <p><strong>Email :</strong> ${data.email}</p>
    <p><strong>Téléphone :</strong> ${data.telephone || 'Non renseigné'}</p>
    <p><strong>Profil :</strong> ${profil}</p>
    <p><strong>Message :</strong> ${data.message || 'Aucun message'}</p>
  `;
};

export const generateStudentWelcomeEmail = (data: any) => {
  return `
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
};

export const generateBankClientWelcomeEmail = (data: any) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #d73527;">Confirmez votre accès Houkouki en quelques secondes</h2>
      
      <p>Bonjour ${data.prenom} ${data.nom},</p>
      
      <p>Merci pour votre inscription sur Houkouki !</p>
      
      <p>Vous indiquez bénéficier de notre accompagnement via la Banque Populaire.<br>
      Afin de valider votre accès, nous devons simplement vérifier que vous faites bien partie des bénéficiaires déclarés par votre établissement.</p>
      
      <p><strong>👉 Pour cela, merci de nous transmettre votre numéro de CIN (Carte d'Identité Nationale), en toute confidentialité.</strong></p>
      
      <p>Vous pouvez choisir le moyen qui vous convient :</p>
      <ul>
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
};
