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
    id: 2,
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
    id: 3,
    title: "Prolongation exceptionnelle : La CNSS accorde des remises sur les pénalités et frais de retard jusqu'au 15 janvier 2025",
    content: "Prolongation exceptionnelle : La CNSS accorde des remises sur les pénalités et frais de retard jusqu'au 15 janvier 2025",
    date: "10/01/2025",
    image: "/lovable-uploads/4202db25-ce0c-415f-b72b-0766f38e24fb.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 4,
    title: "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger",
    content: "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger",
    date: "10/01/2025",
    image: "/lovable-uploads/52bc0c0c-34a4-4850-b667-a57ab1fe2408.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 5,
    title: "E-Police : La nouvelle plateforme numérique de la DGSN pour simplifier les services policiers au Maroc",
    content: "E-Police : La nouvelle plateforme numérique de la DGSN pour simplifier les services policiers au Maroc",
    date: "01/02/2024",
    image: "/lovable-uploads/5d7e7c1c-ebd4-4271-a028-9798957bf332.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 6,
    title: "Le Maroc renforce sa posture face aux menaces numériques",
    content: "Le Maroc renforce sa posture face aux menaces numériques",
    date: "07/01/2024",
    image: "/lovable-uploads/746a9b0d-7942-4f17-9351-aaeff6fff194.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 7,
    title: "Bonne nouvelle pour les mamans ! Chaque jour, HOUKOUKI vous donne l'actualité juridique qui vous intéresse.",
    content: "Bonne nouvelle pour les mamans ! Chaque jour, HOUKOUKI vous donne l'actualité juridique qui vous intéresse.",
    date: "02/01/2024",
    image: "/lovable-uploads/a2e35cca-9c41-4eed-b0c7-c784e87900a7.png",
    category: "Équipe HOUKOUKI"
  },
  {
    id: 8,
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
