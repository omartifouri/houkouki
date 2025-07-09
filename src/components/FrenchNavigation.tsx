import { Link } from "react-router-dom";
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
                <NavigationMenuContent>
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
                <NavigationMenuContent>
                  <div className="grid w-[350px] gap-2 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/fr/profils"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Profils accompagnés</div>
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
                  <Link to="/fr/impact" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                    Notre impact
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
  );
};

export default FrenchNavigation;