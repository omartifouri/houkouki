import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Building2, Heart, Check } from "lucide-react";
import FrenchNavigation from "@/components/FrenchNavigation";
import CareerSupportPopup from "@/components/CareerSupportPopup";

const FrTarifs = () => {
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
      </div>
      
      <CareerSupportPopup />
    </div>
  );
};

export default FrTarifs;