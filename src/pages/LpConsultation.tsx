import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, CheckCircle, Scale, Briefcase, Home, FileText, Users, Building, Shield, Lightbulb } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import FrenchNavigation from '@/components/FrenchNavigation';
import Footer from '@/components/Footer';

const LpConsultation = () => {
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
          profile: 'consultation',
          message: 'Demande de consultation juridique - Landing Page'
        }]);

      if (error) throw error;

      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });

      setFormData({ nom: '', prenom: '', email: '', telephone: '' });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const testimonials = [
    {
      text: "Grâce à Houkouki.com, j'ai résolu mon litige en quelques jours seulement !",
      author: "Mohammed K., Casablanca",
      verified: true
    },
    {
      text: "Service professionnel et rapide. Leur expertise en droit des affaires m'a été précieuse.",
      author: "Sara B., Rabat",
      verified: true
    },
    {
      text: "Une équipe réactive et compétente. Je recommande vivement leurs services.",
      author: "Youssef M., Marrakech",
      verified: true
    }
  ];

  const stats = [
    { number: "5,000+", label: "Clients satisfaits" },
    { number: "24/7", label: "Assistance juridique" },
    { number: "98%", label: "Taux de satisfaction" },
    { number: "+15 ans", label: "d'expertise des équipes" }
  ];

  const services = [
    {
      icon: Briefcase,
      title: "Droit des affaires",
      description: "Création d'entreprise, contrats, litiges"
    },
    {
      icon: Users,
      title: "Droit du travail",
      description: "Licenciement, salaires, conflits"
    },
    {
      icon: Scale,
      title: "Droit général ou litiges judiciaires",
      description: "Accompagnement juridique devant les tribunaux, soutien juridique personnalisé"
    },
    {
      icon: Home,
      title: "Droit immobilier",
      description: "Baux, litiges propriétaires/locataires"
    },
    {
      icon: FileText,
      title: "Rédaction et vérification",
      description: "Documents juridiques"
    },
    {
      icon: Users,
      title: "Droit de la famille",
      description: "Divorce, garde d'enfants, succession"
    },
    {
      icon: Building,
      title: "Droit administratif",
      description: "Recours, permis, autorisations"
    },
    {
      icon: Lightbulb,
      title: "Propriété intellectuelle",
      description: "Marques, brevets, droits d'auteur"
    }
  ];

  const faqs = [
    {
      question: "Combien coûte une consultation ?",
      answer: "Nous proposons des tarifs adaptés à votre situation pour évaluer votre besoin."
    },
    {
      question: "Vos services sont-ils confidentiels ?",
      answer: "Toutes nos consultations sont 100% privées et sécurisées."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <FrenchNavigation />
      {/* Hero Section with Form */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Besoin d'un Avocat ou d'un Juriste Fiable ?
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Obtenez une Consultation Juridique Rapide et Confidentielle !
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Notre équipe d'avocats et de juristes vous accompagne en droit des affaires, droit du travail, droit général ou litiges judiciaires et plus encore.
                </p>
                <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-primary/10 p-4 rounded-lg">
                  <div>
                    <p className="text-2xl font-bold text-primary">Consultations juridiques dès 299 dhs/HT</p>
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
                    <span className="text-muted-foreground">100% confidentiel et sécurisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-muted-foreground">Avocats & juristes expérimentés</span>
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
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      required
                      className="h-12"
                    />
                    <Input
                      placeholder="Votre Prénom"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      required
                      className="h-12"
                    />
                    <Input
                      type="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                    <Input
                      type="tel"
                      placeholder="Votre téléphone"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Commencer Maintenant"}
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
            Vous êtes confronté à :
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-lg font-medium">Un litige juridique ?</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-lg font-medium">Besoin d'un contrat rédigé par un expert ?</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <p className="text-lg font-medium">Un problème avec votre employeur ou votre locataire ?</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Comment Houkouki.com résout vos problèmes :
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-xl">Accès rapide à des avocats spécialisés</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-xl">Conseils clairs et précis pour défendre vos droits</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-xl">Des honoraires transparents et adaptés à votre budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ce que disent nos clients
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
                        Client vérifié
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
            Nos Services
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
            Questions Fréquentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
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
            Ne restez pas seul face à votre problème juridique !
          </h2>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Obtenir une Consultation
          </Button>
          <p className="text-muted-foreground mt-6 text-lg">
            Parlez à un expert maintenant
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LpConsultation;
