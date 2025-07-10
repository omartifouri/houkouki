import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { 
  BookOpen, 
  Newspaper, 
  Users, 
  Edit3,
  Mail,
  ArrowRight,
  FileText,
  Clock,
  MessageCircle,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  User
} from "lucide-react";

const FrBlog = () => {
  const blogCategories = [
    {
      title: "Vulgarisation juridique",
      description: "Des sujets concrets, expliqués simplement.",
      icon: Lightbulb,
      articles: [
        "Comment contester une décision administrative ?",
        "Différence entre procuration notariée et sous seing privé",
        "Quels sont mes droits en cas de licenciement abusif ?",
        "Divorce au Maroc : les étapes clés"
      ],
      buttonText: "Voir tous les articles pratiques",
      color: "blue"
    },
    {
      title: "Actualités réglementaires",
      description: "Restez informé des évolutions législatives et réglementaires qui vous concernent.",
      icon: TrendingUp,
      articles: [
        "Ce qui change en 2025 dans le Code du travail",
        "Nouvelles obligations liées à la protection des données",
        "Réformes en cours sur les droits de succession"
      ],
      buttonText: "Lire les dernières actualités",
      color: "green"
    },
    {
      title: "Témoignages & cas concrets",
      description: "Parce que les expériences des autres peuvent éclairer la vôtre.",
      icon: User,
      articles: [
        "J'ai pu régulariser la succession de ma mère à distance – Le récit d'une MRE",
        "Mon entreprise a évité un contentieux grâce à un simple audit juridique",
        "Quand une lettre bien rédigée évite une procédure – Cas réel d'intervention Houkouki"
      ],
      buttonText: "Découvrir nos récits de cas",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "from-blue-50 to-indigo-50",
          border: "border-blue-200",
          icon: "bg-blue-500",
          button: "bg-blue-500 hover:bg-blue-600",
          buttonOutline: "border-blue-500 text-blue-600 hover:bg-blue-50"
        };
      case "green":
        return {
          bg: "from-green-50 to-emerald-50",
          border: "border-green-200",
          icon: "bg-green-500",
          button: "bg-green-500 hover:bg-green-600",
          buttonOutline: "border-green-500 text-green-600 hover:bg-green-50"
        };
      case "purple":
        return {
          bg: "from-purple-50 to-indigo-50",
          border: "border-purple-200",
          icon: "bg-purple-500",
          button: "bg-purple-500 hover:bg-purple-600",
          buttonOutline: "border-purple-500 text-purple-600 hover:bg-purple-50"
        };
      default:
        return {
          bg: "from-gray-50 to-gray-100",
          border: "border-gray-200",
          icon: "bg-gray-500",
          button: "bg-gray-500 hover:bg-gray-600",
          buttonOutline: "border-gray-500 text-gray-600 hover:bg-gray-50"
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog & Conseils juridiques</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprendre le droit pour mieux agir
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg">
                <BookOpen className="w-10 h-10" />
              </div>
            </CardHeader>
            
            <CardContent className="text-center max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Le droit est partout dans notre quotidien : dans un contrat de travail, une vente, un héritage, une décision administrative…
                Mais il reste souvent difficile à comprendre, parfois même intimidant.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Chez Houkouki, nous pensons que la connaissance juridique est une force. C'est pourquoi nous vous proposons, 
                à travers ce blog, des articles pratiques, pédagogiques et utiles, pour vous aider à y voir plus clair, 
                à anticiper vos démarches, et à faire valoir vos droits en toute confiance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Nos thématiques principales */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos thématiques principales</h2>
          </div>

          <div className="space-y-12">
            {blogCategories.map((category, index) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);
              
              return (
                <Card key={index} className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} shadow-lg`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-full ${colors.icon} text-white flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                          {category.title}
                        </CardTitle>
                        <p className="text-gray-600">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-1 gap-4 mb-8">
                      {category.articles.map((article, articleIndex) => (
                        <div key={articleIndex} className="flex items-start space-x-3 p-4 bg-white/70 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">"{article}"</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <Button className={`${colors.button} text-white px-8 py-3`}>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {category.buttonText}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Proposer un sujet */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg">
                <MessageCircle className="w-10 h-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Vous souhaitez proposer un sujet ou partager votre expérience ?
              </CardTitle>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous enrichissons notre blog chaque mois grâce aux questions fréquentes de nos utilisateurs.
                Si un sujet vous intéresse ou si vous souhaitez témoigner anonymement, écrivez-nous !
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Edit3 className="w-4 h-4 mr-2" />
                Soumettre une question ou un témoignage
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg">
                <Mail className="w-10 h-10" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Ne manquez rien
              </CardTitle>
              <p className="text-lg text-gray-600 mb-6">
                Inscrivez-vous à notre newsletter pour recevoir :
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white/70 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">des conseils pratiques adaptés à votre profil</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">des résumés d'actualités juridiques</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">les nouveautés Houkouki</p>
                </div>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Votre adresse email" 
                    className="flex-1"
                  />
                  <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                    M'inscrire
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
      <CareerSupportPopup />
    </div>
  );
};

export default FrBlog;