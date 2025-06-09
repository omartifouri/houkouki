
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'
import { formatArrayToString } from './email-templates.ts';

interface QuestionnaireData {
  nom: string;
  prenom: string;
  age?: string;
  email: string;
  telephone?: string;
  niveauEtudes?: string;
  domaineEtudes?: string;
  experiencesPro?: string;
  occupationActuelle: string;
  qualites?: string[];
  autreQualite?: string;
  tachesPreferees?: string[];
  autreTache?: string;
  creativite?: string;
  activiteArtistique?: string;
  activiteArtistiqueDetails?: string;
  competences?: string[];
  autreCompetence?: string;
  objectifCourtTerme?: string[];
  autreObjectifCourt?: string;
  objectifLongTerme?: string[];
  autreObjectifLong?: string;
  canauxRecherche?: string[];
  autreCanalRecherche?: string;
  obstacles?: string[];
  autreObstacle?: string;
  typeAccompagnement?: string[];
  autreAccompagnement?: string;
  criteresPrincipaux?: string[];
  autreCritere?: string;
  questionSpecifique?: string;
  questionDetails?: string;
  profil?: string;
  message?: string;
}

export const saveQuestionnaireToDatabase = async (data: QuestionnaireData) => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const questionnaireSubmission = {
    nom: data.nom,
    prenom: data.prenom,
    email: data.email,
    occupation_actuelle: data.occupationActuelle,
    niveau_etudes: data.niveauEtudes || null,
    domaine_etudes: data.domaineEtudes || null,
    experience_professionnelle: data.experiencesPro || null,
    situation_geographique: null,
    secteur_activite: null,
    objectifs_carriere: [
      ...(data.objectifCourtTerme || []),
      ...(data.objectifLongTerme || []),
      data.autreObjectifCourt ? `Autre court terme: ${data.autreObjectifCourt}` : '',
      data.autreObjectifLong ? `Autre long terme: ${data.autreObjectifLong}` : ''
    ].filter(Boolean).join('; ') || null,
    competences_cles: [
      ...(data.competences || []),
      data.autreCompetence ? `Autre: ${data.autreCompetence}` : ''
    ].filter(Boolean).join('; ') || null,
    langues_parlees: null,
    disponibilite_coaching: formatArrayToString(data.typeAccompagnement),
    budget_coaching: null,
    autres_informations: [
      data.qualites ? `Qualités: ${formatArrayToString(data.qualites)}${data.autreQualite ? `, ${data.autreQualite}` : ''}` : '',
      data.tachesPreferees ? `Tâches préférées: ${formatArrayToString(data.tachesPreferees)}${data.autreTache ? `, ${data.autreTache}` : ''}` : '',
      data.creativite ? `Créativité: ${data.creativite}` : '',
      data.activiteArtistique ? `Activité artistique: ${data.activiteArtistique}${data.activiteArtistiqueDetails ? ` - ${data.activiteArtistiqueDetails}` : ''}` : '',
      data.canauxRecherche ? `Canaux de recherche: ${formatArrayToString(data.canauxRecherche)}${data.autreCanalRecherche ? `, ${data.autreCanalRecherche}` : ''}` : '',
      data.obstacles ? `Obstacles: ${formatArrayToString(data.obstacles)}${data.autreObstacle ? `, ${data.autreObstacle}` : ''}` : '',
      data.criteresPrincipaux ? `Critères principaux: ${formatArrayToString(data.criteresPrincipaux)}${data.autreCritere ? `, ${data.autreCritere}` : ''}` : '',
      data.questionSpecifique === 'oui' && data.questionDetails ? `Question spécifique: ${data.questionDetails}` : ''
    ].filter(Boolean).join('\n\n') || null
  };

  const { error } = await supabase
    .from('questionnaire_submissions')
    .insert(questionnaireSubmission);

  if (error) {
    throw new Error(`Erreur insertion questionnaire: ${error.message}`);
  }

  return true;
};

export type { QuestionnaireData };
