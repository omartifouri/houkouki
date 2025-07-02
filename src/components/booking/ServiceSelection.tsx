
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
      title: "Rendez-vous avec un psychologue clinicien",
      subServices: [
        "Clarification du projet professionnel",
        "Gestion du stress", 
        "Confiance en soi",
        "Préparation aux entretiens"
      ]
    },
    {
      title: "Rendez-vous avec un chargé de recrutement",
      subServices: [
        "Optimisation du CV",
        "Conseils sur la stratégie de recherche",
        "Mise en relation avec des recruteurs"
      ]
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-600 font-bold text-sm">1</span>
          </div>
          <span>Choisissez votre service</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select value={selectedService} onValueChange={onServiceChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez un service" />
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
