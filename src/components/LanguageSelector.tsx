import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation, useNavigate } from "react-router-dom";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇲🇦" },
];

const LanguageSelector = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine current language from URL
  const getCurrentLanguage = () => {
    const pathParts = location.pathname.split('/');
    const langCode = pathParts[1];
    return languages.find(lang => lang.code === langCode) || languages[0];
  };

  const currentLang = getCurrentLanguage();

  const handleLanguageChange = (newLangCode: string) => {
    const pathParts = location.pathname.split('/');
    
    // Replace language code in URL or add it
    if (languages.some(lang => lang.code === pathParts[1])) {
      pathParts[1] = newLangCode;
    } else {
      pathParts.splice(1, 0, newLangCode);
    }
    
    const newPath = pathParts.join('/');
    navigate(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-brand-beige transition-colors">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLang.name}</span>
          <span className="sm:hidden">{currentLang.flag}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center space-x-2 ${
              currentLang.code === lang.code ? "bg-brand-beige/20 text-brand-beige" : ""
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;