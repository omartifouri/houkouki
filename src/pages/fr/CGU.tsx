import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";

const FrCGU = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <FrenchNavigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Objet</h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités 
                et conditions d'utilisation du site internet Houkouki.com, ainsi que les services proposés sur ce site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Acceptation des conditions</h2>
              <p className="text-gray-600 leading-relaxed">
                L'utilisation du site Houkouki.com implique l'acceptation pleine et entière des présentes CGU. 
                Si vous n'acceptez pas ces conditions, vous devez vous abstenir d'utiliser ce site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Définitions</h2>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Site :</strong> Le site internet Houkouki.com</li>
                <li><strong>Utilisateur :</strong> Toute personne qui utilise le site ou l'un des services proposés sur le site</li>
                <li><strong>Contenu :</strong> Toutes les informations, textes, images, vidéos présentes sur le site</li>
                <li><strong>Services :</strong> Toutes les fonctionnalités proposées par le site</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Accès au site</h2>
              <p className="text-gray-600 leading-relaxed">
                Le site est accessible gratuitement à tout utilisateur disposant d'un accès à internet. 
                Houkouki se réserve le droit de suspendre, limiter ou interrompre l'accès au site pour des opérations 
                de maintenance ou pour toute autre raison, sans préavis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Utilisation du site</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                L'utilisateur s'engage à utiliser le site conformément aux présentes CGU et à respecter la législation en vigueur. 
                Il est notamment interdit de :
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Utiliser le site à des fins illégales ou non autorisées</li>
                <li>• Reproduire, copier ou distribuer le contenu du site sans autorisation</li>
                <li>• Tenter d'accéder de manière non autorisée aux systèmes informatiques</li>
                <li>• Transmettre des virus ou tout autre code malveillant</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Propriété intellectuelle</h2>
              <p className="text-gray-600 leading-relaxed">
                Le contenu du site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur et appartient à Houkouki 
                ou à ses partenaires. Toute reproduction ou utilisation non autorisée est interdite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Protection des données personnelles</h2>
              <p className="text-gray-600 leading-relaxed">
                Houkouki s'engage à protéger les données personnelles de ses utilisateurs conformément au RGPD et à la loi 09-08 
                relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Responsabilité</h2>
              <p className="text-gray-600 leading-relaxed">
                Houkouki met tout en œuvre pour fournir des informations exactes et à jour, mais ne peut garantir l'exactitude, 
                la complétude ou l'actualité des informations diffusées sur le site. L'utilisateur utilise ces informations sous sa propre responsabilité.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Modification des CGU</h2>
              <p className="text-gray-600 leading-relaxed">
                Houkouki se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur 
                dès leur publication sur le site. Il est conseillé de consulter régulièrement cette page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Droit applicable et juridiction</h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes CGU sont soumises au droit marocain. En cas de litige, les tribunaux de Casablanca seront seuls compétents.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                Pour toute question concernant ces CGU, vous pouvez nous contacter à l'adresse : contact@houkouki.com
              </p>
            </section>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600">
                <strong>Dernière mise à jour :</strong> Janvier 2024
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