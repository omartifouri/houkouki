import { Button } from "@/components/ui/button";
import FrenchNavigation from "@/components/FrenchNavigation";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FrImpact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Notre impact</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Nos partenaires & engagement RSE pour un droit plus accessible à tous.
        </p>
      </div>
      
      <CareerSupportPopup />
    </div>
  );
};

export default FrImpact;