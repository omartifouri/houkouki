
import { useState, useEffect } from 'react';
import { supabaseTyped } from '@/lib/supabaseTyped';
import { useAuth } from '@/hooks/useAuth';

export interface ContactSubmission {
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  profil: string;
  message: string;
  created_at: string;
}

export interface QuestionnaireSubmission {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  occupation_actuelle: string;
  situation_geographique?: string;
  niveau_etudes?: string;
  domaine_etudes?: string;
  experience_professionnelle?: string;
  secteur_activite?: string;
  objectifs_carriere?: string;
  competences_cles?: string;
  langues_parlees?: string;
  disponibilite_coaching?: string;
  budget_coaching?: string;
  autres_informations?: string;
  created_at: string;
}

export interface AdminBooking {
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

export const useAdmin = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [questionnaireSubmissions, setQuestionnaireSubmissions] = useState<QuestionnaireSubmission[]>([]);
  const [bookings, setBookings] = useState<AdminBooking[]>([]);
  const [loading, setLoading] = useState(true);

  // Vérifier si l'utilisateur est admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabaseTyped
          .from('admin_users')
          .select('*')
          .eq('user_id', user.id)
          .single();

        setIsAdmin(!!data && !error);
      } catch (error) {
        console.error('Erreur vérification admin:', error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [user]);

  // Charger les soumissions de contact
  const loadContactSubmissions = async () => {
    if (!isAdmin) return;

    try {
      const { data, error } = await supabaseTyped
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContactSubmissions(data || []);
    } catch (error) {
      console.error('Erreur chargement soumissions contact:', error);
    }
  };

  // Charger les soumissions de questionnaire
  const loadQuestionnaireSubmissions = async () => {
    if (!isAdmin) return;

    try {
      const { data, error } = await supabaseTyped
        .from('questionnaire_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setQuestionnaireSubmissions(data || []);
    } catch (error) {
      console.error('Erreur chargement soumissions questionnaire:', error);
    }
  };

  // Charger les rendez-vous
  const loadBookings = async () => {
    if (!isAdmin) return;

    try {
      const { data, error } = await supabaseTyped
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Erreur chargement rendez-vous:', error);
    }
  };

  // Mettre à jour le statut d'un rendez-vous
  const updateBookingStatus = async (id: string, status: AdminBooking['status'], notes?: string) => {
    if (!isAdmin) return false;

    try {
      const { error } = await supabaseTyped
        .from('bookings')
        .update({ 
          status, 
          notes,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) throw error;
      await loadBookings(); // Recharger la liste
      return true;
    } catch (error) {
      console.error('Erreur mise à jour rendez-vous:', error);
      return false;
    }
  };

  useEffect(() => {
    if (isAdmin) {
      loadContactSubmissions();
      loadQuestionnaireSubmissions();
      loadBookings();
    }
  }, [isAdmin]);

  return {
    isAdmin,
    loading,
    contactSubmissions,
    questionnaireSubmissions,
    bookings,
    loadContactSubmissions,
    loadQuestionnaireSubmissions,
    loadBookings,
    updateBookingStatus
  };
};
