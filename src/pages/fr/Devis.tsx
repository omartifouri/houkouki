import { Button } from "@/components/ui/button";
import FrenchNavigation from "@/components/FrenchNavigation";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FrDevis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Demander un devis</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Obtenez un devis personnalisé pour vos besoins juridiques en quelques minutes.
        </p>
      </div>
      
      <CareerSupportPopup />
    </div>
  );
};

export default FrDevis;