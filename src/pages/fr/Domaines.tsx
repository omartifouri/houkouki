import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";

const FrDomaines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nos domaines de droit</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Nous couvrons un large éventail de domaines du droit marocain pour répondre aux situations 
          les plus courantes comme aux plus complexes.
        </p>
      </div>
    </div>
  );
};

export default FrDomaines;