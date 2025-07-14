import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ArPricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white" dir="rtl">
      <ArabicNavigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            أسعارنا
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اختاروا الصيغة التي تناسب احتياجاتكم. بسيطة وشفافة وبدون تكاليف مخفية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Annual Subscription */}
          <Card className="bg-white p-6 border-2 border-[#C0997A] relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#C0997A] text-white px-4 py-1 rounded-full text-sm font-medium">
                الأكثر شعبية
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-[#C0997A] text-center">اشتراك سنوي</CardTitle>
              <div className="text-center">
                <span className="text-4xl font-bold text-gray-900">اتصلوا بنا</span>
                <p className="text-gray-600 mt-2">للحصول على تسعير مخصص</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">وصول غير محدود لفقهائنا</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">مرافقة مخصصة طوال السنة</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">معالجة أولوية لقضاياكم</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">الوصول لتطبيقنا المحمول</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#C0997A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">صياغة ومراجعة الوثائق</span>
                </div>
              </div>
              <Button className="w-full bg-[#C0997A] hover:bg-[#B8926F]" asChild>
                <Link to="/ar/contact">اختيار الاشتراك</Link>
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                مثالي للأفراد أو الشركات الذين يريدون خدمة قرب مستمرة.
              </p>
            </CardContent>
          </Card>

          {/* À la carte */}
          <Card className="bg-white p-6">
            <CardHeader>
              <CardTitle className="text-2xl text-red-800 text-center">حسب الطلب</CardTitle>
              <div className="text-center">
                <span className="text-4xl font-bold text-gray-900">ابتداءً من</span>
                <p className="text-gray-600 mt-2">تسعير متغير حسب الخدمة</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">استشارة قانونية لمرة واحدة</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">صياغة الوثائق</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">الإجراءات الإدارية</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">إدارة النزاعات</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">مراجعة الوثائق القانونية</span>
                </div>
              </div>
              <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                <Link to="/ar/quote">طلب عرض سعر</Link>
              </Button>
              <p className="text-sm text-gray-600 text-center mt-4">
                ادفعوا فقط لما تحتاجونه.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            تحتاجون مساعدة في الاختيار؟ فريقنا هنا لإرشادكم.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/ar/contact">اتصل بفريقنا</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArPricing;