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
    id: 26,
    title: "Réforme des chèques sans provision au Maroc : entre dépénalisation ciblée et modernisation du paiement",
    content: `Réforme des chèques sans provision au Maroc : entre dépénalisation ciblée et modernisation du paiement

Au Maroc, le chèque reste un instrument de paiement très utilisé, selon les statistiques de Bank Al-Maghrib pour l'année 2024, 30 millions d'opérations de paiement par chèque ont été enregistrées pour une valeur totale de près de 1.319 milliards de dirhams, avec 972.232 chèques refusés pour absence ou insuffisance de provision, ajoutant à cela 180.223 plaintes ont été déposées entre 2022 et fin juin 2025, donnant lieu à des poursuites à l'encontre de 76.936 personnes, dont 58.710 en détention.

Ces chiffres inquiétants très pénalisants, posent un problème qui nous emmène au recours systématique à la voie pénale pour des litiges parfois civils, un engorgement des tribunaux et des effets lourds pour les entreprises et les particuliers.

Devant cette problématique, Le Conseil de gouvernement a approuvé le projet de loi n° 71.24 modifiant et complétant la loi n° 15.95 relative au code de commerce, visant à moderniser les transactions commerciales, renforcer la sécurité juridique et encadrer l'émission des chèques, tout en facilitant la régularisation des amendes fiscales pour incidents de paiement.

Voici les points clés de ce projet de loi n° 71-24 et ce qu'elle signifie pour les entreprises, banques et particuliers.

Les axes majeurs de la réforme :

• La réforme porte sur plusieurs dispositions, notamment l'article 316 qui stipule que dans l'ancienne législation, en cas de non-paiement, le dossier restait au tribunal, qui statuait et infligeait des sanctions avec une amende de 25 % de la valeur du chèque. Désormais, après la réforme, le règlement du montant du chèque accompagné d'une amende de 2 % met définitivement fin aux poursuites.

• Un système d'accord à l'amiable à toutes les étapes du procès a été également instauré, y compris au stade de l'exécution de la peine, il est à préciser que le paiement ou le retrait de la plainte entraîne la non-ouverture ou la cessation de la poursuite, le projet prévoit aussi une exemption pénale lorsque l'acte est commis entre conjoints ou ascendants.

• Ce projet de loi s'inscrit dans le cadre des orientations stratégiques du Royaume visant à moderniser le cadre juridique et légal des transactions financières et commerciales, afin d'accompagner les mutations rapides en matière des effets de commerce et répondre aux exigences de la politique pénale dans le domaine des finances et des affaires.

• Il vient également pour répondre au problème des chèques sans provision qui continue de préoccuper la société, notamment les investisseurs, en raison de ses répercussions économiques et sociales sur l'ensemble des parties concernées, notamment le tireur et le bénéficiaire.

• Le texte comporte des dispositions visant à réviser le cadre juridique régissant l'usage des chèques et à inciter une large catégorie de citoyens à régulariser leur situation en s'acquittant d'une contribution libératoire relative aux amendes fiscales pour incidents de paiement. Ces nouvelles dispositions auront un impact positif sur la dynamique économique et contribueront à réduire les détentions et à alléger la pression sur les tribunaux pour ce qui est des affaires liées aux chèques.

Conclusion

La réforme annoncée du régime des chèques sans provision au Maroc marque un virage majeur vers une justice plus équilibrée et une meilleure adaptation aux réalités économiques. En déplaçant l'accent du pénal vers la régularisation, en introduisant des mécanismes de flexibilité comme le bracelet électronique ou le délai de grâce, le législateur entend moderniser l'instrument chèque, améliorer la fluidité des transactions et alléger la charge judiciaire.

Pour les acteurs économiques, cette réforme représente une opportunité : il s'agit d'un moment propice pour revoir les processus internes de gestion des paiements, renforcer les vérifications de solvabilité, et anticiper le nouveau cadre légal. Mais il s'agit aussi d'un enjeu de vigilance : la transition devra être accompagnée avec rigueur pour éviter les effets pervers.

POUR PLUS D'INFORMATIONS CONTACTEZ NOUS À:
+212 (0)529.045.999
contact@houkouki.com
www.houkouki.com`,
    date: "07/12/2025",
    image: "/lovable-uploads/reforme-cheques.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 1,
    title: "Contrat de bail d'habitation",
    content: `Définition du contrat de bail

Un contrat de bail est un contrat de location établi entre le propriétaire du bien à louer et son locataire :

L'établissement du contrat de bail à usage d'habitation (qu'elle soit vide ou meublée), entre le propriétaire et le locataire, est indispensable.

Ce contrat qui doit être un acte écrit, signé et légalisé par les deux parties,définit les conditions et les clauses convenues dans le cadre de la location.

Que doit contenir un contrat de bail à usage d'habitation ? 

Les informations concernant les 2 parties :

Il faut décliner l'identité du locataire et du propriétaire :
- Nom,
- Prénom,
- Nationalité,
- Adresse,
- n° CIN ou passeport.

Attention, Si l'une des parties ou les deux sont «personne morale» , c'est-à-dire une société, il faut indiquer pour chacune :
- sa dénomination,
- son siège social,
- son n° de Registre du Commerce,
- le nom et prénom ainsi que la CIN de son représentant légal.

La description du bien loué:
- superficie,
- nombre de chambres,
- balcons,
- terrasses, etc…
- les dépendances (garage, box etc…)
- les installations conçues comme chauffage, électroménager, équipement cuisine etc…),
- compteur d'électricité et d'eau

Les obligations particulières de chaque partie :

Exemple :
- le bailleur doit livrer le bien loué en bon état d'usage, et veiller au bon fonctionnement des équipements,
- le contrat doit mentionner l'usage convenu du bien loué (dans ce cas l'habitation),
- Le locataire doit veiller à l'entretien du bien loué et à sa propreté,

Le contrat doit mentionner que :
- les grandes réparations doivent faire l'objet d'une autorisation écrite du propriétaire, à défaut d'accord, le propriétaire pourra exiger la remise immédiate du bien loué en état initial aux frais du locataire,
- interdiction de sous – louer le bien en totalité ou en partie, ne pas céder le bien loué , etc…

Durée du contrat :

Il faut mentionner dans le contrat :
- la durée de la location ainsi que son renouvellement
- les délais de préavis de résiliation du contrat par l'une et/ou l'autre partie

Montant du loyer :

Les 2 parties doivent se mettre d'accord sur :
- le montant du loyer y compris les charges locatives (syndic …)
- Une provision sur charges peut être fixée entre les 2 parties
- Écrire le montant en lettre et en chiffres
- Indiquer la date du paiement : début ou fin de mois (à fixer par les 2 parties)
- Indiquer le mode de paiement : chèque – virement ou espèces

ATTENTION : il faut demander un reçu après chaque paiement !

Caution de garantie :

Le bailleur peut demander au locataire un dépôt de garantie dont le montant est fixé par les 2 parties et qui sera restitué au locataire, en totalité ou en partie, selon l'inventaire du bien loué et de ses dépendances, le jour de la restitution des clés.

Election de domicile :
- Le bailleur fait élection à son domicile,
- Le locataire fait élection au bien loué.

Litige :

En cas de litige portant sur l'exécution du contrat, les parties peuvent convenir d'un accord amiable , une médiation.

Si le recours amiable n'aboutit pas, la partie lésée peut saisir le tribunal dont dépend le bien loué.

Pourquoi prendre un contrat d'assurance multirisque habitation en tant que locataire?

Ces contrats contiennent plusieurs garanties qui vous protègent :
- Recours des voisins et des tiers: Elle a pour but de couvrir des dommages (incendie, explosion, dégât des eaux, etc.) causés à des tiers ou aux voisins.
- Recours des locataires: Un locataire réclame à son propriétaire la réparation des dommages qu'il a subi sur ses biens en raison d'un défaut d'entretien de l'immeuble ou d'un vice de construction.
- Responsabilité civile du locataire: Elle vous couvre en tant que locataire contre les dommages que vous pouvez causer au bâtiment du propriétaire à l'occasion d'un dégât d'eau, incendie, explosion,...
- Défense et recours: La garantie défense-recours couvre les frais nécessaires à l'engagement d'une procédure judiciaire en cas de litige avec un tiers suite à un sinistre lié au contrat multirisque habitation.

Pourquoi prendre un contrat d'assurance multirisque habitation en tant que propriétaire?

Ces contrats contiennent plusieurs garanties qui vous protègent :
- La perte des loyers: La garantie perte de loyers a pour objet la prise en charge de la perte économique subie par le propriétaire non occupant d'un logement lorsqu'à la suite d'un sinistre, le locataire doit quitter le logement (locaux non utilisables).

POUR PLUS D'INFORMATIONS CONTACTEZ NOUS À:
+212 (0)529.045.999
contact@houkouki.com
www.houkouki.com`,
    date: "20/01/2025",
    image: "/lovable-uploads/contrat-bail-habitation.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 2,
    title: "Contrat de bail commercial",
    content: `Définition du contrat de bail commercial

Le bail commercial est un contrat de location d'un local dans lequel est exercée une activité commerciale, industrielle ou artisanale. Ce local doit servir à l'exploitation d'un fond de commerce.

Établir un contrat de bail commercial est une obligation pour le bailleur et le locataire qu'ils soient personne physique ou morale.

Ce contrat écrit, légalisé par les deux parties et enregistré, est un document principal pour demander la taxe professionnelle afin d'exercer toute activité par le locataire.

Il est composé notamment d'un état descriptif du bail en location et décrit les droits et les obligations du locataire en tant qu'occupant du bien loué dans le cadre d'une activité commerciale, industrielle ou artisanale.

Que doit contenir un contrat de bail commercial ?

1/Les parties signataires :
- Identité et adresse du bailleur et du locataire (personne physique ou morale)

Pour les personnes morales il faut mentionner :
- la dénomination de la société,
- le siège social,
- le représentant légal et son identité,
- le n° de registre du commerce.

2/Les Caractéristiques du contrat de bail commercial, à savoir :
- Le Type de commerce ou d'activité à exercer dans le local,
- Le Montant du loyer et ses charges,
- Le Mode et la date de règlement du loyer,
- Le Droit au renouvellement du bail,
- Le Montant du dépôt de garantie.

ATTENTION : demander un reçu après chaque paiement

3/La description du local commercial loué :
- superficie,
- les dépendances (garage, box etc…)
- les installations conçues comme équipements, chauffage etc…),
- compteur d'électricité et d'eau

4/Les obligations de chaque partie :
Exemples :
- le bailleur doit livrer le bien loué en bon état d'usage, et veiller au bon fonctionnement des équipements,
- le contrat doit mentionner l'usage convenu du bien loué (l'usage commercial)
- Le locataire doit veiller à l'entretien du bien loué et à sa propreté.

Le contrat doit mentionner que :
- les grandes réparations doivent faire l'objet d'une autorisation écrite du propriétaire, à défaut d'accord, le propriétaire pourra exiger la remise immédiate du bien loué en état initial aux frais du locataire,
- interdiction de sous – louer le bien en totalité ou en partie,
- la possibilité d'ajouter d'autres activités que celles exercées à l'origine
- la possibilité de céder le bail à l'acquéreur du fonds de commerce sans que le bailleur puisse s'y opposer et ce conformément à la loi.
- l'augmentation limitée des loyers en cours du bail conformément à la loi.

5/Durée du contrat :
Il faut mentionner la durée du bail commercial qui peut être de 3 ans, 6 ans ou 9 ans au maximum.

Dans cette durée, le bail peut être reconduit par tacite reconduction à moins que l'une des parties ne décide de le résilier. Dans ce cas, la partie qui demande la résiliation doit en notifier l'autre soit par lettre recommandée avec accusé de réception ou par huissier de justice. Attention dans ce cas à respecter les délais de préavis impartis par la loi, à savoir 15 jours de la date d'échéance.

Lors de la résiliation du bail par le locataire, ce dernier doit s'acquitter auprès du bailleur de toutes les sommes dues. A défaut, le dépôt de garantie ne pourra lui être restitué.

6/ Caution :
Le bailleur peut demander au locataire un dépôt de garantie dont le montant est fixé par les 2 parties et qui sera restitué au locataire, en totalité ou en partie, selon l'inventaire du bien loué et de ses dépendances, le jour de la restitution des clés.

7/ Élection de domicile :
- Le bailleur fait élection à son domicile,
- Le locataire fait élection au bien commercial loué.

8/ Litige :
En cas de litige portant sur l'exécution du contrat, les parties peuvent convenir d'un accord amiable ou une médiation.

Si le recours amiable n'aboutit pas, la partie lésée peut saisir le tribunal de commerce dont dépend le bien loué.

Pourquoi prendre un contrat d'assurance multirisque professionnelle et accident de travail en tant qu'employeur?

Ces contrats contiennent plusieurs garanties qui vous protègent ainsi que vos employés et les tiers :

Assurance Multirisque Professionnelle :
C'est une assurance indispensable qui couvre les biens mobiliers, immobiliers et l'exploitation de l'entreprise pour garantir sa pérennité.

- Recours des locataires
- Recours des voisins et des tiers
- Responsabilité civile du locataire
- Défense et recours

Assurance accident de travail :
La souscription à une assurance « accident de travail» est une obligation, si vous ne la respectez pas vous encourez des sanctions lourdes.

Cette assurance couvre vos salariés en cas d'accident de travail soit au sein du lieu de travail, pendant le trajet régulier d'aller et de retour entre le lieu de travail et le lieu d'habitation ainsi que les lieux des repas.

POUR PLUS D'INFORMATIONS CONTACTEZ NOUS À:
+212 (0)529.045.999
contact@houkouki.com
www.houkouki.com`,
    date: "18/01/2025",
    image: "/lovable-uploads/contrat-bail.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 3,
    title: "Protéger sa marque au Maroc",
    content: `Si vous comptez exploiter votre marque au Maroc, il est important de protéger vos droits de propriété intellectuelle.

Il est primordial pour le propriétaire d'une marque, de la protéger à l'intérieur du pays où il exerce son activité, et éventuellement la protéger à l'extérieur des frontières dans le but d'étendre son activité.

Pour protéger sa marque, il faut obligatoirement effectuer un dépôt auprès de l'OMPIC.

Mais avant de procéder à ce dépôt, il convient de s'assurer que sa marque réponde bien aux critères d'éligibilité posés par la loi 17-97 relative à la protection de la propriété industrielle.

VOTRE MARQUE DOIT ETRE

Licite :
Elle ne doit comporter ni de signes interdits par la loi, ou être contraire à l'ordre public et aux bonnes mœurs, ni d'éléments trompeurs qui pourraient induire le consommateur en erreur.

Distinctive :
il s'agit de la capacité du signe à identifier des produits ou services comme provenant d'une entreprise et donc de distinguer ces produits de ceux d'autres entreprises, il doit également être indépendant de la désignation habituelle de l'objet marqué.

Disponible :
ne peut être adopté comme marque un signe portant atteinte aux droits antérieurs (marque enregistrée ou notoirement connue) et ce afin d'éviter toute confusion dans l'esprit du public.

Vous vous demandez comment déposer votre propre marque ?

HOUKOUKI vous explique toutes les étapes à réaliser et peut aussi vous représenter pour déposer votre marque si vous ne résidez pas au Maroc, car la législation marocaine vous oblige à vous faire représenter dans ce cas.

HOUKOUKI s'occupe de toutes les formalités à votre place. et prend en charge toute la procédure de dépôt et de suivi. Vous avez ainsi la garantie de protéger votre marque de manière optimale.

HOUKOUKI vous évitera de subir un refus ou une opposition grâce à ses connaissances en droit des marques et vous conseillera de plus les classes de dépôt les plus pertinentes en fonction de vos besoins présents et futurs.

Contactez nous par mail à l'adresse suivante: contact@houkouki.com
Par téléphone: 0529 04 59 99
Nous vous invitons à consulter notre site web : https://houkouki.com/ pour plus d'informations`,
    date: "15/01/2025",
    image: "/lovable-uploads/spoliation-fonciere.png",
    category: "Leila QAMAR"
  },
  {
    id: 4,
    title: "Projet de loi N°69.21 - Délais de paiement",
    content: `Projet de loi N°69.21 modifiant la loi N°15.95 formant code de commerce édictant des dispositions particulières relatives aux délais de paiement

Un délai de paiement entre 60 et 120 jours. (Article 78-2)

Quand le délai de paiement n'est pas convenu entre les parties dans le contrat, le délai de paiement est fixé à 60 jours.

Parmi les nouveautés de ce texte, Quand le délai est défini dans le contrat, le délai de paiement ne pourra dépasser 120 jours au lieu de 90 jours à compter de la date d'émission de la facture.

Le projet de loi introduit également un délai maximum pour émettre la facture. Il s'agit du "dernier jour du mois durant lequel la marchandise a été livrée ou durant lequel les services ont été réalisés". Si la facture n'est pas émise dans ledit délai, "le délai de paiement commence à courir à compter de la fin du mois durant lequel les marchandises ont été reçues ou durant lequel les services demandés ont été réalisés"

Lorsque les parties sont convenues d'effectuer des transactions commerciales entre elles sur une périodicité ne dépassant pas un mois, le calcul de ces deux délais court à partir du 1er du mois suivant.

Une dérogation à cette disposition est déjà prévue par l'article 78.2, elle concerne les spécificités et le caractère saisonnier de certains secteurs, pour lesquels il faudra fixer, par voie de décret, un autre délai, qui ne peut dépasser 180 jours.

Des pénalités de retard sont prévues

Des sanctions pécuniaires sont également prévues en cas de non-respect des dispositions relatives aux déclarations et au paiement des pénalités de retard.

La pénalité est fixée à l'équivalent du taux directeur de Bank Al-Maghrib pour le premier mois, et à 0,85% pour tout mois ou fraction de mois supplémentaire. (Article 78-3)

Le taux directeur actuel: 2,50 % (Source : Bank almaghreb , décision du 22/12/2022).

Ces sanctions vont de 5.000 DH lorsque le chiffre d'affaires annuel de l'entreprise est compris entre 2 MDH et 10 MDH, jusqu'à 250.000 DH lorsque le chiffre d'affaires annuel dépasse les 500 MDH.`,
    date: "12/01/2025",
    image: "/lovable-uploads/delais-paiement.png",
    category: "Leila QAMAR"
  },
  {
    id: 5,
    title: "Les OPCI au Maroc",
    content: `LES OPCI AU MAROC - Règlementé par la loi 70.14

Qu'est-ce qu'un Organisme de placement collectif immobilier ? OPCI :

Un Organisme de Placement Collectif Immobilier (OPCI) est un véhicule d'investissement réglementé dont l'objet principal est l'acquisition ou la construction d'immeubles exclusivement en vue de leur location. Ce véhicule d'investissement permet à des investisseurs de toutes natures (personnes physiques, personnes morales, investisseurs qualifiés, etc.) d'avoir accès au marché immobilier à travers l'acquisition de parts ou d'actions d'un OPCI détenant directement ou indirectement des actifs immobiliers.

Quels sont les différents types d'OPCI ?

Les OPCI peuvent prendre deux formes juridiques, les FPI (Fonds de Placement Immobilier) et les SPI (Société de Placement Immobilier):

SPI :
- Société anonyme à capital variable.
- Le nombre d'actionnaires minimum est égal à 3.
- Le capital minimum initial est égal à 50 millions de dirhams.
- La possibilité d'inscription à la cote de la bourse des valeurs.
- Les titres peuvent être libellés en devise ou régis par une législation étrangère.
- Une gouvernance flexible : aucun quorum requis pour l'AGO et l'AGE sur 2ème convocation.
- Gérée par une société de gestion agréée qui exerce la direction générale de la SPI.

FPI :
- Copropriété d'actifs (pas de personnalité morale).
- Constitué par l'émission d'au moins 2 parts représentant les actifs.
- Le montant de l'apport minimum initial est égal à 50 millions de dirhams.
- La possibilité d'inscription à la cote de la bourse des valeurs.
- Les titres peuvent être libellés en devise ou régis par une législation étrangère.
- Géré par une société de gestion agréée.
- La société de gestion est le mandataire du FPI

A quelle autorisation est soumis un OPCI ?

Tout OPCI est constitué à l'initiative d'une société de gestion. Pour pouvoir gérer et commercialiser un OPCI, la société de gestion doit demander deux types d'autorisation :
• agrément de l'OPCI à travers l'approbation de son projet de règlement de gestion.
• visa du document d'information de l'OPCI.

Quelles sont les conditions d'exercice de l'activité de société de gestion d'OPCI ?

Pour exercer l'activité de société de gestion d'OPCI, toute société anonyme doit remplir les conditions suivantes :
• avoir son siège au Maroc ;
• avoir pour activité principale et habituelle la gestion d'OPCI et/ou la gestion d'organismes de placement immobilier de droit étranger;
• avoir un capital social ≥ 1 million de dirhams, entièrement libéré lors de la demande d'agrément ;
• présenter des garanties suffisantes en termes de moyens organisationnels, techniques et humains (notamment l'expérience professionnelle de ses dirigeants) ;
• les dirigeants ne doivent pas avoir fait l'objet d'une décision de condamnation pour une infraction en relation avec leur activité.`,
    date: "10/01/2025",
    image: "/lovable-uploads/opci-maroc.png",
    category: "Laila QAMAR"
  },
  {
    id: 6,
    title: "Points de vigilance lors de la souscription d'un contrat d'assurance",
    content: `Quels sont les points sur lesquels je dois être vigilant lors de la souscription du contrat d'assurance ?

Lorsque vous souscrivez un contrat d'assurance, que ce soit pour votre voiture, votre habitation, votre santé ou tout autre aspect de votre vie, il est essentiel d'être vigilant.

Les contrats d'assurance peuvent être complexes et comporter des termes et des conditions qui peuvent avoir un impact considérable sur votre protection et vos droits en cas de sinistre.

Il est donc crucial de comprendre pleinement ce que vous acceptez et d'être conscient des points sur lesquels vous devez être particulièrement attentif.

Dans cette perspective, examinons quelques points clés sur lesquels vous devriez porter une vigilance particulière lors de la souscription d'un contrat d'assurance :

• Déclaration de l'assuré : vous devez faire attention à l'exactitude des informations recueillies par l'assureur, ainsi qu'à leur retranscription exacte sur le contrat. Toute mauvaise déclaration de votre part, même non intentionnelle, peut être la cause de la perte d'une partie ou de la totalité de vos droits.

• Etendue de la couverture : Vous devrez prendre connaissance de l'étendue des garanties afin de vérifier que le contrat répond à vos besoins de couverture et est adapté à votre profil de risque. Plusieurs éléments sont à prendre en considération :

- Objet de la garantie : définition des événements, biens, et personnes couvertes ;
- Clauses d'exclusions : ce sont les circonstances dans lesquelles l'assuré n'est pas couvert. Les clauses d'exclusion doivent être formelles, limitées et écrites en caractères très apparents ;
- Clauses de déchéance : c'est la perte du droit à indemnité au titre d'un sinistre suite au non-respect par l'assuré de l'un de ses engagements ;
- Plafond de garantie : Le montant qui constitue le maximum de l'engagement de l'assureur. Tout dépassement de ce plafond sera donc supporté par vous ;
- La prise d'effet des garanties : vous devrez faire attention à la date à partir de laquelle la garantie commence à jouer.
- Franchise : C'est la somme qui restera à votre charge en cas de sinistre et qui n'est donc pas indemnisée par l'assureur.

• Durée de couverture : Il vous faudra prêter attention à la durée du contrat, et discerner s'il est à durée ferme ou à tacite reconduction.

• Conditions d'exécution : Veillez à bien lire, au niveau de votre police d'assurance, les conditions posées par certaines clauses afin de pouvoir bénéficier de la garantie.

En conclusion, la souscription d'un contrat d'assurance nécessite une attention particulière. N'hésitez pas à poser des questions à votre conseil en assurance pour clarifier tous les points qui vous semblent flous.

Pour être certain.e que votre contrat d'assurance correspond à vos besoins avant sa signature, adressez-vous à un conseil en assurance de qualité : n'hésitez pas à prendre conseil auprès d'Assur'wi :
- C'est un courtier d'assurance qui peut vous renseigner sur toutes les offres du marché.
- A travers sa plateforme www.digiassur.ma, ou par tel au 0522368182`,
    date: "08/01/2025",
    image: "/lovable-uploads/contrat-assurance.png",
    category: "Laila QAMAR"
  },
  {
    id: 7,
    title: "Comprendre la franchise : un modèle d'entreprise prometteur",
    content: `1. Qu'est-ce que la franchise?

La franchise est un accord commercial entre deux parties : le franchiseur et le franchisé. Le franchiseur est le détenteur de l'entreprise qui a développé un concept, une marque ou un produit réussi. Le franchisé est l'entrepreneur individuel ou l'entreprise qui obtient le droit d'exploiter ce concept en échange de redevances et de respecter les normes et les procédures établies par le franchiseur.

2. Comment fonctionne la franchise?

Dans le cadre d'une franchise, le franchiseur fournit au franchisé non seulement le droit d'utiliser sa marque et son concept, mais également un soutien et une formation continuels. Le franchisé bénéficie ainsi de l'expertise, des méthodes opérationnelles, des ressources marketing et de l'image de marque déjà établie du franchiseur.

Le franchisé est généralement responsable de l'investissement initial pour établir son entreprise, y compris les coûts liés à l'aménagement du local, l'achat d'équipement et l'approvisionnement initial. En retour, le franchisé reverse des redevances régulières au franchiseur, généralement calculées en pourcentage du chiffre d'affaires réalisé.

3. Avantages de la franchise pour les entrepreneurs:

3.1 Expansion plus rapide:
La franchise offre aux entrepreneurs une opportunité d'expansion rapide sans avoir à créer une entreprise de toutes pièces. Grâce au modèle de franchise, ils peuvent profiter de la notoriété et de la clientèle existantes du franchiseur, ce qui leur permet de se développer plus rapidement que s'ils devaient partir de zéro.

3.2 Réduction des risques:
En optant pour une franchise, les entrepreneurs réduisent les risques liés au démarrage d'une nouvelle entreprise. Le concept a déjà fait ses preuves et les procédures opérationnelles sont établies, ce qui augmente les chances de succès.

3.3 Soutien et formation:
Les franchiseurs offrent un soutien et une formation continus aux franchisés. Cela inclut souvent une assistance dans le choix de l'emplacement, la gestion des opérations, le marketing et la publicité, ainsi que la résolution des problèmes. Les entrepreneurs bénéficient ainsi de l'expertise et de l'expérience du franchiseur.

3.4 Image de marque et marketing:
La franchise permet aux entrepreneurs de profiter de la notoriété de la marque déjà établie. Cela facilite la promotion de l'entreprise et la fidélisation de la clientèle, car les consommateurs sont souvent plus enclins à faire confiance à une marque bien connue.

4. Conclusion :

La franchise offre aux entrepreneurs une occasion unique de se lancer dans le monde des affaires en bénéficiant de l'expertise, de la notoriété de la marque et du soutien d'une entreprise déjà établie. Bien que cela ne convienne pas à tous les types d'entreprises, le modèle de franchise a prouvé son efficacité dans de nombreux secteurs. Si vous êtes un entrepreneur ambitieux à la recherche d'une expansion rapide et d'un soutien professionnel, la franchise peut être une option à envisager sérieusement.`,
    date: "05/01/2025",
    image: "/lovable-uploads/franchise-maroc.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 8,
    title: "Évolution du code de la famille - Mariage des mineurs",
    content: `Évolution du code de la famille

Sous l'impulsion du Roi Mohamed VI, que Dieu le glorifie, le chantier de la révision de la Moudawana a été lancé le 26 Septembre dernier. Un délai de six mois a été donné au gouvernement pour soumettre des propositions d'amendements.

A cet effet, et dans un esprit démocratique, Houkouki lance un débat sur les réseaux sociaux autour du Code de la Famille pour collecter les avis des Marocaines et Marocains sur les articles qu'ils souhaitent voir évoluer… ou pas.

Chaque semaine, un article du Code actuel, vous sera détaillé et un vote sur son évolution sera lancé.

Cette semaine, nous vous exposons la réglementation actuelle sur « le mariage des mineurs » et ses conséquences sur les droits des enfants.

Le mariage du mineur selon «LA MOUDAWANA » de 2004

Le mariage des mineurs demeure un phénomène qui constitue une violation des droits des enfants à l'échelle internationale et atteinte à leurs droits fondamentaux.

Au Maroc, malgré sa prohibition par le code de la famille en 2004, le mariage précoce continue à se propager à cause des dérogations permises par l'article 20 et 21 du code de la famille qui stipulent que :

Article 20 :
« Le juge de la famille chargé du mariage peut autoriser le mariage du garçon et de la fille avant l'âge de la capacité matrimoniale prévu à l'Article 19 ci-dessus, par décision motivée précisant l'intérêt et les motifs justifiant ce mariage. Il aura entendu, au préalable, les parents du mineur ou son représentant légal. De même, il aura fait procéder à une expertise médicale ou à une enquête sociale. La décision du juge autorisant le mariage d'un mineur n'est susceptible d'aucun recours »

Article 21 :
« Le mariage du mineur est subordonné à l'approbation de son représentant légal. L'approbation du représentant légal est constatée par sa signature apposée, avec celle du mineur, sur la demande d'autorisation de mariage et par sa présence lors de l'établissement de l'acte de mariage. Lorsque le représentant légal du mineur refuse d'accorder son approbation, le juge de la famille chargé du mariage statue en l'objet ».

Cet article a apporté une exception accordant au juge de la famille d'autoriser le mariage d'un mineur à condition que sa décision soit motivée par un motif ou un intérêt justifiant ce mariage sous réserve de :
• Procéder à une expertise médicale ou une enquête sociale,
• Approbation de ce mariage par la présence du mineur et l'apposition de la signature du tuteur légal

A titre indicatif en 2020, d'après les statistiques du ministère public, 19.266 demandes de mariage de mineurs ont été présentées à travers les tribunaux du Royaume marocain, 13.000 accords ont été délivrés.

Et vous, êtes-vous pour ou contre le mariage des mineurs ? L'exception prévue à cet article doit-elle ou pas évoluer ?`,
    date: "03/01/2025",
    image: "/lovable-uploads/code-famille-evolution.png",
    category: "Jamila ALAMI"
  },
  {
    id: 9,
    title: "Bonne nouvelle pour les mamans !",
    content: `Bonne nouvelle pour les mamans ! Chaque jour, HOUKOUKI vous donne l'actualité juridique qui vous intéresse.

Désormais, l'autorisation maternelle suffit pour l'obtention du passeport biométrique des enfants !

Dans une décision marquante, les consulats du Royaume à l'étranger notamment celui de New-York et de Madrid ont annoncé un changement significatif dans les procédures d'obtention et de renouvellement des passeports biométriques pour les enfants mineurs. Conformément à cette réforme, l'autorisation du père ne sera plus obligatoire si la mère a donné la sienne pour l'établissement du passeport de l'enfant, à moins qu'il y'ait une décision judiciaire qui exige l'accord du père en tant que tuteur légal. Cette mesure, entrée en vigueur récemment, marque un tournant dans la politique administrative du pays.

Auparavant, étant donné que le père a la qualité de « représentant légal » de ses enfants mineurs après le divorce, la législation marocaine exigeait explicitement l'approbation des deux parents pour obtenir le passeport biométrique pour l'enfant mineur. Cette exigence pouvait parfois poser des défis, en particulier dans les cas où le père était absent ou indisponible pour donner son consentement. Cependant, cette nouvelle directive vient assouplir cette contrainte en permettant aux mères de fournir leur autorisation seule, sans nécessiter celle du père.

Il s'agit essentiellement de la simplification des procédures administratives pour les femmes au Maroc.

Cette réforme est susceptible d'avoir un impact remarquable sur de nombreuses familles à travers le pays, en particulier celles dirigées par des mères célibataires ou dans lesquelles les pères sont absents. En éliminant la nécessité d'obtenir l'approbation des deux parents, le processus d'obtention d'un passeport pour un enfant devient plus accessible et moins contraignant pour de nombreuses familles.

En somme, cette décision marque un progrès significatif dans la manière dont les passeports biométriques pour les enfants sont délivrés au Maroc, reflétant une approche plus progressiste et inclusive de la gouvernance administrative, ainsi que du changement positif qui s'aligne sur les normes internationales en matière de droit des femmes.`,
    date: "02/01/2025",
    image: "/lovable-uploads/passeport-maman.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 10,
    title: "Plongez au cœur de la révolution numérique avec la nouvelle initiative du SGG !!",
    content: `Plongez au cœur de la révolution numérique avec la nouvelle initiative du SGG !!

La création de la « commission chargée du numérique », pour un renforcement du cadre juridique des nouvelles transitions digitales.

Monsieur Mohamed Hajoui, Secrétaire Général du Gouvernement a récemment annoncé une initiative novatrice le mercredi 13 mars 2024 portant sur la création d'une "Cellule Numérique" au sein du Secrétariat Général du Gouvernement (SGG). Cette cellule aura pour mission principale de superviser les sujets, les projets et les actualités liés à la transition digitale au sein du SGG. Elle se concentrera également sur l'analyse des projets de textes légaux en lien avec cette évolution technologique.

Cette démarche s'inscrit dans le cadre de la stratégie nationale Morocco Digital 2030. Cette stratégie ambitieuse requiert une adaptation des lois et règlements existants pour mieux encadrer les nouveaux défis et opportunités issus des avancées technologiques. Cela implique notamment l'élaboration de nouvelles lois pour régir des secteurs émergents comme l'intelligence artificielle, le Big Data, le Cloud computing, la FinTech et les contrats intelligents.

La création de cette "Cellule Numérique" témoigne du fort engagement du gouvernement marocain à rester à l'avant-garde de la révolution digitale et à mettre en place un cadre légal approprié et adaptable pour accompagner cette transformation. La mise en œuvre de cette "Cellule Numérique" reflète également la volonté d'encourager l'innovation et la compétitivité dans le domaine digital.`,
    date: "29/01/2024",
    image: "/lovable-uploads/sgg-numerique.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 11,
    title: "Le Maroc renforce sa posture face aux menaces numériques",
    content: `Le Maroc renforce sa posture face aux menaces numériques

Adoptez les nouvelles mesures de sécurité de la Directive Nationale de la Sécurité des Systèmes d'Information (DNSSI)

Le Maroc s'est engagé depuis plusieurs années dans un processus de développement numérique. Cette évolution comporte également des risques liés à la cybersécurité. Pour répondre à ces enjeux, le pays a déployé des efforts importants, notamment par la création de la Direction Générale de la Sécurité des Systèmes d'Information (DGSSI).

Dans cette optique, la Directive Nationale de la Sécurité des Systèmes d'Information (DNSSI) a récemment fait l'objet d'une mise à jour majeure, visant à renforcer la protection des données et des infrastructures sensibles (Logiciels, procédures, …), qui s'applique à toutes les entités publiques et privées, ainsi qu'aux infrastructures d'importance vitale (IIV).

Cybersécurité au Maroc : le dispositif que vous devez adopter pour la sécurité de vos systèmes d'information !

• La définition d'une politique de Sécurité des Systèmes d'Information adaptée à chaque organisation ;
• Une structuration claire des responsabilités en matière de sécurité des systèmes d'information ;
• Une coordination efficace entre les différents acteurs impliqués ;
• Une analyse approfondie des risques auxquels s'expose l'organisation et une analyse systématique des risques survenus le cas échéant ;
• La gestion des actifs informationnels (matériels et logiciels...), et leur mise à jour régulière
• La mise en place des procédures de gestion des incidents, incluant la détection, la réponse et la remédiation rapide en cas d'attaques ou d'infractions ;
• La conformité et le suivi des règles de sécurité, par le biais des mécanismes de contrôle et d'évaluation.

Les entités concernées disposent de six mois pour se conformer aux nouvelles mesures de sécurité énoncées dans ladite directive.

Cette mise à jour de la DNSSI vise à renforcer la résilience des systèmes d'information face aux menaces numériques croissantes en respectant la confidentialité, l'intégrité et la disponibilité des données et desdits systèmes, ainsi qu'à prévenir les risques de sécurité, et à réagir efficacement en cas d'incident.`,
    date: "07/01/2024",
    image: "/lovable-uploads/cybersecurite-maroc.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 12,
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
    image: "/lovable-uploads/contrat-bail-commercial.png",
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
    content: `Prolongation exceptionnelle : La CNSS accorde des remises sur les pénalités et frais de retard jusqu'au 15 janvier 2025

Bonne nouvelle pour les entreprises marocaines !

La Caisse nationale de sécurité sociale (CNSS) prolonge jusqu'au 15 janvier 2025 sa mesure exceptionnelle de remise gracieuse sur les pénalités de retard, les astreintes, et les frais de recouvrement.

Cette initiative vise à soutenir les entreprises en difficulté économique tout en les incitant à régulariser leur situation financière.

1. Mesure exceptionnelle : La CNSS offre aux entreprises la possibilité de bénéficier d'une remise sur les majorations de retard, astreintes et frais de recouvrement pour les créances antérieures à décembre 2024.

2. Délai limité : Les entreprises doivent profiter de cette mesure avant le 15 janvier 2025 pour bénéficier de réductions significatives.

3. Options de paiement : Trois options de paiement sont proposées, chacune avec des niveaux de remise différents :

• Paiement intégral : remise de 60% sur les pénalités et frais de recouvrement, et de 90% sur les astreintes.

• Facilité de paiement sur 24 mois et moins : remise de 50% sur les pénalités et frais de recouvrement et de 80% sur les astreintes.

• Facilité de paiement au-delà de 24 mois : remise de 40% sur les pénalités et frais de recouvrement et de 70% sur les astreintes.

4. Simplification des démarches : La CNSS a réactivé son service électronique via la plateforme Daman.com pour faciliter l'accès à cette mesure.

5. Soutien aux entreprises : Cette initiative vise à soutenir les entreprises en difficulté économique et à encourager la régularisation de leur situation financière.`,
    date: "10/01/2025",
    image: "/lovable-uploads/cnss-remise.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 13,
    title: "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger",
    content: `Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger

L'Office des changes a publié une nouvelle circulaire n° 1/2025 le 2 janvier 2025 intitulée "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger", celle-ci vise à simplifier les règles à respecter pour les voyages d'études post-baccalauréat.

Personnes éligibles :

• Les personnes physiques de nationalité marocaine résidentes ;
• Les Marocains résidant à l'étranger ;
• Les étrangers nés de mère ou de père marocain, ne disposant pas de passeport marocain ou de Carte nationale d'identité marocaine.

Dépenses couvertes : 

Les dépenses incluent les frais de scolarité, de séjour, de loyer et les charges correspondantes.

Compte à l'étranger : 

Les étudiants doivent ouvrir un compte bancaire à l'étranger pour gérer leurs dépenses, mais doivent le clôturer et rapatrier le solde au Maroc à la fin de leurs études.

Domiciliation du dossier :

La domiciliation du dossier « études à l'étranger » consiste, pour le donneur d'ordre, à faire le choix d'une banque qui sera la seule chargée d'exécuter le règlement des dépenses prévues à l'article 3 de la présente circulaire.

La banque domiciliataire doit exiger, au début de chaque année scolaire, la remise de l'attestation d'inscription ou de préinscription de l'année en cours ou tout document délivré par un établissement d'enseignement à l'étranger.

Dans le cas de la préinscription, l'étudiant doit fournir à la banque domiciliataire l'attestation d'inscription dans un délai ne dépassant pas 4 mois à compter de la date du premier règlement au titre des dépenses relatives aux voyages pour études à l'étranger.

Documents requis : 

Les banques doivent exiger des documents spécifiques pour les frais de scolarité, de séjour et de loyer.

Transferts anticipés : 

Les transferts anticipés peuvent être effectués jusqu'à 12 mois sous certaines conditions :

1- le règlement par anticipation des frais de séjour est exigé par l'établissement d'enseignement à l'étranger, préalablement à la délivrance de l'attestation d'inscription, ou par les services consulaires du pays d'accueil pour l'obtention du visa étudiant ;

2- le règlement par anticipation du loyer et charges correspondantes est exigé par le bailleur.

Programmes d'échange : 

Les étudiants participant à des programmes d'échange bénéficient des mêmes facilités de change.

Déclarations bancaires : 

Les déclarations bancaires doivent être établies conformément aux modalités fixées par le dispositif des déclarations bancaires.

Source : Circulaire de l'office des changes n° 1/2025 du 02/01/2025

Abrogation des articles : 

La nouvelle circulaire abroge certains articles notamment (Les articles 122, 123, 124, 125, 126 et 127) de l'Instruction Générale des Opérations de Change du 2 janvier 2024 et entre en vigueur à compter du 2 janvier 2025.`,
    date: "10/01/2025",
    image: "/lovable-uploads/etudes-etranger.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 14,
    title: "E-Police : La nouvelle plateforme numérique de la DGSN pour simplifier les services policiers au Maroc",
    content: `E-Police : La nouvelle plateforme numérique de la DGSN pour simplifier les services administratifs policiers au Maroc

La Direction Générale de la Sûreté Nationale (DGSN) annonce le lancement de sa plateforme numérique E-Police. Ce portail interactif, accessible à partir du 20 décembre 2024 aux citoyens, vise à moderniser et à simplifier l'accès aux services administratifs policiers pour tous les citoyens marocains.

Ce que vous offre E-Police :

E-Police est conçu pour offrir une gamme de services administratifs dans un espace numérique sécurisé et facile à utiliser. Les citoyens peuvent désormais demander en ligne la fiche anthropométrique, un document essentiel pour diverses démarches administratives. Grâce à la plateforme "Tiers de confiance" et au portail "Identité numérique", les utilisateurs peuvent vérifier leur identité à distance, garantissant ainsi la protection de leurs données personnelles.

En plus de la demande de la fiche anthropométrique, E-Police intégrera d'autres services numériques déjà existants tels que la prise de rendez-vous pour l'obtention de la carte d'identité nationale électronique et l'inscription aux concours de police. Ce portail représente la première phase d'un processus continu de numérisation des services publics policiers, avec des plans pour intégrer d'autres documents administratifs comme le certificat de résidence et la demande de renouvellement de la carte nationale d'identité électronique.

Pourquoi utiliser E-Police ?

Le lancement de cette plateforme s'inscrit dans une démarche plus large de la DGSN pour améliorer l'efficacité et l'accessibilité des services publics, tout en renforçant la proximité entre la police et les citoyens. En facilitant les démarches administratives et en réduisant les délais de traitement, E-Police promet de transformer l'expérience des citoyens avec les services policiers au Maroc.

Vous pouvez vous rendre sur la plateforme E-Police dès le 20 décembre 2024 pour découvrir ses fonctionnalités et profiter de ses nombreux avantages.`,
    date: "01/02/2024",
    image: "/lovable-uploads/e-police-dgsn.png",
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
