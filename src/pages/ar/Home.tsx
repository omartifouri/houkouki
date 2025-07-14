import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Scale, FileText, Calendar, Shield, CheckCircle, Star, ArrowRight, Phone, Video, MessageCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";

const ArHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white" dir="rtl">
      {/* Header/Navbar */}
      <ArabicNavigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 border-red-200 text-xl px-8 py-3">
            حقوقكم، مهمتنا.
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            مرافقة قانونية<br />
            <span className="text-red-600">بسيطة وسريعة وإنسانية</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            أينما كنتم، استفيدوا من خبرة فقهائنا لمشورتكم وتوجيهكم وحماية مصالحكم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Link to="/ar/contact">
                ابدأ الآن
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/ar/quote">
                اطلب عرض سعر
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Houkouki */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار حقوقي؟
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">استشارة عن بعد</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  متاح عبر الهاتف أو الفيديو أو واتساب، أينما كنتم.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">خدمات مخصصة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  استشارة قانونية حسب وضعيتكم، تحليل وصياغة وثائق، مساعدة في الإجراءات.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-red-800">أمان مضمون</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  سرية مطلقة وتطبيق محمول لمتابعة كل شيء في الوقت الفعلي.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              <strong>حقوقي متخصصون في القانون المغربي</strong>، في خدمة الأفراد والشركات ومغاربة العالم
            </p>
          </div>
        </div>
      </section>

      {/* Service Presentation */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              تقديم الخدمات
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              حقوقي منصة مغربية للاستشارة القانونية عن بعد، مخصصة لكل من يريد التوقع والفهم والدفاع وممارسة حقوقه دون توتر أو ضياع وقت.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                نرافقكم من خلال:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">استشارات قانونية على المقاس يقدمها فقهاء متخصصون</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">صياغة ومراجعة وثائقكم القانونية</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">تولي إجراءاتكم الإدارية</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">التسيير الودي أو التنسيق القضائي لنزاعاتكم، عند الضرورة</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">وصول آمن لخدماتنا عبر تطبيقنا المحمول</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#C0997A] rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">استشارة ومرافقة استراتيجية في التمويل</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                التزامنا: جعل القانون أبسط وأسرع وأكثر إنسانية.
              </p>
              <p className="text-lg text-[#C0997A] font-medium">
                تبحثون عن شريك ثقة؟
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            مستعدون للبدء؟
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            اتصلوا بنا اليوم لمناقشة احتياجاتكم القانونية واكتشاف كيف يمكننا مساعدتكم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#C0997A] hover:bg-[#B8926F]">
              <Link to="/ar/contact">اتصل بنا</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/ar/pricing">شاهد الأسعار</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CareerSupportPopup />
    </div>
  );
};

export default ArHome;