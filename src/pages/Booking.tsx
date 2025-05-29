
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, ArrowLeft } from "lucide-react";
import { useBookings } from "@/hooks/useBookings";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Booking = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);

  const { services, generateTimeSlots, addBooking } = useBookings();
  const { toast } = useToast();

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const timeSlots = selectedDate ? generateTimeSlots(formatDate(selectedDate)) : [];

  const handleSubmit = () => {
    if (!selectedService || !selectedDate || !selectedTime || !name || !email) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    const booking = addBooking({
      service: selectedService,
      date: formatDate(selectedDate),
      time: selectedTime,
      name,
      email,
      phone
    });

    toast({
      title: "Rendez-vous confirmé !",
      description: `Votre rendez-vous a été programmé pour le ${selectedDate.toLocaleDateString('fr-FR')} à ${selectedTime}.`
    });

    // Reset form
    setSelectedService("");
    setSelectedDate(undefined);
    setSelectedTime("");
    setName("");
    setEmail("");
    setPhone("");
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-2xl font-bold text-red-800">Houkouki</span>
            </div>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Réserver un rendez-vous
            </h1>
            <p className="text-xl text-gray-600">
              Choisissez votre service et sélectionnez un créneau disponible de 45 minutes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulaire de réservation */}
            <div className="space-y-6">
              {/* Étape 1: Sélection du service */}
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
                  <Select value={selectedService} onValueChange={setSelectedService}>
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

              {/* Étape 2: Sélection de la date */}
              {selectedService && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-[#C0997A] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <span>Choisissez une date</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>
              )}

              {/* Étape 3: Sélection de l'heure */}
              {selectedDate && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <span>Choisissez un créneau</span>
                    </CardTitle>
                    <CardDescription>Créneaux de 45 minutes disponibles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <Button
                          key={slot.time}
                          variant={selectedTime === slot.time ? "default" : "outline"}
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.time)}
                          className="justify-start"
                        >
                          <Clock className="h-4 w-4 mr-2" />
                          {slot.time}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Étape 4: Informations personnelles */}
              {selectedTime && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <span>Vos informations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone (optionnel)</Label>
                      <Input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Récapitulatif */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <Card>
                <CardHeader>
                  <CardTitle>Récapitulatif</CardTitle>
                  <CardDescription>Vérifiez les détails de votre rendez-vous</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedService && (
                    <div className="flex items-start space-x-3">
                      <User className="h-5 w-5 text-red-600 mt-0.5" />
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
                        <p className="text-sm text-gray-600">{selectedTime} (45 minutes)</p>
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
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                    >
                      Confirmer le rendez-vous
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
