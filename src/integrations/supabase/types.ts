export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      bookings: {
        Row: {
          created_at: string | null
          date: string
          email: string
          id: string
          name: string
          notes: string | null
          phone: string | null
          service: string
          status: string | null
          time: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date: string
          email: string
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          service: string
          status?: string | null
          time: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          email?: string
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          service?: string
          status?: string | null
          time?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      clients: {
        Row: {
          created_at: string
          email: string
          id: string
          login: string
          nom: string
          password_changed: boolean
          password_hash: string
          prenom: string
          temporary_password: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          login: string
          nom: string
          password_changed?: boolean
          password_hash: string
          prenom: string
          temporary_password: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          login?: string
          nom?: string
          password_changed?: boolean
          password_hash?: string
          prenom?: string
          temporary_password?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          nom: string
          prenom: string
          profil: string
          telephone: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          nom: string
          prenom: string
          profil: string
          telephone: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          nom?: string
          prenom?: string
          profil?: string
          telephone?: string
        }
        Relationships: []
      }
      questionnaire_submissions: {
        Row: {
          autres_informations: string | null
          budget_coaching: string | null
          competences_cles: string | null
          created_at: string | null
          disponibilite_coaching: string | null
          domaine_etudes: string | null
          email: string
          experience_professionnelle: string | null
          id: string
          langues_parlees: string | null
          niveau_etudes: string | null
          nom: string
          objectifs_carriere: string | null
          occupation_actuelle: string
          prenom: string
          secteur_activite: string | null
          situation_geographique: string | null
        }
        Insert: {
          autres_informations?: string | null
          budget_coaching?: string | null
          competences_cles?: string | null
          created_at?: string | null
          disponibilite_coaching?: string | null
          domaine_etudes?: string | null
          email: string
          experience_professionnelle?: string | null
          id?: string
          langues_parlees?: string | null
          niveau_etudes?: string | null
          nom: string
          objectifs_carriere?: string | null
          occupation_actuelle: string
          prenom: string
          secteur_activite?: string | null
          situation_geographique?: string | null
        }
        Update: {
          autres_informations?: string | null
          budget_coaching?: string | null
          competences_cles?: string | null
          created_at?: string | null
          disponibilite_coaching?: string | null
          domaine_etudes?: string | null
          email?: string
          experience_professionnelle?: string | null
          id?: string
          langues_parlees?: string | null
          niveau_etudes?: string | null
          nom?: string
          objectifs_carriere?: string | null
          occupation_actuelle?: string
          prenom?: string
          secteur_activite?: string | null
          situation_geographique?: string | null
        }
        Relationships: []
      }
      user_cvs: {
        Row: {
          created_at: string
          education: Json | null
          experience: Json | null
          id: string
          languages: Json | null
          personal_info: Json | null
          skills: Json | null
          summary: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          education?: Json | null
          experience?: Json | null
          id?: string
          languages?: Json | null
          personal_info?: Json | null
          skills?: Json | null
          summary?: string | null
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          education?: Json | null
          experience?: Json | null
          id?: string
          languages?: Json | null
          personal_info?: Json | null
          skills?: Json | null
          summary?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
