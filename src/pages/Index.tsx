
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Votre succès professionnel
              <span className="text-blue-600 block">commence ici</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Créez un CV professionnel et prenez rendez-vous pour un accompagnement personnalisé
              dans votre recherche d'emploi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/create-cv">
                  <FileText className="mr-2 h-5 w-5" />
                  Créer mon CV
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Prendre rendez-vous
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos services d'accompagnement
          </h2>
          <p className="text-xl text-gray-600">
            Un accompagnement personnalisé pour maximiser vos chances de réussite
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle>Identification des débouchés</CardTitle>
              <CardDescription>
                Analyse personnalisée de votre profil pour identifier les meilleures opportunités
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Analyse de vos compétences</li>
                <li>• Identification des secteurs porteurs</li>
                <li>• Conseils d'orientation personnalisés</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>Renforcement de la confiance</CardTitle>
              <CardDescription>
                Développez votre assurance et votre présence professionnelle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Techniques de développement personnel</li>
                <li>• Gestion du stress</li>
                <li>• Amélioration de la communication</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle>Préparation aux entretiens</CardTitle>
              <CardDescription>
                Préparez-vous mentalement et techniquement aux entretiens d'embauche
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Simulations d'entretiens</li>
                <li>• Techniques de réponse</li>
                <li>• Préparation mentale</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link to="/booking">
              Réserver une consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Créateur de CV professionnel
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Interface intuitive</h3>
                    <p className="text-gray-600">Créez votre CV en quelques minutes avec notre interface simple et efficace</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Export PDF</h3>
                    <p className="text-gray-600">Téléchargez votre CV au format PDF prêt à être envoyé</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Photo de profil</h3>
                    <p className="text-gray-600">Ajoutez votre photo pour personnaliser votre CV</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-6" size="lg">
                <Link to="/create-cv">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <div className="text-center">
                <FileText className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">CV Professionnel</h3>
                <p className="opacity-90">
                  Créez un CV qui se démarque et augmente vos chances d'être remarqué par les recruteurs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
