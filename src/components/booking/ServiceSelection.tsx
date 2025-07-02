
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ServiceSelectionProps {
  services: string[];
  selectedService: string;
  onServiceChange: (service: string) => void;
}

const ServiceSelection = ({ services, selectedService, onServiceChange }: ServiceSelectionProps) => {
  const serviceStructure = [
    {
      title: "Consultation avec un juriste spécialisé",
      subServices: [
        "Droit de la famille (divorce, succession, garde)",
        "Droit du travail (contrat, licenciement)", 
        "Droit foncier et immobilier",
        "Droit commercial et des sociétés",
        "Droit des assurances",
        "Droit administratif"
      ]
    },
    {
      title: "Rédaction et audit de documents",
      subServices: [
        "Contrats (travail, location, vente)",
        "Conditions générales de vente",
        "Statuts de société",
        "Lettres officielles et mises en demeure"
      ]
    },
    {
      title: "Accompagnement administratif",
      subServices: [
        "Démarches d'état civil",
        "Procédures de succession", 
        "Autorisations et permis",
        "Recours administratifs"
      ]
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">1</span>
          </div>
          <span>Choisissez votre consultation juridique</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select value={selectedService} onValueChange={onServiceChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez un service juridique" />
          </SelectTrigger>
          <SelectContent className="max-h-80">
            {serviceStructure.map((mainService, index) => (
              <div key={index}>
                <SelectItem 
                  value={mainService.title}
                  disabled
                  className="font-semibold text-gray-900 bg-gray-50 cursor-default"
                >
                  • {mainService.title}
                </SelectItem>
                {mainService.subServices.map((subService, subIndex) => (
                  <SelectItem 
                    key={`${index}-${subIndex}`}
                    value={`${mainService.title} - ${subService}`}
                    className="pl-8 text-gray-700"
                  >
                    - {subService}
                  </SelectItem>
                ))}
              </div>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default ServiceSelection;
