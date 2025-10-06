import { Card } from "@/components/ui/card";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";

const ArBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white" dir="rtl">
      <ArabicNavigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">المدونة والنصائح</h1>
        <Card className="p-8 text-center">
          <p className="text-xl text-gray-600">قريبا: مقالات ونصائح قانونية</p>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default ArBlog;
