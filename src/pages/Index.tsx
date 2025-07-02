
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Scale, FileText, Calendar, Shield, CheckCircle, Star, ArrowRight, Send, Phone, Gavel, Building, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import AuthModal from "@/components/AuthModal";
import UserMenu from "@/components/UserMenu";
import RecommendModal from "@/components/RecommendModal";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user, loading } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header/Navbar */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/5d7e7c1c-ebd4-4271-a028-9798957bf332.png" 
              alt="Houkouki Logo" 
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#prestations" className="text-gray-600 hover:text-blue-600 transition-colors">Prestations</a>
            <a href="#tarifs" className="text-gray-600 hover:text-blue-600 transition-colors">Tarifs</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            {!loading && (
              user ? (
                <UserMenu />
              ) : (
                <AuthModal>
                  <Button variant="outline">
                    Se connecter
                  </Button>
                </AuthModal>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 text-xl px-8 py-3">
            Accompagnement juridique personnalisé
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Vos droits, notre mission
            <span className="text-blue-600"> Un accompagnement juridique simple, rapide et humain</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Où que vous soyez, bénéficiez de l'expertise de nos juristes spécialisés en droit marocain pour vous conseiller, vous orienter, et protéger vos intérêts.
          </p>
          <div className="flex flex-col gap-4 justify-center">
            <div>
              <a href="#prestations" className="text-2xl font-bold text-[#0066CC] hover:text-[#0052A3] transition-colors inline-block border-2 border-[#0066CC] hover:border-[#0052A3] px-6 py-3 rounded-lg bg-white hover:bg-[#0066CC]/10">
                Découvrir nos services juridiques
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactForm>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-4">
                  Conseil juridique gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactForm>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" asChild>
                <Link to="/booking">
                  Prendre rendez-vous
                </Link>
              </Button>
            </div>
            <div className="flex justify-center mt-2">
              <RecommendModal>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-[#42a8b0] text-[#42a8b0] hover:bg-[#42a8b0] hover:text-white">
                  <Send className="mr-2 h-5 w-5" />
                  Recommander à un(e) ami(e)
                </Button>
              </RecommendModal>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pour qui ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous accompagnons tous les profils dans leurs démarches juridiques
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-800">Particuliers</CardTitle>
                <CardDescription>Questions juridiques personnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Divorce, succession, litiges, contrats... Nos juristes vous conseillent et vous accompagnent en toute confidentialité.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0066CC] hover:border-[#0052A3] transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#0066CC]">Entreprises</CardTitle>
                <CardDescription>Sécurisation juridique</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Droit du travail, contrats commerciaux, conformité RH... Anticipez les risques et sécurisez vos décisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#1A96A0]/30 hover:border-[#1A96A0] transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1A96A0] to-[#1A96A0]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle style={{ color: '#1A96A0' }}>Marocains du monde (MRE)</CardTitle>
                <CardDescription>Accompagnement à distance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Protégez vos droits au Maroc depuis l'étranger. Gestion de patrimoine, démarches administratives à distance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="prestations" className="py-16 px-4 bg-gradient-to-br from-[#0066CC]/10 to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos prestations juridiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement complet par des juristes spécialisés en droit marocain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Conseil juridique */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Conseil juridique</CardTitle>
                <CardDescription>Consultations personnalisées</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Consultations illimitées par téléphone ou visio</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Réponse rapide par WhatsApp</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#0066CC] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Expertise en droit marocain</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Rédaction documents */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#0066CC]/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#0066CC]" />
                </div>
                <CardTitle className="text-xl text-gray-900">Rédaction & Audit</CardTitle>
                <CardDescription>Documents juridiques</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Contrats de travail, location, vente</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Conditions générales de vente</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Statuts de société</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Démarches administratives */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div style={{ backgroundColor: '#1A96A0' }} className="w-12 h-12 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <Gavel className="h-6 w-6" style={{ color: '#1A96A0' }} />
                </div>
                <CardTitle className="text-xl text-gray-900">Démarches administratives</CardTitle>
                <CardDescription>Accompagnement complet</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">État civil, succession, mariage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Autorisations et permis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Recours administratifs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un service moderne et accessible, où que vous soyez
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <Link to="/booking" className="hover:text-blue-600 transition-colors border-b border-blue-200 hover:border-blue-600">
                        Prise de rendez-vous facile
                      </Link>
                    </h3>
                    <p className="text-gray-600">Choisissez facilement vos créneaux avec nos juristes spécialisés via notre plateforme en ligne.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0066CC]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#0066CC]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation à distance</h3>
                    <p className="text-gray-600">Téléconsultation par téléphone, visioconférence ou WhatsApp selon vos préférences.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div style={{ backgroundColor: '#1A96A0' }} className="w-10 h-10 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5" style={{ color: '#1A96A0' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Suivi sécurisé</h3>
                    <p className="text-gray-600">Espace client sécurisé pour suivre vos dossiers et accéder à vos documents en toute confidentialité.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0066CC]/10 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos formules d'accompagnement</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-2 border-[#0066CC]/30">
                  <h4 className="font-semibold text-[#0066CC] mb-3">Abonnement annuel</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Consultations juridiques illimitées</li>
                    <li>• Conseiller juridique attitré</li>
                    <li>• Accès à l'application mobile</li>
                    <li>• Suivi personnalisé de vos dossiers</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-3">Prestations à la carte</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Tarif horaire transparent (325 DH HT/h)</li>
                    <li>• Devis gratuit avant intervention</li>
                    <li>• Pas d'engagement</li>
                    <li>• Paiement sécurisé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="tarifs" className="py-20 px-4 bg-gradient-to-r from-[#0066CC] to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Protégez vos droits dès maintenant
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers de personnes qui font confiance à Houkouki pour leurs démarches juridiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0066CC] hover:bg-gray-100 text-lg px-8 py-4" asChild>
              <Link to="/booking">
                Consultation gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <ContactForm>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-[#0066CC]">
                Demander un devis
              </Button>
            </ContactForm>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
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
                Votre partenaire juridique de confiance pour un accompagnement personnalisé et accessible.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Conseil juridique à distance</li>
                <li>Rédaction de documents</li>
                <li>Démarches administratives</li>
                <li>Recours et litiges</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Domaines de droit</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Droit de la famille</li>
                <li>Droit du travail</li>
                <li>Droit foncier</li>
                <li>Droit commercial</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@houkouki.com</li>
                <li>+212 529.04.59.99</li>
                <li>27, Rue Ain Asserdoune</li>
                <li>Casablanca, Maroc</li>
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

export default Index;
