import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, FileText, ClipboardList, MessageSquare, Scale, TrendingUp, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { useEffect } from "react";

const FrPrestations = () => {
  useEffect(() => {
    // Scroll to top when the page loads with #top anchor
    if (window.location.hash === '#top') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-red-50 to-white">{" "}
      {/* Header avec navigation */}
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos prestations</h1>
          <h2 className="text-2xl text-red-600 mb-8">Un accompagnement juridique sur mesure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez Houkouki, nous vous accompagnons dans toutes vos démarches juridiques, avec une approche personnalisée, 
            réactive et sécurisée. Nos prestations couvrent l'ensemble des besoins courants, que vous soyez un particulier, 
            une entreprise ou un MRE, en vous évitant les déplacements inutiles et les démarches compliquées.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Nos principaux services */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Nos principaux services</h2>
            
            <div className="space-y-12">
              {/* 1. Conseil juridique à distance */}
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                    <Phone className="h-7 w-7" />
                    <span>1. Conseil juridique à distance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg mb-4">
                    Vous avez une question ? Un doute sur vos droits ? Nos juristes vous répondent par téléphone, 
                    visioconférence ou WhatsApp, dans des délais courts, en s'adaptant à votre situation.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Exemples de demandes :</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="text-gray-700">Ai-je le droit de… ?</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="text-gray-700">Mon contrat est-il valable ?</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="text-gray-700">Quels sont mes recours ?</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="text-gray-700">Que dois-je faire en cas de litige ?</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                    <Link to="/fr/contact#top">Demander un conseil juridique</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* 2. Rédaction et audit de documents juridiques */}
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                    <FileText className="h-7 w-7" />
                    <span>2. Rédaction et audit de documents juridiques</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg mb-6">
                    Nous rédigeons ou relisons pour vous les documents essentiels à votre sécurité juridique.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Nous intervenons sur :</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full"></div>
                          <span className="text-gray-700">Contrats de travail, de location, de prestation de service</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full"></div>
                          <span className="text-gray-700">Attestations, lettres officielles, demandes formelles</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full"></div>
                          <span className="text-gray-700">Conditions générales de vente ou d'usage</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full"></div>
                          <span className="text-gray-700">Statuts et actes juridiques d'entreprise</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                    <Link to="/fr/contact#top">Demander une rédaction ou un audit</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* 3. Démarches et procédures administratives */}
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                    <ClipboardList className="h-7 w-7" />
                    <span>3. Démarches et procédures administratives</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg mb-6">
                    Besoin d'aide pour remplir un formulaire, rassembler les bons justificatifs ou déposer un dossier ? 
                    Nous vous accompagnons à chaque étape, pour que vos démarches soient rapides et conformes.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Domaines d'intervention :</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full"></div>
                          <span className="text-gray-700">État civil, mariage, divorce</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full"></div>
                          <span className="text-gray-700">Succession, donations, procurations</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full"></div>
                          <span className="text-gray-700">Autorisations administratives, permis, régularisations</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full"></div>
                          <span className="text-gray-700">Réclamations ou recours auprès d'une administration</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                    <Link to="/fr/contact">Confier une procédure administrative</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* 4. Recours amiables et précontentieux */}
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                    <MessageSquare className="h-7 w-7" />
                    <span>4. Recours amiables et précontentieux</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg mb-6">
                    Avant d'aller en justice, nous vous aidons à résoudre les conflits de manière apaisée, par une analyse 
                    stratégique de votre situation et des propositions d'actions concrètes.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Exemples :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full"></div>
                        <span className="text-gray-700">Mise en demeure ou réponse à mise en demeure</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full"></div>
                        <span className="text-gray-700">Lettre de réclamation ou de contestation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full"></div>
                        <span className="text-gray-700">Négociation amiable d'un différend</span>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                    <Link to="/fr/contact">Obtenir une aide pour un litige</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* 5. Coordination de recours judiciaires */}
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                    <Scale className="h-7 w-7" />
                    <span>5. Coordination de recours judiciaires</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg mb-6">
                    Quand un recours en justice devient nécessaire, nous vous aidons à préparer votre dossier, à choisir le 
                    bon professionnel (avocat, notaire, huissier), et à suivre l'évolution de votre affaire.
                  </p>
                  
                  <p className="text-gray-700 mb-6">
                    <strong>Nous ne plaidons pas, mais nous sommes à vos côtés pour préparer et suivre la procédure avec votre avocat.</strong>
                  </p>

                  <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                    <Link to="/fr/contact">Préparer un recours judiciaire</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* 6. Conseil en financement & accompagnement stratégique */}
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl text-red-800">
                    <TrendingUp className="h-7 w-7" />
                    <span>6. Conseil en financement & accompagnement stratégique</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg mb-6">
                    Chez Houkouki, nous accompagnons les entreprises dans toutes les étapes clés de leur croissance, en mettant 
                    à leur disposition une expertise pointue en matière de montage financier, d'analyse bilancielle et de 
                    stratégie de financement. Cette prestation s'adresse aux TPE et PME souhaitant structurer efficacement 
                    leurs démarches auprès des établissements bancaires et des organismes de financement.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Nos services :</h4>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-start space-x-2 mb-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                          <span className="text-gray-700 font-medium">Montage et instruction des dossiers de crédits entreprises :</span>
                        </div>
                        <p className="text-gray-600 ml-4">nous vous guidons dans la constitution de vos dossiers pour maximiser vos chances d'obtention d'accord.</p>
                      </div>
                      
                      <div>
                        <div className="flex items-start space-x-2 mb-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                          <span className="text-gray-700 font-medium">Analyse de la liasse fiscale et recommandations de corrections :</span>
                        </div>
                        <p className="text-gray-600 ml-4">notre expertise permet d'identifier les points de blocage potentiels et de proposer des ajustements pertinents pour une meilleure présentation financière.</p>
                      </div>
                      
                      <div>
                        <div className="flex items-start space-x-2 mb-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                          <span className="text-gray-700 font-medium">Réalisation de business plans pour crédits d'investissement :</span>
                        </div>
                        <p className="text-gray-600 ml-4">nous vous aidons à construire un business plan solide, adapté aux exigences des institutions financières et surtout réaliste.</p>
                      </div>
                      
                      <div>
                        <div className="flex items-start space-x-2 mb-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                          <span className="text-gray-700 font-medium">Renouvellement et extension des autorisations :</span>
                        </div>
                        <p className="text-gray-600 ml-4">un accompagnement complet pour éviter tout blocage lors du renouvellement voire extension des lignes.</p>
                      </div>
                      
                      <div>
                        <div className="flex items-start space-x-2 mb-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                          <span className="text-gray-700 font-medium">Montage des dossiers de financement dans le secteur de la promotion immobilière :</span>
                        </div>
                        <p className="text-gray-600 ml-4">une expertise spécifique dédiée aux opérateurs de ce secteur particulier et exigeant.</p>
                      </div>
                      
                      <div>
                        <div className="flex items-start space-x-2 mb-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                          <span className="text-gray-700 font-medium">Identification de solutions de cofinancement :</span>
                        </div>
                        <p className="text-gray-600 ml-4">nous vous orientons vers les options les plus pertinentes selon votre profil et vos garanties.</p>
                      </div>
                      
                      <div>
                        <div className="flex items-start space-x-2 mb-2">
                          <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                          <span className="text-gray-700 font-medium">Assistance aux réunions bancaires :</span>
                        </div>
                        <p className="text-gray-600 ml-4">nous vous accompagnons lors de vos échanges avec les banques pour défendre vos intérêts et sécuriser vos négociations.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Pour qui ?</h4>
                    <p className="text-gray-700 mb-4">
                      Cette offre s'adresse principalement aux TPE et PME, tous secteurs confondus, souhaitant bénéficier d'un accompagnement structuré pour :
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                        <span className="text-gray-700">Optimiser leurs chances d'accès au financement ;</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                        <span className="text-gray-700">Booster leur développement ;</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                        <span className="text-gray-700">S'appuyer sur une expertise pluridisciplinaire portée par un groupe solide.</span>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Le conseil en financement est également étendu aux prestations accordées aux salariés des entreprises adhérentes, pour leurs besoins personnels en financement (achat d'un logement ou d'un bien, santé, dettes, etc...) 
                      <Link to="/fr/profils" className="text-red-600 hover:text-red-700 underline ml-1">
                        (voir la section salariés)
                      </Link>
                    </p>
                  </div>

                  <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                    <Link to="/fr/contact">Demander un conseil en financement</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Et aussi... */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Et aussi…</h2>
            <Card className="bg-red-50 border-red-200">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-6 w-6 text-[#C0997A]" />
                      <span className="text-gray-700">Accès à notre application mobile : bibliothèque juridique, espace personnel, documents centralisés</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-6 w-6 text-[#C0997A]" />
                      <span className="text-gray-700">Suivi personnalisé avec un conseiller juridique attitré (abonnement)</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-[#C0997A]" />
                      <span className="text-gray-700">Prestations à la carte ou via formule annuelle</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA final */}
          <section className="text-center">
            <Card className="bg-red-600 text-white">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold mb-4">Gagnez du temps, protégez vos intérêts</h2>
                <p className="text-xl mb-8 opacity-90">
                  Chez Houkouki, chaque prestation est pensée pour vous simplifier la vie tout en garantissant 
                  la fiabilité juridique de vos démarches.
                </p>
                <div className="space-x-4">
                  <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                    <a href="/fr/tarifs#top">Voir nos formules</a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                    <a href="/fr/contact">Contactez-nous</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
      
      <Footer />
      <CareerSupportPopup />
    </div>
  );
};

export default FrPrestations;