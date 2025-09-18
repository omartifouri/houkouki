import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Mentions Légales
          </h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-red-700">Éditeur du site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Le site Houkouki est édité par la société <strong>Houkouki, SARL AU</strong>,<br />
                au capital de <strong>100 000 Dh</strong>,<br />
                immatriculée au Registre du Commerce de Casablanca sous le numéro <strong>RC 210851</strong>,<br />
                dont le siège social est situé à <strong>Casablanca, 27 Rue Ain Asserdoune, CIL</strong>.
              </p>
              <ul className="space-y-2">
                <li><strong>Identifiant fiscal :</strong> 2264883</li>
                <li><strong>Email :</strong> contact@houkouki.com</li>
                <li><strong>Téléphone :</strong> 0529 045 999</li>
                <li><strong>Directeur de la publication :</strong> Omar Tifouri</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-red-700">Hébergement</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Le site est hébergé par :<br />
                <strong>GENIOUS COMMUNICATION</strong><br />
                27, rue Ibn Lhakam - ex Reyer, résid. Hiba.1<br />
                20050 Casablanca - Maroc<br />
                0524298700
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-red-700">Propriété intellectuelle</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Tous les contenus du site (textes, images, logos, vidéos, outils, documents) sont protégés par le droit de la propriété intellectuelle. Toute reproduction, diffusion ou modification sans accord écrit est interdite.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-red-700">Données personnelles</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Les données collectées (formulaire, espace client, abonnement) sont destinées à Houkouki et ne sont pas transmises à des tiers sans consentement.
                Conformément à la réglementation applicable, l'utilisateur dispose d'un droit d'accès, rectification et suppression de ses données.
              </p>
              <p className="mt-4">
                <strong>Contact :</strong> contact@houkouki.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-700">Responsabilité</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Houkouki s'efforce de fournir des informations fiables et actualisées, mais ne peut être tenue responsable d'erreurs, omissions ou indisponibilité du site.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MentionsLegales;