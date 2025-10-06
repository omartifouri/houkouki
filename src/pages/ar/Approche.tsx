import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Users, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";

const ArApproche = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white" dir="rtl">
      <ArabicNavigation />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">نهجنا</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* مرافقة حديثة وسلسة */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">مرافقة حديثة وسلسة</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  صممنا منصة رقمية، يمكن الوصول إليها من خلال:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 font-bold">📞</span>
                      </div>
                      <span className="text-gray-700">خدمة هاتفية</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 font-bold">💻</span>
                      </div>
                      <span className="text-gray-700">مواعيد عبر مكالمات الفيديو</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 font-bold">👤</span>
                      </div>
                      <span className="text-gray-700">مساحة عميل مخصصة</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <Smartphone className="h-5 w-5 text-red-600" />
                      </div>
                      <span className="text-gray-700">تطبيق محمول شامل</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* خدمة رقمية، إنسانية ومغربية */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">خدمة رقمية، إنسانية ومغربية</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <Smartphone className="h-6 w-6 text-red-600" />
                    <span>رقمي</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Houkouki منصة مصممة للاستخدام الحديث. نقدم مرافقة 
                    عن بُعد، عبر الهاتف، مكالمات الفيديو أو عبر تطبيقنا المحمول، حتى يتمكن الجميع من 
                    الوصول إلى مستشارهم القانوني أينما كانوا، في المغرب أو في الخارج.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <Users className="h-6 w-6 text-red-600" />
                    <span>إنساني</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    رقمي لا يعني غير شخصي: نضع الإنسان في قلب خدمتنا. 
                    يتم متابعة كل عميل بعناية، مع احترام احتياجاته والسرية 
                    في تبادلاته.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse">
                    <MapPin className="h-6 w-6 text-red-600" />
                    <span>مغربي</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Houkouki متجذرة بعمق في السياق المغربي: فقهاؤنا يعرفون 
                    الحقائق المحلية، الإجراءات الإدارية، موازين القوى، والفروق الدقيقة 
                    الميدانية. نحن قريبون من عملائنا في نفس الوقت، ومتجذرون في القانون المغربي كما 
                    يُطبق بشكل ملموس.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* قيمنا */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">قيمنا</h2>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  في Houkouki، نؤمن بأن القانون يجب ألا يكون رفاهية أو متاهة. 
                  يجب أن يكون أداة في خدمة الوضوح والحماية والكرامة.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  تستند التزاماتنا على أربع قيم أساسية:
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse text-red-800">
                    <Users className="h-6 w-6" />
                    <span>القرب</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    مرافقة إنسانية، بدون مصطلحات معقدة، تتكيف مع كل حالة. 
                    يأخذ فقهاؤنا الوقت للاستماع والشرح وتوجيهك بأفضل طريقة.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse text-red-800">
                    <Shield className="h-6 w-6" />
                    <span>الصرامة</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    تستند كل نصيحة على خبرة قوية في القانون المغربي. 
                    نحلل بدقة كل حالة لنقترح عليك حلاً مناسبًا.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse text-red-800">
                    <Smartphone className="h-6 w-6" />
                    <span>إمكانية الوصول</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    بفضل أدواتنا الرقمية، تصل إلى خدمة قانونية كاملة، أينما كنت. 
                    من هاتف ذكي، مكالمة أو مساحتك الشخصية، تكون مرافَقًا دون صعوبة.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 space-x-reverse text-red-800">
                    <Shield className="h-6 w-6" />
                    <span>السرية</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    بياناتك، تبادلاتك، وثائقك محمية بشكل صارم. 
                    احترام حياتك الخاصة في قلب أخلاقياتنا المهنية.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="text-center">
            <Button className="bg-red-600 hover:bg-red-700" asChild>
              <Link to="/ar/prestations">اكتشف خدماتنا</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArApproche;
