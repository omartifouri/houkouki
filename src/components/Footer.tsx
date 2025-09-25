import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-purple text-white py-12">
      <div className="container mx-auto px-4">
        {/* Engagement Section */}
        <div className="bg-brand-purple/80 rounded-lg p-6 mb-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-brand-beige">
            Houkouki s'engage pour le civisme
          </h3>
          <p className="text-sm leading-relaxed max-w-4xl mx-auto">
            Avec notre initiative <span className="font-semibold text-brand-beige">Play Fair, Live Fair – L3eb nḍif, 3ich nḍif</span>, 
            nous promouvons chaque jour des gestes simples de respect, de solidarité et de responsabilité, 
            dans la vie quotidienne comme sur la route.
          </p>
          <p className="text-base font-medium mt-4 text-brand-beige">
            Ensemble, faisons du civisme notre plus belle victoire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact
              <div className="w-12 h-0.5 bg-brand-beige mt-2"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="bg-brand-coral p-2 rounded-full">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+212 529 045 999</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-brand-coral p-2 rounded-full">
                  <Mail className="h-4 w-4" />
                </div>
                <span>contact@houkouki.com</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-coral p-2 rounded-full mt-1">
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
              <div className="w-12 h-0.5 bg-brand-beige mt-2"></div>
            </h3>
            <div className="space-y-3">
              <Link to="/fr/qui-sommes-nous#top" className="block text-gray-300 hover:text-brand-beige transition-colors">
                Qui sommes-nous ?
              </Link>
              <Link to="/fr/tarifs#prestations-a-la-carte" className="block text-gray-300 hover:text-brand-beige transition-colors">
                Vous êtes particulier ?
              </Link>
              <Link to="/fr/tarifs#formule-entreprise-social" className="block text-gray-300 hover:text-brand-beige transition-colors">
                Vous êtes une entreprise ?
              </Link>
              <Link to="/fr/tarifs#abonnement-annuel" className="block text-gray-300 hover:text-brand-beige transition-colors">
                Abonnement annuel
              </Link>
              <Link to="/fr/tarifs#prestations-carte" className="block text-gray-300 hover:text-brand-beige transition-colors">
                Prestations à la carte (particulier)
              </Link>
              <Link to="/fr/tarifs#prestations-carte" className="block text-gray-300 hover:text-brand-beige transition-colors">
                Prestations à la carte (entreprise)
              </Link>
              <Link to="/fr/blog#top" className="block text-gray-300 hover:text-brand-beige transition-colors">
                Blog
              </Link>
              <Link to="/fr/contact#top" className="block text-gray-300 hover:text-brand-beige transition-colors">
                Contact
              </Link>
              <a href="https://www.ilaa.ma" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-brand-beige transition-colors">
                Soutien carrière
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Mentions légales
              <div className="w-12 h-0.5 bg-brand-beige mt-2"></div>
            </h3>
            <div className="space-y-3">
              <Link to="/fr/cgu#top" className="block text-gray-300 hover:text-brand-beige transition-colors">
                Conditions générales d'utilisation
              </Link>
              <Link to="/fr/cgv#top" className="block text-gray-300 hover:text-brand-beige transition-colors">
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