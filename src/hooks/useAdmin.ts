
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

export interface ClientAccount {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  login: string;
  temporary_password: string;
  password_changed: boolean;
  created_at: string;
}

export const useAdmin = () => {
  const { user } = useAuth();
  // TEMPORAIRE : Forcer isAdmin à true pour les tests
  const [isAdmin, setIsAdmin] = useState(true);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [questionnaireSubmissions, setQuestionnaireSubmissions] = useState<QuestionnaireSubmission[]>([]);
  const [bookings, setBookings] = useState<AdminBooking[]>([]);
  const [clients, setClients] = useState<ClientAccount[]>([]);
  const [loading, setLoading] = useState(false);

  // TEMPORAIRE : Désactiver la vérification admin pour les tests
  useEffect(() => {
    // En mode test, on considère toujours l'utilisateur comme admin
    setIsAdmin(true);
    setLoading(false);
  }, [user]);

  // Charger les soumissions de contact
  const loadContactSubmissions = async () => {
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

  // Charger les clients
  const loadClients = async () => {
    try {
      const { data, error } = await supabaseTyped
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setClients(data || []);
    } catch (error) {
      console.error('Erreur chargement clients:', error);
    }
  };

  // Mettre à jour le statut d'un rendez-vous
  const updateBookingStatus = async (id: string, status: AdminBooking['status'], notes?: string) => {
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
    // Charger les données même sans vérification admin en mode test
    loadContactSubmissions();
    loadQuestionnaireSubmissions();
    loadBookings();
    loadClients();
  }, []);

  return {
    isAdmin,
    loading,
    contactSubmissions,
    questionnaireSubmissions,
    bookings,
    clients,
    loadContactSubmissions,
    loadQuestionnaireSubmissions,
    loadBookings,
    loadClients,
    updateBookingStatus
  };
};
