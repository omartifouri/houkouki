import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Scale, FileText, Calendar, Shield, CheckCircle, Star, ArrowRight, Phone, Video, MessageCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";

const FrAccueil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header/Navbar */}
      <FrenchNavigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 border-red-200 text-xl px-8 py-3">
            Vos droits, notre mission.
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Un accompagnement juridique 
            <span className="text-red-600"> simple, rapide et humain</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Où que vous soyez, bénéficiez de l'expertise de nos juristes pour vous conseiller, vous orienter, et protéger vos intérêts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg px-8 py-4">
              <Link to="/fr/contact">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-brand-beige text-brand-beige hover:bg-brand-beige hover:text-white">
              <Link to="/fr/devis">
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
              🇲🇦 <strong>Spécialistes du droit marocain</strong>, au service des particuliers, entreprises et Marocains du monde
            </p>
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
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Vous êtes un particulier ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un litige, une question de succession, un divorce, un contrat à vérifier ? 
                  Nos juristes vous conseillent en toute confidentialité.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/fr/profils">Voir nos prestations pour particuliers</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#C0997A]/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#C0997A]" />
                </div>
                <CardTitle className="text-xl text-gray-900">Vous êtes une entreprise ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Vous cherchez à sécuriser vos pratiques RH, commerciales ou administratives ? 
                  Nos experts vous aident à anticiper les risques.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/fr/profils">Découvrir notre offre entreprise</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div style={{ backgroundColor: '#1A96A0' }} className="w-12 h-12 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6" style={{ color: '#1A96A0' }} />
                </div>
                <CardTitle className="text-xl text-gray-900">Vous vivez à l'étranger ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Protégez vos droits au Maroc, à distance. Houkouki vous permet de tout gérer 
                  de façon fluide et fiable.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/fr/profils">En savoir plus pour les MRE</Link>
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
                <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0" />
                <span className="text-gray-700">Création de société et suivi de la vie juridique</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0" />
                <span className="text-gray-700">Audit conformité sociale</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0" />
                <span className="text-gray-700">Rédaction de contrats et conventions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0" />
                <span className="text-gray-700">Conseil en droit social</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0" />
                <span className="text-gray-700">Conseil en droit de la famille</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Conseil en droit immobilier</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Recours amiables et accompagnement litiges</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Procédures administratives</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Audit juridique de documents</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Conseil en financement</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
              <Link to="/fr/prestations">Voir toutes nos prestations</Link>
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
            <Card className="bg-white p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-[#C0997A]">Abonnement annuel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un accès illimité à nos juristes + un accompagnement personnalisé tout au long de l'année.
                  Idéal pour les particuliers ou entreprises qui souhaitent un service de proximité continu.
                </p>
                <Button className="w-full bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                  <Link to="/fr/tarifs">Choisir l'abonnement</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800">À la carte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Une question, un besoin ponctuel, un document à rédiger ou une procédure à lancer ? 
                  Payez uniquement ce dont vous avez besoin.
                </p>
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                  <Link to="/fr/tarifs">Choisir une prestation à la carte</Link>
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
              <h3 className="text-xl font-semibold mb-2">Vous accédez à nos juristes</h3>
              <p className="text-gray-600">Par téléphone ou visioconférence, rapidement et facilement</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Nous vous accompagnons</h3>
              <p className="text-gray-600">Jusqu'à résolution complète de votre situation</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-6">
              <strong>Rapide. Sécurisé. Efficace.</strong>
            </p>
            <Button className="bg-gradient-to-r from-[#C0997A] to-red-600 hover:from-[#B8926F] hover:to-red-700" asChild>
              <Link to="/fr/contact">En savoir plus sur notre fonctionnement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/5d7e7c1c-ebd4-4271-a028-9798957bf332.png" 
                  alt="Houkouki Logo" 
                  className="h-8 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">
                Votre partenaire de confiance pour un accompagnement juridique personnalisé et efficace.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/fr/prestations" className="hover:text-white transition-colors">Conseil juridique</Link></li>
                <li><Link to="/fr/prestations" className="hover:text-white transition-colors">Rédaction d'actes</Link></li>
                <li><Link to="/fr/prestations" className="hover:text-white transition-colors">Démarches administratives</Link></li>
                <li><Link to="/fr/prestations" className="hover:text-white transition-colors">Recours amiables</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Domaines</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/fr/domaines" className="hover:text-white transition-colors">Droit de la famille</Link></li>
                <li><Link to="/fr/domaines" className="hover:text-white transition-colors">Droit du travail</Link></li>
                <li><Link to="/fr/domaines" className="hover:text-white transition-colors">Droit immobilier</Link></li>
                <li><Link to="/fr/domaines" className="hover:text-white transition-colors">Droit commercial</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@houkouki.com</li>
                <li>+212 529.04.59.99</li>
                <li>27, Rue Ain Asserdoune</li>
                <li>Quartier C.I.L - Casablanca</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Houkouki. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrAccueil;