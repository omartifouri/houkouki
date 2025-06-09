
import { useState, useEffect } from 'react';
import { useBookings } from "@/hooks/useBookings";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import BookingHeader from "@/components/booking/BookingHeader";
import ServiceSelection from "@/components/booking/ServiceSelection";
import DateSelection from "@/components/booking/DateSelection";
import TimeSelection from "@/components/booking/TimeSelection";
import PersonalInfoForm from "@/components/booking/PersonalInfoForm";
import BookingSummary from "@/components/booking/BookingSummary";

const Booking = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { services, generateTimeSlots, addBooking } = useBookings();
  const { toast } = useToast();
  const { user } = useAuth();

  // Pré-remplir les informations si l'utilisateur est connecté
  useEffect(() => {
    if (user) {
      console.log("User data:", user);
      console.log("User metadata:", user.user_metadata);
      
      // Toujours remplir l'email
      setEmail(user.email || "");
      
      // Récupérer les métadonnées utilisateur si disponibles
      const metadata = user.user_metadata;
      if (metadata) {
        // Essayer différentes clés possibles pour le nom
        const firstName = metadata.firstName || metadata.first_name || '';
        const lastName = metadata.lastName || metadata.last_name || '';
        const fullName = `${firstName} ${lastName}`.trim();
        
        if (fullName) {
          setName(fullName);
        }
        
        // Récupérer le téléphone
        const userPhone = metadata.phone || '';
        if (userPhone) {
          setPhone(userPhone);
        }
      }
    }
  }, [user]);

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  // Fonction pour calculer l'heure de fin d'un créneau
  const getEndTime = (startTime: string): string => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const startDate = new Date();
    startDate.setHours(hours, minutes, 0, 0);
    
    // Ajouter 60 minutes
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);
    
    const endHours = endDate.getHours().toString().padStart(2, '0');
    const endMinutes = endDate.getMinutes().toString().padStart(2, '0');
    
    return `${endHours}:${endMinutes}`;
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
    // Ne pas réinitialiser les informations utilisateur si connecté
    if (!user) {
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <BookingHeader user={user} />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Réserver un rendez-vous
            </h1>
            <p className="text-xl text-gray-600">
              Choisissez votre service et sélectionnez un créneau disponible de 60 minutes
            </p>
            {user && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg inline-block">
                <p className="text-blue-800 text-sm">
                  ✓ Connecté en tant que {user.email}
                </p>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulaire de réservation */}
            <div className="space-y-6">
              <ServiceSelection 
                services={services}
                selectedService={selectedService}
                onServiceChange={setSelectedService}
              />

              {selectedService && (
                <DateSelection 
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                />
              )}

              {selectedDate && (
                <TimeSelection 
                  timeSlots={timeSlots}
                  selectedTime={selectedTime}
                  onTimeSelect={setSelectedTime}
                  getEndTime={getEndTime}
                />
              )}

              {selectedTime && (
                <PersonalInfoForm 
                  user={user}
                  name={name}
                  email={email}
                  phone={phone}
                  onNameChange={setName}
                  onEmailChange={setEmail}
                  onPhoneChange={setPhone}
                />
              )}
            </div>

            {/* Récapitulatif */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <BookingSummary 
                selectedService={selectedService}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                name={name}
                email={email}
                phone={phone}
                getEndTime={getEndTime}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
