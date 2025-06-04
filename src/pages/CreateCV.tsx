
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CVPreview } from "@/components/CVPreview";
import { ArrowLeft, Download } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '@/hooks/useAuth';
import { CVData } from '@/types/cvTypes';
import { exportToPDF } from '@/utils/pdfExport';
import { PersonalInfoSection } from '@/components/cv-form/PersonalInfoSection';
import { SummarySection } from '@/components/cv-form/SummarySection';
import { ExperienceSection } from '@/components/cv-form/ExperienceSection';
import { EducationSection } from '@/components/cv-form/EducationSection';
import { SkillsSection } from '@/components/cv-form/SkillsSection';
import { LanguagesSection } from '@/components/cv-form/LanguagesSection';

const CreateCV = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Rediriger vers l'accueil si non authentifié
  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  // Afficher un loader pendant la vérification de l'authentification
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

  // Ne pas afficher le contenu si l'utilisateur n'est pas authentifié
  if (!user) {
    return null;
  }

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

  const handleExportToPDF = () => {
    exportToPDF(cvData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour à l'accueil</span>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Créateur de CV</h1>
          <p className="text-xl text-gray-600">Créez votre CV professionnel et téléchargez-le en PDF</p>
        </div>

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
                  <Button onClick={handleExportToPDF} className="bg-red-600 hover:bg-red-700">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger PDF
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CVPreview cvData={cvData} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCV;
