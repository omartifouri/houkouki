
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { useBookings } from '@/hooks/useBookings';
import { toast } from '@/hooks/use-toast';

const Booking = () => {
  const { timeSlots, bookSlot } = useBookings();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const services = [
    'Identification des débouchés selon mon profil',
    'Renforcement de la confiance en soi',
    'Préparation mentale aux entretiens'
  ];

  const availableTimesForDate = selectedDate
    ? timeSlots.filter(slot => 
        slot.date === selectedDate.toISOString().split('T')[0] && slot.available
      )
    : [];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedService || !userName || !userEmail) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive"
      });
      return;
    }

    const slotId = `${selectedDate.toISOString().split('T')[0]}-${selectedTime.split(':')[0]}`;
    const success = bookSlot(slotId, userName, userEmail, selectedService);

    if (success) {
      toast({
        title: "Réservation confirmée",
        description: `Votre rendez-vous est confirmé pour le ${selectedDate.toLocaleDateString()} à ${selectedTime}`,
      });
      
      // Réinitialiser le formulaire
      setSelectedDate(undefined);
      setSelectedTime('');
      setSelectedService('');
      setUserName('');
      setUserEmail('');
    } else {
      toast({
        title: "Erreur",
        description: "Ce créneau n'est plus disponible",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Prendre rendez-vous</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Sélection du service */}
        <Card>
          <CardHeader>
            <CardTitle>Choisissez votre service</CardTitle>
            <CardDescription>Sélectionnez le type d'accompagnement souhaité</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedService} onValueChange={setSelectedService}>
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={service} id={`service-${index}`} />
                  <Label htmlFor={`service-${index}`} className="font-normal cursor-pointer">
                    {service}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Sélection de la date */}
        <Card>
          <CardHeader>
            <CardTitle>Choisissez une date</CardTitle>
            <CardDescription>Sélectionnez la date de votre rendez-vous</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date()}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Sélection de l'heure */}
        {selectedDate && (
          <Card>
            <CardHeader>
              <CardTitle>Créneaux disponibles</CardTitle>
              <CardDescription>
                Créneaux pour le {selectedDate.toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {availableTimesForDate.length > 0 ? (
                <div className="grid grid-cols-4 gap-2">
                  {availableTimesForDate.map((slot) => (
                    <Button
                      key={slot.id}
                      variant={selectedTime === slot.time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(slot.time)}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">Aucun créneau disponible pour cette date</p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Informations personnelles */}
        <Card>
          <CardHeader>
            <CardTitle>Vos informations</CardTitle>
            <CardDescription>Renseignez vos coordonnées</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Nom complet</Label>
              <Input
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Votre nom complet"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="votre.email@exemple.com"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Récapitulatif et confirmation */}
      {selectedService && selectedDate && selectedTime && userName && userEmail && (
        <Card className="max-w-2xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>Récapitulatif de votre réservation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <p><strong>Service :</strong> {selectedService}</p>
              <p><strong>Date :</strong> {selectedDate.toLocaleDateString()}</p>
              <p><strong>Heure :</strong> {selectedTime}</p>
              <p><strong>Nom :</strong> {userName}</p>
              <p><strong>Email :</strong> {userEmail}</p>
            </div>
            <Button onClick={handleBooking} className="w-full">
              Confirmer la réservation
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Booking;
