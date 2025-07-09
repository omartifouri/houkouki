import { Button } from "@/components/ui/button";
import FrenchNavigation from "@/components/FrenchNavigation";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FrContact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contactez-nous</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Une question ? Un besoin juridique ? L'équipe Houkouki est à votre disposition.
        </p>
      </div>
      
      <CareerSupportPopup />
    </div>
  );
};

export default FrContact;