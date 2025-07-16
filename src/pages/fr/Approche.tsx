import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Smartphone, Users, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";

const FrApproche = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header avec navigation */}
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Notre approche</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Un accompagnement moderne et fluide */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Un accompagnement moderne et fluide</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nous avons conçu une plateforme digitale, accessible à travers :
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 font-bold">📞</span>
                      </div>
                      <span className="text-gray-700">un service téléphonique</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 font-bold">💻</span>
                      </div>
                      <span className="text-gray-700">des rendez-vous en visioconférence</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 font-bold">👤</span>
                      </div>
                      <span className="text-gray-700">un espace client dédié</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-5 w-5 text-red-600" />
                      </div>
                      <span className="text-gray-700">une application mobile complète</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Un service digital, humain et marocain */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Un service digital, humain et marocain</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="h-6 w-6 text-red-600" />
                    <span>Digital</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Houkouki est une plateforme pensée pour les usages modernes. Nous proposons un accompagnement 
                    à distance, par téléphone, visioconférence ou via notre application mobile, pour que chacun puisse 
                    accéder à son conseiller juridique où qu'il soit, au Maroc ou à l'étranger.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-red-600" />
                    <span>Humain</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Digital ne veut pas dire impersonnel : nous mettons l'humain au cœur de notre service. 
                    Chaque client est suivi avec attention, dans le respect de ses besoins et de la confidentialité 
                    de ses échanges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-red-600" />
                    <span>Marocain</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Houkouki est profondément enracinée dans le contexte marocain : nos juristes connaissent 
                    les réalités locales, les procédures administratives, les rapports de force, et les subtilités 
                    de terrain. Nous sommes à la fois proches de nos clients, et ancrés dans le droit marocain tel 
                    qu'il s'applique concrètement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Nos valeurs */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Nos valeurs</h2>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Chez Houkouki, nous croyons que le droit ne doit pas être un luxe ni un labyrinthe. 
                  Il doit être un outil au service de la clarté, de la protection et de la dignité.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nos engagements reposent sur quatre valeurs fondatrices :
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-red-800">
                    <Users className="h-6 w-6" />
                    <span>Proximité</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Un accompagnement humain, sans jargon, adapté à chaque situation. 
                    Nos juristes prennent le temps d'écouter, d'expliquer et de vous orienter au mieux.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-red-800">
                    <Shield className="h-6 w-6" />
                    <span>Rigueur</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Chaque conseil repose sur une expertise solide du droit marocain. 
                    Nous analysons avec précision chaque situation pour vous proposer une solution pertinente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-red-800">
                    <Smartphone className="h-6 w-6" />
                    <span>Accessibilité</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Grâce à nos outils digitaux, vous accédez à un service juridique complet, où que vous soyez. 
                    Depuis un smartphone, un appel ou votre espace personnel, vous êtes accompagné sans difficulté.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-red-800">
                    <Shield className="h-6 w-6" />
                    <span>Confidentialité</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Vos données, vos échanges, vos documents sont strictement protégés. 
                    Le respect de votre vie privée est au cœur de notre déontologie.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Nos engagements */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Nos engagements</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">Confidentialité garantie</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">Réponse rapide et personnalisée</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">Transparence tarifaire</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">Expertise marocaine</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-gray-600 mb-4">En savoir plus ?</p>
                  <Button className="bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/fr/prestations">Découvrir nos services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          <div className="text-center">
            <Button className="bg-red-600 hover:bg-red-700" asChild>
              <Link to="/fr/prestations">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
      <CareerSupportPopup />
    </div>
  );
};

export default FrApproche;