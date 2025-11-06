import { useParams, Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import { Calendar, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogArticle {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

const articles: BlogArticle[] = [
  {
    id: 1,
    title: "Spoliation foncière : Article 2 de la loi 39-08",
    content: `Article 2 de la loi 39 08 portant code des droits réels

Article 2 :

"Les titres fonciers et les immatriculations subséquentes qui y sont mentionnées conservent le droit qu'ils relatent et font preuve à l'égard des tiers que la personne qui y est dénommée est réellement investie des droits qui y sont spécifiés. Les annulations ou modifications ultérieures ou radiations du titre foncier ne peuvent être opposées ou préjudicier aux tiers inscrits de bonne foi sauf si le titulaire du droit a subi un préjudice par suite d'une falsification ou de faux et usage de faux à condition toutefois qu'il ait porté plainte en vue de réclamer son droit dans un délai de quatre ans à compter de la date d'immatriculation objet de la demande d'annulation, modification ou radiation."

ÊTES-VOUS CERTAIN.E QUE VOTRE TITRE FONCIER EST TOUJOURS EN VOTRE NOM ?

Votre bien immobilier (que ce soit votre maison d'habitation, ou tout autre bien vous appartenant, que vous l'occupiez ou que vous l'ayez mis en location), vous appartient à partir du moment où il est enregistré à la conservation foncière sous un numéro qui correspond à son « titre ».

Cependant, du jour au lendemain vous pouvez être surpris d'apprendre, alors même que vous occupez ou louez toujours les lieux et que vous n'avez procédé à aucune modification ni à la vente de votre titre, que le lieu ne vous appartient plus !!

Et ce en raison d'un détournement frauduleux de ce titre par suite de falsification ou de faux et usage de faux !

PIRE ENCORE : A partir de cette date, la loi vous donne 4 ANS pour porter plainte en vue de réclamer votre droit.

Si passé ce délai vous ne vous êtes toujours pas rendu compte de la falsification dont vous avez été victime et BIEN VOUS N'AUREZ PLUS QUE VOS YEUX POUR PLEURER ET VOTRE BIEN REVIENDRA D'OFFICE À SON VOLEUR !

Conseil de Houkouki: soyez vigilant et téléchargez l'application MOHAFADATI (www.ancfcc.gov.ma/DemandeSuiviTitresPage/) mise à votre disposition par la conservation foncière pour vérifier régulièrement l'état de votre titre foncier !

Pour plus d'informations, contactez nos juristes Houkouki`,
    date: "01/02/2020",
    image: "/lovable-uploads/spoliation-fonciere-alert.png",
    category: "Jamila Alami"
  },
  {
    id: 2,
    title: "Contrat de travail",
    content: `Le contrat de travail est une formalité essentielle pour l'intégration d'un nouveau salarié dans une entreprise.

Il est important que ce contrat soit bien rédigé pour que le salarié et l'employeur soient protégés en cas de litige.

Le contrat de travail est un accord passé entre l'employeur et le nouveau salarié qui fixe les dispositions qui encadrent leur relation durant toute la durée du contrat.

Au Maroc, le contrat de travail peut s'effectuer de manière orale et peut être prouvé dans ce cas par tous moyens de rémunération, ou par écrit.

La forme écrite est bien sûr la plus recommandée afin d'avoir une base à faire valoir auprès des tribunaux en cas de litiges.

Toutefois, la rédaction d'un contrat de travail dépend de la forme du contrat. Selon l'article 16 du code du travail marocain, il y a trois types de contrat de travail :

Le contrat à durée indéterminée (CDI):

Le contrat à durée indéterminée est l'un des contrats les plus répandus et a la particularité de n'avoir aucune date de fin de contrat.

La rédaction du CDI doit se faire dès que le nouveau salarié donne son accord pour intégrer l'entreprise.

L'employeur a le devoir d'établir ce contrat en deux exemplaires à faire légaliser par les deux parties contractantes.

Le contenu du contrat de travail permet de préciser les points essentiels de la relation de travail, à savoir :

- la date de démarrage du contrat,
- la rémunération,
- les conditions de travail auxquelles sera soumis le salarié,
- la position occupée,
- les jours de congés
- ainsi que le délai de préavis en cas de départ.

Le contrat à durée déterminée (CDD):

Comme son nom l'indique, le contrat à durée déterminée doit mentionner à la fois une date de début de contrat et une date de fin, en plus des points essentiels de la relation de travail similaire au CDI. Le recours au CDD est limité aux cas suivants:

● Remplacement d'un salarié dont le contrat est suspendu pour cause de congé, maladie..., sauf la grève;
● Augmentation temporaire de l'activité de l'entreprise ;
● Travail à caractère saisonnier

Le contrat de travail temporaire (intérim):

Il s'agit d'un contrat dont la durée de vie correspond à celle du projet.

Le contrat d'intérim se fait en général entre une agence d'intérim qui se positionne comme médiateur, un salarié et une entreprise.

Tout comme les contrats précédents, le contrat d'intérim doit mentionner les points essentiels de la relation de travail en plus de :

- la durée de la mission,
- le lieu de l'exécution,
- les qualifications qui ont poussé à recruter le salarié,
- le motif qui a poussé l'entreprise à recourir à un intérimaire,
- la précision sur le poste,
- ainsi que le montant de la rémunération.

Maintenant que vous savez à quel point un contrat de travail est important et ce qu'il implique, comment pouvez-vous être sûr que le prochain contrat de travail que vous aurez à rédiger protège vos droits ainsi que ceux de vos employés?

Contactez-nous chez Houkouki !

Nos juristes spécialisés dans le droit du travail, procéderont à un audit de vos contrats de travail pour vérifier que tout est en règle et que les intérêts des parties sont préservés autant que la loi le prévoit.

Si vous n'avez jamais mis en place de contrat de travail et que vous souhaitez structurer l'intégration de vos nouveaux employés, nous pouvons procéder à la rédaction d'un modèle de contrat de travail selon vos besoins.

Houkouki, le meilleur allié de l'entreprise et de ses salariés!`,
    date: "28/01/2020",
    image: "/lovable-uploads/contrat-travail.png",
    category: "Jamila Alami"
  },
  {
    id: 3,
    title: "Création de société au Maroc",
    content: `Créer sa propre entreprise est un rêve que plusieurs marocains veulent réaliser, mais la plupart d'entre eux ignorent les contraintes et procédures liées à la création de société et renoncent à leur projet lorsqu'ils en prennent connaissance.

Si vous êtes dans ce cas, ne laissez surtout pas la paperasse vous décourager ! Le processus que nous vous détaillons dans cet article vous aidera à y voir plus clair. Avant toute chose, il faut regarder la réglementation qui entoure votre activité. Si l'activité de votre entreprise est réglementée vous devez vous assurer que vous remplissez bien les conditions nécessaires pour obtenir l'autorisation à l'inscription au registre de commerce.

Après cela il faut obtenir le certificat négatif (valable 90 jours) qui atteste que la dénomination, sigle ou enseigne de votre future entreprise n'est pas utilisée et peut être exploitée pour l'immatriculation au registre du commerce.

Ensuite vient l'identification du siège social, étape pour laquelle vous devrez justifier les locaux du siège social, grâce à un bail commercial ou une attestation de domiciliation, aux impôts et au greffe du tribunal de commerce.

Quand cela est fait, il faut passer à la rédaction des statuts.

Si votre capital est de moins de 100,000 Dhs, vous n'aurez pas besoin d'effectuer un blocage de fonds, mais s'il dépasse 100,000 Dhs il faudra bloquer au minimum 25% auprès de la banque et recevoir une attestation de blocage de capital libéré.

Après avoir effectué tout ceci, vous êtes prêt à commencer la procédure de création de votre société qui doit se matérialiser par :

- l'enregistrement des actes,
- l'inscription à la taxe professionnelle et identification fiscale,
- et l'immatriculation au registre de commerce

Il vous suffit de retirer votre dossier de création d'entreprise, et de procéder à la publication légale, qui consiste à publier deux publicités de votre nouvelle entreprise, l'une au bulletin officiel, et l'autre au journal d'annonces légales.

La veille de la création d'une entreprise est en général un moment stressant en plus d'être très chronophage!

Pour vous décharger, contactez-nous, chez Houkouki !

Nos juristes prennent en charge votre dossier dès le début et vous font gagner du temps et de l'argent !

Houkouki, le meilleur allié pour la création d'entreprise et le conseil juridique !`,
    date: "10/02/2020",
    image: "/lovable-uploads/creation-societe.png",
    category: "Jamila Alami"
  },
  {
    id: 4,
    title: "Contrat de bail",
    content: `Devenir locataire est une étape par laquelle passent des milliers de marocains chaque année. Mais pour que la location se concrétise, il faut signer un contrat de bail avec le propriétaire. Beaucoup de personnes, emballées par leur trouvaille, ne prêtent pas attention à cette étape un peu rébarbative, nous le concédons ! Ils signent le contrat que le propriétaire leur soumet sans chercher à en décoder les termes…. Ce qui peut générer de bien mauvaises surprises !

Pour éviter de se faire arnaquer il est important de savoir ce qu'un contrat de bail doit comporter et de s'assurer que tout est en règle.

Commençons par définir ce qu'est un contrat de bail :

Un contrat de bail est un contrat dans lequel "le bailleur" donne au "locataire" le droit d'utilisation d'un bien immobilier pour un certain temps moyennant un loyer mensuel.

Ce contrat doit être conclu sur un acte écrit et doit obligatoirement comporter les mentions suivantes:

• les prénom et nom du bailleur et du locataire,
• la profession du bailleur et du locataire
• le domicile du bailleur et du locataire
• la pièce d'identité du bailleur et du locataire
• toutes les informations de l'agence immobilière, le cas échéant ;
• la détermination des locaux donnés en bail et leurs dépendantes,
• l'usage des locaux
• les installations qui sont conçues pour l'usage unique du locataire ;
• le montant du loyer périodique convenu et la périodicité de son versement par le locataire;
• les frais locatifs;
• les modalités de paiement ;
• les obligations particulières de chaque partie

Une attention particulière doit être portée aux obligations que le contrat fait peser sur chacune des Parties, ainsi qu'au contenu de certaines clauses à savoir :

• les éléments qui restent à la charge du bailleur
• le montant de la caution
• le préavis de résiliation

Maintenant que vous savez que le contrat de bail peut comporter des clauses en votre défaveur n'en signez jamais avant de le faire analyser par un expert : Contactez Houkouki ! Nous auditons votre contrat de bail à usage d'habitation ou commercial pour être sûr que vos intérêts sont préservés et que vous ne vous faites pas arnaquer.

Nous pouvons aussi vous le rédiger nous-mêmes, grâce aux compétences de notre équipe de juristes, pour que vous ayez un contrat « en béton » (c'est le cas de le dire !) qui vous protégera en cas de litige judiciaire.`,
    date: "05/02/2020",
    image: "/lovable-uploads/contrat-bail.png",
    category: "Jamila Alami"
  },
  {
    id: 5,
    title: "La succession au Maroc",
    content: `Après un décès, il est normal de se sentir perdu et ne pas savoir par où commencer. Le temps semble s'arrêter et votre cerveau n'arrive plus à suivre. Heureusement (ou malheureusement) la vie reprend son cours rapidement et vous êtes rattrapé par la réalité des procédures de funérailles et de succession.

La procédure de succession est une procédure longue et pleine de tracas qui tombe durant une période de deuil, ce qui la rend d'autant plus difficile.

Il est absolument normal de se sentir dépassé, car la perte d'un être cher est une véritable épreuve, mais il ne faut pas laisser cet état prendre le dessus.

Prenez un moment pour faire votre deuil correctement et entamer la procédure la tête froide pour que vous puissiez en finir rapidement et efficacement.

Sachez qu'avant de pouvoir entamer la procédure de succession, il va falloir être muni de 2 documents essentiels:

1) Le certificat de décès:

Avant d'obtenir son certificat de décès, il faut d'abord déclarer le décès. Vous avez un délai de 30 jours suivant la mort de la personne si elle réside au Maroc et un délai d'1 an si la personne réside à l'étranger, passé ces délais et vous risquez de payer une amende allant de 300 à 1200 DHS. La demande de certificat de décès se fait auprès des services de protection sanitaire de la commune et requiert le dossier médical du défunt ainsi que sa carte d'identité.

2) L'acte d'hérédité:

Cet acte d'hérédité est le document clé dans une procédure de succession. Il est indispensable pour toute personne ayant des droits d'héritier et voulant se protéger en cas d'éventuelles mésententes entre héritiers.

Après l'obtention du certificat de décès, vous devrez le présenter à l'adoul, en plus de l'état civil et éventuellement d'une photocopie de la carte d'identité nationale de chaque héritier, à la demande de l'adoul. Ce dernier va ensuite rédiger «l'acte d'hérédité» où il mentionne le nom du défunt, ceux des héritiers légaux ainsi que la quote-part de chacun d'eux. L'élaboration de ce document se fait en présence de douze témoins de sexe masculin (proches, amis de la famille ou voisins) qui devront confirmer les informations en question et signer à tour de rôle le document, qui sera par la suite authentifié par le tribunal.

Maintenant que vous êtes en possession de ces deux documents, vous pouvez entamer la procédure de succession sans soucis. Le Code de la famille définit la succession en tant que: "Tout ce que le défunt possédait de son vivant, en fait de biens comme l'argent, les biens immeubles et meubles et les droits patrimoniaux tels que le droit de préemption et le droit d'acceptation du testament ne dépassant pas le tiers total du défunt".

Pour éviter que tous les héritiers se déplacent, il est possible de nommer l'un d'eux en tant que représentant grâce à une procuration spéciale rédigée devant notaire ou un aadoul ou un avocat nommé devant la cour de cassation, et signée par tous les héritiers et qui définit les formalités exactes à traiter par le représentant.

L'acte d'hérédité et le certificat de décès doivent être déposés par les héritiers (ou le représentant) auprès des différentes institutions concernées selon la nature des biens à partager (la banque, la conservation foncière, le service des mines, la CIMR, la CNSS, la DGI, etc.).

Cette partie de la procédure est la plus lourde et la plus difficile et mobilise beaucoup d'énergie. Aussi elle peut être éprouvante lorsque l'entente entre les héritiers n'est pas au rendez-vous. Le conflit d'intérêt entre les héritiers retarde l'opération du partage des biens de plusieurs semaines, voire de plusieurs mois.

Maintenant que vous connaissez les étapes à suivre et le stress qu'elles peuvent générer sans compter le blocage éventuel de l'héritage, que pouvez-vous faire pour faciliter cette douloureuse épreuve liée à la « succession » ?

Contactez Houkouki ! C'est un tiers neutre qui peut non seulement vous conseiller, mais aussi vous accompagner dans les différentes procédures (partage de biens immobiliers, mobiliers, parts sociales, etc.) à partir du moment où l'acte de décès et celui de l'hérédité lui sont fournis.

Houkouki peut aussi intervenir dans la médiation entre les héritiers pour accélérer le partage de l'héritage.

Enfin, Houkouki, fort de son expérience dans le domaine de la succession a mis en place un partenariat avec une plateforme d'écoute psychologique pour accompagner les héritiers en période de deuil.

N'hésitez pas à nous contacter au 0529.045.999 dès maintenant.`,
    date: "15/02/2020",
    image: "/lovable-uploads/succession-maroc.png",
    category: "Jamila Alami"
  },
  {
    id: 6,
    title: "LA BASE JURIDIQUE D'UNE URGENCE SANITAIRE AU MAROC",
    content: `Le décret-loi n° 2.20.292 publié au bulletin officiel n° 6867 bis le 23 Mars 2020 portant sur les dispositions relatives à l'état d'urgence sanitaire au Maroc, s'inscrit dans le cadre des mesures de prévention urgentes prises par le gouvernement marocain, afin d'endiguer les répercussions de la pandémie de COVID-19.

L'adoption de ce décret était nécessaire, conformément aux dispositions de l'article 21 de la Constitution qui décrète que « Les pouvoirs publics assurent la sécurité des populations et du territoire national, dans le respect des libertés et des droits fondamentaux garantis à tous ».

Les autorités publiques sont amenées donc à prendre toutes les dispositions qu'elles jugent nécessaires et adéquates et cela par tout moyen : décisions organiques ou administratives, circulaires, communiqués. Conformément à ces directives, l'état d'urgence sanitaire a été instauré à travers le royaume afin de protéger la population de cette pandémie.

Le décret-loi dispose que toute personne qui manque aux instructions, décisions et injonctions des autorités, sera sanctionnée ;

Tout désobéissant est passible d'une peine de prison d'un à trois mois et d'une amende de 300 à 1300 dh ou l'une de ces deux peines. Les mêmes sanctions seront prises contre toute personne ayant recours à la menace, à la fraude, à la violence ou à la contrainte.

Ainsi que les individus qui incitent le public à enfreindre toute décision prise par les autorités à travers discours, cris, réunions ou tout autre moyen utilisant un support électronique.

L'état d'urgence sanitaire a été instauré le 20 Mars 2020 à 18h et continuera jusqu'au 20 Avril 2020 à 18h, ceci sauf dans le cas d'une prolongation.`,
    date: "23/03/2020",
    image: "/lovable-uploads/base-juridique-urgence-sanitaire.png",
    category: "Jamila Alami"
  },
  {
    id: 7,
    title: "Les Obligations Contractuelles dans le contexte du Covid-19",
    content: `La pandémie du Covid-19 a un impact sur la gestion des contrats en cours, en effet, en raison du contexte actuel, vous pourrez être dans l'impossibilité d'exécuter une partie de vos obligations au titre de vos contrats en cours (contrats de prestation de services, contrats financiers etc.) ou être confrontés à des co-contractants qui pourraient tenter de se délier de certaines de leurs obligations contractuelles, en se prévalant notamment d'un cas de force majeure.

L'article 269 du Dahir formant Code des Obligations et des Contrats (DOC) dans son 1èr alinéa dispose que : « La force majeure est tout fait que l'homme ne peut prévenir, tel que les phénomènes naturels (inondations, sécheresses, orages, incendies, sauterelles), l'invasion ennemie, le fait du prince, et qui rend impossible l'exécution de l'obligation » Traditionnellement, l'événement doit être imprévisible, irrésistible et extérieur.

Ainsi, pour déterminer si le COVID-19 peut être considéré comme un cas de force majeure, il conviendra d'étudier précautionneusement les stipulations de chaque contrat concerné, mais également de porter une attention particulière à la date de conclusion du contrat. En dépit de l'absence de jurisprudence latente en la matière, le COVID-19 peut être– sous réserve de l'interprétation souveraine des juridictions marocaines – constitutif d'un cas de force majeure, en raison principalement de son caractère imprévisible, irrésistible et extérieur aux parties.

Le coronavirus en soi ne rend pas impossible l'exécution des contrats, ce sont les décisions du gouvernement marocain qui sont considérées comme une situation de force majeure. Parmi les différentes mesures prises par le gouvernement marocain, il est à préciser qu'en date du 16 Mars 2020, le ministère de l'intérieur a annoncé via un communiqué la fermeture des cafés, restaurants, salles de cinéma et théâtre, salle de fête, clubs et salles de sport, hammams, salle de jeu et terrains de proximité et ce du 16 Mars 2020 à 18h jusqu'à nouvel ordre.

À titre d'exemple, bien qu'il soit impossible d'envisager tous les cas, on peut raisonnablement concevoir qu'une entreprise ou des locaux commerciaux dont les activités ont été suspendues par le gouvernement, pourraient être dans l'impossibilité d'exécuter certaines obligations.

La perte d'utilité économique n'est pas en soi une raison pour se libérer de son obligation. A cet effet, dans un contrat commercial, Il faut donc recommander les clauses d'imprévision comme une solution de réadaptation, en cas d'apparition d'imprévus rendant critique voire impossible la continuation du contrat.

Il serait envisageable de privilégier au sein du contrat une solution amiable, et de prévoir quel chemin devront emprunter les parties en cas d'impossibilité d'obtenir celle-ci.`,
    date: "20/03/2020",
    image: "/lovable-uploads/obligations-contractuelles-covid.png",
    category: "Jamila Alami"
  },
  {
    id: 8,
    title: "Procès à distance ou tribunal électronique",
    content: `Dans le cadre des mesures nationales visant à endiguer la propagation du coronavirus (Covid-19), le coup d'envoi du dispositif des procès à distance a été donné, lundi 27 Avril au Tribunal de première instance à Salé.

Ce dispositif repose sur l'utilisation des technologies de communication entre les établissements pénitentiaires d'un côté et les juges et les avocats dans les tribunaux d'un autre.

Il s'inscrit aussi dans le cadre des mesures de renforcement de la sécurité sanitaire des détenus et de la famille de la justice, imposées par l'état d'urgence sanitaire.

La mise en œuvre de cette technologie est intervenue après un consensus entre le ministère de la Justice, le Conseil suprême de l'autorité judiciaire, la présidence du ministère public, le délégué général et la Fondation du ministère public en adoptant une technique de visioconférence.

Les partisans de cette technologie ont reçu l'annonce avec amabilité, car elle contribue à faciliter l'accès à la justice, à gagner du temps, à unifier et à simplifier les procédures des procès, ainsi qu'à contribuer à la préservation des données et à faciliter l'accès à celles-ci.

Les opposants de cette nouvelle mesure argumentent que cette technologie n'a aucune base légale, et qu'elle intervient au détriment des droits des plaideurs et de la défense, leur présence et leur confrontation étant des principes importants d'un procès équitable.

Pour être conscient de la problématique des procès à distance, il faut répondre aux questions suivantes :

Quel est le concept de litige à distance ?
Quelles sont les conditions à remplir pour télécharger un litige à distance à un tribunal électronique ?

Le concept de litige à distance :

Il est étroitement lié au concept de tribunal électronique, où ces termes sont apparus avec la révolution technologique, en particulier lorsque l'Internet est accessible à presque tout le monde. Le litige à distance est la transition du stade d'un procès classique qui nécessite de comparaître devant les tribunaux et de créer des dossiers et de mener des procédures vers un litige à distance qui donne l'opportunité de plaider de n'importe où dans le monde par voie électronique, ce qui permet une utilisation optimale du temps, étant donné que le report et les procédures contentieuses relativement longues et complexes sont aujourd'hui les plus grands inconvénients de la justice.

Un litige à distance peut être défini comme le processus de transfert électronique des documents du litige au tribunal compétent où ils sont examinés.

Conditions de téléchargement des litiges à distance ou du tribunal électronique :

Pour télécharger un litige à distance, trois conditions doivent être remplies :

1. Le texte juridique qui encadre le processus :
Le législateur marocain a fixé 2021 pour entamer ce tribunal électronique ; et donc ceux qui s'opposent à la décision du ministre de la Justice de télécharger les documents du contentieux à distance exigent de respecter le principe de légalité juridique.

2. Tribunaux équipés et connectés au net :
Aujourd'hui tous les tribunaux du Royaume sont connectés au net car ils ont été les précurseurs du processus de modernisation de l'administration afin de faciliter le processus de contrôle à distance des dossiers et de suivi de la mise en œuvre des décisions.

3. Une composante humaine formée pour faire face à ces mécanismes :
Après la promulgation de la loi, le ministère doit former les employés du livre de saisie devant les tribunaux pour savoir comment traiter ces technologies modernes.

En conclusion, cette exigence est devenue une réalité malgré le manque de conditions de base d'un texte juridique et de tribunaux équipés et employés pour traiter cette technologie qui a été adoptée dans de nombreux tribunaux malgré la crainte des avocats que la question ne soit pas respectée par la loi.`,
    date: "05/05/2020",
    image: "/lovable-uploads/tribunal-electronique.png",
    category: "Jamila Alami"
  },
  {
    id: 9,
    title: "Covid 19 – Mesures fiscales et sociales",
    content: `Afin d'endiguer la propagation de la pandémie COVID-19, le 19 mars 2020, conformément aux dispositions de l'article 81 de la constitution, le Gouvernement marocain a adopté le décret-loi n°2.20.292 prévoyant l'état d'urgence sur l'ensemble du territoire du royaume et ce du 20 mars au 20 avril 2020, ce décret-loi a été validé le 22 mars par les deux commissions parlementaires. Afin d'accompagner et de préserver l'économie marocaine durant cette crise sanitaire, plusieurs mesures fiscales et sociales ont été prises par les autorités marocaines pour faire face à cette situation exceptionnelle.

I – Mesures fiscales :

Report des échéances fiscales

Pour les entreprises dont le chiffre d'affaires HT est < à 20 MDH :

Les entreprises dont le CA de l'exercice 2018 est inférieur à 20 millions de dirhams pourront bénéficier sans formalité préalable d'un report des échéances fiscales du 31 mars jusqu'au 30 juin 2020. Ce report concerne les échéances fiscales suivantes :
• Déclaration du résultat fiscal ;
• Paiement du complément d'IS dû au titre de l'exercice 2019 ;
• Paiement du 1er acompte provisionnel.

Les déclarations de TVA ainsi que le reversement des impôts retenus à la source ne sont pas concernés par ce report.

Pour les entreprises dont le chiffre d'affaires HT est => à 20 MDH :

Le communiqué de la DGI précise également que les entreprises dont le CA de l'exercice 2018 dépasse le seuil des 20 millions de dirhams, et qui subissent des préjudices économiques importants du fait de la baisse d'activité liée à la crise sanitaire actuelle, peuvent bénéficier d'un étalement ou d'un report du paiement de l'IS. Le bénéfice de ces mesures dérogatoires est conditionné par le dépôt d'une demande auprès du ministre chargé des finances. Les demandes seront traitées au cas par cas, à la lumière des pièces justificatives fournies.

Il est à signaler que les mesures reprises dans le communiqué de la DGI ne sont pas en conformité avec les dispositions de l'article 6 du décret-loi n° 2.20.292 qui prévoit la suspension de tous les délais légaux et réglementaires. Cette discordance est justifiée par les contraintes budgétaires qui poussent la Direction Générale des Impôts à passer outre ces dispositions.

2. Suspension des ATD et des contrôles fiscaux

Le comité de veille économique a précisé dans son communiqué du 19 mars 2020 que les Avis à tiers détenteurs (ATD) et les contrôles fiscaux seront suspendus jusqu'au 30 juin 2020.

3. Déductibilité des dons accordés au fonds spécial COVID-19

Afin d'encourager les dons au profit du fonds spécial pour la gestion de la pandémie COVID-19, la DGI a consacré la déductibilité des dons effectués au profit dudit fonds. En effet, dans le communiqué en date du 23 mars 2020, la DGI précise que les contributions apportées au fonds spécial sont traitées comme des dons revêtant le caractère de charges comptables déductibles du résultat fiscal.

II. Mesures en matière de cotisations sociales

Octroi d'une indemnité forfaitaire mensuelle

Les salariés déclarés à la CNSS au titre de février 2020, relevant des entreprises affiliées à cette caisse, en situation d'arrêt total ou partiel, pourront bénéficier d'une indemnité forfaitaire mensuelle nette de 2000 dirhams et des prestations de l'AMO et des allocations familiales. Pour bénéficier de cette indemnité, les salariés doivent être déclarés à la CNSS au titre du mois de février 2020. L'indemnité sera versée par virement bancaire ou mise à disposition par la CNSS au profit des salariés bénéficiaires sur toute la période allant du 15 Mars au 30 Juin 2020. L'indemnité forfaitaire du 15 au 31 Mars est fixée à 1000 DH.

2. Suspension du paiement des cotisations sociales

Les employeurs en difficulté affiliés à la CNSS peuvent bénéficier d'une suspension du paiement des cotisations sociales au titre de la période allant du 1er mars au 30 juin 2020. Le bénéfice de la suspension est conditionné par le dépôt du formulaire prévu sur la plateforme DAMANCOM avant le 30 juin 2020.

3. Prise en charge par l'Etat de la part patronale

Les entreprises qui s'engagent à ne pas réduire leurs effectifs, déclarés au titre de février 2020, de plus de 20% pour la période allant du 15 mars 2020 au 30 juin 2020 peuvent bénéficier de la prise en charge par l'Etat de la part patronale des cotisations sociales et de la taxe de formation professionnelle.`,
    date: "28/03/2020",
    image: "/lovable-uploads/covid-mesures-fiscales.png",
    category: "Jamila Alami"
  },
  {
    id: 10,
    title: "La spoliation foncière : les nouvelles mesures d'affrontement.",
    content: `La spoliation foncière repose sur l'idée selon laquelle un bien immobilier, propriété de quelqu'un, fait l'objet par un spoliateur d'une attaque, tout en utilisant le faux et ce, dans le dessein de se faire reconnaître un droit de propriété sur ce bien. A vrai dire, des histoires relatant ses faits ne cessent de circuler de la bouche de nos proches ou via la presse, et leur répercussion sur l'image du pays est très néfaste, en créant des écueils implacables dans le secteur immobilier, auxquels également sont impliqués des professionnels tels des notaires, des avocats, et des fonctionnaires de cadastre, c'est morose!

Les opérations de spoliation foncière peuvent se faire sur un bien immobilier non titré, et cela est plus facile dans la mesure où ce dernier ne fait pas l'objet d'immatriculation à la conservation foncière, et le droit sur ce bien n'est acquis que par une possession pendant un délai impartis. Incontestablement, la spoliation peut aussi être faite sur un bien titré, ce dernier est inscrit au système d'immatriculation foncière, et individualisé par un titre foncier propre. En fait, les moyens utilisés dans ces opérations peuvent être des actes de procuration falsifiés, ou de vente, de testament ou de succession truqués, dont les victimes préférées sont les propriétaires marocains résidents à l'étranger et les expatriés.

Pour faire face à cela, une lettre royale en fin décembre 2016 a été adressée aux responsables, dans laquelle des ordres ont été donnés pour la création des mécanismes de lutte contre la spoliation foncière.

Les Mesures de Lutte :

Afin d'éradiquer les spoliateurs le législateur marocain a mis en place les mécanismes suivants :

La plateforme « Mohafadati » : crée par l'Agence Nationale de la Conservation foncière, du Cadastre et de la Cartographie, dont l'objectif est de garantir une meilleure protection des droits de la propriété immobilière. En fait, le service permet le suivi à distance de la situation des titres des biens immatriculés sur les livres fonciers, et alerte ses utilisateurs de toute opération inscrite sur les titres et ce, par SMS ou par Email. (le lien d'inscription sur cette plateforme : https://www.ancfcc.gov.ma/DemandeSuiviTitresPage/ ).

Les actes authentiques : Les actes qui font l'objet d'une transaction foncière doivent être rédigés par un professionnel : notaire, adoul, ou avocat habilité à la cour de cassation, sinon l'acte et l'opération seront nuls. Et de même pour la procuration, si le propriétaire d'un bien immobilier voulant accorder un mandat à un tiers pour l'inscription d'un droit à son titre foncier, l'acte de procuration doit être soit authentifié par un notaire ou un adoul, soit ayant une date certaine dressé par un avocat agréé près de la cour de cassation. Par la suite, cet acte doit être inscrit dans un registre national des procurations, établi à cet effet. Ce registre est tenu par le bureau d'ordre du tribunal de première instance où se situe le bien immobilier. Aussi, les demandes de certificat de propriété immobilière faites par une tierce personne doivent être accompagnées d'un acte de procuration officiel relevé par un professionnel notaire, avocat ou adoul, et cela pour freiner les spoliateurs.

Une protection pour les propriétaires surtout ceux résidant à l'étranger : Quant à la modification et l'annulation sur le titre foncier, réalisées par falsification, faux ou usage de faux, les propriétaires ont le droit de faire une réclamation dans un délai de quatre ans à compter de la date d'immatriculation contestée.

Le registre des SCI : un registre spécial réservé aux SCI a été créé afin d'établir un cadre particulier aux Sociétés Civiles Immobilières, dont chaque société doit s'y immatriculer dans un délai de 3 mois suivant la date d'inscription à la taxe professionnelle.`,
    date: "15/01/2025",
    image: "/lovable-uploads/spoliation-fonciere.png",
    category: "Jamila Alami"
  },
  {
    id: 11,
    title: "Covid 19 : L'impact sur la relation locative",
    content: `Après avoir déclaré le 20 mars 2020 l'état d'urgence sanitaire au Maroc pour lutter contre le Corona virus, les autorités se sont efforcées de prendre un ensemble de mesures proactives pour limiter la propagation de la pandémie en imposant la quarantaine et empêchant les individus de quitter leur domicile sauf pour la nécessité spécifiée exclusivement dans la fiche de sortie exceptionnelle.

Cette mesure a causé la perte de source de subsistance pour plusieurs citoyens après la fermeture temporaire de nombreuses unités industrielles et commerciales, ainsi que certaines professions libres qui sont devenues interdites tout au long de la période de l'urgence sanitaire.

Ce qui a nécessité l'intervention du gouvernement afin de réduire les effets de cette crise en fournissant une redevance mensuelle de 2000 dirhams pour les salariés suspendus du travail et inscrits auprès de la CNSS, ainsi que des aides financières pour les citoyens qui travaillent dans l'informel.

Mais tous ces bons efforts n'ont pas répondu à tous les problèmes et contraintes résultant de l'état d'urgence sanitaire.

Cette crise a également de lourdes conséquences sur les revenus des habitants, les précarisant fortement dans leur quotidien et dans leur capacité de subvenir à leur besoin et à payer chaque mois leur loyer.

Pour faire face à cette situation, la Chambre des représentants planche sur cette question qui présente de nombreuses difficultés, objet de deux propositions de modification de lois soumises récemment par le groupe USFP.

La 1ère proposition est de modifier la loi 49.16 relative aux baux à usage commercial, industriel ou artisanal.

La 2ème proposition vise à modifier la loi 67.12 régissant les rapports contractuels entre les bailleurs et les locataires de locaux à usage professionnel ou d'habitation.

Ces deux propositions ciblent à interdire la procédure « d'éviction sans indemnité » contre les locataires qui n'arrivent pas à payer leur loyer du fait de l'état d'urgence sanitaire.

Afin d'éviter le risque de voir des dossiers d'expulsion atterrir dans les juridictions après la pandémie en se référant à l'article 8 de la loi 49.16 qui stipule que : « le bailleur n'est pas tenu au paiement d'indemnité au locataire pour éviction » lorsque « le locataire n'a pas payé de loyer dans un délai de 15 jours après réception de la mise en demeure, et que le montant du loyer dû équivaut au moins à trois mois »

L'USFP propose d'exclure l'expulsion locataire sans indemnité. Le but est de considérer la somme due comme « une créance ordinaire", qui peut être recouvrée selon les procédures et la loi correspondantes en vigueur au Maroc.

Quant à la loi 67.12 régissant les baux à usage d'habitation ou professionnel, l'USFP propose d'introduire un article 30 bis, afin de considérer aussi le « loyer dû par le locataire sur la période de l'état d'urgence sanitaire » comme « une créance ordinaire ».

Cette proposition de modification de loi vient pour instaurer une exception pour astreindre le bailleur à recouvrer son loyer, sans recourir à la procédure judiciaire.

La suggestion de ces deux articles est une bonne initiative qui vise à protéger les non-initiés, ainsi que les professionnels qui ont perdu leur source de subsistance dans ces circonstances exceptionnelles dans lesquelles notre pays vit à l'instar du monde entier, mais nous la trouvons insuffisante car elle protège une partie sans une autre.

Si, ces deux lois sont promulguées, qui protégera les propriétaires dont les revenus locatifs représentent la seule et unique source de subsistance pour eux ?`,
    date: "25/03/2020",
    image: "/lovable-uploads/covid-impact-locatif.png",
    category: "Jamila Alami"
  },
  {
    id: 12,
    title: "Prolongation exceptionnelle : La CNSS accorde des remises sur les pénalités et frais de retard jusqu'au 15 janvier 2025",
    content: "Prolongation exceptionnelle : La CNSS accorde des remises sur les pénalités et frais de retard jusqu'au 15 janvier 2025",
    date: "10/01/2025",
    image: "/lovable-uploads/4202db25-ce0c-415f-b72b-0766f38e24fb.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 13,
    title: "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger",
    content: "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger",
    date: "10/01/2025",
    image: "/lovable-uploads/52bc0c0c-34a4-4850-b667-a57ab1fe2408.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 14,
    title: "E-Police : La nouvelle plateforme numérique de la DGSN pour simplifier les services policiers au Maroc",
    content: "E-Police : La nouvelle plateforme numérique de la DGSN pour simplifier les services policiers au Maroc",
    date: "01/02/2024",
    image: "/lovable-uploads/5d7e7c1c-ebd4-4271-a028-9798957bf332.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 15,
    title: "Le Maroc renforce sa posture face aux menaces numériques",
    content: "Le Maroc renforce sa posture face aux menaces numériques",
    date: "07/01/2024",
    image: "/lovable-uploads/746a9b0d-7942-4f17-9351-aaeff6fff194.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 16,
    title: "Bonne nouvelle pour les mamans ! Chaque jour, HOUKOUKI vous donne l'actualité juridique qui vous intéresse.",
    content: "Bonne nouvelle pour les mamans ! Chaque jour, HOUKOUKI vous donne l'actualité juridique qui vous intéresse.",
    date: "02/01/2024",
    image: "/lovable-uploads/a2e35cca-9c41-4eed-b0c7-c784e87900a7.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 17,
    title: "Plongez au cœur de la révolution numérique avec la nouvelle initiative du SDG !!",
    content: "Plongez au cœur de la révolution numérique avec la nouvelle initiative du SDG !!",
    date: "29/01/2024",
    image: "/lovable-uploads/c63a7edf-1f1a-44b0-bcf7-220fe7f4b232.png",
    category: "Équipe HOUKOUKI"
  }
];

const BlogArticle = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        <FrenchNavigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link to="/fr/blog">
            <Button variant="secondary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour vers la minute de HOUKOUKI
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-6">
          <Link to="/fr/blog">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour vers la minute de HOUKOUKI
            </Button>
          </Link>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8 pb-6 border-b">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{article.category}</span>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {article.content}
              </p>
            </div>
          </div>
        </article>

        {/* Back Button Bottom */}
        <div className="max-w-4xl mx-auto mt-8">
          <Link to="/fr/blog">
            <Button variant="secondary" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour vers la minute de HOUKOUKI
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogArticle;
