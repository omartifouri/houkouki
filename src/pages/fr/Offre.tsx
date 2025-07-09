import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Building, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const FrOffre = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header avec navigation */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/fr" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/5d7e7c1c-ebd4-4271-a028-9798957bf332.png" 
                alt="Houkouki Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <Button variant="ghost" asChild>
              <Link to="/fr">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Notre offre</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600">
              Découvrez nos solutions juridiques adaptées à chaque profil et chaque besoin
            </p>
          </div>

          {/* Nos trois principales offres */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">Particuliers</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Accompagnement juridique personnel pour toutes vos questions de droit
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/fr/profils">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">Entreprises</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Solutions juridiques pour sécuriser et développer votre activité
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/fr/profils">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">MRE</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Gestion à distance de vos droits et démarches au Maroc
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/fr/profils">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Types de formules */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Nos formules</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-800 text-center">Abonnement annuel</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Un accès illimité à nos juristes + un accompagnement personnalisé tout au long de l'année.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Idéal pour les particuliers ou entreprises qui souhaitent un service de proximité continu.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/fr/tarifs">Choisir l'abonnement</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-800 text-center">À la carte</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Une question, un besoin ponctuel, un document à rédiger ou une procédure à lancer ?
                  </p>
                  <p className="text-gray-600 mb-6">
                    Payez uniquement ce dont vous avez besoin.
                  </p>
                  <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                    <Link to="/fr/tarifs">Choisir une prestation à la carte</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Nos prestations principales */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Nos prestations principales</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Conseil juridique à distance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Questions, doutes sur vos droits ? Nos juristes vous répondent par téléphone, visioconférence ou WhatsApp.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Rédaction d'actes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Contrats, attestations, lettres officielles, conditions générales... Rédigés par nos experts.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Démarches administratives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Aide pour vos formalités, formulaires, dossiers administratifs. Nous vous accompagnons pas à pas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Recours amiables</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Résolution de conflits par voie amiable. Mise en demeure, négociation, médiation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Coordination judiciaire</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Préparation de votre dossier, choix des professionnels, suivi de procédure.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Conseil en financement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Montage de dossiers de crédit, business plans, assistance aux réunions bancaires.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="text-center">
            <Button className="bg-red-600 hover:bg-red-700" asChild>
              <Link to="/fr/prestations">Découvrir toutes nos prestations</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrOffre;