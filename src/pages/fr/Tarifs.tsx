import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, Building2, Heart, Check, Calculator, FileText, Phone } from "lucide-react";
import FrenchNavigation from "@/components/FrenchNavigation";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { useState } from "react";

const FrTarifs = () => {
  const [selectedService, setSelectedService] = useState("");
  const [estimatedHours, setEstimatedHours] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const services = [
    { name: "Consultation juridique simple", hours: "1-2h", description: "Conseil juridique ponctuel par téléphone ou visioconférence" },
    { name: "Lecture et analyse d'un document juridique", hours: "2-4h", description: "Analyse complète d'un contrat, courrier ou acte" },
    { name: "Rédaction de courrier ou contrat", hours: "3-6h", description: "Rédaction personnalisée selon votre situation" },
    { name: "Démarche administrative accompagnée", hours: "2-5h", description: "Assistance pour vos démarches officielles" },
    { name: "Mise en demeure ou recours amiable", hours: "4-8h", description: "Procédure de recouvrement ou résolution amiable" },
    { name: "Préparation d'un recours judiciaire", hours: "8-15h", description: "Constitution et préparation de votre dossier" }
  ];

  const detailedServices = [
    {
      title: "Consultations juridiques illimitées",
      description: "Posez toutes vos questions juridiques par téléphone ou visioconférence, sans limite de volume, dans le respect de votre vie privée."
    },
    {
      title: "Lecture et analyse de documents juridiques", 
      description: "Nous relisons et analysons vos contrats, courriers, notifications ou décisions pour vous alerter sur les points sensibles."
    },
    {
      title: "Assistance à la rédaction",
      description: "Lettre de contestation, mise en demeure, courrier officiel, réponse à l'administration… Rédigé par nos juristes, selon votre cas."
    },
    {
      title: "Conseil en cas de litige ou précontentieux",
      description: "Nous vous accompagnons pour évaluer vos options avant d'aller en justice, ou pour résoudre un conflit à l'amiable."
    },
    {
      title: "Application mobile & guides",
      description: "Accès illimité à vos documents, vos consultations passées, et une bibliothèque de fiches juridiques pratiques et jurisprudence."
    },
    {
      title: "Suivi par un conseiller référent",
      description: "Vous bénéficiez d'un interlocuteur privilégié qui suit votre dossier dans la durée."
    },
    {
      title: "Audit de contrats et documents RH",
      description: "Analyse de vos contrats de travail, conventions, politiques internes, pour sécuriser vos pratiques."
    },
    {
      title: "Sécurisation des procédures RH",
      description: "Assistance sur les licenciements, avertissements, sanctions, ruptures conventionnelles, etc."
    },
    {
      title: "Rédaction de CGV ou d'actes juridiques",
      description: "Conditions générales, pactes d'associés, statuts, contrats types… Rédigés à vos couleurs, selon votre activité."
    },
    {
      title: "Accompagnement en cas de contrôle",
      description: "Conseil stratégique et formalisation de vos réponses en cas de litige avec l'administration ou inspection."
    },
    {
      title: "Suivi prioritaire",
      description: "Vos demandes sont traitées en priorité, avec une disponibilité élargie."
    },
    {
      title: "Réunions de cadrage juridique",
      description: "Sessions régulières ou ponctuelles pour identifier les risques, valider vos pratiques ou répondre aux questions de vos équipes."
    },
    {
      title: "Politique de gestion des risques",
      description: "Construction d'un plan de couverture juridique adapté à votre structure."
    },
    {
      title: "Formations internes",
      description: "Sensibilisation juridique, obligations RH, cybersécurité juridique… Organisé sur demande dans votre entreprise."
    }
  ];

  const pricingPlans = [
    {
      title: "PARTICULIER",
      icon: Clock,
      subtitle: "Un recours amiable ou une coordination d'un recours judiciaire gratuit / an",
      features: [
        "Consultations juridiques illimitées*",
        "Lecture et analyse de documents juridiques", 
        "Assistance à la rédaction de courriers",
        "Conseil en cas de litige ou précontentieux",
        "Accès à l'application mobile et guides juridiques",
        "Suivi par un conseiller référent"
      ],
      price: "3000",
      currency: "MAD TTC",
      buttonText: "SOUSCRIRE",
      popular: false
    },
    {
      title: "1 - 50 EMPLOYÉS",
      icon: Users,
      subtitle: "Un recours amiable ou une coordination d'un recours judiciaire gratuit / an",
      features: [
        "Consultations juridiques illimitées*",
        "Lecture et analyse de documents juridiques",
        "Assistance à la rédaction de courriers", 
        "Conseil en cas de litige ou précontentieux",
        "Accès à l'application mobile et guides juridiques",
        "Suivi par un conseiller référent",
        "Audit de contrats et documents RH",
        "Sécurisation des procédures RH",
        "Rédaction de CGV ou d'actes juridiques",
        "Accompagnement en cas de contrôle ou litige"
      ],
      price: "6500",
      currency: "MAD TTC", 
      buttonText: "COMMANDER",
      popular: true
    },
    {
      title: "AU DELÀ DE 50 EMPLOYÉS",
      icon: Building2,
      subtitle: "Un recours amiable ou une coordination d'un recours judiciaire gratuit / an",
      features: [
        "Consultations juridiques illimitées*",
        "Lecture et analyse de documents juridiques",
        "Assistance à la rédaction de courriers",
        "Conseil en cas de litige ou précontentieux", 
        "Accès à l'application mobile et guides juridiques",
        "Suivi par un conseiller référent",
        "Audit de contrats et documents RH",
        "Sécurisation des procédures RH",
        "Rédaction de CGV ou d'actes juridiques",
        "Suivi prioritaire et dédié",
        "Réunions de cadrage juridiques sur-mesure",
        "Politique de gestion des risques juridiques"
      ],
      price: "Sur devis",
      currency: "",
      buttonText: "COMMANDER", 
      popular: false
    }
  ];

  const calculatePrice = () => {
    const hours = parseFloat(estimatedHours);
    if (hours && hours > 0) {
      const price = hours * 325;
      setCalculatedPrice(price);
    } else {
      setCalculatedPrice(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Nos tarifs</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Une tarification simple, claire et adaptée à vos besoins
          </p>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-4">
            <p>
              Chez Houkouki, nous croyons que l'accès au droit ne doit pas être un luxe.
              C'est pourquoi nous vous proposons deux formules tarifaires, selon la nature et la fréquence de vos besoins :
            </p>
            <ul className="text-left list-disc list-inside space-y-2 max-w-2xl mx-auto">
              <li>Une formule d'abonnement pour un accompagnement régulier</li>
              <li>Des prestations à la carte, sans engagement, pour un besoin ponctuel</li>
            </ul>
            <p>
              Chaque formule vous donne accès à un accompagnement juridique personnalisé, à distance, dans le respect total de la confidentialité.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Abonnement annuel</h2>
          <p className="text-gray-600 text-center mb-12">
            L'option idéale pour les particuliers, professionnels ou entreprises qui souhaitent un suivi juridique complet tout au long de l'année.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'ring-2 ring-red-500 shadow-xl scale-105 bg-gradient-to-br from-red-50 to-orange-50' 
                    : 'hover:scale-102 bg-white'
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {plan.subtitle}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-6 border-t border-gray-200">
                    <div className="mb-6">
                      <div className={`text-4xl font-bold ${plan.popular ? 'text-red-600' : 'text-gray-900'}`}>
                        {plan.price}
                      </div>
                      {plan.currency && (
                        <div className="text-gray-600 text-sm mt-1">{plan.currency}</div>
                      )}
                    </div>
                    
                    <Button 
                      className={`w-full font-semibold py-3 ${
                        plan.popular 
                          ? 'bg-red-500 hover:bg-red-600 text-white' 
                          : 'bg-red-500 hover:bg-red-600 text-white'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Formule Entreprise + Social */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500 text-white flex items-center justify-center">
                <Heart className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Formule Entreprise + Social
              </CardTitle>
              <p className="text-gray-600">
                Pour les entreprises souhaitant offrir à la fois un accompagnement juridique complet à leur structure 
                et un dispositif de soutien juridique et social à leurs salariés.
              </p>
              <div className="text-3xl font-bold text-red-600 mt-4">Sur devis</div>
            </CardHeader>
            
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Prestations incluses pour l'entreprise :</h4>
                <div className="space-y-2">
                  {[
                    "Consultations juridiques illimitées sur toutes les problématiques",
                    "Audit et sécurisation de documents RH et commerciaux", 
                    "Rédaction de CGV, contrats types, lettres officielles",
                    "Assistance en cas de contrôle ou contentieux administratif",
                    "Accès à l'espace entreprise sur l'application Houkouki"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Prestations dédiées aux salariés :</h4>
                <div className="space-y-2">
                  {[
                    "Accès direct à un juriste pour questions personnelles",
                    "Aide à la lecture de documents et rédaction",
                    "Orientation et soutien en cas de précarité",
                    "Conseil en financement",
                    "Confidentialité absolue, sans retour à l'employeur",
                    "Canal dédié (téléphone ou digital)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            
            <div className="px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3">
                  Demander un devis sur mesure
                </Button>
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 font-semibold py-3">
                  Contacter notre équipe entreprise
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Section Prestations à la carte */}
        <div className="mt-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prestations à la carte</h2>
            <p className="text-xl text-gray-600 mb-2">Payez uniquement ce dont vous avez besoin</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une solution flexible pour celles et ceux qui ont un besoin ponctuel, sans engagement.
              Nos prestations à la carte sont tarifées en fonction du nombre d'heures nécessaires au tarif de <strong>325 DH HT / heure</strong>.
            </p>
          </div>

          {/* Tableau des prestations */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-xl text-center">Exemples de prestations courantes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Prestation</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Durée estimée</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900">{service.name}</td>
                        <td className="py-4 px-4 text-center text-red-600 font-medium">{service.hours}</td>
                        <td className="py-4 px-4 text-gray-600">{service.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Simulateur de tarif */}
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 mb-12">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500 text-white flex items-center justify-center">
                <Calculator className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Simuler mon besoin
              </CardTitle>
              <p className="text-gray-600">
                Estimez le coût de votre prestation en fonction du nombre d'heures nécessaires
              </p>
            </CardHeader>
            
            <CardContent className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="service-select" className="text-sm font-medium text-gray-700">
                      Type de prestation
                    </Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger id="service-select" className="mt-1">
                        <SelectValue placeholder="Choisir une prestation" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.name}>
                            {service.name}
                          </SelectItem>
                        ))}
                        <SelectItem value="autre">Autre prestation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="hours-input" className="text-sm font-medium text-gray-700">
                      Nombre d'heures estimées
                    </Label>
                    <Input
                      id="hours-input"
                      type="number"
                      step="0.5"
                      min="0.5"
                      placeholder="Ex: 2.5"
                      value={estimatedHours}
                      onChange={(e) => setEstimatedHours(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    onClick={calculatePrice}
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                    disabled={!estimatedHours}
                  >
                    Calculer le tarif
                  </Button>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center p-6 bg-white rounded-lg border-2 border-red-200 w-full">
                    <div className="text-sm text-gray-600 mb-2">Tarif estimé</div>
                    <div className="text-3xl font-bold text-red-600 mb-1">
                      {calculatedPrice > 0 ? `${calculatedPrice} DH` : '---'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {calculatedPrice > 0 && `(${estimatedHours}h × 325 DH HT)`}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      * Hors taxes
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    Choisir une prestation
                  </Button>
                  <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                    Demander un devis personnalisé
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Pour les cas complexes ou les situations hors grille, un devis personnalisé vous est proposé avant toute intervention.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Détail des prestations */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Détail des prestations
              </CardTitle>
              <p className="text-gray-600">
                Découvrez en détail toutes nos prestations juridiques
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {detailedServices.map((service, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section détail des prestations */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Détail des prestations
              </CardTitle>
              <p className="text-gray-600">
                Découvrez en détail toutes nos prestations et services inclus dans nos formules
              </p>
            </CardHeader>
            
            <CardContent>
              <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="consultations" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">📞</span>
                      <span className="font-semibold text-gray-900">Consultations juridiques illimitées</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Posez toutes vos questions juridiques par téléphone ou visioconférence, sans limite de volume, dans le respect de votre vie privée.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="lecture" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">📄</span>
                      <span className="font-semibold text-gray-900">Lecture et analyse de documents juridiques</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Nous relisons et analysons vos contrats, courriers, notifications ou décisions pour vous alerter sur les points sensibles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="redaction" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">✍️</span>
                      <span className="font-semibold text-gray-900">Assistance à la rédaction</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Lettre de contestation, mise en demeure, courrier officiel, réponse à l'administration… Rédigé par nos juristes, selon votre cas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="litige" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">⚖️</span>
                      <span className="font-semibold text-gray-900">Conseil en cas de litige ou précontentieux</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Nous vous accompagnons pour évaluer vos options avant d'aller en justice, ou pour résoudre un conflit à l'amiable.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="appli" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">📲</span>
                      <span className="font-semibold text-gray-900">Application mobile & guides</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Accès illimité à vos documents, vos consultations passées, et une bibliothèque de fiches juridiques pratiques.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="suivi" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">🧾</span>
                      <span className="font-semibold text-gray-900">Suivi par un conseiller référent</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Vous bénéficiez d'un interlocuteur privilégié qui suit votre dossier dans la durée.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="audit-contrats" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">📋</span>
                      <span className="font-semibold text-gray-900">Audit de contrats et documents RH</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Analyse de vos contrats de travail, conventions, politiques internes, pour sécuriser vos pratiques.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rh" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">🧑‍⚖️</span>
                      <span className="font-semibold text-gray-900">Sécurisation des procédures RH</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Assistance sur les licenciements, avertissements, sanctions, ruptures conventionnelles, etc.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cgv" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">📂</span>
                      <span className="font-semibold text-gray-900">Rédaction de CGV ou d'actes juridiques</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Conditions générales, pactes d'associés, statuts, contrats types… Rédigés à vos couleurs, selon votre activité.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="controle" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">📞</span>
                      <span className="font-semibold text-gray-900">Accompagnement en cas de contrôle</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Conseil stratégique et formalisation de vos réponses en cas de litige avec l'administration ou inspection.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="priorite" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">🧩</span>
                      <span className="font-semibold text-gray-900">Suivi prioritaire</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Vos demandes sont traitées en priorité, avec une disponibilité élargie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cadrage" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">👥</span>
                      <span className="font-semibold text-gray-900">Réunions de cadrage juridiques</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Sessions régulières ou ponctuelles pour identifier les risques, valider vos pratiques ou répondre aux questions de vos équipes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="risques" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">🔐</span>
                      <span className="font-semibold text-gray-900">Politique de gestion des risques</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Construction d'un plan de couverture juridique adapté à votre structure.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="formation" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex items-center gap-3">
                      <span className="text-xl">📝</span>
                      <span className="font-semibold text-gray-900">Formations internes</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    Sensibilisation juridique, obligations RH, cybersécurité juridique… Organisé sur demande dans votre entreprise.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Section contact final */}
          <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-red-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Une question ? Un doute sur la formule adaptée ?
            </h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Prendre rendez-vous
              </Button>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                Demander un devis
              </Button>
              <Button variant="outline" className="border-gray-400 text-gray-600 hover:bg-gray-50">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <CareerSupportPopup />
    </div>
  );
};

export default FrTarifs;