import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CGU = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Conditions Générales d'Utilisation (CGU)
          </h1>
          
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
              <p>L'accès au site Houkouki est gratuit.</p>
              <p className="mt-2">Certains services sont soumis à :</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>un paiement à la carte (tarif horaire), ou</li>
                <li>un abonnement forfaitaire (mensuel, trimestriel, annuel).</li>
              </ul>
              <p className="mt-2">Les conditions applicables à ces paiements sont précisées dans les CGV.</p>
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
                En cas de panne, de maintenance ou de force majeure, l'accès au site peut être temporairement interrompu sans que cela ne donne droit à indemnisation.
              </p>
              <p className="mt-2">
                L'utilisateur reconnaît que les règles de facturation (horaire ou forfaitaire) s'appliquent indépendamment de ces interruptions techniques, conformément aux CGV.
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
      
      <Footer />
    </div>
  );
};

export default CGU;