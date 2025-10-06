import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Scale, Building, Plane } from "lucide-react";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";

const ArQuiSommesNous = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-white" dir="rtl">
      <ArabicNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">من نحن؟</h1>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {/* منصة قانونية */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-center text-primary">
                  منصة قانونية ولدت من ملاحظة بسيطة
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  اليوم، لا يزال الحصول على المعلومات القانونية أو المشورة الموثوقة يمثل تحديًا للعديد من الأفراد والشركات، 
                  سواء بسبب التعقيد الإداري، بُعد المسافة، أو عدم معرفة الإجراءات. هذا الواقع دفعنا 
                  لإنشاء Houkouki: منصة رقمية، يمكن الوصول إليها، وإنسانية، مخصصة لجعل الحق أبسط وأسرع وأقرب إلى كل شخص.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* خبرة قانونية */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                خبرة قانونية في خدمة الجميع
              </h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  يتكون فريقنا من فقهاء ومحامين ومستشارين قانونيين متخصصين في مختلف فروع القانون المغربي. 
                  نحن نعمل جنبًا إلى جنب مع عملائنا لفهم احتياجاتهم، والإجابة على أسئلتهم، 
                  ومرافقتهم خطوة بخطوة في إجراءاتهم.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  نهجنا بسيط: <strong>إضفاء الطابع الإنساني على القانون</strong> مع ضمان الدقة والصرامة والسرية.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* مجالات التدخل */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                مجالات تدخلنا
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Scale className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">قانون الأسرة</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">الزواج، الطلاق، الحضانة، الميراث، النفقة</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Building className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">القانون العقاري</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">الملكية، الإيجار، النزاعات العقارية</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Users className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">قانون العمل</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">عقود العمل، الفصل، النزاعات مع صاحب العمل</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Building className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">قانون الأعمال</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">إنشاء الشركات، العقود التجارية، الامتثال الاجتماعي</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* رؤيتنا ومهمتنا */}
          <section>
            <Card className="bg-gradient-to-br from-primary/5 to-white">
              <CardHeader>
                <CardTitle className="text-3xl text-center text-primary">
                  رؤيتنا ومهمتنا
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  مهمتنا هي <strong>جعل القانون متاحًا للجميع</strong>، بغض النظر عن موقعهم الجغرافي 
                  أو وضعهم المالي أو مستوى معرفتهم القانونية.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  نريد بناء مجتمع حيث يمكن لكل شخص ممارسة حقوقه بثقة، دون خوف 
                  أو انعدام اليقين أو الشعور بالوحدة.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* خدمة مصممة للجميع */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                خدمة مصممة للجميع
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-center">الأفراد</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    مرافقة في القضايا العائلية، العقارية، العمالية، والاستهلاكية
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-center">الشركات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    دعم قانوني في العقود، الموارد البشرية، وإدارة المخاطر
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Plane className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-center">المغاربة في الخارج</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    إدارة عن بُعد للشؤون القانونية في المغرب
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArQuiSommesNous;
