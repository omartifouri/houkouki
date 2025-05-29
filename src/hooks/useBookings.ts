
import { useState, useEffect } from 'react';

export interface TimeSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  bookedBy?: string;
}

export interface Booking {
  id: string;
  userName: string;
  userEmail: string;
  service: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  registrationDate: string;
}

export const useBookings = () => {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  // Générer des créneaux disponibles pour les 30 prochains jours
  useEffect(() => {
    const slots: TimeSlot[] = [];
    const services = [
      'Identification des débouchés selon mon profil',
      'Renforcement de la confiance en soi',
      'Préparation mentale aux entretiens'
    ];

    for (let i = 1; i <= 30; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      
      // Créneaux de 9h à 17h
      for (let hour = 9; hour < 17; hour++) {
        slots.push({
          id: `${date.toISOString().split('T')[0]}-${hour}`,
          date: date.toISOString().split('T')[0],
          time: `${hour}:00`,
          available: Math.random() > 0.3 // 70% de chance d'être disponible
        });
      }
    }
    setTimeSlots(slots);
  }, []);

  const bookSlot = (slotId: string, userName: string, userEmail: string, service: string) => {
    const slot = timeSlots.find(s => s.id === slotId);
    if (!slot || !slot.available) return false;

    // Mettre à jour le créneau
    setTimeSlots(prev => prev.map(s => 
      s.id === slotId ? { ...s, available: false, bookedBy: userEmail } : s
    ));

    // Créer la réservation
    const newBooking: Booking = {
      id: Date.now().toString(),
      userName,
      userEmail,
      service,
      date: slot.date,
      time: slot.time,
      status: 'confirmed'
    };

    setBookings(prev => [...prev, newBooking]);

    // Ajouter l'utilisateur s'il n'existe pas
    if (!users.find(u => u.email === userEmail)) {
      const newUser: User = {
        id: Date.now().toString(),
        name: userName,
        email: userEmail,
        phone: '',
        registrationDate: new Date().toISOString().split('T')[0]
      };
      setUsers(prev => [...prev, newUser]);
    }

    return true;
  };

  const cancelBooking = (bookingId: string) => {
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;

    // Libérer le créneau
    setTimeSlots(prev => prev.map(s => 
      s.date === booking.date && s.time === booking.time 
        ? { ...s, available: true, bookedBy: undefined } 
        : s
    ));

    // Supprimer la réservation
    setBookings(prev => prev.filter(b => b.id !== bookingId));
  };

  return {
    timeSlots,
    bookings,
    users,
    bookSlot,
    cancelBooking
  };
};
