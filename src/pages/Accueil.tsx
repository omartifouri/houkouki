import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Scale, Building, Calendar, Shield, CheckCircle, Plane, ArrowRight, Phone, Video, MessageCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";

const Accueil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header/Navbar */}
      <FrenchNavigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-red-600 text-red-600 text-xl px-8 py-3">
            Vos droits, notre mission.
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Un accompagnement juridique<br />
            <span className="text-red-600">simple, rapide et humain</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Où que vous soyez, bénéficiez de l'expertise de nos juristes pour vous conseiller, vous orienter, et protéger vos intérêts.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link to="/devis">
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Houkouki */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Houkouki ?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">Conseil à distance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Accessible par téléphone, visioconférence ou WhatsApp, où que vous soyez.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">Services personnalisés</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Conseil juridique selon votre situation, analyse et rédaction d'actes, aide aux démarches.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">Sécurité garantie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Confidentialité absolue et application mobile pour tout suivre en temps réel.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              <strong>HOUKOUKI, des spécialistes du droit marocain</strong>, au service des particuliers, entreprises et Marocains du monde.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation des services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Présentation des services
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Houkouki est une plateforme marocaine de conseil juridique à distance, dédiée à tous ceux qui souhaitent anticiper, comprendre, défendre et exercer leurs droits sans stress ni perte de temps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Nous vous accompagnons à travers :
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Des consultations juridiques sur mesure délivrées par des juristes spécialisés</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">La rédaction et l'audit de vos documents juridiques</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">La prise en charge de vos démarches administratives</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">La gestion amiable ou la coordination judiciaire de vos litiges, si nécessaire</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Un accès sécurisé à nos services via notre application mobile</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Conseil & accompagnement stratégique en financement</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                Notre engagement : vous rendre le droit plus simple, plus rapide, plus humain.
              </p>
              <p className="text-lg text-[#C0997A] font-medium">
                Vous cherchez un partenaire de confiance ?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos offres selon vos besoins */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#C0997A]/10 to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos offres, selon vos besoins
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Vous êtes un particulier ?</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  Un litige, une question de succession, un divorce, un contrat à vérifier ? 
                  Nos juristes vous conseillent en toute confidentialité.
                </p>
                <Button className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground border-0 hover-scale transition-all duration-300" asChild>
                  <Link to="/profils#particulier">Découvrir notre offre particuliers</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl text-gray-900">Vous êtes une entreprise ?</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  Vous cherchez à sécuriser vos pratiques RH, commerciales ou administratives ? 
                  Nos experts vous aident à anticiper les risques.
                </p>
                <Button className="w-full mt-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground border-0 hover-scale transition-all duration-300" asChild>
                  <Link to="/profils#entreprise">Découvrir notre offre entreprises</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-gray-900">Vous vivez à l'étranger ?</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  Protégez vos droits au Maroc, à distance. Houkouki vous permet de tout gérer 
                  de façon fluide et fiable.
                </p>
                <Button className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground border-0 hover-scale transition-all duration-300" asChild>
                  <Link to="/profils">Découvrir notre offre MRE</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prestations juridiques les plus demandées */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos prestations juridiques les plus demandées
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Création de société et suivi de la vie juridique</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Audit conformité sociale</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Rédaction de contrats et conventions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Conseil en droit social</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Conseil en droit de la famille</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Conseil en droit immobilier</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Recours amiables et accompagnement litiges</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Procédures administratives</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Audit juridique de documents</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">Conseil en financement</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button 
              className="bg-[#C0997A] hover:bg-[#B8926F]" 
              onClick={() => {
                window.location.href = '/prestations';
                setTimeout(() => window.scrollTo(0, 0), 100);
              }}
            >
              Voir toutes nos prestations
            </Button>
          </div>
        </div>
      </section>

      {/* Nos formules */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos formules
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-6 flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-[#C0997A]">Abonnement annuel</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  Un accès illimité à nos juristes + un accompagnement personnalisé tout au long de l'année.
                  Idéal pour les particuliers ou entreprises qui souhaitent un service de proximité continu.
                </p>
                <Button 
                  className="w-full bg-[#C0997A] hover:bg-[#B8926F] mt-auto"
                  onClick={() => {
                    window.location.href = '/tarifs#abonnement-annuel';
                    setTimeout(() => {
                      const element = document.getElementById('abonnement-annuel');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                >
                  Choisir l'abonnement
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white p-6 flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800">À la carte</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  Une question, un besoin ponctuel, un document à rédiger ou une procédure à lancer ? 
                  Payez uniquement ce dont vous avez besoin.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white mt-auto"
                  onClick={() => {
                    window.location.href = '/tarifs#prestations-a-la-carte';
                  }}
                >
                  Choisir une prestation à la carte
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vous choisissez votre formule</h3>
              <p className="text-gray-600">Abonnement ou prestation à la carte selon vos besoins</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vous nous contactez</h3>
              <p className="text-gray-600">Par téléphone, visio ou via votre espace client sécurisé</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Nous intervenons</h3>
              <p className="text-gray-600">Conseil, rédaction, démarches... Nous nous occupons de tout</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CareerSupportPopup />
    </div>
  );
};

export default Accueil;