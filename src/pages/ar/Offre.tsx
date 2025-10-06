import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building, Plane, Check } from "lucide-react";
import { Link } from "react-router-dom";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor";

const ArOffre = () => {
  useScrollToAnchor();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-white" dir="rtl">
      <ArabicNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">عرضنا</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف خدماتنا المصممة حسب احتياجاتك: أفراد، شركات أو مغاربة في العالم
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* ثلاث فئات رئيسية */}
          <section>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">الأفراد</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    مرافقة شخصية في قضاياك القانونية اليومية
                  </p>
                  <Button className="w-full" asChild>
                    <Link to="/ar/profils#particulier">المزيد من المعلومات</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-2 border-primary">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">الشركات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    دعم قانوني لنشاطك المهني
                  </p>
                  <Button className="w-full" variant="secondary" asChild>
                    <Link to="/ar/profils#entreprise">المزيد من المعلومات</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">المغاربة في العالم</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    إدارة شؤونك القانونية في المغرب عن بُعد
                  </p>
                  <Button className="w-full" asChild>
                    <Link to="/ar/profils#mre">المزيد من المعلومات</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* صيغ الاشتراك */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">صيغنا</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl text-center text-primary">اشتراك سنوي</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-center">
                    وصول غير محدود إلى خدماتنا القانونية طوال السنة
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">استشارات قانونية غير محدودة</span>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">تحليل الوثائق القانونية</span>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">مساعدة في صياغة الرسائل</span>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">مستشار مرجعي مخصص</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link to="/ar/tarifs#abonnement-annuel">اكتشف الأسعار</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-600">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-2xl text-center text-red-800">حسب الطلب</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 text-center">
                    خدمات قانونية بدون التزام، حسب احتياجاتك
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">أسعار واضحة لكل خدمة</span>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">بدون اشتراك</span>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">ادفع فقط ما تستخدمه</span>
                    </li>
                    <li className="flex items-start space-x-3 space-x-reverse">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">مثالي للاحتياجات النقطية</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/ar/tarifs#prestations-a-la-carte">اكتشف الخدمات</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* خدماتنا الرئيسية */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">خدماتنا الرئيسية</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "إنشاء ومتابعة الشركات",
                "تدقيق الامتثال الاجتماعي",
                "صياغة العقود والاتفاقيات",
                "استشارات في قانون العمل",
                "استشارات في قانون الأسرة",
                "استشارات في القانون العقاري",
                "الطعون الودية ومرافقة النزاعات",
                "الإجراءات الإدارية",
                "تدقيق قانوني للوثائق"
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link to="/ar/prestations">عرض جميع الخدمات</Link>
              </Button>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary/10 to-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              مستعد للبدء؟
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة قانونية من الخبراء
            </p>
            <Button size="lg" asChild>
              <Link to="/ar/contact">تواصل معنا</Link>
            </Button>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArOffre;
