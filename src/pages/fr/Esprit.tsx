import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";
import CareerSupportPopup from "@/components/CareerSupportPopup";

const FrEsprit = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header avec navigation */}
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">L'esprit Houkouki</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">Notre conviction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Chez Houkouki, nous croyons que l'accès au droit est une condition fondamentale de justice sociale. 
                Trop souvent, les personnes vulnérables, isolées ou peu informées se retrouvent seules face à des 
                démarches juridiques complexes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                C'est pourquoi nous avons fait le choix de bâtir une plateforme accessible à tous, où qu'ils se trouvent, 
                simple et compréhensible, sans jargon ni barrière administrative, inclusive, grâce à des dispositifs 
                d'accompagnement solidaire.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">Notre engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>Notre conviction :</strong> le droit ne doit pas aggraver les inégalités — il doit les réparer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <CareerSupportPopup />
    </div>
  );
};

export default FrEsprit;