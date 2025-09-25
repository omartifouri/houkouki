import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const EnglishNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
                <span>Monday to Friday 9am to 7pm and Saturday 9am to 1pm</span>
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
                Subscriber Area
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
            <Link to="/en">
              <img 
                src="/lovable-uploads/dfdc0f4e-a6f8-4767-9a16-dccbe2acd2af.png" 
                alt="ILAA Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                   <Link to="/en" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                     Home
                   </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-brand-beige transition-colors">
                  About Houkouki
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-brand-beige/20 to-brand-beige/10">
                  <div className="grid w-[300px] gap-2 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/en/about-us"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Who are we?</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover our team and mission
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/en/approach"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Our approach</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Our legal support methodology
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-brand-beige transition-colors">
                  Our Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-brand-beige/20 to-brand-beige/10">
                  <div className="grid w-[350px] gap-2 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/en/profiles"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Who are you?</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Individuals, businesses and MRE
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/en/services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Our services</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Consultation, drafting, administrative procedures
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/en/legal-domains"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Legal areas</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Family, labor, real estate, commercial
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/en/pricing" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/en/blog" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                    Blog & Advice
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/en/quote" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                    Quote
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                   <Link to="/en/contact" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
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
                to="/en" 
                className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">About Houkouki</div>
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/en/about-us" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Who are we?
                  </Link>
                  <Link 
                    to="/en/approach" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our approach
                  </Link>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">Our Services</div>
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/en/profiles" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Who are you?
                  </Link>
                  <Link 
                    to="/en/services" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our services
                  </Link>
                  <Link 
                    to="/en/legal-domains" 
                    className="block text-gray-600 hover:text-brand-beige transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Legal areas
                  </Link>
                </div>
              </div>

              <Link 
                to="/en/pricing" 
                className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <Link 
                to="/en/blog" 
                className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog & Advice
              </Link>
              
              <Link 
                to="/en/quote" 
                className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quote
              </Link>
              
              <Link 
                to="/en/contact" 
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

export default EnglishNavigation;