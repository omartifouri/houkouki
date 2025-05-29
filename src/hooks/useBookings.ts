
import { useState, useEffect } from 'react';

export interface Service {
  id: string;
  name: string;
  duration: number; // en minutes
  description: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  clientName: string;
  clientEmail: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export const services: Service[] = [
  {
    id: 'identification',
    name: 'Identification des débouchés selon mon profil',
    duration: 60,
    description: 'Analyse personnalisée de vos compétences et identification des opportunités professionnelles'
  },
  {
    id: 'confiance',
    name: 'Renforcement de la confiance en soi',
    duration: 45,
    description: 'Séance de coaching pour développer votre confiance et votre assurance professionnelle'
  },
  {
    id: 'preparation',
    name: 'Préparation mentale aux entretiens',
    duration: 90,
    description: 'Préparation complète aux entretiens avec simulation et conseils personnalisés'
  }
];

export const useBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Générer les créneaux horaires disponibles pour une date donnée
  const getAvailableSlots = (date: string): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const startHour = 9;
    const endHour = 17;
    
    for (let hour = startHour; hour < endHour; hour++) {
      const timeSlot = `${hour.toString().padStart(2, '0')}:00`;
      const slotId = `${date}-${timeSlot}`;
      
      // Vérifier si le créneau est déjà réservé
      const isBooked = bookings.some(
        booking => booking.date === date && booking.time === timeSlot && booking.status !== 'cancelled'
      );
      
      slots.push({
        id: slotId,
        time: timeSlot,
        available: !isBooked
      });
    }
    
    return slots;
  };

  const addBooking = (booking: Omit<Booking, 'id' | 'createdAt'>) => {
    const newBooking: Booking = {
      ...booking,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setBookings(prev => [...prev, newBooking]);
    return newBooking;
  };

  const cancelBooking = (bookingId: string) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: 'cancelled' as const }
          : booking
      )
    );
  };

  return {
    bookings,
    services,
    getAvailableSlots,
    addBooking,
    cancelBooking
  };
};
