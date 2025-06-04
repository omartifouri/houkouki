
import jsPDF from 'jspdf';
import { CVData } from '@/types/cvTypes';

export const exportToPDF = (cvData: CVData) => {
  const pdf = new jsPDF();
  const { personalInfo, summary, experience, education, skills, languages } = cvData;
  
  // Configuration
  const margin = 20;
  let yPosition = margin;
  const lineHeight = 7;
  const sectionSpacing = 10;
  
  // Titre
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text(`${personalInfo.firstName} ${personalInfo.lastName}`, margin, yPosition);
  yPosition += lineHeight + 5;
  
  // Informations personnelles
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Email: ${personalInfo.email}`, margin, yPosition);
  yPosition += lineHeight;
  pdf.text(`Téléphone: ${personalInfo.phone}`, margin, yPosition);
  yPosition += lineHeight;
  pdf.text(`Adresse: ${personalInfo.address}`, margin, yPosition);
  yPosition += lineHeight;
  if (personalInfo.linkedin) {
    pdf.text(`LinkedIn: ${personalInfo.linkedin}`, margin, yPosition);
    yPosition += lineHeight;
  }
  yPosition += sectionSpacing;
  
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
