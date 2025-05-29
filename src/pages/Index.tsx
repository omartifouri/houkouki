
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Centre d'Accompagnement Professionnel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire pour réussir votre recherche d'emploi et développer votre carrière professionnelle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <FileText className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Créer votre CV</CardTitle>
              <CardDescription>
                Créez un CV professionnel et téléchargez-le en PDF
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/create-cv">Créer mon CV</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Calendar className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <CardTitle>Prendre rendez-vous</CardTitle>
              <CardDescription>
                Réservez un créneau pour un accompagnement personnalisé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" variant="outline">
                <Link to="/booking">Réserver</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <CardTitle>Nos services</CardTitle>
              <CardDescription>
                Découvrez tous nos services d'accompagnement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" variant="outline">
                <Link to="/booking">Voir les services</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Settings className="w-12 h-12 mx-auto text-orange-600 mb-4" />
              <CardTitle>Administration</CardTitle>
              <CardDescription>
                Accès réservé aux administrateurs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" variant="secondary">
                <Link to="/admin">Admin</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services d'Accompagnement</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">Identification des débouchés</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysez votre profil professionnel et identifiez les opportunités qui correspondent à vos compétences et aspirations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-green-600">Renforcement de la confiance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Développez votre confiance en vous et apprenez à valoriser vos compétences lors de vos candidatures.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-purple-600">Préparation aux entretiens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Préparez-vous mentalement aux entretiens d'embauche avec des techniques éprouvées et des simulations pratiques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
