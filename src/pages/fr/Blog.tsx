import { Card } from "@/components/ui/card";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const FrBlog = () => {
  const articles: BlogArticle[] = [
    {
      id: 1,
      title: "Création de société au Maroc",
      excerpt: "Créer sa propre entreprise est un rêve que plusieurs marocains veulent réaliser, mais la plupart d'entre eux ignorent les contraintes et procédures liées à la création de société...",
      date: "10/02/2020",
      image: "/lovable-uploads/creation-societe.png",
      category: "Jamila Alami"
    },
    {
      id: 2,
      title: "Contrat de bail",
      excerpt: "Devenir locataire est une étape par laquelle passent des milliers de marocains chaque année. Pour que la location se concrétise, il faut signer un contrat de bail avec le propriétaire...",
      date: "05/02/2020",
      image: "/lovable-uploads/contrat-bail.png",
      category: "Jamila Alami"
    },
    {
      id: 3,
      title: "La succession au Maroc",
      excerpt: "Après un décès, il est normal de se sentir perdu et ne pas savoir par où commencer. Le temps semble s'arrêter et votre cerveau n'arrive plus à suivre. La procédure de succession est longue et pleine de tracas...",
      date: "15/02/2020",
      image: "/lovable-uploads/succession-maroc.png",
      category: "Jamila Alami"
    },
    {
      id: 4,
      title: "LA BASE JURIDIQUE D'UNE URGENCE SANITAIRE AU MAROC",
      excerpt: "Le décret-loi n° 2.20.292 publié au bulletin officiel n° 6867 bis le 23 Mars 2020 portant sur les dispositions relatives à l'état d'urgence sanitaire au Maroc, s'inscrit dans le cadre des mesures de prévention urgentes...",
      date: "23/03/2020",
      image: "/lovable-uploads/base-juridique-urgence-sanitaire.png",
      category: "Jamila Alami"
    },
    {
      id: 5,
      title: "Les Obligations Contractuelles dans le contexte du Covid-19",
      excerpt: "La pandémie du Covid-19 a un impact sur la gestion des contrats en cours, en effet, en raison du contexte actuel, vous pourrez être dans l'impossibilité d'exécuter une partie de vos obligations au titre de vos contrats en cours...",
      date: "20/03/2020",
      image: "/lovable-uploads/obligations-contractuelles-covid.png",
      category: "Jamila Alami"
    },
    {
      id: 6,
      title: "Procès à distance ou tribunal électronique",
      excerpt: "Dans le cadre des mesures nationales visant à endiguer la propagation du coronavirus (Covid-19), le coup d'envoi du dispositif des procès à distance a été donné, lundi 27 Avril au Tribunal de première instance à Salé...",
      date: "05/05/2020",
      image: "/lovable-uploads/tribunal-electronique.png",
      category: "Jamila Alami"
    },
    {
      id: 7,
      title: "Covid 19 – Mesures fiscales et sociales",
      excerpt: "Afin d'endiguer la propagation de la pandémie COVID-19, le 19 mars 2020, conformément aux dispositions de l'article 81 de la constitution, le Gouvernement marocain a adopté le décret-loi n°2.20.292 prévoyant l'état d'urgence sur l'ensemble du territoire du royaume...",
      date: "28/03/2020",
      image: "/lovable-uploads/covid-mesures-fiscales.png",
      category: "Jamila Alami"
    },
    {
      id: 8,
      title: "La spoliation foncière : les nouvelles mesures d'affrontement.",
      excerpt: "La spoliation foncière repose sur l'idée selon laquelle un bien immobilier, propriété de quelqu'un, fait l'objet par un spoliateur d'une attaque, tout en utilisant le faux et ce, dans le dessein de se faire reconnaître un droit de propriété sur ce bien...",
      date: "15/01/2025",
      image: "/lovable-uploads/spoliation-fonciere.png",
      category: "Jamila Alami"
    },
    {
      id: 9,
      title: "Covid 19 : L'impact sur la relation locative",
      excerpt: "Après avoir déclaré le 20 mars 2020 l'état d'urgence sanitaire au Maroc pour lutter contre le Corona virus, les autorités se sont efforcées de prendre un ensemble de mesures proactives pour limiter la propagation de la pandémie...",
      date: "25/03/2020",
      image: "/lovable-uploads/covid-impact-locatif.png",
      category: "Jamila Alami"
    },
    {
      id: 10,
      title: "Prolongation exceptionnelle : La CNSS accorde des remises sur les pénalités et frais de retard jusqu'au 15 janvier 2025",
      excerpt: "Prolongation exceptionnelle : La CNSS accorde des remises sur les pénalités et frais de retard jusqu'au 15 janvier 2025",
      date: "10/01/2025",
      image: "/lovable-uploads/4202db25-ce0c-415f-b72b-0766f38e24fb.png",
      category: "Équipe HOUKOUKI"
    },
    {
      id: 11,
      title: "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger",
      excerpt: "Mesures d'assouplissement et de simplification du régime des voyages pour études à l'étranger",
      date: "10/01/2025",
      image: "/lovable-uploads/52bc0c0c-34a4-4850-b667-a57ab1fe2408.png",
      category: "Équipe HOUKOUKI"
    },
    {
      id: 12,
      title: "E-Police : La nouvelle plateforme numérique de la DGSN pour simplifier les services policiers au Maroc",
      excerpt: "E-Police",
      date: "01/02/2024",
      image: "/lovable-uploads/5d7e7c1c-ebd4-4271-a028-9798957bf332.png",
      category: "Équipe HOUKOUKI"
    },
    {
      id: 13,
      title: "Le Maroc renforce sa posture face aux menaces numériques",
      excerpt: "Le Maroc renforce sa posture face aux menaces numériques",
      date: "07/01/2024",
      image: "/lovable-uploads/746a9b0d-7942-4f17-9351-aaeff6fff194.png",
      category: "Équipe HOUKOUKI"
    },
    {
      id: 14,
      title: "Bonne nouvelle pour les mamans ! Chaque jour, HOUKOUKI vous donne l'actualité juridique qui vous intéresse.",
      excerpt: "Bonne nouvelle pour les mamans ! Chaque jour, HOUKOUKI vous donne l'actualité juridique qui vous intéresse.",
      date: "02/01/2024",
      image: "/lovable-uploads/a2e35cca-9c41-4eed-b0c7-c784e87900a7.png",
      category: "Équipe HOUKOUKI"
    },
    {
      id: 15,
      title: "Plongez au cœur de la révolution numérique avec la nouvelle initiative du SDG !!",
      excerpt: "Plongez au cœur de la révolution numérique avec la nouvelle initiative du SDG !!",
      date: "29/01/2024",
      image: "/lovable-uploads/c63a7edf-1f1a-44b0-bcf7-220fe7f4b232.png",
      category: "Équipe HOUKOUKI"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">La minute de HOUKOUKI</h1>
          <div className="w-32 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                {/* Date and Category Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{article.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-3 min-h-[4.5rem]">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <Link 
                  to={`/fr/blog/${article.id}`}
                  className="text-red-500 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Voir plus
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FrBlog;