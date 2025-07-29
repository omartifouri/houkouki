import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Brain, FileText, FileUser, Calendar, Shield, CheckCircle, ChevronRight, Star, ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import DevisModal from "@/components/DevisModal";
import AuthModal from "@/components/AuthModal";
import UserMenu from "@/components/UserMenu";
import RecommendModal from "@/components/RecommendModal";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user, loading } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header/Navbar */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4202db25-ce0c-415f-b72b-0766f38e24fb.png" 
              alt="ILAA Logo" 
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-600 hover:text-red-600 transition-colors">Services</a>
            <a href="#prestation" className="text-gray-600 hover:text-red-600 transition-colors">Prestations</a>
            <a href="/create-cv" className="text-gray-600 hover:text-red-600 transition-colors">Créer un CV</a>
            <ContactForm>
              <a className="text-gray-600 hover:text-red-600 transition-colors cursor-pointer">Contact</a>
            </ContactForm>
            <RecommendModal>
              <a className="text-gray-600 hover:text-red-600 transition-colors cursor-pointer">Recommander à un ami</a>
            </RecommendModal>
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
          <Badge className="mb-6 bg-red-100 text-red-800 border-red-200 text-xl px-8 py-3">
            Soutien carrière professionnelle personnalisé
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trouver sa direction. S'y engager pleinement.
            <br />
            <span className="text-red-600">Orientation, coaching, recherche d'emploi… et clarté.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            ILAA, c'est un accompagnement personnalisé pour passer à l'action : écoute, coaching pro, réseau recruteur et CV optimisé.
          </p>
          <div className="flex flex-col gap-4 justify-center">
            <div>
              <a href="#prestation" className="text-2xl font-bold text-[#C0997A] hover:text-[#B8926F] transition-colors inline-block border-2 border-[#C0997A] hover:border-[#B8926F] px-6 py-3 rounded-lg bg-white hover:bg-[#C0997A]/10">
                Concrètement, comment ça marche ?
              </a>
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
              Que tu sois étudiant, jeune diplômé ou en reconversion, on commence là où tu en es, avec ce que tu as.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">Étudiants</CardTitle>
                <CardDescription>En quête d'un stage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Accompagnement personnalisé pour décrocher le stage de tes rêves et bien te préparer au monde professionnel.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#C0997A] hover:border-[#B8926F] transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#C0997A] to-[#B8926F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#C0997A]">Jeunes diplômés</CardTitle>
                <CardDescription>À la recherche d'un premier emploi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Stratégie complète pour transformer ton diplôme en opportunité professionnelle concrète.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#1A96A0]/30 hover:border-[#1A96A0] transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1A96A0] to-[#1A96A0]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle style={{ color: '#1A96A0' }}>Professionnels</CardTitle>
                <CardDescription>En reconversion</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Accompagnement expert pour réussir ta transition professionnelle et valoriser ton expérience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto text-center">
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
            <Link to="/questionnaire">
              Parle-nous de toi
            </Link>
          </Button>
        </div>
      </section>

      {/* Pourquoi ILAA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir ILAA ?
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <ul className="space-y-6 inline-block text-left">
              <li className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Un accompagnement 100% personnalisé, humain et exigeant</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Pas de méthode automatique : on part de toi</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Un travail de fond entre psychologues, coachs et recruteurs</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Tu n'es pas un dossier. Tu es un projet vivant.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="prestation" className="py-16 px-4 bg-gradient-to-br from-[#C0997A]/10 to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre approche complète
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement personnalisé qui mêle coaching psychologique, stratégie de recherche d'emploi et mise en réseau avec des recruteurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Clarification du projet</CardTitle>
                <CardDescription>Identification de ta voie professionnelle</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-5 w-5 text-[#C0997A] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">2 séances de 2h chacune avec un psychologue clinicien</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-5 w-5 text-[#C0997A] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Identification des débouchés selon ton profil</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#C0997A]/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#C0997A]" />
                </div>
                <CardTitle className="text-xl text-gray-900">Préparation entretiens</CardTitle>
                <CardDescription>Coaching psychologique spécialisé</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">5 séances d'1h chacune avec un psychologue clinicien</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Renforcement de la confiance en soi</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Préparation mentale aux entretiens</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Optimisation de ton CV</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div style={{ backgroundColor: '#1A96A0' }} className="w-12 h-12 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6" style={{ color: '#1A96A0' }} />
                </div>
                <CardTitle className="text-xl text-gray-900">Optimisation de ton CV</CardTitle>
                <CardDescription>Mise en forme professionnelle</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Formulaire de saisie optimisé</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">CV téléchargeable attractif</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Diffusion aux recruteurs partenaires</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Et après Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Et après ?
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <ul className="space-y-6 inline-block text-left">
              <li className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#C0997A] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Tu repars avec une vision claire de ton avenir</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#C0997A] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Un CV professionnel, prêt à diffuser</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#C0997A] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Une posture solide pour tes entretiens</p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#C0997A] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Un accompagnement qui ne s'arrête pas après la première étape</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Combien ça coûte Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
               Combien ça coûte ?
            </h2>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-4">
              Chez ILAA, chaque parcours est personnalisé.
            </p>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-4">
              Nous proposons :
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 mb-8 text-center">
              <li className="text-center">
                <p className="text-xl text-gray-700">Première consultation de définition de ton besoin gratuite</p>
              </li>
              <li className="text-center">
                <p className="text-xl text-gray-700">Forfaits sur mesure selon ton besoin (coaching, suivi complet...) à partir de 2800 dh ht</p>
              </li>
            </ul>
            <div className="text-center">
              <DevisModal>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#C0997A] to-[#A68A6E] hover:from-[#A68A6E] hover:to-[#8B7355] text-white text-lg px-8 py-3"
                >
                  Écris-nous pour recevoir un devis personnalisé
                </Button>
              </DevisModal>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Un suivi simple, humain et sécurisé
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Accédez à tous nos services via une plateforme intuitive et bénéficiez d'un suivi complet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <Link to="/booking" className="hover:text-red-600 transition-colors border-b border-red-200 hover:border-red-600">
                        Gestion des rendez-vous
                      </Link>
                    </h3>
                    <p className="text-gray-600">Sélectionnez facilement tes créneaux avec nos psychologues et chargés de recrutement via notre formulaire en ligne.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#C0997A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-[#C0997A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">CV optimisé</h3>
                    <p className="text-gray-600">Accédez à notre canevas de CV optimisé et téléchargez un modèle professionnel prêt à diffuser.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div style={{ backgroundColor: '#1A96A0' }} className="w-10 h-10 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5" style={{ color: '#1A96A0' }} />
                  </div>
                   <div>
                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Espace sécurisé</h3>
                     <p className="text-gray-600">Consultez le statut de ton dossier, l'historique de tes rendez-vous et échangez avec nos experts.</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#C0997A]/10 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Options de suivi au choix</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border-2 border-[#C0997A]/30">
                  <h4 className="font-semibold text-[#C0997A] mb-3">Espace personnel sécurisé</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Statut du dossier en temps réel</li>
                    <li>• Contact direct avec les recruteurs</li>
                    <li>• Historique complet des rendez-vous</li>
                    <li>• Chat avec nos experts</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-red-100">
                  <h4 className="font-semibold text-red-800 mb-3">Suivi par notification</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Notifications e-mail et WhatsApp</li>
                    <li>• Confirmation de réception du dossier</li>
                    <li>• Rappels de rendez-vous</li>
                    <li>• Validation et diffusion du CV</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ol className="space-y-6">
              <li className="flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <p className="text-lg text-gray-700">Remplis le formulaire ou contacte-nous</p>
              </li>
              <li className="flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <p className="text-lg text-gray-700">Tu bénéficies d'un premier échange gratuit pour cerner ton besoin</p>
              </li>
              <li className="flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <p className="text-lg text-gray-700">On définit ensemble ton parcours d'accompagnement</p>
              </li>
              <li className="flex flex-col items-center text-center space-y-2">
                <div className="w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <p className="text-lg text-gray-700">Tu démarres avec ton coach ou psychologue dédié</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ils nous ont fait confiance
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <blockquote className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
              <p className="text-lg text-gray-700 mb-4 italic">
                "J'étais complètement perdue après mon diplôme. ILAA m'a aidée à clarifier mon cap et à décrocher mon premier emploi."
              </p>
              <footer className="text-red-600 font-semibold">– Inès, 23 ans</footer>
            </blockquote>
            
            <blockquote className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#C0997A]">
              <p className="text-lg text-gray-700 mb-4 italic">
                "J'ai enfin réussi à faire un CV qui me ressemble et j'ai été recontacté par 2 recruteurs !"
              </p>
              <footer className="text-[#C0997A] font-semibold">– Samir, 29 ans</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <details className="bg-white rounded-lg p-6 shadow-sm border">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-red-600 transition-colors">
                Est-ce que je peux juste refaire mon CV sans accompagnement complet ?
              </summary>
              <p className="text-gray-700 mt-4">
                Oui, tu peux choisir uniquement l'optimisation CV. Mais un accompagnement global donne souvent de meilleurs résultats.
              </p>
            </details>
            
            <details className="bg-white rounded-lg p-6 shadow-sm border">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-red-600 transition-colors">
                Est-ce que je peux payer en plusieurs fois ?
              </summary>
              <p className="text-gray-700 mt-4">
                Oui. Nous proposons des facilités de paiement sur les forfaits supérieurs à 500 DH.
              </p>
            </details>
            
            <details className="bg-white rounded-lg p-6 shadow-sm border">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-red-600 transition-colors">
                Comment se passent les séances ?
              </summary>
              <p className="text-gray-700 mt-4">
                En visio ou en présentiel selon ta localisation. Tu choisis tes créneaux en ligne.
              </p>
            </details>
            
            <details className="bg-white rounded-lg p-6 shadow-sm border">
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-red-600 transition-colors">
                Je ne sais pas ce que je veux faire, c'est grave ?
              </summary>
              <p className="text-gray-700 mt-4">
                Absolument pas. On est justement là pour t'aider à clarifier ton cap, même (et surtout) si tu te sens perdu(e).
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{backgroundColor: '#C0997A'}}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Tu veux avancer, mais tu ne sais plus par où commencer ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            👉 Parlons-en. On est là pour t'aider.
          </p>
          <Button size="lg" className="bg-white text-[#C0997A] hover:bg-gray-100 text-lg px-8 py-4" asChild>
            <Link to="/questionnaire">
              C'est parti !
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-xl text-white/90 mt-6 max-w-2xl mx-auto font-medium">
            ILAA. Trouver sa direction. S'y engager pleinement.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tu as des questions ? Parlons de ton projet professionnel
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <ContactForm>
              <Button size="lg" className="bg-[#C0997A] hover:bg-[#A68A6E] text-white">
                Nous contacter
              </Button>
            </ContactForm>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-red text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/5d7e7c1c-ebd4-4271-a028-9798957bf332.png" 
                  alt="Houkouki Logo" 
                  className="h-8 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">
                ILAA. Trouver sa direction. S'y engager pleinement.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Coaching psychologique</li>
                <li>Stratégie de recherche d'emploi</li>
                <li>Optimisation CV</li>
                <li>Préparation entretiens</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@houkouki.com</li>
                <li>05 29 045 999</li>
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