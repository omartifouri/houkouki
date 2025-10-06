import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, FileText, ClipboardList, MessageSquare, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";

const ArPrestations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white" dir="rtl">
      <ArabicNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا</h1>
          <h2 className="text-2xl text-red-600 mb-8">مرافقة قانونية حسب الطلب</h2>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 space-x-reverse text-2xl text-red-800">
                <Phone className="h-7 w-7" />
                <span>استشارة قانونية عن بعد</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg mb-4">
                فقهاؤنا يجيبونك عبر الهاتف، مكالمة الفيديو أو واتساب
              </p>
              <Button className="bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                <Link to="/ar/contact">اختر استشارة قانونية</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 space-x-reverse text-2xl text-red-800">
                <FileText className="h-7 w-7" />
                <span>صياغة ومراجعة الوثائق القانونية</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg">
                نصيغ أو نراجع لك الوثائق الأساسية لأمنك القانوني
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArPrestations;
