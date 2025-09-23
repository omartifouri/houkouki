import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ArabicNavigation = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-brand-purple text-white py-2 text-sm" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Right side - Hours and Email (RTL) */}
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>من الاثنين إلى الجمعة من 9 صباحاً إلى 7 مساءً والسبت من 9 صباحاً إلى 1 ظهراً</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@houkouki.com" className="hover:text-orange-400 transition-colors">
                  contact@houkouki.com
                </a>
              </div>
            </div>
            
            {/* Left side - Services and Phone (RTL) */}
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4">
              <a href="https://crm.hokouki.com/" target="_blank" rel="noopener noreferrer" className="bg-brand-tan hover:bg-brand-tan/80 text-white px-3 py-1 rounded text-sm transition-colors">
                منطقة المشتركين
              </a>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:0529045999" className="hover:text-orange-400 transition-colors font-medium">
                  0529 045 999
                </a>
              </div>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50" dir="rtl">
        <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/ar">
              <img 
                src="/lovable-uploads/dfdc0f4e-a6f8-4767-9a16-dccbe2acd2af.png" 
                alt="شعار ILAA" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                   <Link to="/ar" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                     الرئيسية
                   </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-brand-beige transition-colors">
                  روح حقوقي
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-brand-beige/20 to-brand-beige/10">
                  <div className="grid w-[300px] gap-2 p-4" dir="rtl">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/ar/about-us"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">من نحن؟</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          اكتشف فريقنا ومهمتنا
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/ar/approach"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">منهجيتنا</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          طريقة الدعم القانوني لدينا
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-brand-beige transition-colors">
                  خدماتنا
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gradient-to-br from-brand-beige/20 to-brand-beige/10">
                  <div className="grid w-[350px] gap-2 p-4" dir="rtl">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/ar/profiles"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">من أنت؟</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          أفراد، شركات ومغاربة العالم
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/ar/services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">خدماتنا</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          استشارة، صياغة، إجراءات إدارية
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/ar/legal-domains"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">مجالات القانون</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          أسرة، عمل، عقار، تجاري
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/ar/pricing" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                    أسعارنا
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/ar/blog" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                    المدونة والنصائح
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/ar/quote" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                    عرض سعر
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                   <Link to="/ar/contact" className="text-gray-600 hover:text-brand-beige transition-colors px-3 py-2">
                     اتصل بنا
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

export default ArabicNavigation;