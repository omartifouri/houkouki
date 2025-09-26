
import React from 'react';
import { CVData } from '@/types/cvTypes';

interface CVPreviewProps {
  cvData: CVData;
}

export const CVPreview: React.FC<CVPreviewProps> = ({ cvData }) => {
  const { personalInfo, summary, experience, education, skills, languages } = cvData;

  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm max-h-[800px] overflow-y-auto">
      {/* En-tête */}
      <div className="border-b pb-4 mb-4">
        <div className="flex items-start space-x-4">
          {/* Photo de profil */}
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt="Photo de profil"
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
            />
          )}
          
          {/* Informations principales */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <div className="space-y-1 text-sm text-gray-600">
              {personalInfo.email && <div>📧 {personalInfo.email}</div>}
              {personalInfo.phone && <div>📞 {personalInfo.phone}</div>}
              {personalInfo.address && <div>📍 {personalInfo.address}</div>}
              {personalInfo.linkedin && <div>🔗 {personalInfo.linkedin}</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Résumé professionnel */}
      {summary && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-brand-coral-dark mb-2 border-b border-brand-coral-light pb-1">
            Résumé Professionnel
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Expérience professionnelle */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-brand-coral-dark mb-3 border-b border-brand-coral-light pb-1">
            Expérience Professionnelle
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-brand-beige pl-4">
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <div className="text-sm text-brand-beige font-medium">
                  {exp.company} | {exp.startDate} - {exp.endDate}
                </div>
                {exp.description && (
                  <p className="text-sm text-gray-700 mt-1 leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Formation */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-brand-coral-dark mb-3 border-b border-brand-coral-light pb-1">
            Formation
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-brand-beige pl-4">
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <div className="text-sm text-brand-beige font-medium">
                  {edu.institution} | {edu.startDate} - {edu.endDate}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Compétences */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-brand-coral-dark mb-3 border-b border-brand-coral-light pb-1">
            Compétences
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-brand-beige/20 text-brand-beige px-2 py-1 rounded text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Langues */}
      {languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-brand-coral-dark mb-3 border-b border-brand-coral-light pb-1">
            Langues
          </h2>
          <div className="space-y-2">
            {languages.map((lang) => (
              <div key={lang.id} className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{lang.language}</span>
                <span className="text-sm text-brand-beige font-medium">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Message si CV vide */}
      {!personalInfo.firstName && !personalInfo.lastName && !summary && experience.length === 0 && education.length === 0 && skills.length === 0 && languages.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>Commencez à remplir vos informations pour voir l'aperçu de votre CV</p>
        </div>
      )}
    </div>
  );
};
