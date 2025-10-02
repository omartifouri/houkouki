import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, CheckCircle, Scale, Briefcase, Home, FileText, Users, Building, Shield, Lightbulb } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

const LpConsultationAr = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: ''
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
          profile: 'consultation-ar',
          message: 'طلب استشارة قانونية - صفحة الهبوط بالعربية'
        }]);

      if (error) throw error;

      toast({
        title: "تم إرسال الطلب!",
        description: "سنتصل بك في أقرب وقت.",
      });

      setFormData({ nom: '', prenom: '', email: '', telephone: '' });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const testimonials = [
    {
      text: "بفضل حقوقي، حليت المشكل ديالي في بضع أيام!",
      author: "محمد ك.، الدار البيضاء",
      verified: true
    },
    {
      text: "خدمة محترفة وسريعة. الخبرة ديالهم في قانون الأعمال كانت قيمة بزاف.",
      author: "سارة ب.، الرباط",
      verified: true
    },
    {
      text: "فريق متجاوب. كننصح بزاف بالخدمات ديالهم.",
      author: "يوسف م.، مراكش",
      verified: true
    }
  ];

  const stats = [
    { number: "+5,000", label: "زبون راضي" },
    { number: "24/7", label: "مساعدة قانونية" },
    { number: "98%", label: "نسبة الرضا" },
    { number: "+ 15 سنة", label: "خبرة للفريق" }
  ];

  const problems = [
    "مشكل قانوني؟",
    "محتاج عقد يكتبو ليك خبير؟",
    "مشكل مع الباطرون ولا مع المكري؟",
    "مشاكل في الطلاق وحضانة الأطفال؟",
    "نزاعات حول الإرث وتوزيع التركة؟",
    "مشاكل مع الأموال؟"
  ];

  const services = [
    {
      icon: Briefcase,
      title: "قانون الأعمال",
      description: "إنشاء الشركات، العقود، النزاعات"
    },
    {
      icon: Users,
      title: "قانون الشغل",
      description: "الطرد، الأجور، النزاعات"
    },
    {
      icon: Scale,
      title: "القانون الجنائي",
      description: "الدفاع الجنائي، مساعدة الضحايا"
    },
    {
      icon: Home,
      title: "قانون العقار",
      description: "الكراء، نزاعات المالكين والمكترين"
    },
    {
      icon: FileText,
      title: "كتابة ومراجعة",
      description: "الوثائق القانونية"
    },
    {
      icon: Users,
      title: "قانون الأسرة",
      description: "الطلاق، حضانة الأطفال، الميراث"
    },
    {
      icon: Building,
      title: "القانون الإداري",
      description: "الطعون، الرخص، التراخيص"
    },
    {
      icon: Lightbulb,
      title: "الملكية الفكرية",
      description: "العلامات التجارية، براءات الاختراع، حقوق المؤلف"
    }
  ];

  const faqs = [
    {
      question: "شحال كتكلف الاستشارة؟",
      answer: "عندنا أثمنة مناسبة حسب الحالة ديالك باش نقيمو الاحتياجات ديالك."
    },
    {
      question: "واش الخدمات ديالكم سرية؟",
      answer: "جميع الاستشارات ديالنا 100% خاصة ومضمونة."
    },
    {
      question: "كيفاش نقدر نحجز موعد؟",
      answer: "يمكن لك تحجز موعد عبر الموقع أو تتصل بنا مباشرة."
    },
    {
      question: "شحال من الوقت كتاخد الاستشارة؟",
      answer: "عادةً، الاستشارة كتكون في نفس اليوم أو في اليوم التالي."
    },
    {
      question: "واش كتقدموا استشارات عبر الإنترنت؟",
      answer: "نعم، كنقدموا استشارات عبر الهاتف أو الفيديو."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20" dir="rtl">
      {/* Hero Section with Form */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  خاصك محامي ولا مستشار قانوني موثوق؟
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  حصل على استشارة قانونية سريعة وسرية!
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  فريقنا ديال المحامين والمستشارين القانونيين كيواكبوك في قانون الأعمال، قانون الشغل، القانون الجنائي وأكثر.
                </p>
                <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-primary/10 p-4 rounded-lg">
                  <div>
                    <p className="text-2xl font-bold text-primary">استشارات قانونية بدءًا من 299 درهم (بدون ضريبة)</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-muted-foreground">100% سري ومضمون</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-muted-foreground">محامين ومستشارين قانونيين خبراء</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <Card className="shadow-2xl border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      placeholder="كنيتك"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      required
                      className="h-12 text-right"
                    />
                    <Input
                      placeholder="سميتك"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      required
                      className="h-12 text-right"
                    />
                    <Input
                      type="email"
                      placeholder="إيمايل ديالك"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 text-right"
                    />
                    <Input
                      type="tel"
                      placeholder="رقم تيليفون ديالك"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      required
                      className="h-12 text-right"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "جاري الإرسال..." : "بدا دابا"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            واش عندك:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="text-lg font-medium">{problem}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            كيفاش Houkouki.com كيحل ليك المشاكل ديالك:
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-xl">وصول سريع لمحامين متخصصين</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-xl">نصائح واضحة وبسيطة باش تدافع على حقوقك</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-xl">أتعاب شفافة ومناسبة للميزانية ديالك</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            شنو كيقولو الناس اللي خدمو معانا
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">– {testimonial.author}</p>
                    {testimonial.verified && (
                      <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                        <CheckCircle className="w-4 h-4" />
                        زبون موثق
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            الخدمات ديالنا
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 space-y-4">
                    <Icon className="w-12 h-12 text-primary mx-auto" />
                    <h3 className="font-semibold text-lg text-center">{service.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            الأسئلة المتداولة
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold text-right">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-right">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ما تبقاش بوحدك فالمشكل القانوني ديالك!
          </h2>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            حصل على استشارة
          </Button>
          <p className="text-muted-foreground mt-6 text-lg">
            هضر مع خبير دابا
          </p>
        </div>
      </section>
    </div>
  );
};

export default LpConsultationAr;
