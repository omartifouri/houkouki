
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { QuestionnaireSubmission } from '@/hooks/useAdmin';

interface QuestionnaireSubmissionsTabProps {
  submissions: QuestionnaireSubmission[];
}

const QuestionnaireSubmissionsTab = ({ submissions }: QuestionnaireSubmissionsTabProps) => {
  const [selectedSubmission, setSelectedSubmission] = useState<QuestionnaireSubmission | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const QuestionnaireDetailModal = ({ submission }: { submission: QuestionnaireSubmission }) => (
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Questionnaire détaillé - {submission.prenom} {submission.nom}</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Informations personnelles</h3>
            <p><strong>Nom :</strong> {submission.nom}</p>
            <p><strong>Prénom :</strong> {submission.prenom}</p>
            <p><strong>Email :</strong> {submission.email}</p>
            <p><strong>Occupation actuelle :</strong> {submission.occupation_actuelle}</p>
            {submission.niveau_etudes && <p><strong>Niveau d'études :</strong> {submission.niveau_etudes}</p>}
            {submission.domaine_etudes && <p><strong>Domaine d'études :</strong> {submission.domaine_etudes}</p>}
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Informations complémentaires</h3>
            {submission.situation_geographique && <p><strong>Localisation :</strong> {submission.situation_geographique}</p>}
            {submission.experience_professionnelle && <p><strong>Expérience :</strong> {submission.experience_professionnelle}</p>}
            {submission.secteur_activite && <p><strong>Secteur d'activité :</strong> {submission.secteur_activite}</p>}
            {submission.langues_parlees && <p><strong>Langues :</strong> {submission.langues_parlees}</p>}
          </div>
        </div>

        {submission.objectifs_carriere && (
          <div>
            <h3 className="font-semibold text-lg mb-2">Objectifs de carrière</h3>
            <p className="whitespace-pre-wrap">{submission.objectifs_carriere}</p>
          </div>
        )}

        {submission.competences_cles && (
          <div>
            <h3 className="font-semibold text-lg mb-2">Compétences clés</h3>
            <p className="whitespace-pre-wrap">{submission.competences_cles}</p>
          </div>
        )}

        {submission.disponibilite_coaching && (
          <div>
            <h3 className="font-semibold text-lg mb-2">Disponibilité coaching</h3>
            <p>{submission.disponibilite_coaching}</p>
          </div>
        )}

        {submission.budget_coaching && (
          <div>
            <h3 className="font-semibold text-lg mb-2">Budget coaching</h3>
            <p>{submission.budget_coaching}</p>
          </div>
        )}

        {submission.autres_informations && (
          <div>
            <h3 className="font-semibold text-lg mb-2">Informations détaillées</h3>
            <div className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg text-sm">
              {submission.autres_informations}
            </div>
          </div>
        )}

        <div className="text-sm text-gray-500 border-t pt-4">
          <p><strong>Date de soumission :</strong> {formatDate(submission.created_at)}</p>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Questionnaires "Parlez-nous de vous" ({submissions.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Occupation</TableHead>
              <TableHead>Niveau d'études</TableHead>
              <TableHead>Objectifs</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>{formatDate(submission.created_at)}</TableCell>
                <TableCell>{submission.prenom} {submission.nom}</TableCell>
                <TableCell>{submission.email}</TableCell>
                <TableCell>{submission.occupation_actuelle}</TableCell>
                <TableCell>{submission.niveau_etudes || '-'}</TableCell>
                <TableCell className="max-w-xs truncate">{submission.objectifs_carriere || '-'}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedSubmission(submission)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Voir
                      </Button>
                    </DialogTrigger>
                    {selectedSubmission && <QuestionnaireDetailModal submission={selectedSubmission} />}
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default QuestionnaireSubmissionsTab;
