import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface QuestionnaireData {
  // Section I - Informations Générales
  nom: string;
  prenom: string;
  age: string;
  email: string;
  telephone: string;
  niveauEtudes: string;
  domaineEtudes: string;
  experiencesPro: string;
  occupationActuelle: string;

  // Section II - Auto-évaluation
  qualites: string[];
  autreQualite: string;
  tachesPreferees: string[];
  autreTache: string;
  creativite: string;
  activiteArtistique: string;
  activiteArtistiqueDetails: string;

  // Section III - Compétences
  competences: string[];
  autreCompetence: string;
  objectifCourtTerme: string[];
  autreObjectifCourt: string;
  objectifLongTerme: string[];
  autreObjectifLong: string;

  // Section IV - Stratégie de Recherche
  canauxRecherche: string[];
  autreCanalRecherche: string;
  obstacles: string[];
  autreObstacle: string;
  typeAccompagnement: string[];
  autreAccompagnement: string;

  // Section V - Motivation
  criteresPrincipaux: string[];
  autreCritere: string;

  // Section VI - Informations Complémentaires
  questionSpecifique: string;
  questionDetails: string;
}

const Questionnaire = () => {
  const [formData, setFormData] = useState<QuestionnaireData>({
    nom: '',
    prenom: '',
    age: '',
    email: '',
    telephone: '',
    niveauEtudes: '',
    domaineEtudes: '',
    experiencesPro: '',
    occupationActuelle: '',
    qualites: [],
    autreQualite: '',
    tachesPreferees: [],
    autreTache: '',
    creativite: '',
    activiteArtistique: '',
    activiteArtistiqueDetails: '',
    competences: [],
    autreCompetence: '',
    objectifCourtTerme: [],
    autreObjectifCourt: '',
    objectifLongTerme: [],
    autreObjectifLong: '',
    canauxRecherche: [],
    autreCanalRecherche: '',
    obstacles: [],
    autreObstacle: '',
    typeAccompagnement: [],
    autreAccompagnement: '',
    criteresPrincipaux: [],
    autreCritere: '',
    questionSpecifique: '',
    questionDetails: ''
  });

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof QuestionnaireData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: keyof QuestionnaireData, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      if (checked) {
        return { ...prev, [field]: [...currentArray, value] };
      } else {
        return { ...prev, [field]: currentArray.filter(item => item !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log("Envoi du questionnaire:", formData);
      
      // Appel à la fonction edge via le client Supabase
      const { data, error } = await supabase.functions.invoke('send-questionnaire', {
        body: formData,
      });

      if (error) {
        throw error;
      }

      setShowSuccessDialog(true);
      toast({
        title: "Questionnaire envoyé",
        description: "Votre questionnaire a été envoyé avec succès !",
      });
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du questionnaire.",
        variant: "destructive",
      });
    }
  };

  const qualitesOptions = [
    { value: "creatif", label: "Créatif(ve) – Capacité à innover et à imaginer de nouvelles solutions" },
    { value: "organise", label: "Organisé(e) – Bonne gestion du temps et des priorités" },
    { value: "perseverant", label: "Persévérant(e) – Capacité à surmonter les difficultés et aller jusqu'au bout des projets" },
    { value: "communicatif", label: "Communicatif(ve) – Facilité à transmettre des idées et informations" },
    { value: "rigoureux", label: "Rigoureux(se) – Attention aux détails et respect des processus" },
    { value: "analytique", label: "Esprit analytique – Capacité à résoudre des problèmes et prendre des décisions logiques" },
    { value: "autonome", label: "Autonome – Capacité à prendre des initiatives et travailler sans supervision constante" },
    { value: "empathique", label: "Empathique – Sensibilité aux besoins et émotions des autres" },
    { value: "polyvalent", label: "Polyvalent(e) – Facilité à s'adapter à différentes tâches et contextes" },
    { value: "reactif", label: "Réactif(ve) – Rapidité dans la prise de décision et l'exécution des tâches" }
  ];

  const tachesOptions = [
    { value: "concevoir", label: "Concevoir et développer des idées innovantes (design, marketing, stratégie)" },
    { value: "contenu", label: "Produire du contenu numérique (vidéo, graphisme, écriture web, gestion de réseaux sociaux)" },
    { value: "communiquer", label: "Communiquer et interagir avec les autres (service client, négociation, relations publiques)" },
    { value: "gerer", label: "Gérer et coordonner des projets (planification, organisation, suivi d'équipes)" },
    { value: "rechercher", label: "Rechercher et expérimenter de nouvelles solutions (sciences, innovation technologique)" },
    { value: "chiffres", label: "Travailler avec les chiffres (comptabilité, finance, audit)" },
    { value: "aider", label: "Aider et accompagner les autres (coaching, pédagogie, psychologie)" }
  ];

  const competencesOptions = [
    { value: "creativite", label: "Créativité et innovation (capacité à proposer de nouvelles idées et solutions originales)" },
    { value: "contenu-digital", label: "Création de contenu numérique (vidéo, graphisme, réseaux sociaux, storytelling digital)" },
    { value: "gestion-projet", label: "Gestion de projet (planification, suivi des tâches, coordination des équipes)" },
    { value: "analyse", label: "Analyse et résolution de problèmes (stratégie, diagnostic, prise de décision)" },
    { value: "communication", label: "Communication et rédaction (rédaction de rapports, storytelling, relations publiques)" },
    { value: "informatique", label: "Informatique et outils numériques (programmation, gestion de bases de données)" },
    { value: "leadership", label: "Leadership et prise de décision (gestion d'équipe, organisation stratégique)" },
    { value: "stress", label: "Gestion du stress et des priorités (capacité à travailler sous pression)" },
    { value: "techniques", label: "Compétences techniques spécialisées (développement web, ingénierie, analyse de données)" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour</span>
          </Link>
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/5d7e7c1c-ebd4-4271-a028-9798957bf332.png" 
              alt="Houkouki Logo" 
              className="h-10 w-auto"
            />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Questionnaire d'Orientation Professionnelle</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bienvenue ! Ce questionnaire a pour but de mieux comprendre votre situation et vos besoins afin de vous accompagner efficacement dans l'orientation de votre parcours professionnel.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section I - Informations Générales */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">I. Informations Générales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nom">Nom *</Label>
                  <Input 
                    id="nom" 
                    value={formData.nom}
                    onChange={(e) => handleInputChange('nom', e.target.value)}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="prenom">Prénom *</Label>
                  <Input 
                    id="prenom" 
                    value={formData.prenom}
                    onChange={(e) => handleInputChange('prenom', e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Âge *</Label>
                  <Input 
                    id="age" 
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email">Adresse e-mail *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="telephone">Numéro de téléphone *</Label>
                <Input 
                  id="telephone" 
                  value={formData.telephone}
                  onChange={(e) => handleInputChange('telephone', e.target.value)}
                  required 
                />
              </div>

              <div>
                <Label htmlFor="niveauEtudes">Niveau d'études *</Label>
                <Input 
                  id="niveauEtudes" 
                  value={formData.niveauEtudes}
                  onChange={(e) => handleInputChange('niveauEtudes', e.target.value)}
                  required 
                />
              </div>

              <div>
                <Label htmlFor="domaineEtudes">Domaine d'études ou de formation *</Label>
                <Input 
                  id="domaineEtudes" 
                  value={formData.domaineEtudes}
                  onChange={(e) => handleInputChange('domaineEtudes', e.target.value)}
                  required 
                />
              </div>

              <div>
                <Label htmlFor="experiencesPro">Expériences professionnelles (si applicable)</Label>
                <Textarea 
                  id="experiencesPro" 
                  value={formData.experiencesPro}
                  onChange={(e) => handleInputChange('experiencesPro', e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <Label>Occupation actuelle *</Label>
                <RadioGroup 
                  value={formData.occupationActuelle} 
                  onValueChange={(value) => handleInputChange('occupationActuelle', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="etudiant" id="etudiant" />
                    <Label htmlFor="etudiant">Étudiant(e) en recherche de stage</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="jeune-diplome" id="jeune-diplome" />
                    <Label htmlFor="jeune-diplome">Jeune diplômé(e) à la recherche d'un premier emploi</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="reconversion" id="reconversion" />
                    <Label htmlFor="reconversion">Professionnel(le) en reconversion</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Section II - Auto-évaluation et Intérêts Professionnels */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">II. Auto-évaluation et Intérêts Professionnels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg font-semibold">1. Quelles sont vos principales qualités ?</Label>
                <p className="text-sm text-gray-600 mb-4">Cochez celles qui s'appliquent à vous</p>
                <div className="space-y-3">
                  {qualitesOptions.map((option) => (
                    <div key={option.value} className="flex items-start space-x-2">
                      <Checkbox
                        id={option.value}
                        checked={formData.qualites.includes(option.value)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange('qualites', option.value, checked as boolean)
                        }
                      />
                      <Label htmlFor={option.value} className="text-sm leading-relaxed">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="autre-qualite"
                      checked={formData.autreQualite !== ''}
                      onCheckedChange={(checked) => {
                        if (!checked) handleInputChange('autreQualite', '');
                      }}
                    />
                    <Label htmlFor="autre-qualite">Autre :</Label>
                    <Input 
                      value={formData.autreQualite}
                      onChange={(e) => handleInputChange('autreQualite', e.target.value)}
                      placeholder="Précisez"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-lg font-semibold">2. Quels types de tâches préférez-vous accomplir ?</Label>
                <p className="text-sm text-gray-600 mb-4">Cochez celles qui vous correspondent</p>
                <div className="space-y-3">
                  {tachesOptions.map((option) => (
                    <div key={option.value} className="flex items-start space-x-2">
                      <Checkbox
                        id={`tache-${option.value}`}
                        checked={formData.tachesPreferees.includes(option.value)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange('tachesPreferees', option.value, checked as boolean)
                        }
                      />
                      <Label htmlFor={`tache-${option.value}`} className="text-sm leading-relaxed">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="autre-tache"
                      checked={formData.autreTache !== ''}
                      onCheckedChange={(checked) => {
                        if (!checked) handleInputChange('autreTache', '');
                      }}
                    />
                    <Label htmlFor="autre-tache">Autre :</Label>
                    <Input 
                      value={formData.autreTache}
                      onChange={(e) => handleInputChange('autreTache', e.target.value)}
                      placeholder="Précisez"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-lg font-semibold">3. Quelle place la créativité occupe-t-elle dans votre travail ou vos études ?</Label>
                <RadioGroup 
                  value={formData.creativite} 
                  onValueChange={(value) => handleInputChange('creativite', value)}
                  className="mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="essentielle" id="essentielle" />
                    <Label htmlFor="essentielle">Essentielle – J'ai besoin de créer et d'innover constamment</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="importante" id="importante" />
                    <Label htmlFor="importante">Importante – J'aime explorer de nouvelles idées dans mon domaine</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moyenne" id="moyenne" />
                    <Label htmlFor="moyenne">Moyenne – J'intègre parfois des éléments créatifs à mon travail</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="faible" id="faible" />
                    <Label htmlFor="faible">Faible – Mon domaine est principalement structuré et technique</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg font-semibold">4. Pratiquez-vous une activité artistique ou créative ?</Label>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="activite-oui" 
                      name="activite" 
                      value="oui"
                      checked={formData.activiteArtistique === 'oui'}
                      onChange={(e) => handleInputChange('activiteArtistique', e.target.value)}
                    />
                    <Label htmlFor="activite-oui">Oui, laquelle ?</Label>
                    <Input 
                      value={formData.activiteArtistiqueDetails}
                      onChange={(e) => handleInputChange('activiteArtistiqueDetails', e.target.value)}
                      placeholder="Précisez votre activité"
                      className="flex-1"
                      disabled={formData.activiteArtistique !== 'oui'}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="activite-non" 
                      name="activite" 
                      value="non"
                      checked={formData.activiteArtistique === 'non'}
                      onChange={(e) => handleInputChange('activiteArtistique', e.target.value)}
                    />
                    <Label htmlFor="activite-non">Non, mais j'aimerais développer cet aspect</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section III - Compétences et Aptitudes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">III. Compétences et Aptitudes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg font-semibold">1. Quelles compétences maîtrisez-vous le mieux ?</Label>
                <p className="text-sm text-gray-600 mb-4">Cochez celles qui vous concernent</p>
                <div className="space-y-3">
                  {competencesOptions.map((option) => (
                    <div key={option.value} className="flex items-start space-x-2">
                      <Checkbox
                        id={`competence-${option.value}`}
                        checked={formData.competences.includes(option.value)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange('competences', option.value, checked as boolean)
                        }
                      />
                      <Label htmlFor={`competence-${option.value}`} className="text-sm leading-relaxed">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="autre-competence"
                      checked={formData.autreCompetence !== ''}
                      onCheckedChange={(checked) => {
                        if (!checked) handleInputChange('autreCompetence', '');
                      }}
                    />
                    <Label htmlFor="autre-competence">Autre :</Label>
                    <Input 
                      value={formData.autreCompetence}
                      onChange={(e) => handleInputChange('autreCompetence', e.target.value)}
                      placeholder="Précisez"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-lg font-semibold">2. Objectifs Professionnels</Label>
                
                <div className="mt-4">
                  <Label className="font-medium">Court terme (1-2 ans) :</Label>
                  <div className="mt-2 space-y-2">
                    {[
                      { value: "valider-diplome", label: "Valider mon diplôme" },
                      { value: "experience-stage", label: "Acquérir de l'expérience professionnelle via un stage ou une alternance" },
                      { value: "reseau-international", label: "Développer mon réseau professionnel à l'international et acquérir une première expérience à l'étranger" },
                      { value: "responsabilites", label: "Accéder à un poste avec des responsabilités élargies pour renforcer mes compétences managériales" },
                      { value: "tester-domaine", label: "Tester un domaine avant de m'y engager" },
                      { value: "changer-domaine", label: "Changer de domaine professionnel et me réorienter" },
                      { value: "entrepreneurial", label: "Monter un projet entrepreneurial ou lancer mon entreprise" }
                    ].map((option) => (
                      <div key={option.value} className="flex items-start space-x-2">
                        <Checkbox
                          id={`court-${option.value}`}
                          checked={formData.objectifCourtTerme.includes(option.value)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange('objectifCourtTerme', option.value, checked as boolean)
                          }
                        />
                        <Label htmlFor={`court-${option.value}`} className="text-sm">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="autre-court"
                        checked={formData.autreObjectifCourt !== ''}
                        onCheckedChange={(checked) => {
                          if (!checked) handleInputChange('autreObjectifCourt', '');
                        }}
                      />
                      <Label htmlFor="autre-court">Autre :</Label>
                      <Input 
                        value={formData.autreObjectifCourt}
                        onChange={(e) => handleInputChange('autreObjectifCourt', e.target.value)}
                        placeholder="Précisez"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Label className="font-medium">Long terme (5 ans et plus) :</Label>
                  <div className="mt-2 space-y-2">
                    {[
                      { value: "poste-strategique", label: "Évoluer vers un poste stratégique avec une forte capacité de décision" },
                      { value: "expert", label: "Devenir expert(e) dans mon domaine (spécialisation, recherche, innovation)" },
                      { value: "creer-entreprise", label: "Créer et développer ma propre entreprise" },
                      { value: "reseau-influence", label: "Établir un réseau solide à l'international et occuper un rôle d'influence dans mon secteur" },
                      { value: "equilibre", label: "Avoir un équilibre entre ma vie professionnelle et personnelle" },
                      { value: "valeurs", label: "Travailler dans une entreprise qui partage mes valeurs et ma vision" },
                      { value: "nouvelle-passion", label: "Changer complètement de domaine pour suivre une nouvelle passion" }
                    ].map((option) => (
                      <div key={option.value} className="flex items-start space-x-2">
                        <Checkbox
                          id={`long-${option.value}`}
                          checked={formData.objectifLongTerme.includes(option.value)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange('objectifLongTerme', option.value, checked as boolean)
                          }
                        />
                        <Label htmlFor={`long-${option.value}`} className="text-sm">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="autre-long"
                        checked={formData.autreObjectifLong !== ''}
                        onCheckedChange={(checked) => {
                          if (!checked) handleInputChange('autreObjectifLong', '');
                        }}
                      />
                      <Label htmlFor="autre-long">Autre :</Label>
                      <Input 
                        value={formData.autreObjectifLong}
                        onChange={(e) => handleInputChange('autreObjectifLong', e.target.value)}
                        placeholder="Précisez"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section IV - Stratégie de Recherche et Accompagnement */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">IV. Stratégie de Recherche et Accompagnement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg font-semibold">1. Quels canaux utilisez-vous pour rechercher un stage ou un emploi ?</Label>
                <div className="mt-3 space-y-2">
                  {[
                    { value: "plateformes", label: "Plateformes en ligne (LinkedIn, Indeed, Apec, etc.)" },
                    { value: "reseau", label: "Réseau personnel (famille, amis, anciens collègues)" },
                    { value: "forums", label: "Forums et salons de l'emploi" },
                    { value: "spontanees", label: "Candidatures spontanées auprès des entreprises" }
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`canal-${option.value}`}
                        checked={formData.canauxRecherche.includes(option.value)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange('canauxRecherche', option.value, checked as boolean)
                        }
                      />
                      <Label htmlFor={`canal-${option.value}`}>{option.label}</Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="autre-canal"
                      checked={formData.autreCanalRecherche !== ''}
                      onCheckedChange={(checked) => {
                        if (!checked) handleInputChange('autreCanalRecherche', '');
                      }}
                    />
                    <Label htmlFor="autre-canal">Autre :</Label>
                    <Input 
                      value={formData.autreCanalRecherche}
                      onChange={(e) => handleInputChange('autreCanalRecherche', e.target.value)}
                      placeholder="Précisez"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-lg font-semibold">2. Quels sont vos obstacles principaux dans votre recherche ?</Label>
                <div className="mt-3 space-y-2">
                  {[
                    { value: "confiance", label: "Manque de confiance en soi" },
                    { value: "peur", label: "Peur de l'échec ou du rejet" },
                    { value: "experience", label: "Manque d'expérience professionnelle" },
                    { value: "offres", label: "Difficulté à trouver des offres correspondant à mes compétences" }
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`obstacle-${option.value}`}
                        checked={formData.obstacles.includes(option.value)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange('obstacles', option.value, checked as boolean)
                        }
                      />
                      <Label htmlFor={`obstacle-${option.value}`}>{option.label}</Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="autre-obstacle"
                      checked={formData.autreObstacle !== ''}
                      onCheckedChange={(checked) => {
                        if (!checked) handleInputChange('autreObstacle', '');
                      }}
                    />
                    <Label htmlFor="autre-obstacle">Autre :</Label>
                    <Input 
                      value={formData.autreObstacle}
                      onChange={(e) => handleInputChange('autreObstacle', e.target.value)}
                      placeholder="Précisez"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-lg font-semibold">3. Quel type d'accompagnement souhaitez-vous ?</Label>
                <div className="mt-3 space-y-2">
                  {[
                    { value: "cv", label: "Coaching sur la rédaction de CV et de lettre de motivation" },
                    { value: "entretiens", label: "Préparation aux entretiens d'embauche" },
                    { value: "comportementales", label: "Développement de compétences comportementales (gestion du stress, confiance en soi, etc.)" },
                    { value: "reseau", label: "Mise en réseau avec des recruteurs ou professionnels du secteur" }
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`accompagnement-${option.value}`}
                        checked={formData.typeAccompagnement.includes(option.value)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange('typeAccompagnement', option.value, checked as boolean)
                        }
                      />
                      <Label htmlFor={`accompagnement-${option.value}`}>{option.label}</Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="autre-accompagnement"
                      checked={formData.autreAccompagnement !== ''}
                      onCheckedChange={(checked) => {
                        if (!checked) handleInputChange('autreAccompagnement', '');
                      }}
                    />
                    <Label htmlFor="autre-accompagnement">Autre :</Label>
                    <Input 
                      value={formData.autreAccompagnement}
                      onChange={(e) => handleInputChange('autreAccompagnement', e.target.value)}
                      placeholder="Précisez"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section V - Ce qui Vous Motive dans un Emploi */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">V. Ce qui Vous Motive dans un Emploi</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label className="text-lg font-semibold">1. Quels sont vos critères principaux dans le choix d'un poste ?</Label>
                <div className="mt-3 space-y-2">
                  {[
                    { value: "evolution", label: "Possibilité d'évoluer et de monter en compétences" },
                    { value: "equilibre", label: "Équilibre entre vie professionnelle et personnelle" },
                    { value: "projets", label: "Projets innovants et créatifs" },
                    { value: "international", label: "Travail en environnement international" },
                    { value: "stabilite", label: "Stabilité et sécurité de l'emploi" },
                    { value: "impact", label: "Impact et utilité sociale" },
                    { value: "autonomie", label: "Autonomie et prise d'initiative" }
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`critere-${option.value}`}
                        checked={formData.criteresPrincipaux.includes(option.value)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange('criteresPrincipaux', option.value, checked as boolean)
                        }
                      />
                      <Label htmlFor={`critere-${option.value}`}>{option.label}</Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="autre-critere"
                      checked={formData.autreCritere !== ''}
                      onCheckedChange={(checked) => {
                        if (!checked) handleInputChange('autreCritere', '');
                      }}
                    />
                    <Label htmlFor="autre-critere">Autre :</Label>
                    <Input 
                      value={formData.autreCritere}
                      onChange={(e) => handleInputChange('autreCritere', e.target.value)}
                      placeholder="Précisez"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section VI - Informations Complémentaires */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">VI. Informations Complémentaires</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label className="text-lg font-semibold">Avez-vous une question ou un besoin spécifique concernant votre recherche ?</Label>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="question-oui" 
                      name="question" 
                      value="oui"
                      checked={formData.questionSpecifique === 'oui'}
                      onChange={(e) => handleInputChange('questionSpecifique', e.target.value)}
                    />
                    <Label htmlFor="question-oui">Oui :</Label>
                  </div>
                  {formData.questionSpecifique === 'oui' && (
                    <Textarea 
                      value={formData.questionDetails}
                      onChange={(e) => handleInputChange('questionDetails', e.target.value)}
                      placeholder="Décrivez votre question ou besoin spécifique..."
                      className="min-h-[100px] mt-2"
                    />
                  )}
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="question-non" 
                      name="question" 
                      value="non"
                      checked={formData.questionSpecifique === 'non'}
                      onChange={(e) => handleInputChange('questionSpecifique', e.target.value)}
                    />
                    <Label htmlFor="question-non">Non</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center py-8">
            <Button 
              type="submit" 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg px-12 py-4"
            >
              <Send className="mr-2 h-5 w-5" />
              Envoyer le questionnaire
            </Button>
          </div>
        </form>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Questionnaire envoyé</DialogTitle>
            <DialogDescription className="text-center pt-4">
              Merci d'avoir complété ce questionnaire ! Nos experts analyseront vos réponses et vous proposeront un accompagnement adapté. Une copie a été envoyée à notre équipe.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-red-600 hover:bg-red-700"
            >
              Fermer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Questionnaire;
