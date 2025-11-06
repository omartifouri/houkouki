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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    title: "Prolongation exceptionnelle : La CNSS accorde des remises sur les pénalités et frais de retard jusqu'au 15 janvier 2025",
    content: "Prolongation exceptionnelle : La CNSS accorde des remises sur les pénalités et frais de retard jusqu'au 15 janvier 2025",
    date: "10/01/2025",
    image: "/lovable-uploads/4202db25-ce0c-415f-b72b-0766f38e24fb.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 6,
    title: "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger",
    content: "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger",
    date: "10/01/2025",
    image: "/lovable-uploads/52bc0c0c-34a4-4850-b667-a57ab1fe2408.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 7,
    title: "E-Police : La nouvelle plateforme numérique de la DGSN pour simplifier les services policiers au Maroc",
    content: "E-Police : La nouvelle plateforme numérique de la DGSN pour simplifier les services policiers au Maroc",
    date: "01/02/2024",
    image: "/lovable-uploads/5d7e7c1c-ebd4-4271-a028-9798957bf332.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 8,
    title: "Le Maroc renforce sa posture face aux menaces numériques",
    content: "Le Maroc renforce sa posture face aux menaces numériques",
    date: "07/01/2024",
    image: "/lovable-uploads/746a9b0d-7942-4f17-9351-aaeff6fff194.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 9,
    title: "Bonne nouvelle pour les mamans ! Chaque jour, HOUKOUKI vous donne l'actualité juridique qui vous intéresse.",
    content: "Bonne nouvelle pour les mamans ! Chaque jour, HOUKOUKI vous donne l'actualité juridique qui vous intéresse.",
    date: "02/01/2024",
    image: "/lovable-uploads/a2e35cca-9c41-4eed-b0c7-c784e87900a7.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 10,
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
