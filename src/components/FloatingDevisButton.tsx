import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import DevisModal from "./DevisModal";

const FloatingDevisButton = () => {
  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 animate-fade-in">
      <DevisModal>
        <Button
          className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-scale rounded-full px-6 py-3 flex items-center gap-2 group"
          size="lg"
        >
          <Calculator className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-medium">Devis sur mesure</span>
        </Button>
      </DevisModal>
    </div>
  );
};

export default FloatingDevisButton;