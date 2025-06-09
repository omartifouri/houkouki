
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

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

  // Charger les réservations depuis la base de données
  useEffect(() => {
    const loadBookings = async () => {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*');

        if (error) throw error;
        setBookings(data || []);
      } catch (error) {
        console.error('Erreur chargement réservations:', error);
      }
    };

    loadBookings();
  }, []);

  // Générer les créneaux de 60 minutes avec 10 minutes d'écart de 9h à 17h (sans pause déjeuner 12h-14h)
  const generateTimeSlots = (date: string): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    
    // Créneaux du matin (9h00 à 11h50)
    const morningSlots = ['09:00', '10:10', '11:20'];
    
    // Créneaux de l'après-midi (14h00 à 16h10)
    const afternoonSlots = ['14:00', '15:10', '16:20'];
    
    const allSlots = [...morningSlots, ...afternoonSlots];
    
    allSlots.forEach(time => {
      const isBooked = bookings.some(booking => 
        booking.date === date && booking.time === time
      );
      slots.push({ time, available: !isBooked });
    });
    
    return slots;
  };

  const addBooking = async (booking: Omit<Booking, 'id'>) => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([{
          service: booking.service,
          date: booking.date,
          time: booking.time,
          name: booking.name,
          email: booking.email,
          phone: booking.phone,
          status: 'pending'
        }])
        .select()
        .single();

      if (error) throw error;

      if (data) {
        const newBooking: Booking = {
          id: data.id,
          service: data.service,
          date: data.date,
          time: data.time,
          name: data.name,
          email: data.email,
          phone: data.phone
        };

        setBookings(prev => [...prev, newBooking]);
        return newBooking;
      }
    } catch (error) {
      console.error('Erreur ajout réservation:', error);
      throw error;
    }
  };

  return {
    bookings,
    services,
    generateTimeSlots,
    addBooking
  };
};
