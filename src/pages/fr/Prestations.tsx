import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, FileText, ClipboardList, MessageSquare, Scale, TrendingUp, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";

const FrPrestations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
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
                    <Link to="/fr/contact">Choisir un conseil juridique</Link>
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
                    <Link to="/fr/contact">Demander une rédaction ou un audit</Link>
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
                    <Link to="/fr/contact">Confier une procédure</Link>
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
                    <strong>Nous ne plaidons pas, mais nous préparons, encadrons et suivons la procédure à vos côtés.</strong>
                  </p>

                  <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                    <Link to="/fr/contact">Préparer un recours</Link>
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
                    stratégie de financement. Cette prestation s'adresse aux PME et TPE souhaitant structurer efficacement 
                    leurs démarches auprès des établissements bancaires et des organismes de financement.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Nos services :</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                        <span className="text-gray-700">Montage et instruction des dossiers de crédits entreprises</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                        <span className="text-gray-700">Analyse de la liasse fiscale et recommandations de corrections</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                        <span className="text-gray-700">Réalisation de business plans pour crédits d'investissement</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                        <span className="text-gray-700">Renouvellement et extension des autorisations</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                        <span className="text-gray-700">Montage des dossiers de financement en promotion immobilière</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                        <span className="text-gray-700">Identification de solutions de cofinancement</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-2"></div>
                        <span className="text-gray-700">Assistance aux réunions bancaires</span>
                      </div>
                    </div>
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
                    <Link to="/fr/tarifs">Voir nos formules</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                    <Link to="/fr/contact">Contactez-nous</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FrPrestations;