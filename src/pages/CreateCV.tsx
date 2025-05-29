import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CVPreview } from "@/components/CVPreview";
import { ArrowLeft, Download, Upload, X } from "lucide-react";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';

export interface CVData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    photo?: string;
  };
  summary: string;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }>;
  skills: string[];
  languages: Array<{
    id: string;
    language: string;
    level: string;
  }>;
}

const CreateCV = () => {
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

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        updatePersonalInfo('photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    updatePersonalInfo('photo', '');
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

  const exportToPDF = () => {
    const pdf = new jsPDF();
    const { personalInfo, summary, experience, education, skills, languages } = cvData;
    
    // Configuration
    const margin = 20;
    let yPosition = margin;
    const lineHeight = 7;
    const sectionSpacing = 10;
    
    // Fonction pour ajouter la photo si elle existe
    const addPhotoAndContinue = () => {
      // Titre et infos personnelles
      if (personalInfo.photo) {
        // Ajouter la photo
        try {
          pdf.addImage(personalInfo.photo, 'JPEG', margin, yPosition, 30, 30);
          // Décaler le texte à droite de la photo
          const textStartX = margin + 35;
          
          // Titre à côté de la photo
          pdf.setFontSize(20);
          pdf.setFont('helvetica', 'bold');
          pdf.text(`${personalInfo.firstName} ${personalInfo.lastName}`, textStartX, yPosition + 10);
          
          // Informations personnelles à côté de la photo
          pdf.setFontSize(10);
          pdf.setFont('helvetica', 'normal');
          let infoY = yPosition + 17;
          if (personalInfo.email) {
            pdf.text(`Email: ${personalInfo.email}`, textStartX, infoY);
            infoY += lineHeight;
          }
          if (personalInfo.phone) {
            pdf.text(`Téléphone: ${personalInfo.phone}`, textStartX, infoY);
            infoY += lineHeight;
          }
          if (personalInfo.address) {
            pdf.text(`Adresse: ${personalInfo.address}`, textStartX, infoY);
            infoY += lineHeight;
          }
          if (personalInfo.linkedin) {
            pdf.text(`LinkedIn: ${personalInfo.linkedin}`, textStartX, infoY);
            infoY += lineHeight;
          }
          
          yPosition = Math.max(yPosition + 35, infoY + 5);
        } catch (error) {
          console.error('Erreur lors de l\'ajout de la photo:', error);
          // Si erreur avec la photo, continuer sans photo
          addContentWithoutPhoto();
          return;
        }
      } else {
        addContentWithoutPhoto();
        return;
      }
      
      yPosition += sectionSpacing;
      addRestOfContent();
    };
    
    const addContentWithoutPhoto = () => {
      // Titre sans photo
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${personalInfo.firstName} ${personalInfo.lastName}`, margin, yPosition);
      yPosition += lineHeight + 5;
      
      // Informations personnelles sans photo
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      if (personalInfo.email) {
        pdf.text(`Email: ${personalInfo.email}`, margin, yPosition);
        yPosition += lineHeight;
      }
      if (personalInfo.phone) {
        pdf.text(`Téléphone: ${personalInfo.phone}`, margin, yPosition);
        yPosition += lineHeight;
      }
      if (personalInfo.address) {
        pdf.text(`Adresse: ${personalInfo.address}`, margin, yPosition);
        yPosition += lineHeight;
      }
      if (personalInfo.linkedin) {
        pdf.text(`LinkedIn: ${personalInfo.linkedin}`, margin, yPosition);
        yPosition += lineHeight;
      }
      yPosition += sectionSpacing;
      
      addRestOfContent();
    };
    
    const addRestOfContent = () => {
      // Résumé
      if (summary) {
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.text('Résumé Professionnel', margin, yPosition);
        yPosition += lineHeight;
        
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        const summaryLines = pdf.splitTextToSize(summary, 170);
        pdf.text(summaryLines, margin, yPosition);
        yPosition += summaryLines.length * lineHeight + sectionSpacing;
      }
      
      // Expérience professionnelle
      if (experience.length > 0) {
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.text('Expérience Professionnelle', margin, yPosition);
        yPosition += lineHeight + 3;
        
        experience.forEach(exp => {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(12);
          pdf.text(exp.position, margin, yPosition);
          yPosition += lineHeight;
          
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(10);
          pdf.text(`${exp.company} | ${exp.startDate} - ${exp.endDate}`, margin, yPosition);
          yPosition += lineHeight;
          
          if (exp.description) {
            const descLines = pdf.splitTextToSize(exp.description, 170);
            pdf.text(descLines, margin, yPosition);
            yPosition += descLines.length * lineHeight;
          }
          yPosition += 5;
        });
        yPosition += sectionSpacing;
      }
      
      // Formation
      if (education.length > 0) {
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.text('Formation', margin, yPosition);
        yPosition += lineHeight + 3;
        
        education.forEach(edu => {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(12);
          pdf.text(edu.degree, margin, yPosition);
          yPosition += lineHeight;
          
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(10);
          pdf.text(`${edu.institution} | ${edu.startDate} - ${edu.endDate}`, margin, yPosition);
          yPosition += lineHeight + 3;
        });
        yPosition += sectionSpacing;
      }
      
      // Compétences
      if (skills.length > 0) {
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.text('Compétences', margin, yPosition);
        yPosition += lineHeight + 3;
        
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        const skillsText = skills.join(' • ');
        const skillsLines = pdf.splitTextToSize(skillsText, 170);
        pdf.text(skillsLines, margin, yPosition);
        yPosition += skillsLines.length * lineHeight + sectionSpacing;
      }
      
      // Langues
      if (languages.length > 0) {
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(14);
        pdf.text('Langues', margin, yPosition);
        yPosition += lineHeight + 3;
        
        languages.forEach(lang => {
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(10);
          pdf.text(`${lang.language}: ${lang.level}`, margin, yPosition);
          yPosition += lineHeight;
        });
      }
      
      // Télécharger le PDF
      pdf.save(`CV_${personalInfo.firstName}_${personalInfo.lastName}.pdf`);
    };
    
    // Commencer le processus
    addPhotoAndContinue();
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
            {/* Informations personnelles */}
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Photo de profil */}
                <div>
                  <Label>Photo de profil (optionnelle)</Label>
                  <div className="mt-2">
                    {cvData.personalInfo.photo ? (
                      <div className="flex items-center space-x-4">
                        <img
                          src={cvData.personalInfo.photo}
                          alt="Photo de profil"
                          className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                        />
                        <Button
                          onClick={removePhoto}
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <X className="h-4 w-4 mr-1" />
                          Supprimer
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                          <Upload className="h-6 w-6 text-gray-400" />
                        </div>
                        <div>
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="hidden"
                            id="photo-upload"
                          />
                          <Label
                            htmlFor="photo-upload"
                            className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Choisir une photo
                          </Label>
                          <p className="text-xs text-gray-500 mt-1">JPG, PNG jusqu'à 5MB</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      value={cvData.personalInfo.firstName}
                      onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      value={cvData.personalInfo.lastName}
                      onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={cvData.personalInfo.email}
                    onChange={(e) => updatePersonalInfo('email', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    value={cvData.personalInfo.phone}
                    onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Adresse</Label>
                  <Input
                    id="address"
                    value={cvData.personalInfo.address}
                    onChange={(e) => updatePersonalInfo('address', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn (optionnel)</Label>
                  <Input
                    id="linkedin"
                    value={cvData.personalInfo.linkedin}
                    onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Résumé professionnel */}
            <Card>
              <CardHeader>
                <CardTitle>Résumé professionnel</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Décrivez brièvement votre profil professionnel..."
                  value={cvData.summary}
                  onChange={(e) => setCvData(prev => ({ ...prev, summary: e.target.value }))}
                  rows={4}
                />
              </CardContent>
            </Card>

            {/* Expérience professionnelle */}
            <Card>
              <CardHeader>
                <CardTitle>Expérience professionnelle</CardTitle>
                <Button onClick={addExperience} variant="outline">
                  Ajouter une expérience
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {cvData.experience.map((exp) => (
                  <div key={exp.id} className="border p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Expérience</h4>
                      <Button
                        onClick={() => removeExperience(exp.id)}
                        variant="destructive"
                        size="sm"
                      >
                        Supprimer
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label>Entreprise</Label>
                        <Input
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Poste</Label>
                        <Input
                          value={exp.position}
                          onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Date de début</Label>
                        <Input
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Date de fin</Label>
                        <Input
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Formation */}
            <Card>
              <CardHeader>
                <CardTitle>Formation</CardTitle>
                <Button onClick={addEducation} variant="outline">
                  Ajouter une formation
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {cvData.education.map((edu) => (
                  <div key={edu.id} className="border p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Formation</h4>
                      <Button
                        onClick={() => removeEducation(edu.id)}
                        variant="destructive"
                        size="sm"
                      >
                        Supprimer
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label>Établissement</Label>
                        <Input
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Diplôme</Label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Date de début</Label>
                        <Input
                          type="month"
                          value={edu.startDate}
                          onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Date de fin</Label>
                        <Input
                          type="month"
                          value={edu.endDate}
                          onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Compétences */}
            <Card>
              <CardHeader>
                <CardTitle>Compétences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ajoutez une compétence..."
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addSkill(e.currentTarget.value);
                          e.currentTarget.value = '';
                        }
                      }}
                    />
                    <Button
                      onClick={(e) => {
                        const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                        addSkill(input.value);
                        input.value = '';
                      }}
                    >
                      Ajouter
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-[#C0997A]/20 text-[#C0997A] px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Langues */}
            <Card>
              <CardHeader>
                <CardTitle>Langues</CardTitle>
                <Button onClick={addLanguage} variant="outline">
                  Ajouter une langue
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {cvData.languages.map((lang) => (
                  <div key={lang.id} className="border p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Langue</h4>
                      <Button
                        onClick={() => removeLanguage(lang.id)}
                        variant="destructive"
                        size="sm"
                      >
                        Supprimer
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label>Langue</Label>
                        <Input
                          value={lang.language}
                          onChange={(e) => updateLanguage(lang.id, 'language', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Niveau</Label>
                        <Input
                          value={lang.level}
                          onChange={(e) => updateLanguage(lang.id, 'level', e.target.value)}
                          placeholder="ex: Natif, Courant, Intermédiaire..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Prévisualisation */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Aperçu du CV</CardTitle>
                  <Button onClick={exportToPDF} className="bg-red-600 hover:bg-red-700">
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
