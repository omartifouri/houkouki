import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Building2, Heart, Calculator, CheckCircle } from "lucide-react";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
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
        "Accompagnement en cas de contrôle ou litige",
        "Des prestations supplémentaires à un tarif préférentiel de 325 DH / HT réservé aux abonnés"
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
      const price = hours * 400;
      setCalculatedPrice(price);
    } else {
      setCalculatedPrice(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos tarifs</h1>
          <h2 className="text-2xl text-red-600 mb-8">Une tarification simple, claire et adaptée à vos besoins</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez Houkouki, nous croyons que l'accès au droit ne doit pas être un luxe.
            C'est pourquoi nous vous proposons deux formules tarifaires, selon la nature et la fréquence de vos besoins.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Introduction aux formules */}
          <section>
            <Card className="border-2 border-red-200">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Formule d'abonnement</p>
                      <p className="text-gray-700">Pour un accompagnement régulier</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Prestations à la carte</p>
                      <p className="text-gray-700">Sans engagement, pour un besoin ponctuel</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-6 text-center">
                  Chaque formule vous donne accès à un accompagnement juridique personnalisé, à distance, dans le respect total de la confidentialité.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Abonnement annuel */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Abonnement annuel</h2>
            <p className="text-gray-600 text-center mb-12">
              L'option idéale pour les particuliers, professionnels ou entreprises qui souhaitent un suivi juridique complet tout au long de l'année.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {pricingPlans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <Card 
                    key={index} 
                    className={`border-2 border-red-200 relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                      plan.popular 
                        ? 'ring-2 ring-red-500 shadow-xl scale-105 bg-gradient-to-br from-red-50 to-orange-50' 
                        : 'hover:scale-102 bg-white'
                    }`}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        plan.popular ? 'bg-red-500 text-white' : 'bg-red-600 text-white'
                      }`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-red-800 mb-2">
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
                            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
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
                        
                        <Button className="w-full bg-[#C0997A] hover:bg-[#B8926F] text-white font-semibold py-3">
                          {plan.buttonText}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

          </section>

          {/* Formule Entreprise + Social */}
          <section>
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 text-white flex items-center justify-center">
                  <Heart className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-red-800 mb-2">
                  Formule Entreprise + Social
                </CardTitle>
                <p className="text-gray-700">
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
                        <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
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
                        <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <div className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="bg-[#C0997A] hover:bg-[#B8926F] text-white font-semibold py-3">
                    Demander un devis sur mesure
                  </Button>
                  <Button variant="outline" className="border-[#C0997A] text-[#C0997A] hover:bg-[#C0997A] hover:text-white font-semibold py-3">
                    Contacter notre équipe entreprise
                  </Button>
                </div>
              </div>
            </Card>
          </section>

          {/* Prestations à la carte */}
          <section>
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Prestations à la carte</h2>
            <p className="text-xl text-gray-600 mb-2 text-center">Payez uniquement ce dont vous avez besoin</p>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center">
              Une solution flexible pour celles et ceux qui ont un besoin ponctuel, sans engagement.
              Nos prestations à la carte sont tarifées en fonction du nombre d'heures nécessaires au tarif de <strong>400 DH HT / heure</strong>.
            </p>

            {/* Tableau des prestations */}
            <Card className="border-2 border-red-200 mb-12">
              <CardHeader>
                <CardTitle className="text-xl text-center text-red-800">Exemples de prestations courantes</CardTitle>
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
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 text-white flex items-center justify-center">
                  <Calculator className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-red-800 mb-2">
                  Simuler mon besoin
                </CardTitle>
                <p className="text-gray-700">
                  Estimez le coût de votre prestation en fonction du nombre d'heures nécessaires
                </p>
              </CardHeader>
              
              <CardContent className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="service-select" className="text-gray-700 font-medium">
                      Type de prestation
                    </Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choisissez une prestation" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.name}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="hours-input" className="text-gray-700 font-medium">
                      Nombre d'heures estimées
                    </Label>
                    <Input
                      id="hours-input"
                      type="number"
                      placeholder="Ex: 3"
                      value={estimatedHours}
                      onChange={(e) => setEstimatedHours(e.target.value)}
                      className="mt-2"
                      min="0"
                      step="0.5"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <Button onClick={calculatePrice} className="bg-[#C0997A] hover:bg-[#B8926F] text-white px-8 py-3 mb-6">
                    Calculer le prix
                  </Button>
                  
                  {calculatedPrice > 0 && (
                    <div className="bg-white p-6 rounded-lg border border-red-200">
                      <p className="text-gray-700 mb-2">Prix estimé :</p>
                      <p className="text-4xl font-bold text-red-600 mb-2">{calculatedPrice} DH</p>
                      <p className="text-gray-600 text-sm">HT • TVA 20% en sus</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Note importante */}
          <section>
            <Card className="border-2 border-red-200">
              <CardContent className="pt-6 text-center">
                <p className="text-gray-700 mb-4">
                  <strong>*</strong> Consultations illimitées dans le cadre d'un usage raisonnable et de bonne foi.
                </p>
                <p className="text-gray-700 text-sm">
                  Les tarifs sont exprimés en dirhams marocains (MAD). TVA applicable selon la réglementation en vigueur.
                  Les prestations sont réalisées par des juristes qualifiés, membres de l'équipe Houkouki.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
      
      <Footer />
      <CareerSupportPopup />
    </div>
  );
};

export default FrTarifs;