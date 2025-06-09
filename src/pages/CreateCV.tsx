import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { CVPreview } from "@/components/CVPreview";
import { ArrowLeft, Download, Lock, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '@/hooks/useAuth';
import { useUserCV } from '@/hooks/useUserCV';
import { CVData } from '@/types/cvTypes';
import { exportToPDF } from '@/utils/pdfExport';
import { PersonalInfoSection } from '@/components/cv-form/PersonalInfoSection';
import { SummarySection } from '@/components/cv-form/SummarySection';
import { ExperienceSection } from '@/components/cv-form/ExperienceSection';
import { EducationSection } from '@/components/cv-form/EducationSection';
import { SkillsSection } from '@/components/cv-form/SkillsSection';
import { LanguagesSection } from '@/components/cv-form/LanguagesSection';
import AuthModal from '@/components/AuthModal';
import { useToast } from '@/hooks/use-toast';

const CreateCV = () => {
  const { user, loading } = useAuth();
  const { userCV, saveCV } = useUserCV();
  const { toast } = useToast();
  const navigate = useNavigate();

  // ALL useState hooks must be called before any conditional logic
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      photo: undefined
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    languages: []
  });

  const [showAuthAlert, setShowAuthAlert] = useState(false);
  const [saving, setSaving] = useState(false);

  // Charger les données du CV utilisateur si elles existent
  useEffect(() => {
    if (userCV) {
      setCvData({
        personalInfo: userCV.personalInfo,
        summary: userCV.summary,
        experience: userCV.experience,
        education: userCV.education,
        skills: userCV.skills,
        languages: userCV.languages
      });
    }
  }, [userCV]);

  // Vérifier l'authentification et afficher le pop-up si nécessaire
  useEffect(() => {
    if (!loading && !user) {
      setShowAuthAlert(true);
    }
  }, [user, loading]);

  // Handler functions
  const updatePersonalInfo = (field: keyof CVData['personalInfo'], value: string) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const updateSummary = (value: string) => {
    setCvData(prev => ({ ...prev, summary: value }));
  };

  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now().toString(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: ''
        }
      ]
    }));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id: string) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now().toString(),
          institution: '',
          degree: '',
          startDate: '',
          endDate: ''
        }
      ]
    }));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id: string) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addLanguage = () => {
    setCvData(prev => ({
      ...prev,
      languages: [
        ...prev.languages,
        {
          id: Date.now().toString(),
          language: '',
          level: ''
        }
      ]
    }));
  };

  const updateLanguage = (id: string, field: string, value: string) => {
    setCvData(prev => ({
      ...prev,
      languages: prev.languages.map(lang =>
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    }));
  };

  const removeLanguage = (id: string) => {
    setCvData(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang.id !== id)
    }));
  };

  const addSkill = (skill: string) => {
    if (skill.trim() && !cvData.skills.includes(skill.trim())) {
      setCvData(prev => ({
        ...prev,
        skills: [...prev.skills, skill.trim()]
      }));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSaveCV = async () => {
    if (!user) return;

    try {
      setSaving(true);
      await saveCV(cvData);
      toast({
        title: "CV sauvegardé",
        description: "Votre CV a été sauvegardé avec succès.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder votre CV.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleExportToPDF = async () => {
    await exportToPDF(cvData);
  };

  // Conditional rendering AFTER all hooks
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Pop-up d'authentification */}
      <AlertDialog open={showAuthAlert} onOpenChange={setShowAuthAlert}>
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-red-600" />
              Authentification requise
            </AlertDialogTitle>
            <AlertDialogDescription>
              Vous devez être authentifié pour avoir accès à ce service ! 
              Créez un compte ou connectez-vous pour commencer à créer votre CV professionnel.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => navigate('/')}>
              Retour à l'accueil
            </Button>
            <AuthModal>
              <AlertDialogAction>
                S'authentifier
              </AlertDialogAction>
            </AuthModal>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour à mon espace</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-2xl font-bold text-red-800">Houkouki</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {userCV ? 'Modifier mon CV' : 'Créateur de CV'}
          </h1>
          <p className="text-xl text-gray-600">Créez votre CV professionnel et téléchargez-le en PDF</p>
        </div>

        {user ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulaire */}
            <div className="space-y-6">
              
              <PersonalInfoSection
                personalInfo={cvData.personalInfo}
                onUpdate={updatePersonalInfo}
              />

              <SummarySection
                summary={cvData.summary}
                onUpdate={updateSummary}
              />

              <ExperienceSection
                experience={cvData.experience}
                onAdd={addExperience}
                onUpdate={updateExperience}
                onRemove={removeExperience}
              />

              <EducationSection
                education={cvData.education}
                onAdd={addEducation}
                onUpdate={updateEducation}
                onRemove={removeEducation}
              />

              <SkillsSection
                skills={cvData.skills}
                onAdd={addSkill}
                onRemove={removeSkill}
              />

              <LanguagesSection
                languages={cvData.languages}
                onAdd={addLanguage}
                onUpdate={updateLanguage}
                onRemove={removeLanguage}
              />
            </div>

            {/* Prévisualisation */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Aperçu du CV</CardTitle>
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleSaveCV} 
                        disabled={saving}
                        variant="outline"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        {saving ? 'Sauvegarde...' : 'Sauvegarder'}
                      </Button>
                      <Button onClick={handleExportToPDF} className="bg-red-600 hover:bg-red-700">
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger PDF
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CVPreview cvData={cvData} />
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <Lock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Accès restreint</h2>
            <p className="text-gray-600 mb-6">Vous devez être connecté pour accéder au créateur de CV</p>
            <AuthModal>
              <Button className="bg-red-600 hover:bg-red-700">
                Se connecter pour continuer
              </Button>
            </AuthModal>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateCV;
