import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";

const ArTarifs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white" dir="rtl">
      <ArabicNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">أسعارنا</h1>
          <h2 className="text-2xl text-red-600 mb-8">تسعير بسيط وواضح ومتكيف مع احتياجاتك</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">اشتراك سنوي</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-red-600 text-white">
                  <Clock className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">فرد</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">3000</p>
                <p className="text-gray-600">درهم شامل الضريبة</p>
                <Button className="w-full mt-6" asChild>
                  <Link to="/ar/contact">اشترك</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 ring-2 ring-brand-coral">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-red-500 text-white">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">1 - 50 موظف</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">7200</p>
                <p className="text-gray-600">درهم شامل الضريبة</p>
                <Button className="w-full mt-6" asChild>
                  <Link to="/ar/contact">اطلب</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-red-600 text-white">
                  <Building2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">أكثر من 50 موظف</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-primary mb-2">حسب الطلب</p>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link to="/ar/contact">طلب عرض سعر</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArTarifs;
