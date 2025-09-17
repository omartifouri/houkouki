import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { useEffect } from "react";
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
  useEffect(() => {
    if (window.location.hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);
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
      color: "red"
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
      color: "orange"
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
      color: "rose"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return {
          bg: "from-red-50 to-rose-50",
          border: "border-red-200",
          icon: "bg-red-500",
          button: "bg-red-500 hover:bg-red-600",
          buttonOutline: "border-red-500 text-red-600 hover:bg-red-50"
        };
      case "orange":
        return {
          bg: "from-orange-50 to-red-50",
          border: "border-orange-200",
          icon: "bg-orange-500",
          button: "bg-orange-500 hover:bg-orange-600",
          buttonOutline: "border-orange-500 text-orange-600 hover:bg-orange-50"
        };
      case "rose":
        return {
          bg: "from-rose-50 to-pink-50",
          border: "border-rose-200",
          icon: "bg-rose-500",
          button: "bg-rose-500 hover:bg-rose-600",
          buttonOutline: "border-rose-500 text-rose-600 hover:bg-rose-50"
        };
      default:
        return {
          bg: "from-red-50 to-rose-50",
          border: "border-red-200",
          icon: "bg-red-500",
          button: "bg-red-500 hover:bg-red-600",
          buttonOutline: "border-red-500 text-red-600 hover:bg-red-50"
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
          <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg">
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
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
                <Edit3 className="w-4 h-4 mr-2" />
                Soumettre une question ou un témoignage
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-rose-50 to-red-50 border-2 border-rose-200">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg">
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
                  <Button className="bg-rose-500 hover:bg-rose-600 text-white">
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