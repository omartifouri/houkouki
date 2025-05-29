
import { useState } from 'react';

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Booking {
  id: string;
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone?: string;
}

export const useBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const services = [
    "Identification des débouchés selon mon profil",
    "Renforcement de la confiance en soi",
    "Préparation mentale aux entretiens"
  ];

  // Générer les créneaux de 45 minutes de 9h à 17h
  const generateTimeSlots = (date: string): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const startHour = 9;
    const endHour = 17;
    
    for (let hour = startHour; hour < endHour; hour++) {
      const times = [`${hour.toString().padStart(2, '0')}:00`, `${hour.toString().padStart(2, '0')}:45`];
      times.forEach(time => {
        if (hour === 16 && time === '16:45') return; // Dernier créneau à 16h00
        const isBooked = bookings.some(booking => 
          booking.date === date && booking.time === time
        );
        slots.push({ time, available: !isBooked });
      });
    }
    
    return slots;
  };

  const addBooking = (booking: Omit<Booking, 'id'>) => {
    const newBooking: Booking = {
      ...booking,
      id: Date.now().toString()
    };
    setBookings(prev => [...prev, newBooking]);
    return newBooking;
  };

  return {
    bookings,
    services,
    generateTimeSlots,
    addBooking
  };
};
