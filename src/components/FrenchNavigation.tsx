import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import ContactForm from "./ContactForm";
import { useState } from "react";
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const FrenchNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToSection } = useScrollToAnchor();

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname === '/fr/tarifs') {
      // Si on est déjà sur la page tarifs, on scroll directement vers la section
      scrollToSection(sectionId);
    } else {
      // Sinon on navigue vers la page avec l'ancre
      navigate(`/fr/tarifs#${sectionId}`);
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-brand-purple text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Left side - Hours and Email */}
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Du lundi au vendredi de 9h00 à 19h et samedi de 9h à 13h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@houkouki.com" className="hover:text-brand-beige transition-colors">
                  contact@houkouki.com
                </a>
              </div>
            </div>
            
            {/* Right side - Services and Phone */}
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4">
              <a href="https://crm.hokouki.com/" target="_blank" rel="noopener noreferrer" className="bg-brand-beige hover:bg-brand-beige/80 text-white px-3 py-1 rounded text-sm transition-colors">
                Espace abonnés
              </a>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:0529045999" className="hover:text-brand-beige transition-colors font-medium">
                  0529 045 999
                </a>
              </div>
              {/* <LanguageSelector /> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/fr">
              <img 
                src="/lovable-uploads/a2e35cca-9c41-4eed-b0c7-c784e87900a7.png" 
                alt="HOUKOUKI Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                   <Link to="/fr" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                     Accueil
                   </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-brand-beige transition-colors">
                  L'esprit Houkouki
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-brand-beige/20 to-brand-beige/10">
                  <div className="grid w-[300px] gap-2 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/fr/qui-sommes-nous"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Qui sommes-nous ?</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Découvrez notre équipe et notre mission
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/fr/approche"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Notre approche</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Notre méthode d'accompagnement juridique
                        </p>
                      </Link>
                     </NavigationMenuLink>
                     <NavigationMenuLink asChild>
                       <Link
                         to="/fr/rse#top"
                         className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                       >
                         <div className="text-sm font-medium leading-none">Notre vision RSE</div>
                         <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                           Notre responsabilité sociétale d'entreprise
                         </p>
                       </Link>
                     </NavigationMenuLink>
                   </div>
                 </NavigationMenuContent>
               </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-brand-beige transition-colors">
                  Notre offre
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-brand-beige/20 to-brand-beige/10">
                  <div className="grid w-[350px] gap-2 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/fr/profils"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Vous êtes ?</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Particuliers, entreprises et MRE
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/fr/prestations"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Nos prestations</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Conseil, rédaction, démarches administratives
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/fr/domaines"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Nos domaines de droit</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Famille, travail, immobilier, commercial
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-brand-beige transition-colors">
                  Nos formules et tarifs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-96 p-4">
                    <a 
                      href="/fr/tarifs#abonnement-annuel" 
                      className="block p-3 hover:bg-gray-50 rounded-md"
                      onClick={(e) => {
                        if (window.location.pathname === '/fr/tarifs') {
                          e.preventDefault();
                          const element = document.getElementById('abonnement-annuel');
                          if (element) {
                            const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                            const elementPosition = element.offsetTop - headerHeight - 20;
                            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                          }
                        }
                      }}
                    >
                      <div className="font-medium">Abonnement</div>
                      <p className="text-sm text-gray-600">Formules d'abonnement annuel</p>
                    </a>
                    <a 
                      href="/fr/tarifs#prestations-a-la-carte" 
                      className="block p-3 hover:bg-gray-50 rounded-md"
                      onClick={(e) => {
                        if (window.location.pathname === '/fr/tarifs') {
                          e.preventDefault();
                          const element = document.getElementById('prestations-a-la-carte');
                          if (element) {
                            const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                            const elementPosition = element.offsetTop - headerHeight - 20;
                            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                          }
                        }
                      }}
                    >
                      <div className="font-medium">À la carte</div>
                      <p className="text-sm text-gray-600">Prestations ponctuelles</p>
                    </a>
                    <a 
                      href="/fr/tarifs#formule-entreprise-social" 
                      className="block p-3 hover:bg-gray-50 rounded-md"
                      onClick={(e) => {
                        if (window.location.pathname === '/fr/tarifs') {
                          e.preventDefault();
                          const element = document.getElementById('formule-entreprise-social');
                          if (element) {
                            const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                            const elementPosition = element.offsetTop - headerHeight - 20;
                            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                          }
                        }
                      }}
                    >
                      <div className="font-medium">Formule entreprise et employés</div>
                      <p className="text-sm text-gray-600">Solutions sur mesure</p>
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>


              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/fr/blog" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                    Blog & Conseils
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a 
                    href="https://www.ilaa.ma" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2"
                  >
                    Soutien carrière
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

               <NavigationMenuItem>
                 <NavigationMenuLink asChild>
                    <Link to="/fr/contact" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                      Contact
                    </Link>
                 </NavigationMenuLink>
               </NavigationMenuItem>

             </NavigationMenuList>
           </NavigationMenu>

           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="md:hidden p-2 rounded-md text-gray-600 hover:text-brand-beige transition-colors"
             aria-label="Toggle mobile menu"
           >
             {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
           </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                to="/fr" 
                className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              
              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">L'esprit Houkouki</div>
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/fr/qui-sommes-nous" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Qui sommes-nous ?
                  </Link>
                  <Link 
                    to="/fr/approche" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Notre approche
                  </Link>
                  <Link 
                    to="/fr/rse#top" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Notre vision RSE
                  </Link>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">Notre offre</div>
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/fr/profils" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Vous êtes ?
                  </Link>
                  <Link 
                    to="/fr/prestations" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Nos prestations
                  </Link>
                  <Link 
                    to="/fr/domaines" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Nos domaines de droit
                  </Link>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">Nos formules et tarifs</div>
                <div className="pl-4 space-y-1">
                  <a 
                    href="/fr/tarifs#abonnement-annuel" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (window.location.pathname === '/fr/tarifs') {
                        e.preventDefault();
                        document.getElementById('abonnement-annuel')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Abonnement
                  </a>
                  <a 
                    href="/fr/tarifs#prestations-a-la-carte" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (window.location.pathname === '/fr/tarifs') {
                        e.preventDefault();
                        document.getElementById('prestations-a-la-carte')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    À la carte
                  </a>
                  <a 
                    href="/fr/tarifs#formule-entreprise-social" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (window.location.pathname === '/fr/tarifs') {
                        e.preventDefault();
                        document.getElementById('formule-entreprise-social')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Formule entreprise et employés
                  </a>
                </div>
              </div>

              <Link 
                to="/fr/blog" 
                className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog & Conseils
              </Link>
              
              <a 
                href="https://www.ilaa.ma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Soutien carrière
              </a>
              
              <Link 
                to="/fr/contact" 
                className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
        </div>
      </header>
    </>
  );
};

export default FrenchNavigation;