import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Clock, Users, Building2, Heart, CheckCircle, Info } from "lucide-react";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import FloatingDevisButton from "@/components/FloatingDevisButton";
import { useEffect } from "react";
const FrTarifs = () => {
  // Effect pour gérer le scroll automatique avec les ancres
  useEffect(() => {
    // Vérifier si l'URL contient l'ancre #prestations-a-la-carte
    if (window.location.hash === "#prestations-a-la-carte") {
      // Scroll automatique vers la section "Prestations à la carte"
      setTimeout(() => {
        const element = document.getElementById('prestations-a-la-carte');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    // Vérifier si l'URL contient l'ancre #abonnement-annuel
    if (window.location.hash === "#abonnement-annuel") {
      // Scroll automatique vers la section "Abonnement annuel"
      setTimeout(() => {
        const element = document.getElementById('abonnement-annuel');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  // Définition des tooltips pour les fonctionnalités
  const featureTooltips: { [key: string]: string } = {
    "Consultations juridiques illimitées*": "Posez toutes vos questions juridiques par téléphone ou visioconférence, sans limite de volume, dans le respect de votre vie privée.\n* Consultations illimitées dans le cadre d'un usage raisonnable et de bonne foi.",
    "Lecture et analyse de documents juridiques": "Nos juristes analysent vos contrats, courriers officiels, actes notariés et vous expliquent les enjeux en termes simples.",
    "Assistance à la rédaction de courriers": "Aide à la rédaction de lettres de réclamation, mises en demeure, réponses administratives et correspondances officielles.", 
    "Conseil en cas de litige ou précontentieux": "Orientation stratégique et juridique avant d'engager une procédure, pour résoudre vos conflits à l'amiable.",
    "Accès à l'application mobile et guides juridiques": "Interface dédiée avec guides pratiques, modèles de documents et suivi de vos dossiers en temps réel.",
    "Suivi par un conseiller référent": "Un juriste dédié qui connaît votre dossier et vous accompagne dans la durée pour une relation de confiance.",
    "Audit de contrats et documents RH": "Vérification et optimisation de vos contrats de travail, règlements intérieurs et procédures RH.",
    "Sécurisation des procédures RH": "Mise en conformité de vos processus de recrutement, sanctions disciplinaires et ruptures de contrat.",
    "Rédaction de CGV ou d'actes juridiques": "Création sur-mesure de vos conditions générales de vente, contrats commerciaux et documents juridiques.",
    "Accompagnement en cas de contrôle ou litige": "Assistance lors des contrôles administratifs (CNSS, inspection du travail) et gestion des contentieux."
  };

  const services = [
    // Droit des sociétés
    { name: "Conseil + procédure carte auto-entrepreneur", description: "Accompagnement complet pour l'obtention et les démarches liées à la carte d'entrepreneur", category: "Droit des sociétés" },
    { name: "Création de société", description: "Assistance juridique pour la constitution d'une société selon le statut approprié", category: "Droit des sociétés" },
    { name: "Augmentation de capital", description: "Procédure d'augmentation du capital social avec rédaction des actes nécessaires", category: "Droit des sociétés" },
    { name: "Cession des parts", description: "Accompagnement juridique pour la cession de parts sociales ou d'actions", category: "Droit des sociétés" },
    { name: "Transfert du siège social", description: "Démarches administratives et juridiques pour le changement d'adresse du siège", category: "Droit des sociétés" },
    { name: "Dissolution / liquidation", description: "Procédure de dissolution et liquidation amiable ou judiciaire d'une société", category: "Droit des sociétés" },
    { name: "Rédaction d'un contrat de partenariat avec des clauses particulières", description: "Conception sur-mesure de contrats de partenariat commercial ou stratégique", category: "Droit des sociétés" },
    
    { name: "Audit des statuts", description: "Analyse et vérification de la conformité des statuts d'une société", category: "Droit des sociétés" },
    { name: "Audit de contrat", description: "Examen approfondi d'un contrat pour identifier les risques et opportunités", category: "Droit des sociétés" },
    { name: "Rédaction d'une convention ou d'un contrat de partenariat", description: "Élaboration de conventions de partenariat adaptées aux besoins spécifiques", category: "Droit des sociétés" },
    { name: "Rédaction d'une procuration générale", description: "Rédaction de procurations pour représentation dans les actes juridiques", category: "Droit des sociétés" },


    // Droit foncier
    { name: "Audit contrat de bail commercial", description: "Analyse complète des clauses d'un bail commercial existant", category: "Droit foncier" },
    { name: "Rédaction de contrat de bail commercial", description: "Élaboration sur-mesure de contrats de bail commercial", category: "Droit foncier" },
    { name: "Rédaction de contrat de bail commercial avec des clauses particulières", description: "Conception de baux commerciaux avec clauses spécifiques selon les besoins", category: "Droit foncier" },
    

    // Droit du travail
    { name: "Rédaction contrat de travail", description: "Élaboration de contrats de travail conformes à la législation", category: "Droit du travail" },
    { name: "Établir un solde de tout compte", description: "Calcul et rédaction du solde de tout compte lors de la rupture", category: "Droit du travail" },
    { name: "Audit d'un contrat de travail", description: "Vérification de la conformité et optimisation des contrats existants", category: "Droit du travail" },
    { name: "Procédure d'inscription des travailleurs de l'étranger", description: "Démarches pour l'emploi légal de travailleurs étrangers", category: "Droit du travail" },

    // Droit du consommateur
    { name: "Conseil + Audit contrat de service ou d'achat de produit", description: "Analyse des contrats de consommation et protection des droits", category: "Droit du consommateur" },
    { name: "Recours amiable en vue de la réparation du dommage causé à l'acheteur", description: "Médiation pour obtenir réparation des préjudices subis", category: "Droit du consommateur" },
    { name: "Conseil et démarche à suivre en cas d'une difficulté financière face aux crédits", description: "Assistance pour les problèmes de surendettement et négociation", category: "Droit du consommateur" },
    { name: "Conseil et démarche à suivre en cas d'un chèque impayé", description: "Procédures à suivre en cas de chèque sans provision", category: "Droit du consommateur" },

    // Droit des assurances
    { name: "Accompagnement recours amiable pour obtenir les indemnités en cas de sinistre", description: "Négociation amiable pour l'indemnisation des sinistres", category: "Droit des assurances" },

    // Droit de la protection des données
    { name: "Suivi des dossiers auprès de la CNDP", description: "Accompagnement dans les relations avec la Commission Nationale de contrôle de la protection des Données Personnelles", category: "Protection des données" },

    // Services transversaux
    { name: "Coordination d'un recours judiciaire", description: "Organisation et suivi des procédures judiciaires avec les avocats", category: "Services transversaux" },
    { name: "Recours amiable - Rédaction d'une mise en demeure", description: "Rédaction de courriers de mise en demeure pour résolution amiable", category: "Services transversaux" }
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
        "Des prestations supplémentaires à un tarif préférentiel de 325 DH / HT / heure réservé aux abonnés"
      ],
      price: "6500",
      currency: "MAD TTC", 
      buttonText: "COMMANDER",
      popular: true
    },
    {
      title: "AU DELÀ DE 50 EMPLOYÉS",
      icon: Building2,
      subtitle: "",
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
      buttonText: "DEMANDER UN DEVIS",
      popular: false
    }
  ];


  return (
    <TooltipProvider>
      <div id="top" className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos formules et tarifs</h1>
          <h2 className="text-2xl text-red-600 mb-8">Une tarification simple, claire et adaptée à vos besoins</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez Houkouki, nous croyons que l'accès au droit ne doit pas être un luxe.
            C'est pourquoi nous vous proposons deux formules tarifaires, selon la nature et la fréquence de vos besoins.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Introduction aux formules */}
          <section>
            <Card className="border-2 border-red-200">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-3 cursor-pointer hover:bg-red-50 p-4 rounded-lg transition-all" onClick={() => {
                    document.getElementById('abonnement-annuel')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Formule d'abonnement</p>
                      <p className="text-gray-700">Pour un accompagnement régulier</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-3 cursor-pointer hover:bg-red-50 p-4 rounded-lg transition-all" onClick={() => {
                    document.getElementById('prestations-a-la-carte')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
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
          <section id="abonnement-annuel">
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
                        ? 'ring-2 ring-brand-coral shadow-xl scale-105 bg-gradient-to-br from-brand-coral/20 to-brand-beige/20' 
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
                            {featureTooltips[feature] ? (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="text-sm text-gray-700 leading-relaxed cursor-help flex items-center gap-1 hover:text-red-600 transition-colors">
                                    {feature}
                                    <Info className="w-3 h-3 text-gray-400" />
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent className="max-w-xs">
                                  <p>{featureTooltips[feature]}</p>
                                </TooltipContent>
                              </Tooltip>
                            ) : feature.includes("Des prestations supplémentaires") ? (
                              <span className="text-sm text-gray-700 leading-relaxed">
                                Des prestations supplémentaires à un tarif préférentiel de 325 DH / HT / heure réservé aux abonnés - <a href="#exemples-prestations" className="text-red-600 underline hover:text-red-800">Voir les exemples de prestations</a>
                              </span>
                            ) : (
                              <span className="text-sm text-gray-700 leading-relaxed">
                                {feature}
                              </span>
                            )}
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
                          className="w-full bg-[#C0997A] hover:bg-[#B8926F] text-white font-semibold py-3"
                          onClick={() => {
                            if (plan.price === "Sur devis") {
                              window.location.href = "/fr/contact";
                            } else if (plan.buttonText === "SOUSCRIRE" || plan.buttonText === "COMMANDER") {
                              const planParam = plan.title === "PARTICULIER" ? "PARTICULIER" : "1-50";
                              window.location.href = `/souscription?plan=${planParam}`;
                            }
                          }}
                        >
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
                  <Button 
                    className="bg-[#C0997A] hover:bg-[#B8926F] text-white font-semibold py-3"
                    onClick={() => {
                      window.location.href = "/fr/contact";
                    }}
                  >
                    Demander un devis sur mesure
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-[#C0997A] text-[#C0997A] hover:bg-[#C0997A] hover:text-white font-semibold py-3"
                    onClick={() => {
                      window.location.href = "/fr/contact";
                    }}
                  >
                    Contacter notre équipe entreprise
                  </Button>
                </div>
              </div>
            </Card>
          </section>

          {/* Prestations à la carte */}
          <section id="prestations-a-la-carte">
            <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">Prestations à la carte</h2>
            <p className="text-xl text-gray-600 mb-2 text-center">Payez uniquement ce dont vous avez besoin</p>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center">
              Une solution flexible pour celles et ceux qui ont un besoin ponctuel, sans engagement.
              Nos prestations à la carte sont tarifées en fonction du nombre d'heures nécessaires au tarif de<br />
              <strong>400 DH HT / heure</strong>.
            </p>

            {/* Tableau des prestations */}
            <Card className="border-2 border-red-200 mb-12" id="exemples-prestations">
              <CardHeader>
                <CardTitle className="text-xl text-center text-red-800">Exemples de prestations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <p className="text-sm text-gray-600 mb-4 text-center italic">
                    La durée par heures est estimée par l'équipe de nos juristes
                  </p>
                   <div className="space-y-8">
                     {/* Grouper les services par catégorie */}
                     {Object.entries(
                       services.reduce((acc, service) => {
                         if (!acc[service.category]) {
                           acc[service.category] = [];
                         }
                         acc[service.category].push(service);
                         return acc;
                       }, {} as Record<string, typeof services>)
                     ).map(([category, categoryServices]) => (
                       <div key={category}>
                         <h3 className="text-lg font-semibold text-red-800 mb-4 border-b border-red-200 pb-2">
                           {category}
                         </h3>
                         <table className="w-full border-collapse mb-6">
                           <thead>
                             <tr className="border-b border-gray-200">
                               <th className="text-left py-3 px-4 font-medium text-gray-900 w-2/5">Prestation</th>
                               <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                             </tr>
                           </thead>
                           <tbody>
                             {categoryServices.map((service, index) => (
                               <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                 <td className="py-3 px-4 font-medium text-gray-900 text-sm">{service.name}</td>
                                 <td className="py-3 px-4 text-gray-600 text-sm">{service.description}</td>
                               </tr>
                             ))}
                           </tbody>
                         </table>
                       </div>
                     ))}
                   </div>
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
      <FloatingDevisButton />
      </div>
    </TooltipProvider>
  );
};

export default FrTarifs;