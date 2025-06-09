
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export interface UserBooking {
  id: string;
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
  created_at: string;
  updated_at: string;
}

export const useUserBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<UserBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchUserBookings = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .eq('user_id', user.id)
          .order('date', { ascending: false });

        if (error) throw error;

        setBookings(data || []);
      } catch (err) {
        console.error('Erreur lors du chargement des réservations:', err);
        setError('Impossible de charger vos rendez-vous');
      } finally {
        setLoading(false);
      }
    };

    fetchUserBookings();
  }, [user]);

  return {
    bookings,
    loading,
    error
  };
};
