import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Heart, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";

const FrRSE = () => {
  useEffect(() => {
    if (window.location.hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header avec navigation */}
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Notre vision RSE</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">Notre vision</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Chez Houkouki, nous croyons que le droit n'est pas seulement un outil individuel : il est aussi un levier de progrès collectif.
                Notre responsabilité sociale s'inscrit dans une logique simple : <strong>protéger, soutenir et transformer</strong>.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Protéger</h3>
                  <p className="text-gray-600">les individus par l'accès au droit</p>
                </div>
                <div className="text-center">
                  <Heart className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Soutenir</h3>
                  <p className="text-gray-600">les entreprises et organisations dans leurs enjeux sociaux</p>
                </div>
                <div className="text-center">
                  <Sparkles className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Transformer</h3>
                  <p className="text-gray-600">positivement la société en diffusant une culture de responsabilité citoyenne</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">Nos engagements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Accessibilité</h3>
                    <p className="text-gray-700">démocratiser l'accès à des conseils juridiques clairs et abordables.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Prévention</h3>
                    <p className="text-gray-700">agir en amont des conflits, en renforçant la culture du dialogue, de la médiation et du respect mutuel.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Solidarité</h3>
                    <p className="text-gray-700">développer des dispositifs inclusifs pour accompagner toutes les populations, y compris les plus vulnérables.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Impact sociétal</h3>
                    <p className="text-gray-700">associer nos expertises à des projets qui améliorent la qualité de vie et renforcent le lien social.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-brand-beige/20 to-brand-red/10 border-2 border-brand-beige">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-red flex items-center space-x-2">
                <Users className="h-8 w-8" />
                <span>Initiative citoyenne : Play Fair, Live Fair</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Parce que l'esprit sportif rejoint l'esprit citoyen, Houkouki lance l'initiative :
              </p>
              <h3 className="text-xl font-bold text-brand-beige mb-4 text-center">
                "Play Fair, Live Fair – L3eb nḍif, 3ich nḍif"
              </h3>
              <div className="bg-white/70 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Objectif :</h4>
                <p className="text-gray-700">
                  promouvoir le civisme et le respect dans la vie quotidienne, à travers des gestes simples – respecter les règles, 
                  garder la propreté, être solidaire, faire preuve de bienveillance, et adopter une conduite responsable sur la route 
                  (rouler à droite sur l'autoroute, céder la priorité quand il le faut).
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cette initiative s'inscrit dans la dynamique des grands événements sportifs que le Maroc s'apprête à accueillir 
                et vise à renforcer notre rôle d'hôtes responsables et accueillants.
              </p>
              <p className="text-xl font-semibold text-brand-beige text-center">
                Ensemble, faisons du civisme notre plus belle victoire.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
      <CareerSupportPopup />
    </div>
  );
};

export default FrRSE;