import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Scale, Users, Target, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";

const FrQuiSommesNous = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header avec navigation */}
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Qui sommes-nous ?</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Une plateforme juridique née d'un constat simple */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6">Une plateforme juridique née d'un constat simple</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Trop de personnes renoncent à faire valoir leurs droits, faute d'accès à des conseils juridiques 
                  fiables, réactifs et abordables. Houkouki est née pour répondre à ce besoin fondamental : 
                  offrir à tous un accompagnement juridique personnalisé, à distance, avec un haut niveau d'expertise.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Notre ambition ?</strong> Faciliter l'accès au droit pour toutes les personnes concernées — 
                  résidents, citoyens, expatriés — grâce à une plateforme claire, professionnelle et rassurante.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Une expertise juridique au service de chacun */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6">Une expertise juridique au service de chacun</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Notre équipe est composée de juristes spécialisés dans le droit marocain, expérimentés dans 
                  l'accompagnement des particuliers comme des professionnels et des entreprises. Nous croyons qu'un 
                  bon conseil ne se résume pas à la connaissance du droit : il doit aussi être clair, accessible et 
                  stratégique, pour permettre à chacun de faire les bons choix.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Au-delà de leur expertise, nos conseillers sont formés pour adopter une posture à la fois rigoureuse 
                  et pédagogique, afin d'accompagner efficacement nos clients dans leurs décisions et leurs démarches.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Chaque membre de l'équipe partage une même conviction : rendre le droit compréhensible et applicable 
                  pour tous, sans jargon inutile ni distance intimidante.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Nos domaines d'intervention */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos domaines d'intervention</h3>
            <p className="text-gray-700 mb-6">Nos juristes interviennent dans le droit civil en général dont :</p>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Scale className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">Le droit de la famille</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scale className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">Le droit du travail</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scale className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">Le droit foncier</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scale className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">Le droit des assurances</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Scale className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">Le droit commercial et des sociétés</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scale className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">Le droit du consommateur</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scale className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">Le droit administratif</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scale className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">La protection des données</span>
                  </div>
                </div>
            </div>
          </section>

          {/* Notre vision et notre mission */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6">Notre vision et notre mission</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Chez Houkouki, nous croyons que la sécurité juridique est un pilier de dignité, de sécurité et d'autonomie.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nous défendons un droit plus accessible, plus pédagogique et plus humain, capable d'accompagner les 
                  parcours de vie, les transitions professionnelles, les conflits familiaux ou les défis entrepreneuriaux.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">C'est pourquoi nous proposons :</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">des formules d'abonnement simples et adaptées</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">des prestations à la carte sans engagement</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">un service de proximité, sans jargon, ni distance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Nous œuvrons pour :</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">Réduire les inégalités d'accès au droit</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">Simplifier les démarches juridiques</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">Créer un nouveau rapport au droit, plus fluide, plus humain</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mt-6">
                  En alliant rigueur juridique et service de proximité, nous voulons faire de Houkouki un réflexe 
                  pour tous ceux qui cherchent à être protégés, écoutés, et conseillés.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Un service pensé pour tous les publics */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6">Un service pensé pour tous les publics</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">Que vous soyez :</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Particulier</p>
                        <p className="text-gray-700">confronté à une situation complexe</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Entreprise</p>
                        <p className="text-gray-700">soucieuse de sécuriser ses décisions</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Marocain résident à l'étranger</p>
                        <p className="text-gray-700">ayant besoin d'un relais juridique fiable dans le pays</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Scale className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Étranger résident au Maroc</p>
                        <p className="text-gray-700">concerné par le droit local et soucieux de s'y conformer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-6">
                  Houkouki vous accompagne à chaque étape, de la simple question au traitement complet de votre dossier.
                </p>
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

export default FrQuiSommesNous;