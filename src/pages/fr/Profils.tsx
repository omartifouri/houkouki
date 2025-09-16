import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Building, Globe, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { useEffect } from "react";

const FrProfils = () => {
  useEffect(() => {
    // Gérer le scroll vers l'ancre après le chargement de la page
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash) as HTMLElement;
      if (element) {
        setTimeout(() => {
          // Ajouter un offset pour tenir compte de la navigation fixe
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - 100; // 100px d'offset pour la navigation
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header avec navigation */}
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Vous êtes… Particulier, entreprise ou MRE ?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez Houkouki, nous savons que chaque situation est unique. Que vous soyez particulier, entreprise ou 
            Marocain résidant à l'étranger, nous avons conçu des services adaptés à vos besoins juridiques spécifiques.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Un particulier */}
          <section id="particulier">
            <Card className="border-2 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-3xl text-red-800">
                  <Users className="h-8 w-8" />
                  <span>Un particulier</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg mb-6">
                  Vous êtes confronté à une situation complexe ou simplement à une question de droit ? 
                  Chez Houkouki, nous vous accompagnons à chaque étape, pour mieux comprendre vos droits, 
                  éviter les erreurs, ou défendre votre position.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Nous vous aidons à :</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Rédiger ou vérifier un contrat (location, vente, travail…)</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Anticiper ou gérer une séparation, un divorce, une succession</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Réagir à un licenciement, un litige de voisinage ou une escroquerie</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Réaliser des démarches administratives en toute sécurité</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                  <Link to="/fr/prestations">Découvrir nos services pour particuliers</Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Une entreprise */}
          <section id="entreprise">
            <Card className="border-2 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-3xl text-red-800">
                  <Building className="h-8 w-8" />
                  <span>Une entreprise</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg mb-6">
                  Vous dirigez une entreprise, un commerce ou une activité indépendante ? 
                  Nous mettons à votre disposition un accompagnement juridique sur mesure, pour vous aider à 
                  sécuriser vos décisions et limiter vos risques.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Nous intervenons notamment sur :</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#C0997A] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Droit du travail : contrats, ruptures, conformité RH</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#C0997A] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Relations commerciales : CGV, recouvrement, clauses contractuelles</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#C0997A] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Statuts juridiques : création ou évolution d'entreprise</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#C0997A] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Audit de documents et accompagnement dans vos démarches</span>
                      </div>
                       <div className="flex items-start space-x-3">
                         <CheckCircle className="h-5 w-5 text-[#C0997A] mt-1 flex-shrink-0" />
                         <span className="text-gray-700">Conseil en financement : montage de dossiers de crédit, analyse fiscale, business plans, assistance aux réunions bancaires et recherche de cofinancements</span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Section spéciale pour les collaborateurs */}
                <Card className="bg-red-50 border-red-200 mb-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-800">Protéger et soutenir vos collaborateurs</CardTitle>
                    <p className="text-gray-600">
                      Offrez à vos salariés un accès confidentiel à des conseils juridiques et un accompagnement social
                    </p>
                  </CardHeader>
                   <CardContent>
                     <p className="text-gray-700 mb-4">
                       Le quotidien de vos collaborateurs est parfois marqué par des difficultés juridiques ou sociales 
                       qui pèsent sur leur engagement et leur bien-être au travail.
                     </p>
                     
                     <p className="text-gray-700 mb-6 font-semibold">
                       Houkouki vous propose un dispositif d'accompagnement individuel pour vos salariés, incluant :
                     </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Une aide juridique personnalisée :</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Accès direct et confidentiel à un juriste Houkouki</li>
                          <li>• Conseil sur les questions personnelles (logement, famille, succession…)</li>
                          <li>• Aide à la compréhension et à la rédaction de courriers</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Un accompagnement social à la demande :</h5>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Écoute et orientation en cas de difficultés personnelles</li>
                          <li>• Aide à l'accès aux droits et aux démarches administratives</li>
                          <li>• Conseil en financement pour leurs besoins personnels</li>
                          <li>• Soutien en cas de précarité, isolement, ou déséquilibre familial</li>
                        </ul>
                       </div>
                     </div>
                     
                     <p className="text-gray-700 mb-6 font-medium text-center">
                       Le tout en toute confidentialité, via une plateforme ou ligne dédiée.
                     </p>

                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">Les bénéfices pour votre entreprise :</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">Amélioration du climat social</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">Prévention des risques psychosociaux</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">Renforcement de votre politique QVCT ou RSE</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">Valorisation de votre image employeur</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="mt-4 border-[#C0997A] text-[#C0997A] hover:bg-[#C0997A] hover:text-white" asChild>
                      <Link to="/fr/devis">Demander mon devis personnalisé</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                  <Link to="/fr/prestations">Consulter nos prestations pour entreprises</Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Un Marocain résidant à l'étranger (MRE) */}
          <section>
            <Card className="border-2 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-3xl text-red-800">
                  <Globe className="h-8 w-8" />
                  <span>Un Marocain résidant à l'étranger (MRE)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg mb-6">
                  Vous vivez à l'étranger mais avez des intérêts, des biens ou une famille au Maroc ? 
                  Houkouki vous permet de tout gérer à distance, avec une équipe locale réactive et fiable.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Nous vous accompagnons pour :</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#C0997A] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Gérer une succession ou un acte notarié sans revenir au Maroc</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#C0997A] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Confier vos démarches administratives à un interlocuteur unique</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#C0997A] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Résoudre un litige (foncier, familial, bancaire, locatif)</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#C0997A] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Obtenir des conseils clairs sur le droit marocain</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                  <Link to="/fr/prestations">Découvrir notre accompagnement MRE</Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Des réponses adaptées à votre profil */}
          <section style={{ backgroundColor: 'yellow', padding: '20px', border: '5px solid red' }}>
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800 text-center">Des réponses adaptées à votre profil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg mb-6 text-center">
                  Quel que soit votre statut, Houkouki vous propose :
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">Des formules sur abonnement ou à la carte</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">Un accompagnement confidentiel et sécurisé</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">Une prise en charge rapide et personnalisée</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button className="bg-red-600 hover:bg-red-700 text-white mr-4" asChild>
                    <Link to="/fr/tarifs">Voir toutes nos offres</Link>
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

export default FrProfils;