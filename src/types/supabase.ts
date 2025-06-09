
// Custom types for our Supabase tables since the auto-generated types are empty
export interface Database {
  public: {
    Tables: {
      admin_users: {
        Row: {
          id: string;
          user_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          created_at?: string;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          nom: string;
          prenom: string;
          telephone: string;
          email: string;
          profil: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          nom: string;
          prenom: string;
          telephone: string;
          email: string;
          profil: string;
          message: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          nom?: string;
          prenom?: string;
          telephone?: string;
          email?: string;
          profil?: string;
          message?: string;
          created_at?: string;
        };
      };
      questionnaire_submissions: {
        Row: {
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
        };
        Insert: {
          id?: string;
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
          created_at?: string;
        };
        Update: {
          id?: string;
          nom?: string;
          prenom?: string;
          email?: string;
          occupation_actuelle?: string;
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
          created_at?: string;
        };
      };
      bookings: {
        Row: {
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
        };
        Insert: {
          id?: string;
          service: string;
          date: string;
          time: string;
          name: string;
          email: string;
          phone?: string;
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
          notes?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          service?: string;
          date?: string;
          time?: string;
          name?: string;
          email?: string;
          phone?: string;
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
          notes?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
