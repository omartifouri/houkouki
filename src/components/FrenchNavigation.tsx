import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Globe } from "lucide-react";
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
      <div className="bg-slate-900 text-white py-2 text-sm">
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
                <a href="mailto:contact@houkouki.com" className="hover:text-orange-400 transition-colors">
                  contact@houkouki.com
                </a>
              </div>
            </div>
            
            {/* Right side - Services and Phone */}
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4">
              <Link to="/dashboard" className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm transition-colors">
                Espace abonnés
              </Link>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:0529045999" className="hover:text-orange-400 transition-colors font-medium">
                  0529 045 999
                </a>
              </div>
              <button className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </button>
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
                src="/lovable-uploads/5d7e7c1c-ebd4-4271-a028-9798957bf332.png" 
                alt="Houkouki Logo" 
                className="h-10 w-auto"
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
                <NavigationMenuLink asChild>
                  <Link to="/fr/tarifs" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                    Nos tarifs
                  </Link>
                </NavigationMenuLink>
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
                  <Link to="/fr/devis" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                    Devis
                  </Link>
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