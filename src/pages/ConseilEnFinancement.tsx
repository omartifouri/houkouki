import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Building2, FileText, BarChart3, RefreshCw, Home, Users, Handshake } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";

const ConseilEnFinancement = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: `${formData.prenom} ${formData.nom}`,
          email: formData.email,
          phone: formData.telephone,
          message: "Demande de consultation - Conseil en financement",
          source: "conseil-financement",
        },
      ]);

      if (error) throw error;

      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons rapidement.",
      });

      setFormData({ nom: "", prenom: "", email: "", telephone: "" });
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

  const services = [
    {
      icon: Building2,
      title: "Montage et instruction des dossiers de crédits entreprises",
      description: "Nous vous guidons dans la constitution de vos dossiers pour maximiser vos chances d'obtention d'accord.",
    },
    {
      icon: FileText,
      title: "Réalisation de business plan pour crédits d'investissement",
      description: "Nous vous aidons à construire un business plan solide, adapté aux exigences des institutions financières et surtout réaliste.",
    },
    {
      icon: BarChart3,
      title: "Analyse de la liasse fiscale et recommandations de corrections",
      description: "Notre expertise permet d'identifier les points de blocage potentiels et de proposer des ajustements pertinents pour une meilleure présentation financière.",
    },
    {
      icon: RefreshCw,
      title: "Renouvellement et extension des autorisations",
      description: "Un accompagnement complet pour éviter tout blocage lors du renouvellement voir extension des lignes.",
    },
    {
      icon: Home,
      title: "Montage des dossiers de financement dans le secteur de la promotion immobilière",
      description: "Une expertise spécifique dédiée aux opérateurs de ce secteur particulier et exigeant.",
    },
    {
      icon: Users,
      title: "Identification de solutions de cofinancement",
      description: "Nous vous orientons vers les options les plus pertinentes selon votre profil et vos garanties.",
    },
    {
      icon: Handshake,
      title: "Assistance aux réunions bancaires",
      description: "Nous vous accompagnons lors de vos échanges avec les banques pour défendre vos intérêts et sécuriser vos négociations.",
    },
  ];

  const benefits = [
    "Optimiser leurs chances d'accès au financement.",
    "Booster leur développement.",
    "S'appuyer sur une expertise pluridisciplinaire portée par un groupe solide.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <FrenchNavigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Conseil en financement
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Conseil en financement et accompagnement stratégique pour les entreprises
            </p>
          </div>
        </div>
      </section>

      {/* Présentation Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Présentation entreprise
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chez Houkouki, nous accompagnons les entreprises dans toutes les étapes clés de leur croissance, 
              en mettant à leur disposition une expertise pointue en matière de montage financier, d'analyse 
              bilancielle et de stratégie de financement. Cette nouvelle prestation s'adresse aux TPE et PME 
              souhaitant structurer efficacement leurs démarches auprès des établissements bancaires et des 
              organismes de financement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
              Nos services
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Nous vous proposons un accompagnement sur-mesure autour des axes suivants
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
              TPE, PME, quel que soit votre secteur d'activité,
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              vous souhaitez bénéficier d'un accompagnement structuré pour
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
              Nos tarifs
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Chez Houkouki, nous vous offrons un accompagnement professionnel avec une tarification claire et transparente :
            </p>
            
            <Card className="max-w-2xl mx-auto border-primary/20 shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-4xl font-bold text-primary mb-2">
                  400 DH HT / heure
                </CardTitle>
                <CardDescription className="text-base">
                  avec un minimum de 350 DH HT
                </CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  (si la consultation ne dure que 15 minutes, le tarif appliqué sera de 350 DH HT)
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="text-center font-semibold text-foreground">
                    Sélectionnez votre pack :
                  </p>
                  <p className="text-center text-lg mt-2 text-foreground">
                    Consultation de 1 heure - 400 DH HT
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl mb-2">
                  Vous souhaitez en savoir plus ou discuter de votre projet ?
                </CardTitle>
                <CardDescription className="text-lg">
                  Contactez-nous dès aujourd'hui et discutez avec nos experts !
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Votre prénom"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      required
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Votre téléphone"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Contactez-nous"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConseilEnFinancement;
