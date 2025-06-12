
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

interface ServiceSelectionProps {
  services: string[];
  selectedService: string;
  onServiceChange: (service: string) => void;
}

const ServiceSelection = ({ services, selectedService, onServiceChange }: ServiceSelectionProps) => {
  const mainServices = [
    {
      value: "psychologue",
      title: "Rendez-vous avec un psychologue clinicien",
      subServices: [
        "Clarification du projet professionnel",
        "Gestion du stress", 
        "Confiance en soi",
        "Préparation aux entretiens"
      ]
    },
    {
      value: "recruteur",
      title: "Rendez-vous avec un chargé de recrutement",
      subServices: [
        "Optimisation du CV",
        "Conseils sur la stratégie de recherche",
        "Mise en relation avec des recruteurs"
      ]
    }
  ];

  // Extraire le type de service principal à partir de la sélection actuelle
  const getMainServiceFromSelection = (selection: string) => {
    if (selection.includes("psychologue clinicien")) return "psychologue";
    if (selection.includes("chargé de recrutement")) return "recruteur";
    return "";
  };

  const selectedMainService = getMainServiceFromSelection(selectedService);
  const selectedMainServiceData = mainServices.find(s => s.value === selectedMainService);

  const handleMainServiceChange = (value: string) => {
    // Réinitialiser la sélection quand on change le service principal
    onServiceChange("");
  };

  const handleSubServiceChange = (value: string) => {
    const mainServiceData = mainServices.find(s => s.value === selectedMainService);
    if (mainServiceData) {
      onServiceChange(`${mainServiceData.title} - ${value}`);
    }
  };

  // Extraire le sous-service à partir de la sélection complète
  const getSubServiceFromSelection = (selection: string) => {
    if (!selection || !selection.includes(" - ")) return "";
    return selection.split(" - ")[1];
  };

  const selectedSubService = getSubServiceFromSelection(selectedService);

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
      <CardContent className="space-y-4">
        {/* Première étape : Sélection du type de professionnel */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de rendez-vous
          </label>
          <Select value={selectedMainService} onValueChange={handleMainServiceChange}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez le type de professionnel" />
            </SelectTrigger>
            <SelectContent>
              {mainServices.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Deuxième étape : Sélection du service spécifique */}
        {selectedMainService && selectedMainServiceData && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service spécifique
            </label>
            <Select value={selectedSubService} onValueChange={handleSubServiceChange}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez un service spécifique" />
              </SelectTrigger>
              <SelectContent>
                {selectedMainServiceData.subServices.map((subService, index) => (
                  <SelectItem key={index} value={subService}>
                    {subService}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Affichage du service sélectionné complet */}
        {selectedService && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-green-800 mb-1">Service sélectionné :</h4>
                <p className="text-sm text-green-700">{selectedService}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceSelection;
