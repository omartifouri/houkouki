import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, Plane, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";

const ArProfils = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-white" dir="rtl">
      <ArabicNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            اختر ملفك الشخصي
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            في Houkouki، نقدم خدمات مخصصة حسب وضعيتك: فرد، شركة أو مغربي في الخارج
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* فرد */}
          <section id="particulier" className="scroll-mt-20">
            <Card className="border-2 border-primary">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center justify-center space-x-4 space-x-reverse mb-4">
                  <Users className="h-12 w-12 text-primary" />
                  <CardTitle className="text-3xl">فرد</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 mb-6 text-center">
                  هل تواجه مشكلة قانونية في حياتك اليومية؟ نحن هنا لمساعدتك
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">المجالات المشمولة:</h3>
                    <ul className="space-y-3">
                      {[
                        "قانون الأسرة (طلاق، حضانة، ميراث)",
                        "القانون العقاري (إيجار، ملكية)",
                        "قانون العمل (عقد، فصل)",
                        "قانون المستهلك",
                        "النزاعات والإجراءات"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3 space-x-reverse">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">خدماتنا:</h3>
                    <ul className="space-y-3">
                      {[
                        "استشارات هاتفية أو عبر الفيديو",
                        "تحليل وثائقك",
                        "صياغة الرسائل والطعون",
                        "مرافقة في الإجراءات",
                        "تسوية ودية للنزاعات"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3 space-x-reverse">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <Button size="lg" asChild>
                    <Link to="/ar/prestations">اكتشف خدماتنا</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/ar/contact">تواصل معنا</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* شركة */}
          <section id="entreprise" className="scroll-mt-20">
            <Card className="border-2 border-secondary">
              <CardHeader className="bg-secondary/5">
                <div className="flex items-center justify-center space-x-4 space-x-reverse mb-4">
                  <Building className="h-12 w-12 text-secondary" />
                  <CardTitle className="text-3xl">شركة</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 mb-6 text-center">
                  قم بتأمين نشاطك المهني وتوقع المخاطر القانونية
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">مرافقتنا للشركات:</h3>
                    <ul className="space-y-3">
                      {[
                        "إنشاء ومتابعة الشركات",
                        "صياغة العقود التجارية",
                        "تدقيق الامتثال الاجتماعي",
                        "إدارة الموارد البشرية",
                        "حماية البيانات الشخصية"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3 space-x-reverse">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">مزايا خاصة للشركات:</h3>
                    <ul className="space-y-3">
                      {[
                        "مستشار مخصص",
                        "أسعار تفضيلية",
                        "تدخل سريع",
                        "دعم في حالة التفتيش",
                        "استراتيجية الوقاية القانونية"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3 space-x-reverse">
                          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-secondary/10 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    دعم الموظفين
                  </h3>
                  <p className="text-gray-700 text-center">
                    نقدم أيضًا خدمة دعم قانوني لموظفيك، لمساعدتهم في قضاياهم الشخصية
                    (أسرة، إسكان، ميراث...). حل فريد يعزز رفاهية موظفيك!
                  </p>
                </div>

                <div className="flex justify-center gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/ar/tarifs">عرض الأسعار</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/ar/contact">طلب عرض سعر</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* مغربي في الخارج */}
          <section id="mre" className="scroll-mt-20">
            <Card className="border-2 border-primary">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center justify-center space-x-4 space-x-reverse mb-4">
                  <Plane className="h-12 w-12 text-primary" />
                  <CardTitle className="text-3xl">مغربي في الخارج</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 mb-6 text-center">
                  أدر شؤونك في المغرب عن بُعد، بكل ثقة وأمان
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">احتياجاتك الخاصة:</h3>
                    <ul className="space-y-3">
                      {[
                        "إدارة الممتلكات العقارية",
                        "مسائل الميراث",
                        "مسائل الأسرة (طلاق، حضانة)",
                        "نزاعات عن بعد",
                        "وثائق إدارية"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3 space-x-reverse">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">مرافقة مخصصة:</h3>
                    <ul className="space-y-3">
                      {[
                        "خدمة متاحة 24/7",
                        "فريق يتقن الفرنسية والعربية",
                        "مرافقة في إجراءاتك في المغرب",
                        "تدبير ملفاتك عن بُعد",
                        "تنسيق مع السلطات المحلية"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3 space-x-reverse">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <Button size="lg" asChild>
                    <Link to="/ar/prestations">خدماتنا للمغاربة في العالم</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/ar/contact">تواصل معنا</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Final */}
          <section className="bg-gradient-to-br from-primary/10 to-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              جاهز للبدء؟
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              مهما كان ملفك الشخصي، Houkouki يرافقك
            </p>
            <Button size="lg" asChild>
              <Link to="/ar/contact">تواصل معنا الآن</Link>
            </Button>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArProfils;
