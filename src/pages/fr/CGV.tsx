import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor";

const CGV = () => {
  useScrollToAnchor();
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Conditions Générales de Vente (CGV)
          </h1>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-red-700">1. Objet</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Les présentes CGV définissent les conditions applicables aux services proposés par Houkouki :</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Accompagnement juridique (information, services juridiques, médiation, orientation vers recours adaptés),</li>
                <li>Accompagnement à l'emploi (via ILAA, si souscrit depuis Houkouki),</li>
                <li>Toute autre prestation indiquée sur le site.</li>
              </ul>
              <p className="mt-2">Toute souscription implique l'acceptation sans réserve des présentes CGV.</p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-red-700">2. Accès au service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>L'accès est effectif après validation de la demande du client et règlement du prix indiqué. Un email de confirmation est adressé au client.</p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-red-700">3. Tarifs et paiement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Paiement à la carte (tarif horaire) :</h4>
                  <p>Les prestations ponctuelles sont facturées sur la base d'un tarif horaire indiqué au client avant toute intervention. Le paiement est exigible à la commande et couvre uniquement le temps effectivement réservé. Toute séance commencée est due intégralement.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Abonnements (forfait périodique) :</h4>
                  <p>Houkouki propose des abonnements forfaitaires (mensuels, trimestriels, annuels). Ces abonnements incluent un nombre défini d'heures de consultation et/ou de services, utilisables uniquement pendant la période en cours. Les heures ou prestations non consommées ne peuvent être ni reportées ni remboursées. Le montant de l'abonnement est dû en totalité dès le début de la période et reste acquis à Houkouki.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-red-700">4. Droit de rétractation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Si le client est un consommateur (au sens de la loi), il dispose d'un délai légal de 7 jours pour se rétracter après la souscription. Toutefois, si le service a commencé à être exécuté avant la fin du délai légal, et avec l'accord du client, ce droit ne peut plus être exercé.</p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-red-700">5. Engagements et limites de responsabilité</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Houkouki s'engage à fournir un service conforme à la description, avec obligation de moyens et non de résultat.</li>
                <li>Houkouki ne peut garantir une issue favorable (ex. résolution d'un litige, obtention d'un emploi).</li>
                <li>Elle ne saurait être tenue responsable des décisions de tiers (tribunaux, employeurs, recruteurs, etc.).</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-red-700">6. Obligations du client</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Le client s'engage à :</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>fournir des informations exactes et complètes,</li>
                <li>respecter les rendez-vous convenus le cas échéant,</li>
                <li>utiliser les services dans le cadre légal.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-red-700">7. Résiliation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Paiement à la carte :</h4>
                  <p>Toute prestation ponctuelle confirmée et réglée est définitive et non résiliable. Aucun remboursement n'est possible, même en cas de non-consommation par le client.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Abonnements :</h4>
                  <p>L'abonnement est conclu pour une durée initiale déterminée (mensuelle, trimestrielle ou annuelle), renouvelable par tacite reconduction sauf dénonciation par le client adressée par email à contact@houkouki.com avec un préavis de 15 jours avant l'échéance. La résiliation en cours de période n'est pas possible : le montant de l'abonnement reste intégralement dû. En cas de non-renouvellement, les prestations non consommées à la date d'échéance sont perdues et ne donnent lieu à aucun remboursement. Houkouki se réserve le droit de résilier l'abonnement en cas de manquement grave du client à ses obligations (fraude, non-respect des rendez-vous, comportement inapproprié…), sans remboursement.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-red-700">8. Données personnelles</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Les données collectées sont utilisées uniquement pour l'exécution des services, conformément à la politique de confidentialité de Houkouki.</p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-red-700">9. Force majeure</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Houkouki ne saurait être tenue responsable d'un manquement à ses obligations résultant d'un cas de force majeure (notamment catastrophes naturelles, pannes massives, cyberattaques, conflits sociaux, décisions administratives, troubles civils ou politiques). En cas de force majeure, les obligations des parties sont suspendues. Les paiements déjà effectués restent acquis à Houkouki. Pour les abonnements, si l'interruption excède 30 jours consécutifs, le client peut demander la résiliation avec remboursement au prorata de la période non exécutée. Pour les prestations ponctuelles, les séances non réalisées seront reportées.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-700">10. Loi applicable et juridiction</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Les présentes CGV sont régies par le droit marocain.</p>
              <p className="mt-2">Tout litige relève de la compétence des tribunaux de Casablanca.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CGV;