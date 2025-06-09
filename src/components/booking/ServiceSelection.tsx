
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ServiceSelectionProps {
  services: string[];
  selectedService: string;
  onServiceChange: (service: string) => void;
}

const ServiceSelection = ({ services, selectedService, onServiceChange }: ServiceSelectionProps) => {
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
          <SelectContent>
            {services.map((service, index) => (
              <SelectItem key={index} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default ServiceSelection;
