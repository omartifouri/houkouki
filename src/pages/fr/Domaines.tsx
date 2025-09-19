import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Scale, Heart, Building, Home, ShoppingCart, Users, Shield, Database, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";

const FrDomaines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nos domaines de droit</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Chez Houkouki, nous couvrons un large éventail de domaines du droit marocain pour répondre aux situations 
          les plus courantes comme aux plus complexes. Notre équipe de juristes spécialisés vous accompagne, 
          vous oriente et vous conseille avec rigueur, quelle que soit votre problématique.
        </p>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Droit de la famille */}
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                <Heart className="h-7 w-7" />
                <span>Droit de la famille</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg mb-4">
                Nous vous aidons à faire les bons choix dans des situations sensibles :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Mariage, divorce, pension alimentaire</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Garde d'enfants, autorité parentale</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Héritage, successions, partages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Filiation, reconnaissance, adoption</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                  <Link to="/fr/contact#top">Demander un conseil en droit de la famille</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Droit foncier et immobilier */}
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                <Home className="h-7 w-7" />
                <span>Droit foncier et immobilier</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg mb-4">
                Que vous soyez propriétaire, locataire ou héritier d'un bien immobilier, nous vous accompagnons dans vos démarches :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Titres de propriété, contentieux fonciers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Litiges de voisinage, troubles de jouissance</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Locations, ventes, contrats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Démarches de régularisation ou de conservation foncière</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                  <Link to="/fr/contact#top">Être accompagné sur un dossier foncier</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Droit du travail */}
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                <Users className="h-7 w-7" />
                <span>Droit du travail</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg mb-4">
                Salarié ou employeur, bénéficiez d'un accompagnement pour sécuriser vos droits et obligations :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Contrat de travail (embauche, rupture, clauses)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Licenciement, démission, indemnités</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Droit disciplinaire</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Démarches auprès de l'inspection du travail</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                  <Link to="/fr/contact#top">Poser une question en droit du travail</Link>
                </Button>
              </div>
            </CardContent>
          </Card>


          {/* Droit commercial et des sociétés */}
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                <Building className="h-7 w-7" />
                <span>Droit commercial et des sociétés</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg mb-4">
                Pour les entrepreneurs, commerçants et dirigeants d'entreprise, nous sécurisons vos relations contractuelles et votre structure juridique :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Création de société ou d'association</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Rédaction de statuts, création de société</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Pactes d'associés, baux commerciaux</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Conditions générales de vente</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Litiges commerciaux et impayés</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                  <Link to="/fr/contact#top">Être conseillé pour son activité professionnelle</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Droit du consommateur */}
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                <ShoppingCart className="h-7 w-7" />
                <span>Droit du consommateur</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg mb-4">
                En cas de litige avec un commerçant, un prestataire ou une plateforme en ligne, nous vous aidons à vous défendre :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Produits non conformes ou non livrés</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Résiliation abusive, clauses abusives</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Recours amiables ou procédures simplifiées</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Litiges avec banques, opérateurs télécom, assurances…</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                  <Link to="/fr/contact#top">Obtenir un recours pour un litige de consommation</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Droit des assurances */}
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                <Shield className="h-7 w-7" />
                <span>Droit des assurances</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg mb-4">
                Que vous soyez assuré ou bénéficiaire d'un contrat, nous vous aidons à comprendre vos garanties et à faire valoir vos droits :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Refus d'indemnisation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Délai de traitement anormal</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Lecture ou contestation de contrat</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Litige auto, santé, habitation, prévoyance…</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                  <Link to="/fr/contact#top">Faire valoir ses droits en assurance</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Protection des données personnelles */}
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                <Database className="h-7 w-7" />
                <span>Protection des données personnelles</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg mb-4">
                Nous vous aidons à comprendre et faire respecter vos droits en matière de données :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Collecte abusive ou illicite</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Demande de suppression ou de rectification</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Conseils pour les entreprises (mise en conformité CNDP)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Gestion d'un incident de sécurité ou d'un litige</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                  <Link to="/fr/contact#top">Obtenir un accompagnement CNDP</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Section finale */}
          <Card className="bg-red-50 border-2 border-red-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Des réponses concrètes, dans chaque domaine</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Quel que soit votre besoin, nos juristes vous proposent :
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Scale className="h-6 w-6 text-red-600" />
                    </div>
                    <p className="text-gray-700">Un diagnostic rapide et clair</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                    <p className="text-gray-700">Des actions concrètes à engager</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6 text-red-600" />
                    </div>
                    <p className="text-gray-700">Une aide à la rédaction, au suivi ou à la résolution du litige</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/fr/prestations#top">Accéder à nos prestations</Link>
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                    <Link to="/fr/contact#top">Prendre contact avec un juriste</Link>
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

export default FrDomaines;