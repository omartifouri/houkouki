
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useBookings, Service } from '@/hooks/useBookings';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CalendarIcon, Clock, User, Mail, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Booking = () => {
  const { services, getAvailableSlots, addBooking } = useBookings();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const availableSlots = selectedDate ? getAvailableSlots(format(selectedDate, 'yyyy-MM-dd')) : [];

  const handleBooking = () => {
    if (!selectedService || !selectedDate || !selectedTime || !clientName || !clientEmail) {
      return;
    }

    addBooking({
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      date: format(selectedDate, 'yyyy-MM-dd'),
      time: selectedTime,
      clientName,
      clientEmail,
      status: 'confirmed'
    });

    setIsConfirmed(true);
  };

  const resetForm = () => {
    setSelectedService(null);
    setSelectedDate(undefined);
    setSelectedTime('');
    setClientName('');
    setClientEmail('');
    setIsConfirmed(false);
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-800">Rendez-vous confirmé !</CardTitle>
              <CardDescription>
                Votre rendez-vous a été enregistré avec succès
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg text-left">
                <h3 className="font-semibold mb-2">Détails du rendez-vous :</h3>
                <p><strong>Service :</strong> {selectedService?.name}</p>
                <p><strong>Date :</strong> {selectedDate && format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })}</p>
                <p><strong>Heure :</strong> {selectedTime}</p>
                <p><strong>Durée :</strong> {selectedService?.duration} minutes</p>
              </div>
              <p className="text-sm text-gray-600">
                Un email de confirmation sera envoyé à {clientEmail}
              </p>
              <Button onClick={resetForm} className="w-full">
                Prendre un autre rendez-vous
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Prendre rendez-vous
          </h1>
          <p className="text-xl text-gray-600">
            Choisissez votre service et réservez votre créneau
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sélection du service */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Choisir un service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={cn(
                    "p-4 rounded-lg border-2 cursor-pointer transition-all",
                    selectedService?.id === service.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  )}
                  onClick={() => setSelectedService(service)}
                >
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  <p className="text-sm font-medium text-blue-600 mt-2">
                    Durée : {service.duration} minutes
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Calendrier et créneaux */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Choisir une date et un créneau
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  className="rounded-md border"
                />
                
                {selectedDate && (
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Créneaux disponibles le {format(selectedDate, 'd MMMM yyyy', { locale: fr })}
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {availableSlots.map((slot) => (
                        <Button
                          key={slot.id}
                          variant={selectedTime === slot.time ? "default" : "outline"}
                          size="sm"
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.time)}
                          className="text-xs"
                        >
                          {slot.time}
                        </Button>
                      ))}
                    </div>
                    {availableSlots.every(slot => !slot.available) && (
                      <p className="text-sm text-gray-500 mt-2">
                        Aucun créneau disponible ce jour-là
                      </p>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Formulaire de contact */}
        {selectedService && selectedDate && selectedTime && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Vos informations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <Input
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Récapitulatif :</h3>
                  <p><strong>Service :</strong> {selectedService.name}</p>
                  <p><strong>Date :</strong> {format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })}</p>
                  <p><strong>Heure :</strong> {selectedTime}</p>
                  <p><strong>Durée :</strong> {selectedService.duration} minutes</p>
                </div>
              </div>
              
              <Button
                onClick={handleBooking}
                disabled={!clientName || !clientEmail}
                className="w-full mt-6"
                size="lg"
              >
                Confirmer le rendez-vous
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Booking;
