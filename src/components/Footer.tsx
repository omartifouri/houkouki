import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-red text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact
              <div className="w-12 h-0.5 bg-orange-500 mt-2"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-red-600 p-2 rounded-full">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+212 529 045 999</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-600 p-2 rounded-full">
                  <Mail className="h-4 w-4" />
                </div>
                <span>contact@houkouki.com</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-600 p-2 rounded-full mt-1">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div>27, Rue Ain Asserdoune</div>
                  <div>Quartier C.I.L</div>
                  <div>CASABLANCA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Nos liens
              <div className="w-12 h-0.5 bg-orange-500 mt-2"></div>
            </h3>
            <div className="space-y-3">
              <Link to="/fr/qui-sommes-nous#top" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Qui sommes-nous ?
              </Link>
              <Link to="/fr/profils#particulier" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Vous êtes particulier ?
              </Link>
              <Link to="/fr/profils#entreprise" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Vous êtes entreprise ?
              </Link>
              <Link to="/fr/tarifs#abonnement-annuel" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Abonnement annuel
              </Link>
              <Link to="/fr/offre" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Prestations à la carte (particulier)
              </Link>
              <Link to="/fr/prestations" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Prestations à la carte (entreprise)
              </Link>
              <Link to="/fr/blog" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Blog
              </Link>
              <Link to="/fr/contact#top" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Contact
              </Link>
              <a href="https://www.ilaa.ma" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Soutien carrière
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Mentions légales
              <div className="w-12 h-0.5 bg-orange-500 mt-2"></div>
            </h3>
            <div className="space-y-3">
              <Link to="/fr/cgu#top" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Conditions générales d'utilisation
              </Link>
              <Link to="/fr/cgv#top" className="block text-gray-300 hover:text-orange-400 transition-colors">
                Conditions générales de vente
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 HOUKOUKI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;