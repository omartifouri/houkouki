import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

const CGU = () => {
  useEffect(() => {
    // Scroll automatique vers le haut si l'ancre #top est présente
    if (window.location.hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Mentions légales et Conditions Générales d'Utilisation
          </h1>
          
          {/* Mentions légales */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-red-700 mb-6">Mentions légales</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">Éditeur du site</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Le site Houkouki est édité par la société Houkouki, SARL Au, au capital de 100 000 Dh, immatriculée au Registre du Commerce de Casablanca sous le numéro RC 210851, dont le siège social est situé à Casablanca, 27 Rue Ain Asserdoune, CIL.</p>
                <ul className="mt-4 space-y-1">
                  <li><strong>Identifiant fiscal :</strong> 2264883</li>
                  <li><strong>Email :</strong> contact@houkouki.com</li>
                  <li><strong>Téléphone :</strong> 0529 045 999</li>
                  <li><strong>Directeur de la publication :</strong> Omar Tifouri</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">Hébergement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Le site est hébergé par :</p>
                <div className="mt-2">
                  <p><strong>GENIOUS COMMUNICATION</strong></p>
                  <p>27, rue Ibn Lhakam - ex Reyer, résid. Hiba.1 20050 Casablanca - Maroc</p>
                  <p>0524298700</p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">Propriété intellectuelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Tous les contenus du site (textes, images, logos, vidéos, outils, documents) sont protégés par le droit de la propriété intellectuelle. Toute reproduction, diffusion ou modification sans accord écrit est interdite.</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">Données personnelles</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Les données collectées (formulaire, espace client, abonnement) sont destinées à Houkouki et ne sont pas transmises à des tiers sans consentement. Conformément à la réglementation applicable, l'utilisateur dispose d'un droit d'accès, de rectification et de suppression de ses données.</p>
                <p className="mt-2"><strong>Contact :</strong> contact@houkouki.com.</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">Responsabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Houkouki s'efforce de fournir des informations fiables et actualisées, mais ne peut être tenue responsable d'erreurs, omissions ou indisponibilité du site.</p>
              </CardContent>
            </Card>
          </div>

          {/* CGU */}
          <div>
            <h2 className="text-3xl font-bold text-red-700 mb-6">Conditions Générales d'Utilisation (CGU)</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">1. Objet</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Les présentes CGU définissent les conditions d'accès et d'utilisation du site houkouki.com.</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">2. Accès au site et aux services</CardTitle>
              </CardHeader>
              <CardContent>
                <p>L'accès au site Houkouki est gratuit. Certains services sont soumis à un paiement à la carte (tarif horaire) ou un abonnement forfaitaire (mensuel, trimestriel, annuel). Les conditions applicables à ces paiements sont précisées dans les CGV.</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">3. Utilisation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>L'utilisateur s'engage à :</p>
                <ul className="list-disc list-inside mt-2 ml-4">
                  <li>utiliser le site conformément à la loi,</li>
                  <li>ne pas perturber son bon fonctionnement (intrusions, virus, etc.),</li>
                  <li>fournir des informations exactes lorsqu'il utilise les formulaires.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">4. Propriété intellectuelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Tout le contenu du site est la propriété exclusive de Houkouki, sauf mention contraire. Toute utilisation non autorisée est interdite.</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">5. Responsabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Houkouki met en œuvre tous les moyens raisonnables pour assurer la disponibilité et la sécurité du site. Elle ne peut toutefois être tenue responsable :</p>
                <ul className="list-disc list-inside mt-2 ml-4">
                  <li>de pannes indépendantes de sa volonté,</li>
                  <li>de l'usage inapproprié du site par un utilisateur,</li>
                  <li>des contenus tiers accessibles via des liens externes.</li>
                </ul>
                <p className="mt-4">
                  En cas de panne, de maintenance ou de force majeure, l'accès au site peut être temporairement interrompu sans que cela ne donne droit à indemnisation. L'utilisateur reconnaît que les règles de facturation (horaire ou forfaitaire) s'appliquent indépendamment de ces interruptions techniques, conformément aux CGV.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">6. Données personnelles</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Les données sont traitées conformément à la politique de confidentialité de Houkouki. L'utilisateur peut exercer ses droits en écrivant à : contact@houkouki.com.</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-red-700">7. Modification</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Houkouki se réserve le droit de modifier à tout moment les présentes CGU.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">8. Loi applicable</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Les CGU sont régies par le droit marocain. Tout litige relève des tribunaux de Casablanca.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CGU;