
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { CVData } from '@/types/cvTypes';

export interface UserCV extends CVData {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export const useUserCV = () => {
  const { user } = useAuth();
  const [userCV, setUserCV] = useState<UserCV | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchUserCV = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('user_cvs')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) throw error;

        if (data) {
          setUserCV({
            id: data.id,
            title: data.title,
            created_at: data.created_at,
            updated_at: data.updated_at,
            personalInfo: (data.personal_info as any) || {
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              address: '',
              linkedin: '',
              photo: undefined
            },
            summary: data.summary || '',
            experience: (data.experience as any) || [],
            education: (data.education as any) || [],
            skills: (data.skills as any) || [],
            languages: (data.languages as any) || []
          });
        }
      } catch (err) {
        console.error('Erreur lors du chargement du CV:', err);
        setError('Impossible de charger votre CV');
      } finally {
        setLoading(false);
      }
    };

    fetchUserCV();
  }, [user]);

  const saveCV = async (cvData: CVData) => {
    if (!user) return;

    try {
      const payload = {
        user_id: user.id,
        title: 'Mon CV',
        personal_info: cvData.personalInfo,
        summary: cvData.summary,
        experience: cvData.experience,
        education: cvData.education,
        skills: cvData.skills,
        languages: cvData.languages,
        updated_at: new Date().toISOString()
      };

      if (userCV) {
        // Mettre à jour le CV existant
        const { data, error } = await supabase
          .from('user_cvs')
          .update(payload)
          .eq('id', userCV.id)
          .select()
          .single();

        if (error) throw error;
        
        if (data) {
          setUserCV({
            ...userCV,
            ...cvData,
            updated_at: data.updated_at
          });
        }
      } else {
        // Créer un nouveau CV
        const { data, error } = await supabase
          .from('user_cvs')
          .insert([payload])
          .select()
          .single();

        if (error) throw error;

        if (data) {
          setUserCV({
            id: data.id,
            title: data.title,
            created_at: data.created_at,
            updated_at: data.updated_at,
            ...cvData
          });
        }
      }
    } catch (err) {
      console.error('Erreur lors de la sauvegarde du CV:', err);
      throw err;
    }
  };

  return {
    userCV,
    loading,
    error,
    saveCV
  };
};
