import * as React from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const countries = [
  { code: "+212", country: "MA", name: "Maroc", flag: "https://flagcdn.com/w20/ma.png" },
  { code: "+33", country: "FR", name: "France", flag: "https://flagcdn.com/w20/fr.png" },
  { code: "+213", country: "DZ", name: "Algérie", flag: "https://flagcdn.com/w20/dz.png" },
  { code: "+216", country: "TN", name: "Tunisie", flag: "https://flagcdn.com/w20/tn.png" },
  { code: "+1", country: "US", name: "États-Unis", flag: "https://flagcdn.com/w20/us.png" },
  { code: "+1", country: "CA", name: "Canada", flag: "https://flagcdn.com/w20/ca.png" },
  { code: "+44", country: "GB", name: "Royaume-Uni", flag: "https://flagcdn.com/w20/gb.png" },
  { code: "+49", country: "DE", name: "Allemagne", flag: "https://flagcdn.com/w20/de.png" },
  { code: "+34", country: "ES", name: "Espagne", flag: "https://flagcdn.com/w20/es.png" },
  { code: "+39", country: "IT", name: "Italie", flag: "https://flagcdn.com/w20/it.png" },
  { code: "+31", country: "NL", name: "Pays-Bas", flag: "https://flagcdn.com/w20/nl.png" },
  { code: "+32", country: "BE", name: "Belgique", flag: "https://flagcdn.com/w20/be.png" },
  { code: "+41", country: "CH", name: "Suisse", flag: "https://flagcdn.com/w20/ch.png" },
  { code: "+43", country: "AT", name: "Autriche", flag: "https://flagcdn.com/w20/at.png" },
  { code: "+45", country: "DK", name: "Danemark", flag: "https://flagcdn.com/w20/dk.png" },
  { code: "+46", country: "SE", name: "Suède", flag: "https://flagcdn.com/w20/se.png" },
  { code: "+47", country: "NO", name: "Norvège", flag: "https://flagcdn.com/w20/no.png" },
  { code: "+358", country: "FI", name: "Finlande", flag: "https://flagcdn.com/w20/fi.png" },
  { code: "+48", country: "PL", name: "Pologne", flag: "https://flagcdn.com/w20/pl.png" },
  { code: "+351", country: "PT", name: "Portugal", flag: "https://flagcdn.com/w20/pt.png" },
  { code: "+30", country: "GR", name: "Grèce", flag: "https://flagcdn.com/w20/gr.png" },
  { code: "+90", country: "TR", name: "Turquie", flag: "https://flagcdn.com/w20/tr.png" },
  { code: "+7", country: "RU", name: "Russie", flag: "https://flagcdn.com/w20/ru.png" },
  { code: "+86", country: "CN", name: "Chine", flag: "https://flagcdn.com/w20/cn.png" },
  { code: "+81", country: "JP", name: "Japon", flag: "https://flagcdn.com/w20/jp.png" },
  { code: "+82", country: "KR", name: "Corée du Sud", flag: "https://flagcdn.com/w20/kr.png" },
  { code: "+91", country: "IN", name: "Inde", flag: "https://flagcdn.com/w20/in.png" },
  { code: "+61", country: "AU", name: "Australie", flag: "https://flagcdn.com/w20/au.png" },
  { code: "+64", country: "NZ", name: "Nouvelle-Zélande", flag: "https://flagcdn.com/w20/nz.png" },
  { code: "+55", country: "BR", name: "Brésil", flag: "https://flagcdn.com/w20/br.png" },
  { code: "+52", country: "MX", name: "Mexique", flag: "https://flagcdn.com/w20/mx.png" },
  { code: "+54", country: "AR", name: "Argentine", flag: "https://flagcdn.com/w20/ar.png" },
  { code: "+56", country: "CL", name: "Chili", flag: "https://flagcdn.com/w20/cl.png" },
  { code: "+57", country: "CO", name: "Colombie", flag: "https://flagcdn.com/w20/co.png" },
  { code: "+51", country: "PE", name: "Pérou", flag: "https://flagcdn.com/w20/pe.png" },
  { code: "+58", country: "VE", name: "Venezuela", flag: "https://flagcdn.com/w20/ve.png" },
  { code: "+966", country: "SA", name: "Arabie Saoudite", flag: "https://flagcdn.com/w20/sa.png" },
  { code: "+971", country: "AE", name: "Émirats Arabes Unis", flag: "https://flagcdn.com/w20/ae.png" },
  { code: "+974", country: "QA", name: "Qatar", flag: "https://flagcdn.com/w20/qa.png" },
  { code: "+965", country: "KW", name: "Koweït", flag: "https://flagcdn.com/w20/kw.png" },
  { code: "+968", country: "OM", name: "Oman", flag: "https://flagcdn.com/w20/om.png" },
  { code: "+973", country: "BH", name: "Bahreïn", flag: "https://flagcdn.com/w20/bh.png" },
  { code: "+962", country: "JO", name: "Jordanie", flag: "https://flagcdn.com/w20/jo.png" },
  { code: "+961", country: "LB", name: "Liban", flag: "https://flagcdn.com/w20/lb.png" },
  { code: "+963", country: "SY", name: "Syrie", flag: "https://flagcdn.com/w20/sy.png" },
  { code: "+964", country: "IQ", name: "Irak", flag: "https://flagcdn.com/w20/iq.png" },
  { code: "+98", country: "IR", name: "Iran", flag: "https://flagcdn.com/w20/ir.png" },
  { code: "+972", country: "IL", name: "Israël", flag: "https://flagcdn.com/w20/il.png" },
  { code: "+20", country: "EG", name: "Égypte", flag: "https://flagcdn.com/w20/eg.png" },
  { code: "+218", country: "LY", name: "Libye", flag: "https://flagcdn.com/w20/ly.png" },
  { code: "+27", country: "ZA", name: "Afrique du Sud", flag: "https://flagcdn.com/w20/za.png" },
  { code: "+234", country: "NG", name: "Nigéria", flag: "https://flagcdn.com/w20/ng.png" },
  { code: "+254", country: "KE", name: "Kenya", flag: "https://flagcdn.com/w20/ke.png" },
  { code: "+233", country: "GH", name: "Ghana", flag: "https://flagcdn.com/w20/gh.png" },
  { code: "+60", country: "MY", name: "Malaisie", flag: "https://flagcdn.com/w20/my.png" },
  { code: "+65", country: "SG", name: "Singapour", flag: "https://flagcdn.com/w20/sg.png" },
  { code: "+66", country: "TH", name: "Thaïlande", flag: "https://flagcdn.com/w20/th.png" },
  { code: "+84", country: "VN", name: "Vietnam", flag: "https://flagcdn.com/w20/vn.png" },
  { code: "+63", country: "PH", name: "Philippines", flag: "https://flagcdn.com/w20/ph.png" },
  { code: "+62", country: "ID", name: "Indonésie", flag: "https://flagcdn.com/w20/id.png" },
];

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: string;
  onChange?: (value: string) => void;
  defaultCountry?: string;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value = "", onChange, defaultCountry = "+212", className, ...props }, ref) => {
    const [selectedCountry, setSelectedCountry] = React.useState(
      countries.find(c => c.code === defaultCountry) || countries[0]
    );
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      if (value) {
        const country = countries.find(c => value.startsWith(c.code));
        if (country) {
          setSelectedCountry(country);
          setPhoneNumber(value.replace(country.code, "").trim());
        } else {
          setPhoneNumber(value);
        }
      }
    }, [value]);

    const handlePhoneChange = (newPhone: string) => {
      setPhoneNumber(newPhone);
      const fullNumber = `${selectedCountry.code} ${newPhone}`.trim();
      onChange?.(fullNumber);
    };

    const handleCountrySelect = (country: typeof countries[0]) => {
      setSelectedCountry(country);
      setOpen(false);
      const fullNumber = `${country.code} ${phoneNumber}`.trim();
      onChange?.(fullNumber);
    };

    return (
      <div className="flex items-stretch">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[120px] justify-between rounded-r-none border-r-0 bg-background h-10 px-3"
            >
              <span className="flex items-center gap-2">
                <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-4 h-3 object-cover" />
                <span className="text-sm">{selectedCountry.code}</span>
              </span>
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[280px] p-0 bg-background border shadow-md">
            <Command>
              <CommandInput placeholder="Rechercher un pays..." />
              <CommandEmpty>Aucun pays trouvé.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  {countries.map((country) => (
                    <CommandItem
                      key={country.country}
                      value={`${country.name} ${country.code}`}
                      onSelect={() => handleCountrySelect(country)}
                      className="cursor-pointer"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <img src={country.flag} alt={country.name} className="w-4 h-3 object-cover" />
                        <span className="flex-1">{country.name}</span>
                        <span className="text-muted-foreground text-sm">{country.code}</span>
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            selectedCountry.country === country.country ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Input
          {...props}
          ref={ref}
          value={phoneNumber}
          onChange={(e) => handlePhoneChange(e.target.value)}
          className={cn("rounded-l-none h-10", className)}
          placeholder="6 XX XX XX XX"
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";