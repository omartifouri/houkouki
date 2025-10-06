import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Scale, Building, Shield, CheckCircle, Plane, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor";

const ArAccueil = () => {
  useScrollToAnchor();
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-white" dir="rtl">
      <ArabicNavigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary text-primary text-xl px-8 py-3">
            حقوقك، مهمتنا
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            مرافقة قانونية<br />
            <span className="text-primary">بسيطة وسريعة وإنسانية</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            أينما كنت، استفد من خبرة فقهائنا القانونيين لنصحك وتوجيهك وحماية مصالحك
          </p>
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link to="/ar/contact">
                طلب عرض سعر
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* لماذا تختار Houkouki */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار Houkouki؟
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-brand-coral-light hover:border-brand-coral transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-brand-coral-dark">استشارة عن بعد</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  متاح عبر الهاتف، مكالمات الفيديو أو واتساب، أينما كنت
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-coral-light hover:border-brand-coral transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-brand-coral-dark">خدمات مخصصة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  استشارة قانونية حسب وضعيتك، تحليل وصياغة الوثائق، مساعدة في الإجراءات
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-coral-light hover:border-brand-coral transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-beige to-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-brand-coral-dark">أمان مضمون</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  سرية مطلقة وتطبيق محمول لمتابعة كل شيء في الوقت الفعلي
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              <strong>HOUKOUKI، متخصصون في القانون المغربي</strong>، في خدمة الأفراد، الشركات والمغاربة في العالم
            </p>
          </div>
        </div>
      </section>

      {/* عرض الخدمات */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              عرض الخدمات
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Houkouki منصة مغربية للاستشارات القانونية عن بعد، مخصصة لكل من يرغب في التوقع والفهم والدفاع عن حقوقه وممارستها دون توتر أو ضياع للوقت
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                نرافقك من خلال:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-brand-beige rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">استشارات قانونية مخصصة تقدمها فقهاء متخصصون</span>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-brand-beige rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">صياغة ومراجعة وثائقك القانونية</span>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-brand-beige rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">التكفل بإجراءاتك الإدارية</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-brand-beige rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">التسوية الودية أو التنسيق القضائي لنزاعاتك عند الضرورة</span>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-brand-beige rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">وصول آمن لخدماتنا عبر تطبيقنا المحمول</span>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-2 h-2 bg-brand-beige rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">استشارة ومرافقة استراتيجية في التمويل</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                التزامنا: جعل القانون أبسط وأسرع وأكثر إنسانية
              </p>
              <p className="text-lg text-brand-beige font-medium">
                هل تبحث عن شريك موثوق؟
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* عروضنا حسب احتياجاتك */}
      <section className="py-16 px-4 bg-gradient-to-br from-brand-beige/10 to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              عروضنا، حسب احتياجاتك
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-coral-light rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">أنت فرد؟</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  نزاع، مسألة إرث، طلاق، عقد للمراجعة؟ فقهاؤنا يقدمون لك النصح بسرية تامة
                </p>
                <Button className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground border-0" asChild>
                  <Link to="/ar/profils#particulier">اكتشف عرضنا للأفراد</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl text-gray-900">أنت شركة؟</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  تسعى لتأمين ممارساتك في الموارد البشرية، التجارة أو الإدارة؟ خبراؤنا يساعدونك على توقع المخاطر
                </p>
                <Button className="w-full mt-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground border-0" asChild>
                  <Link to="/ar/profils#entreprise">اكتشف عرضنا للشركات</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-gray-900">تعيش في الخارج؟</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  احم حقوقك في المغرب عن بُعد. Houkouki يمكنك من إدارة كل شيء بطريقة سلسة وموثوقة
                </p>
                <Button className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground border-0" asChild>
                  <Link to="/ar/profils">اكتشف عرضنا للمغاربة في العالم</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* الخدمات القانونية الأكثر طلبا */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              خدماتنا القانونية الأكثر طلبًا
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">إنشاء الشركات ومتابعة الحياة القانونية</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">تدقيق الامتثال الاجتماعي</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">صياغة العقود والاتفاقيات</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">استشارات في قانون العمل</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">استشارات في قانون الأسرة</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">استشارات في القانون العقاري</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">الطعون الودية ومرافقة النزاعات</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">الإجراءات الإدارية</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">تدقيق قانوني للوثائق</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700">استشارات في التمويل</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button 
              className="bg-brand-beige hover:bg-brand-beige/80" 
              asChild
            >
              <Link to="/ar/prestations">
                شاهد جميع خدماتنا
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* باقاتنا وأسعارنا */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              باقاتنا وأسعارنا
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/ar/tarifs#abonnement-annuel" className="block">
              <Card className="bg-white p-6 flex flex-col h-full cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-brand-beige">اشتراك سنوي</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1 text-center">
                    وصول غير محدود لفقهائنا + مرافقة مخصصة طوال السنة. مثالي للأفراد أو الشركات الذين يرغبون في خدمة قرب مستمرة
                  </p>
                  <Button className="w-full bg-brand-beige hover:bg-brand-beige/80 mt-auto">
                    اختر الاشتراك
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Card 
              className="bg-white p-6 flex flex-col h-full cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => {
                window.location.href = '/ar/tarifs#prestations-a-la-carte';
              }}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-red-800">حسب الطلب</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1 text-center">
                  سؤال، حاجة نقطة، وثيقة للصياغة أو إجراء للبدء؟ ادفع فقط ما تحتاجه
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = '/ar/tarifs#prestations-a-la-carte';
                  }}
                >
                  اختر خدمة حسب الطلب
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ابدأ الآن مع Houkouki
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            احصل على استشارة قانونية من الخبراء في دقائق
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/ar/contact">تواصل معنا</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArAccueil;
