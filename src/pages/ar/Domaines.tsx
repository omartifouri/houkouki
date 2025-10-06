import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Users, Building } from "lucide-react";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";

const ArDomaines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white" dir="rtl">
      <ArabicNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">مجالات القانون لدينا</h1>

        <div className="max-w-6xl mx-auto space-y-12">
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 space-x-reverse text-2xl text-red-800">
                <Heart className="h-7 w-7" />
                <span>قانون الأسرة</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg">الزواج، الطلاق، الحضانة، الميراث، النفقة</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 space-x-reverse text-2xl text-red-800">
                <Home className="h-7 w-7" />
                <span>القانون العقاري</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg">الملكية، الإيجار، النزاعات العقارية</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArDomaines;
