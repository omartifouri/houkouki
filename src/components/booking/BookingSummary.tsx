
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, User, Mail, Phone } from "lucide-react";

interface BookingSummaryProps {
  selectedService: string;
  selectedDate: Date | undefined;
  selectedTime: string;
  name: string;
  email: string;
  phone: string;
  getEndTime: (startTime: string) => string;
  onSubmit: () => void;
}

const BookingSummary = ({ 
  selectedService, 
  selectedDate, 
  selectedTime, 
  name, 
  email, 
  phone, 
  getEndTime, 
  onSubmit 
}: BookingSummaryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Récapitulatif</CardTitle>
        <CardDescription>Vérifiez les détails de votre rendez-vous</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {selectedService && (
          <div className="flex items-start space-x-3">
            <User className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">Service</p>
              <p className="text-sm text-gray-600">{selectedService}</p>
            </div>
          </div>
        )}

        {selectedDate && (
          <div className="flex items-start space-x-3">
            <CalendarIcon className="h-5 w-5 text-[#C0997A] mt-0.5" />
            <div>
              <p className="font-medium">Date</p>
              <p className="text-sm text-gray-600">
                {selectedDate.toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        )}

        {selectedTime && (
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-purple-600 mt-0.5" />
            <div>
              <p className="font-medium">Heure</p>
              <p className="text-sm text-gray-600">{selectedTime} - {getEndTime(selectedTime)} (60 minutes)</p>
            </div>
          </div>
        )}

        {name && (
          <div className="flex items-start space-x-3">
            <User className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium">Contact</p>
              <p className="text-sm text-gray-600">{name}</p>
              <p className="text-sm text-gray-600">{email}</p>
              {phone && <p className="text-sm text-gray-600">{phone}</p>}
            </div>
          </div>
        )}

        {selectedService && selectedDate && selectedTime && name && email && (
          <Button 
            onClick={onSubmit}
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80"
          >
            Confirmer le rendez-vous
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingSummary;
