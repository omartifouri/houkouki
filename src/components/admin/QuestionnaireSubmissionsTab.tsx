
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { QuestionnaireSubmission } from '@/hooks/useAdmin';

interface QuestionnaireSubmissionsTabProps {
  submissions: QuestionnaireSubmission[];
}

const QuestionnaireSubmissionsTab = ({ submissions }: QuestionnaireSubmissionsTabProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Soumissions du questionnaire "Parlez-nous de vous"</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Occupation</TableHead>
              <TableHead>Localisation</TableHead>
              <TableHead>Objectifs</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>{formatDate(submission.created_at)}</TableCell>
                <TableCell>{submission.prenom} {submission.nom}</TableCell>
                <TableCell>{submission.email}</TableCell>
                <TableCell>{submission.occupation_actuelle}</TableCell>
                <TableCell>{submission.situation_geographique || '-'}</TableCell>
                <TableCell className="max-w-xs truncate">{submission.objectifs_carriere || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default QuestionnaireSubmissionsTab;
