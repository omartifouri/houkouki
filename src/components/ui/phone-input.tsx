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
  { code: "+1", country: "US", name: "États-Unis", flag: "https://flagcdn.com/w20/us.png" },
  { code: "+44", country: "GB", name: "Royaume-Uni", flag: "https://flagcdn.com/w20/gb.png" },
  { code: "+49", country: "DE", name: "Allemagne", flag: "https://flagcdn.com/w20/de.png" },
  { code: "+34", country: "ES", name: "Espagne", flag: "https://flagcdn.com/w20/es.png" },
  { code: "+39", country: "IT", name: "Italie", flag: "https://flagcdn.com/w20/it.png" },
  { code: "+31", country: "NL", name: "Pays-Bas", flag: "https://flagcdn.com/w20/nl.png" },
  { code: "+32", country: "BE", name: "Belgique", flag: "https://flagcdn.com/w20/be.png" },
  { code: "+41", country: "CH", name: "Suisse", flag: "https://flagcdn.com/w20/ch.png" },
  { code: "+213", country: "DZ", name: "Algérie", flag: "https://flagcdn.com/w20/dz.png" },
  { code: "+216", country: "TN", name: "Tunisie", flag: "https://flagcdn.com/w20/tn.png" },
  { code: "+966", country: "SA", name: "Arabie Saoudite", flag: "https://flagcdn.com/w20/sa.png" },
  { code: "+971", country: "AE", name: "Émirats Arabes Unis", flag: "https://flagcdn.com/w20/ae.png" },
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
      <div className="flex">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[120px] justify-between rounded-r-none border-r-0 bg-background"
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
          className={cn("rounded-l-none", className)}
          placeholder="6 XX XX XX XX"
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";