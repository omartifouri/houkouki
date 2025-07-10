import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";

const FrCGV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <FrenchNavigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Conditions Générales de Vente
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Champ d'application</h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) sont applicables à toute commande et demande de Services effectuée par le Client auprès de la société HOUKOUKI.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Toute commande de Services adressée à HOUKOUKI emporte l'acceptation expresse et sans réserve par le Client des présentes Conditions Générales de Vente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Définition</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dans les présentes conditions générales de vente sont entendus par :
              </p>
              <p className="text-gray-600 leading-relaxed">
                « HOUKOUKI » ou « Vendeur » société à responsabilité limitée d'associée unique au capital social de 400.000 Dirhams, dont le siège social est à Casablanca – 27, rue Ain Asserdoune, ayant pour objet social le conseil juridique et fiscal ainsi que l'accompagnement, enregistrée au Registre du Commerce sous le numéro 210851 Casablanca.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                « Client » ou « Acheteur »: toute personne physique ou morale ayant fait appel à HOUKOUKI pour bénéficier de ces Services.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Ces conditions générales de vente régissent l'ensemble des transactions établies sur le site web de HOUKOUKI. Toute commande passée sur ce site suppose du client son acceptation inconditionnelle et irrévocable de ces conditions. Elles sont accessibles sur le site www.houkouki.com.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                HOUKOUKI peut modifier ou actualiser les présentes Conditions afin de prendre en considération tout changement législatif, réglementaire ou technique, elle avisera le client à travers la page d'accueil de son site internet.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Objet de l'offre</h2>
              <p className="text-gray-600 leading-relaxed">
                L'ensemble des services présentés par la société HOUKOUKI ainsi que ses informations sont présentés sur notre site www.houkouki.com, Nous nous efforçons de fournir à nos clients toutes les informations nécessaires relatives aux services que nous offrons.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Pour tout dysfonctionnement, merci de nous le signaler par mail à l'adresse : contact@houkouki.com ou contactez notre service client au +212 529 045 999.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Le présent contrat est un contrat à distance qui a pour objet de définir les droits et obligations des parties dans le cadre de la vente des services de la société HOUKOUKI sur Internet.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Mode de paiement</h2>
              <p className="text-gray-600 leading-relaxed">
                Pour passer et régler votre commande, vous choisissez le moyen de paiement parmi ceux proposés par HOUKOUKI au niveau de la page de paiement (chèque, virement ou par carte de crédit).
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Vos paiements Multi-canaux sont sécurisés par le Centre Monétique Interbancaire (CMI) qui offre un service de paiement entièrement sécurisé.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Après validation de votre paiement vous recevez via votre adresse mail fournie un login et mot de passe vous permettant d'avoir accès à votre espace privé dans notre CRM.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                En cas de paiement par carte bancaire, les dispositions relatives à l'utilisation frauduleuse du moyen de paiement prévues dans les conventions conclues entre le client et l'émetteur de la carte, la Société HOUKOUKI et son établissement bancaire s'appliquent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Preuve de transactions payées par carte bancaire</h2>
              <p className="text-gray-600 leading-relaxed">
                Les données enregistrées par le CMI sur la plateforme de paiement Multi-canal pour le compte de HOUKOUKI constituent la preuve de l'ensemble des transactions commerciales passées entre vous et la société HOUKOUKI.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Droit de rétractation</h2>
              <p className="text-gray-600 leading-relaxed">
                À compter de la date de livraison de votre commande, vous disposez d'un délai de 7 jours pour faire valoir votre droit de rétractation, et être intégralement remboursé.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changement de formule</h2>
              <p className="text-gray-600 leading-relaxed">
                Si vous choisissez l'une des formules offertes par HOUKOUKI la formule choisie lors du premier abonnement ne peut être changée en cours de la période choisie. Le changement de formule se fait sur le site à l'occasion du renouvellement de l'abonnement c'est-à-dire à son échéance anniversaire dans le cas d'un abonnement annuel.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Résiliation de l'abonnement</h2>
              <p className="text-gray-600 leading-relaxed">
                Si vous choisissez l'une des formules offertes par HOUKOUKI L'abonnement se résilie automatiquement à chaque échéance anniversaire. La résiliation ne peut intervenir en cours d'année. Aucun remboursement de l'abonnement annuel ne peut être fait.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Enregistrement des appels</h2>
              <p className="text-gray-600 leading-relaxed">
                Nous vous informons que dans le cadre de notre démarche qualité et d'évaluation dans le but d'améliorer la qualité de nos services, les appels sont susceptibles d'être enregistrés, nous vous rassurons que nous respectons l'obligation de confidentialité, seul les personnes autorisées ont accès aux données personnelles et ce conformément à la loi 09-08 et aux obligations de la CNDP.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Vous pouvez vous opposer à l'enregistrement de vos appels en formalisant votre demande par e-mail contact@houkouki.com
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                En cas d'opposition à l'enregistrement des appels et résiliation du Service, HOUKOUKI supprimera automatiquement l'ensemble des fichiers archivés de l'Utilisateur.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Tous les appels enregistrés seront archivés pour une période de 2 ans étant précisé que la responsabilité de HOUKOUKI ne pourra en aucun cas être recherchée au titre de ces enregistrements, de leurs contenus, ou de leur archivage.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Les présentes Conditions Générales de Vente sont soumises au droit Marocain. Un litige qui n'aurait pu être réglé par un accord à l'amiable entre Houkouki et le Client relèverait de la compétence exclusive du Tribunal de Commerce de Casablanca, selon l'origine du litige, et quel que soit par ailleurs le lieu de livraison des travaux.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Protection des données personnelles</h2>
              <p className="text-gray-600 leading-relaxed">
                Le client dispose des droits d'interrogation, d'accès, de modification, d'opposition et de rectification sur les données personnelles le concernant.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                En adhérant à ces conditions générales de vente, le client consent à ce que les informations nominatives recueillies soient utilisées pour le traitement et l'acheminement des commandes.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Par ailleurs, en saisissant votre adresse email, vous êtes susceptibles de recevoir des emails contenant des informations sur les actualités concernant les nouveautés de notre groupe Géoagility (digiassur/assurwi – Psyphone –Geoso). Vous pouvez vous désinscrire à tout instant. Il vous suffit pour cela de le signaler par mail à : contact@houkouki.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                Si vous avez besoin d'aide ou une réclamation à faire, n'hésitez pas à contacter le service clients au +212 529 045 999. Ou par email au contact@houkouki.com.
              </p>
            </section>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600">
                <strong>Dernière mise à jour :</strong> 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CareerSupportPopup />
    </div>
  );
};

export default FrCGV;