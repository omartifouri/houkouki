import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FrenchNavigation from "@/components/FrenchNavigation";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { 
  Heart, 
  Building2, 
  Users, 
  HandHeart, 
  Globe, 
  Shield, 
  ArrowRight,
  Mail,
  CheckCircle,
  Target,
  UserCheck,
  Handshake
} from "lucide-react";

const FrImpact = () => {
  const partners = [
    {
      title: "Banques & institutions",
      description: "Certaines banques et mutuelles proposent Houkouki en inclusion dans leurs offres pour renforcer la protection juridique de leurs clients.",
      icon: Building2
    },
    {
      title: "Organismes publics et para-publics",
      description: "Nous travaillons avec des acteurs institutionnels sur des projets d'information et de médiation juridique à destination des citoyens.",
      icon: Shield
    },
    {
      title: "Associations & ONG",
      description: "Houkouki accompagne des associations dans la gestion des droits de leurs bénéficiaires (femmes, jeunes, salariés précaires, personnes migrantes…).",
      icon: HandHeart
    }
  ];

  const solidarityActions = [
    {
      title: "Tarifs réduits",
      description: "Des formules à tarif réduit pour les bénéficiaires de structures sociales ou éducatives",
      icon: UserCheck
    },
    {
      title: "Codes d'accès RSE",
      description: "Des codes d'accès offerts par les entreprises à leurs salariés dans le cadre de leur politique RSE",
      icon: Target
    },
    {
      title: "Partenariats mécénat",
      description: "Des partenariats mécénat pour parrainer des usagers en situation de précarité juridique",
      icon: Handshake
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Notre impact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partenaires & engagement RSE pour un droit plus accessible à tous
          </p>
        </div>

        {/* Mission Sociale */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Notre mission sociale
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-center max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Chez Houkouki, nous croyons que l'accès au droit est une condition fondamentale de justice sociale. 
                Trop souvent, les personnes vulnérables, isolées ou peu informées se retrouvent seules face à des démarches juridiques complexes.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                C'est pourquoi nous avons fait le choix de bâtir une plateforme :
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Accessible à tous</h3>
                  <p className="text-gray-600">où qu'ils se trouvent</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Simple et compréhensible</h3>
                  <p className="text-gray-600">sans jargon ni barrière administrative</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                    <HandHeart className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Inclusive</h3>
                  <p className="text-gray-600">grâce à des dispositifs d'accompagnement solidaire</p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/70 rounded-xl border border-red-200">
                <p className="text-xl font-semibold text-red-600">
                  Notre conviction : le droit ne doit pas aggraver les inégalités — il doit les réparer.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nos Partenaires */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos partenaires</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous collaborons avec des acteurs engagés qui partagent notre vision d'un droit plus accessible, 
              plus humain, plus ancré dans les réalités sociales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gray-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {partner.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center bg-gradient-to-r from-gray-50 to-red-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Vous représentez une structure et souhaitez proposer Houkouki à vos publics ?
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Mail className="w-4 h-4 mr-2" />
              Prenez contact avec notre équipe partenariats
            </Button>
          </div>
        </div>

        {/* Notre offre solidaire */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg">
                <HandHeart className="w-10 h-10" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Notre offre solidaire
              </CardTitle>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Parce que certains publics ont besoin d'un accompagnement juridique sans pouvoir toujours le financer, 
                Houkouki a mis en place un dispositif d'accès solidaire, en collaboration avec ses partenaires.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Ce que nous proposons :</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {solidarityActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{action.title}</h4>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-center bg-white/70 rounded-lg p-6 mb-8">
                <p className="text-gray-700 font-medium mb-6">
                  Nous construisons chaque dispositif sur mesure, selon les besoins de nos partenaires.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Proposer un partenariat solidaire
                  </Button>
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                    Faire bénéficier vos publics de Houkouki
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Travaillons ensemble */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg">
                <Handshake className="w-10 h-10" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Travaillons ensemble pour un droit plus accessible
              </CardTitle>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vous êtes une entreprise, une collectivité, une institution ou une ONG ?
                Faites de Houkouki un levier de protection, de sensibilisation et d'impact social.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Button className="bg-indigo-500 hover:bg-indigo-600 text-white py-4 px-6 text-lg">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contactez notre équipe pour construire un partenariat
                </Button>
                <Button variant="outline" className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 py-4 px-6 text-lg">
                  En savoir plus sur nos actions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <CareerSupportPopup />
    </div>
  );
};

export default FrImpact;