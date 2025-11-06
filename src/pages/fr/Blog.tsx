import { Card } from "@/components/ui/card";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";

const FrBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Blog & Conseils juridiques</h1>
        <Card className="p-8 text-center">
          <p className="text-xl text-gray-600">Bientôt : articles et conseils juridiques</p>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default FrBlog;