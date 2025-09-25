import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import ContactForm from "./ContactForm";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const FrenchNavigation = () => {
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
                    <Link to="/fr/tarifs#abonnement-annuel" className="block p-3 hover:bg-gray-50 rounded-md">
                      <div className="font-medium">Abonnement</div>
                      <p className="text-sm text-gray-600">Formules d'abonnement annuel</p>
                    </Link>
                    <Link to="/fr/tarifs#prestations-carte" className="block p-3 hover:bg-gray-50 rounded-md">
                      <div className="font-medium">À la carte</div>
                      <p className="text-sm text-gray-600">Prestations ponctuelles</p>
                    </Link>
                    <Link to="/fr/contact" className="block p-3 hover:bg-gray-50 rounded-md">
                      <div className="font-medium">Formule entreprise et employés</div>
                      <p className="text-sm text-gray-600">Solutions sur mesure</p>
                    </Link>
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
        </nav>
        </div>
      </header>
    </>
  );
};

export default FrenchNavigation;