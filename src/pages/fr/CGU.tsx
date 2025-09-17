import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { useEffect } from "react";

const FrCGU = () => {
  useEffect(() => {
    // Scroll to top when the page loads with #top anchor
    if (window.location.hash === '#top') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <FrenchNavigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Préambule</h2>
              <p className="text-gray-600 leading-relaxed">
                Les conditions générales d'utilisation suivantes régissent l'ensemble des transactions établies sur le
                site web de <strong>Houkouki</strong>. Toute transaction sur le site suppose du client son acceptation
                inconditionnelle et irrévocable de ces conditions.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Houkouki</strong> est votre plateforme de conseil juridique illimité et sur-mesure qui répond à toutes vos
                questions dans toutes les branches de droit sauf le pénal.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Nos juristes vous offrent des conseils et de l'accompagnement juridique et fiscal par un simple appel
                téléphonique, visioconférence ou par CRM.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objet</h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes C.G.U ont pour objet de définir les conditions dans lesquelles les Utilisateurs peuvent
                accéder aux services et les utiliser. Tout utilisateur qui accède aux services proposés par <strong>Houkouki</strong>
                s'engage à respecter, sans réserve, les présentes C.G.U.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Houkouki</strong> permet aux utilisateurs de bénéficier du conseil juridique et fiscal par téléphone,
                visioconférence, ou par CRM. Vos informations sont sécurisées.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Houkouki</strong> donne accès à ses utilisateurs aux actualités juridiques et fiscales marocaines et aux
                modèles types de documents juridiques.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Houkouki</strong> offre la possibilité aux utilisateurs d'enregistrer leurs appels et les placer vers leurs
                espaces privés afin de les réécouter depuis la rubrique "vos consultations" afin de les relire ou les
                réécouter à tout moment.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Les juristes répondent aux besoins des utilisateurs en se basant sur les informations fournies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accès aux Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Pour pouvoir accéder aux services, l'Utilisateur devra s'inscrire. L'identifiant et le code confidentiel
                sont strictement personnels à chaque utilisateur du service. Leur utilisation est placée sous la seule
                responsabilité de l'utilisateur. Il lui appartient de mettre en œuvre toutes les mesures de sécurité
                nécessaires à la protection de son mot de passe et de son identifiant de connexion. L'utilisation des
                services de <strong>Houkouki</strong> nécessite de la part des utilisateurs un consentement à l'acceptation des
                présentes CGU au moment de l'inscription.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Si l'utilisateur a le moindre problème dans l'utilisation ou à l'accès à son espace privé, il doit envoyer
                un e-mail à contact@houkouki.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Confidentialité et sécurité</h2>
              <p className="text-gray-600 leading-relaxed">
                Les informations personnelles concernant les Utilisateurs sont confidentielles. Les questions posées
                par les Utilisateurs, ainsi que les réponses faites par les juristes dans le cadre des Services sont
                absolument confidentielles, et protégées.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Les questions et les réponses se font sur l'espace personnel sécurisé mis à la disposition des
                Utilisateurs et des juristes.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Si vous nous donnez votre accord pour enregistrer vos consultations, nous pouvons archiver votre
                appel et le placer dans votre espace privé, nous vous rassurons que nous respectons l'obligation de
                confidentialité, seul les personnes autorisées ont accès aux données personnelles et ce conformément
                à la loi 09-08 et aux obligations de la CNDP.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                La préservation de la sécurité des données à caractère personnel de l'Utilisateur engage chaque
                Utilisateur à :
              </p>
              <ul className="text-gray-600 space-y-2 mt-4">
                <li>• Garder strictement confidentiels ses éléments d'authentification et ne pas les dévoiler à un tiers</li>
                <li>• Avertir <strong>Houkouki</strong> de tout dysfonctionnement technique ou intrusions constatées</li>
                <li>• L'Utilisateur s'engage à prendre toutes les mesures appropriées de façon à protéger ses données et
                matériels de la contamination par des virus ou autres formes d'attaques circulant éventuellement sur
                internet</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Propriété Intellectuelle</h2>
              <p className="text-gray-600 leading-relaxed">
                La société est titulaire exclusive des droits de propriété intellectuelle :
              </p>
              <ul className="text-gray-600 space-y-2 mt-4">
                <li>• Sur la plateforme : arborescence, organisation et titrage de ses rubriques, identité visuelle et
                graphique, design, ergonomie, fonctionnalités, logiciels, images animées ou fixes, sons, savoir-faire,
                dessins, graphismes et tout autre élément la composant</li>
                <li>• Sur les bases de données techniques et sur leurs structures conçues et gérées par la Société pour les
                besoins de l'édition de la plateforme</li>
                <li>• Sur tous les éléments de conception de la plateforme, qu'ils soient graphiques ou techniques</li>
                <li>• Sur la marque, les noms, sigles, logos, couleurs, graphismes ou autres signes qui pourraient être
                utilisés, réalisés ou mis en œuvre par la société</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Il est donc interdit de reproduire sous quelque forme que ce soit, de manière directe ou indirecte, les
                éléments visés à l'alinéa précédent, ainsi que d'altérer les marques, brevets, noms, sigles, logos,
                couleurs, graphismes ou autres signes figurant sur les éléments mis à disposition au sein de la
                plateforme, et plus généralement d'utiliser ou exploiter ces éléments autrement que dans le cadre
                de l'exécution des présentes Conditions Générales d'Utilisation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Données à caractère personnel</h2>
              <p className="text-gray-600 leading-relaxed">
                Les données collectées sont strictement confidentielles et couvertes. En validant ces conditions
                générales d'utilisation (C.G.U), l'utilisateur reconnaît que <strong>Houkouki</strong> ainsi que les personnes habilitées
                de l'hébergeur agréé peuvent avoir accès aux données à caractère personnel.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Aucune de ces données n'est communiquée à des tierces personnes.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Ces données ont pour finalité la gestion du compte de l'Utilisateur et la fourniture des Services. Ces
                données pourront également être utilisées par le groupe GeoAgility qui se compose de plusieurs
                sociétés (<strong>Houkouki</strong>, Psyphone, geoso, Assurwi) pour adresser à l'Utilisateur des newsletters, sauf opposition de sa part. Elles seront susceptibles de faire l'objet d'analyses et d'études statistiques,
                dans le respect de l'anonymat de l'Utilisateur.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Dans le cadre des Services délivrés via notre site <strong>Houkouki</strong>, l'Utilisateur pourra recevoir des
                notifications, des SMS, des courriels, des MMS, des alertes ou autres types de messages qui font
                partie des Services en particulier du Service d'information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modifications des Conditions Générales d'Utilisation</h2>
              <p className="text-gray-600 leading-relaxed">
                <strong>Houkouki</strong> se réserve le droit de modifier les termes, conditions et mentions des présentes CGU à tout
                moment et s'engage à en informer l'Utilisateur et les lui faire accepter.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                Pour tout renseignement, demande d'information ou réclamation, l'Utilisateur peut contacter
                <strong>Houkouki</strong> en lui adressant un message à l'adresse électronique suivante : contact@houkouki.com
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

export default FrCGU;