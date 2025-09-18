import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingDevisButton = () => {
  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50">
      <Link to="/devis#top">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3 flex items-center gap-2 group"
          size="lg"
        >
          <Calculator className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-medium">Devis sur mesure</span>
        </Button>
      </Link>
    </div>
  );
};

export default FloatingDevisButton;