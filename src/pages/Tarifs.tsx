import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, Building2, CheckCircle, FileText, MessageSquare, HelpCircle, ArrowRight, AlertCircle, Info } from "lucide-react";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const FrTarifs = () => {
  const particulierFeatures = [
    "Consultations juridiques illimitées*, par téléphone, email ou chat",
    "Lecture et explication de documents courants",
    "Assistance et rédaction de courriers juridiques standards\n(réclamations, mises en demeure simples, contestations, relances)",
    "Conseil en cas de litige ou de situation pré contentieuse",
    "Recours amiables lorsque cela est possible",
    "Coordination d'un recours judiciaire avec l'avocat du client\n(1 dossier par an)",
    "Accès à l'application mobile et aux guides juridiques",
    "Suivi par un conseiller référent"
  ];

  const entreprisePetiteFeatures = [
    "Consultations juridiques illimitées*, par téléphone, email ou chat",
    "Analyse, lecture et explication de documents courants",
    "Assistance et rédaction de courriers juridiques standards",
    "Conseil en cas de litige ou de situation pré contentieuse",
    "Recours amiables",
    "Coordination d'un recours judiciaire avec l'avocat du client\n(1 dossier par an)",
    "Accès à l'application mobile et aux guides juridiques",
    "Suivi par un conseiller référent"
  ];

  const entrepriseGrandeFeatures = [
    "Consultations juridiques illimitées*, par téléphone, email ou chat",
    "Analyse et relecture de documents courants",
    "Assistance et rédaction de courriers juridiques standards",
    "Conseil en cas de litige ou de situation pré contentieuse",
    "Recours amiables",
    "Coordination de procédures judiciaires avec les avocats concernés\n(jusqu'à 2 dossiers par an – ajustable selon les besoins)",
    "Accès à l'application mobile et aux guides juridiques",
    "Suivi par un conseiller référent"
  ];

  const prestationsExemples = [
    "Consultation juridique ponctuelle",
    "Analyse ou relecture de document",
    "Rédaction de courrier spécifique",
    "Accompagnement précontentieux",
    "Recours amiables",
    "Médiation"
  ];

  const faqItems = [
    {
      question: "Y a-t-il des frais cachés ?",
      answer: "Non. Tout est présenté et validé à l'avance."
    },
    {
      question: "Suis-je obligé(e) d'accepter un devis complémentaire ?",
      answer: "Non. Vous restez libre de votre décision."
    },
    {
      question: "Puis-je commencer sans abonnement ?",
      answer: "Oui, via une prestation à la carte ou une première consultation."
    }
  ];

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        {/* Prestation Découverte */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="border-2 border-red-400 bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl">
            <CardContent className="py-10 text-center space-y-4">
              <MessageSquare className="w-10 h-10 mx-auto opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold">Prestation Découverte</h2>
              <p className="text-lg opacity-90 max-w-xl mx-auto">
                Une première consultation juridique pour comprendre votre situation et identifier vos options.
              </p>
              <div className="pt-4">
                <p className="text-4xl font-bold">600 <span className="text-xl font-normal opacity-80">DH HT</span></p>
                <p className="text-lg mt-1 opacity-90">soit <span className="font-semibold">720 DH TTC</span></p>
              </div>
              <Button size="lg" className="mt-4 bg-white text-red-700 hover:bg-gray-100 font-semibold" asChild>
                <Link to="/fr/contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tarifs Houkouki</h1>
          <h2 className="text-2xl md:text-3xl text-red-600 mb-8 font-semibold">Une tarification claire, sans surprise</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Chez Houkouki, l'accompagnement juridique ne doit jamais être une source d'incertitude supplémentaire.
              <br />
              Notre tarification est conçue pour vous offrir <strong>clarté, accessibilité et maîtrise</strong>, que vous soyez un particulier ou une entreprise.
            </p>
            
            <Card className="border-2 border-red-200 bg-white/80">
              <CardContent className="pt-6">
                <p className="font-semibold text-gray-900 mb-4">Avant toute action :</p>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">vous savez ce qui est inclus,</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">vous êtes informé(e) lorsqu'un devis est nécessaire,</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">aucune prestation n'est engagée sans votre accord préalable.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {/* Section Abonnements */}
          <section id="abonnements">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-red-800 mb-4">Nos abonnements juridiques annuels</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Les abonnements Houkouki constituent le socle principal de notre accompagnement.
                Ils permettent de poser vos questions sans hésiter, d'anticiper les risques et de privilégier les solutions amiables avant que les situations ne se dégradent.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Particulier */}
              <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-red-600 text-white">
                    <Clock className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-red-800 mb-2">PARTICULIER</CardTitle>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    Pour protéger vos droits et sécuriser votre quotidien juridique
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Cette formule s'adresse aux particuliers qui souhaitent comprendre leur situation juridique, être accompagnés dans leurs démarches et agir avec méthode face aux difficultés de la vie courante (famille, logement, contrats, patrimoine, relations professionnelles ou personnelles).
                  </p>
                  
                  <div>
                    <p className="font-semibold text-gray-800 mb-3">Inclus dans l'abonnement</p>
                    <div className="space-y-2">
                      {particulierFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700 whitespace-pre-line">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-sm text-gray-700">
                    <p>Pour toutes les autres prestations personnalisées : <strong>600 DH HT/heure</strong></p>
                  </div>

                  <div className="text-center pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Abonnement annuel</p>
                    <p className="text-3xl font-bold text-red-600">3000 <span className="text-lg font-normal text-gray-600">MAD TTC / an</span></p>
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/souscription?plan=particulier">SOUSCRIRE</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Entreprise Petite Structure */}
              <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300 bg-white ring-2 ring-red-500 shadow-lg flex flex-col">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-red-500 text-white">
                    <Users className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-red-800 mb-2">ENTREPRISE – PETITE STRUCTURE</CardTitle>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    Pour sécuriser votre activité sans alourdir votre organisation
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Cette formule est destinée aux indépendants, TPE et PME qui ont besoin d'un appui juridique régulier pour sécuriser leurs décisions, leurs contrats et leurs relations professionnelles, sans disposer d'un service juridique interne.
                  </p>
                  
                  <div>
                    <p className="font-semibold text-gray-800 mb-3">Inclus dans l'abonnement</p>
                    <div className="space-y-2">
                      {entreprisePetiteFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700 whitespace-pre-line">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-sm text-gray-700">
                    <p>Pour toutes les autres prestations personnalisées : <strong>600 DH HT/heure</strong></p>
                  </div>

                  <div className="text-center pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Abonnement annuel</p>
                    <p className="text-3xl font-bold text-red-600">7200 <span className="text-lg font-normal text-gray-600">MAD TTC / an</span></p>
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/souscription?plan=entreprise">SOUSCRIRE</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Entreprise Plus de 50 salariés */}
              <Card className="border-2 border-red-200 hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-red-600 text-white">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-red-800 mb-2">ENTREPRISE – PLUS DE 50 SALARIÉS</CardTitle>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    Pour structurer et coordonner votre accompagnement juridique
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Cette formule s'adresse aux entreprises confrontées à des problématiques juridiques récurrentes ou transversales, nécessitant un suivi dans la durée et une coordination entre différents intervenants.
                  </p>
                  
                  <div>
                    <p className="font-semibold text-gray-800 mb-3">Inclus dans l'abonnement</p>
                    <div className="space-y-2">
                      {entrepriseGrandeFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700 whitespace-pre-line">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-sm text-gray-700">
                    <p>Pour toutes les autres prestations personnalisées : <strong>600 DH HT/heure</strong></p>
                  </div>

                  <div className="text-center pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Abonnement annuel</p>
                    <p className="text-3xl font-bold text-red-600">18 000 <span className="text-lg font-normal text-gray-600">MAD TTC / an</span></p>
                    <p className="text-xs text-gray-500 mt-1">(modalités ajustables selon la taille et les besoins spécifiques de l'entreprise)</p>
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/souscription?plan=grande-entreprise">SOUSCRIRE</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Note consultations illimitées */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">* Consultations illimitées</span> : Dans le cadre d'un usage normal, hors dossiers nécessitant un traitement approfondi ou une intervention spécifique faisant l'objet d'un devis complémentaire.
              </p>
            </div>
          </section>

          {/* Ce que couvre l'abonnement */}
          <section>
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-800 text-center">Ce que couvre l'abonnement Houkouki</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-center">L'abonnement permet de :</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {[
                    "poser vos questions sans attendre une urgence,",
                    "comprendre vos droits et obligations,",
                    "anticiper les risques juridiques,",
                    "privilégier les solutions amiables,",
                    "être accompagné(e) avec méthode et continuité."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-start space-x-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="font-semibold text-amber-800">Important</p>
                    </div>
                    <p className="text-sm text-amber-700">
                      Houkouki ne représente pas ses clients devant les juridictions.
                      Nous intervenons en amont, en coordination avec l'avocat du client, et privilégions la médiation et les recours amiables chaque fois que cela est possible.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-2 mb-2">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="font-semibold text-blue-800">À noter</p>
                    </div>
                    <p className="text-sm text-blue-700">
                      Dans le cadre des démarches amiables (mises en demeure, relances, notifications), les frais de timbres, d'huissier ou de tiers intervenants restent à la charge du client. Ces frais font l'objet d'une information préalable et sont engagés uniquement avec l'accord du client.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Prestations à la carte */}
          <section id="prestations-carte">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-red-800 mb-4">Prestations à la carte</h2>
              <p className="text-lg text-gray-600">(en complément ou en première approche)</p>
            </div>
            
            <Card className="border-2 border-red-200">
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Vous pouvez avoir besoin d'une aide juridique ponctuelle, sans engagement annuel.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Les prestations à la carte permettent de répondre à un besoin précis ou urgent,
                  ou de faire une première démarche avant de choisir un abonnement.
                </p>
                
                <div className="mt-8">
                  <p className="font-semibold text-gray-800 mb-4">Exemples de prestations ponctuelles</p>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {prestationsExemples.map((prestation, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                        <FileText className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{prestation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start space-x-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="font-semibold text-amber-800">Tarif consultation ponctuelle (sans abonnement)</p>
                  </div>
                  <p className="text-sm text-gray-700 pl-7">
                    Si aucun abonnement n'est souscrit, la consultation juridique est facturée <strong>800 DH HT</strong>, soit <strong>920 DH TTC</strong>.
                  </p>
                </div>
                
                <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="font-semibold text-red-800 mb-2">Modalités de facturation</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Les prestations à la carte font l'objet d'un devis préalable, établi en fonction de la nature et de la complexité du dossier.
                    Aucune prestation n'est engagée sans validation expresse du devis par le client.
                  </p>
                  <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                    Lorsque les besoins deviennent récurrents, l'abonnement juridique reste la solution la plus adaptée pour maîtriser votre budget et bénéficier d'un accompagnement continu.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section id="faq">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-red-800 mb-4">Questions fréquentes</h2>
            </div>
            
            <Card className="border-2 border-red-200 max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center space-x-3">
                          <HelpCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                          <span>{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pl-8">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* CTA Final - Première consultation */}
          <section className="text-center">
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-600 to-red-700 text-white">
              <CardContent className="py-12">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Vous hésitez ? Commencez simplement</h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Vous pouvez commencer par une première consultation, afin de comprendre votre situation et décider ensuite, en toute liberté.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-red-200 bg-white mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-800">Première consultation juridique</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  La première consultation permet de comprendre votre situation, d'obtenir un premier avis juridique et d'identifier les options possibles.
                </p>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Elle constitue un acte juridique à part entière, réalisé par un juriste, et fait l'objet d'une facturation transparente.
                </p>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Cette consultation est sans engagement pour la suite : vous restez libre de décider si vous souhaitez poursuivre via une prestation ponctuelle ou un abonnement juridique.
                </p>
                
                <div className="py-6 border-t border-b border-gray-200">
                  <p className="text-4xl font-bold text-red-600">720 <span className="text-xl font-normal text-gray-600">DH TTC</span></p>
                </div>
                
                <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                  Cette consultation est sans engagement pour la suite. Vous restez libre de décider si vous souhaitez poursuivre via une prestation ponctuelle ou un abonnement juridique. Si vous choisissez ensuite un abonnement juridique, la consultation peut être prise en compte dans certaines conditions.
                </p>
                
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                  <Link to="/fr/contact">
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Footer tagline */}
          <section className="text-center py-8">
            <p className="text-xl text-gray-700 font-medium">Houkouki</p>
            <p className="text-gray-600">Rendre le droit accessible, humain et actionnable.</p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FrTarifs;
