import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Building2, FileText, BarChart3, RefreshCw, Home, Users, Handshake } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import ArabicNavigation from "@/components/ArabicNavigation";
import Footer from "@/components/Footer";

const ConseilEnFinancementAr = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    entreprise: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: `${formData.prenom} ${formData.nom}`,
          phone: formData.telephone,
          email: formData.email,
          profile: 'conseil-financement-ar',
          message: `الشركة: ${formData.entreprise}\n\nالرسالة: ${formData.message}`
        }]);

      if (error) throw error;

      toast({
        title: "تم إرسال طلبك!",
        description: "سنتصل بك في أقرب وقت ممكن.",
      });

      setFormData({ nom: "", prenom: "", email: "", telephone: "", entreprise: "", message: "" });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: Building2,
      title: "إعداد وتقديم ملفات الائتمان للشركات",
      description: "نرشدك في إعداد ملفاتك لتعظيم فرص الحصول على الموافقة."
    },
    {
      icon: FileText,
      title: "إعداد خطة عمل لقروض الاستثمار",
      description: "نساعدك في بناء خطة عمل قوية تتناسب مع متطلبات المؤسسات المالية وواقعية."
    },
    {
      icon: BarChart3,
      title: "تحليل الوثائق المالية والضريبية وتوصيات التصحيح",
      description: "خبرتنا تسمح بتحديد نقاط الانسداد المحتملة واقتراح تعديلات ملائمة لعرض مالي أفضل."
    },
    {
      icon: RefreshCw,
      title: "تجديد وتوسيع التراخيص",
      description: "مرافقة شاملة لتجنب أي عائق عند تجديد أو توسيع الخطوط."
    },
    {
      icon: Home,
      title: "إعداد ملفات التمويل في قطاع الترويج العقاري",
      description: "خبرة محددة مخصصة لمشغلي هذا القطاع الخاص والمتطلب."
    },
    {
      icon: Users,
      title: "تحديد حلول التمويل المشترك",
      description: "نوجهك نحو الخيارات الأنسب حسب ملفك وضماناتك."
    },
    {
      icon: Handshake,
      title: "المساعدة في الاجتماعات البنكية",
      description: "نرافقك أثناء تبادلاتك مع البنوك للدفاع عن مصالحك وتأمين مفاوضاتك."
    }
  ];

  const benefits = [
    "تحسين فرص الحصول على التمويل",
    "تعزيز تطورهم",
    "الاعتماد على خبرة متعددة التخصصات مدعومة بمجموعة قوية"
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <ArabicNavigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              الاستشارة في التمويل
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              الاستشارة في التمويل والمرافقة الاستراتيجية للشركات
            </p>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              تقديم الشركة
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              في Houkouki، نرافق الشركات في جميع المراحل الرئيسية لنموها، من خلال توفير خبرة دقيقة في مجال التركيب المالي، التحليل المالي واستراتيجية التمويل. هذه الخدمة الجديدة موجهة للشركات الصغيرة والمتوسطة التي ترغب في هيكلة إجراءاتها بشكل فعال مع المؤسسات البنكية وهيئات التمويل.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            خدماتنا
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            نقترح عليكم مرافقة مخصصة حول المحاور التالية
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                    <CardTitle className="text-center text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center mb-8 text-muted-foreground">
              الشركات الصغيرة والمتوسطة، مهما كان قطاع نشاطك، ترغب في الاستفادة من مرافقة منظمة من أجل:
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-background p-4 rounded-lg">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              أسعارنا
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              في Houkouki، نقدم لك مرافقة مهنية بتسعير واضح وشفاف:
            </p>
            <Card className="max-w-md mx-auto p-8 border-2 border-primary/20">
              <CardContent className="space-y-4 pt-6">
                <p className="text-4xl font-bold text-primary">400 درهم (بدون ضريبة) / ساعة</p>
                <p className="text-muted-foreground">
                  بحد أدنى 350 درهم (بدون ضريبة)
                </p>
                <p className="text-sm text-muted-foreground">
                  (إذا استمرت الاستشارة 15 دقيقة فقط، سيكون السعر المطبق 350 درهم بدون ضريبة)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                تريد معرفة المزيد أو مناقشة مشروعك؟
              </h2>
              <p className="text-xl text-muted-foreground">
                تواصل معنا اليوم وتحدث مع خبرائنا!
              </p>
            </div>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="الكنية"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      required
                      className="text-right"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="الاسم"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      required
                      className="text-right"
                    />
                  </div>
                </div>
                <Input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="text-right"
                />
                <Input
                  type="tel"
                  placeholder="رقم الهاتف"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  required
                  className="text-right"
                />
                <Input
                  placeholder="اسم الشركة"
                  value={formData.entreprise}
                  onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                  required
                  className="text-right"
                />
                <Textarea
                  placeholder="رسالتك"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="text-right"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConseilEnFinancementAr;
