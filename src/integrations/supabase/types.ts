export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
