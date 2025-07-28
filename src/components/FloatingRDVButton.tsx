import { Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import { Button } from "./ui/button";

const FloatingRDVButton = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <ContactForm>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-2xl hover:shadow-xl transition-all duration-300 px-6 py-4 rounded-lg text-lg font-semibold"
        >
          <Phone className="mr-2 h-5 w-5" />
          Je prends RDV
        </Button>
      </ContactForm>
    </div>
  );
};

export default FloatingRDVButton;