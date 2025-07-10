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
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Objet</h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations de services 
                proposées par Houkouki aux particuliers et aux entreprises.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services proposés</h2>
              <div className="text-gray-600 leading-relaxed">
                <p className="mb-4">Houkouki propose les services suivants :</p>
                <ul className="space-y-2 mb-4">
                  <li>• Consultations juridiques en ligne et en présentiel</li>
                  <li>• Rédaction d'actes et de documents juridiques</li>
                  <li>• Accompagnement juridique pour particuliers et entreprises</li>
                  <li>• Formations en droit</li>
                  <li>• Veille réglementaire</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Commande et devis</h2>
              <p className="text-gray-600 leading-relaxed">
                Toute commande de prestation doit faire l'objet d'un devis préalable établi par Houkouki. 
                L'acceptation du devis par le client vaut commande ferme et définitive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Prix et facturation</h2>
              <div className="text-gray-600 leading-relaxed">
                <p className="mb-4">Les prix sont exprimés en dirhams marocains (MAD) et s'entendent toutes taxes comprises.</p>
                <ul className="space-y-2">
                  <li>• Les prix peuvent varier selon la complexité du dossier</li>
                  <li>• Un acompte peut être demandé avant le début de la prestation</li>
                  <li>• La facturation s'effectue selon les modalités convenues dans le devis</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Modalités de paiement</h2>
              <div className="text-gray-600 leading-relaxed">
                <p className="mb-4">Les modalités de paiement acceptées sont :</p>
                <ul className="space-y-2">
                  <li>• Virement bancaire</li>
                  <li>• Chèque</li>
                  <li>• Espèces (pour les montants inférieurs à 20 000 MAD)</li>
                </ul>
                <p className="mt-4">Le paiement doit être effectué selon les échéances convenues dans le devis.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Exécution des prestations</h2>
              <p className="text-gray-600 leading-relaxed">
                Houkouki s'engage à exécuter les prestations avec diligence et professionnalisme. 
                Les délais d'exécution sont indicatifs et peuvent être prolongés en cas de force majeure ou 
                de nécessité liée à la complexité du dossier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Obligations du client</h2>
              <div className="text-gray-600 leading-relaxed">
                <p className="mb-4">Le client s'engage à :</p>
                <ul className="space-y-2">
                  <li>• Fournir toutes les informations nécessaires à la réalisation de la prestation</li>
                  <li>• Respecter les échéances de paiement</li>
                  <li>• Collaborer activement à la bonne exécution de la mission</li>
                  <li>• Informer Houkouki de tout changement susceptible d'affecter la prestation</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Confidentialité</h2>
              <p className="text-gray-600 leading-relaxed">
                Houkouki s'engage à respecter la confidentialité de toutes les informations qui lui sont communiquées 
                dans le cadre de ses missions. Cette obligation perdure au-delà de la fin de la relation contractuelle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Annulation et résiliation</h2>
              <p className="text-gray-600 leading-relaxed">
                Le client peut annuler sa commande dans un délai de 14 jours à compter de l'acceptation du devis, 
                sauf si la prestation a déjà commencé à être exécutée. Les sommes déjà versées seront remboursées 
                déduction faite des frais engagés.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Responsabilité</h2>
              <p className="text-gray-600 leading-relaxed">
                La responsabilité de Houkouki est limitée aux prestations effectivement réalisées. 
                Houkouki ne saurait être tenu responsable des conséquences des décisions prises par le client 
                sur la base des conseils fournis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Droit applicable et litiges</h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes CGV sont soumises au droit marocain. Tout litige sera soumis à la compétence 
                des tribunaux de Casablanca, après tentative de résolution amiable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                Pour toute question concernant ces CGV ou nos services, contactez-nous :
              </p>
              <div className="mt-4 space-y-2">
                <p>Email : contact@houkouki.com</p>
                <p>Téléphone : 0529 045 999</p>
                <p>Adresse : 27, Rue Ain Asserdoune, Quartier C.I.L, Casablanca</p>
              </div>
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

export default FrCGV;