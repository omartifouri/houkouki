
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { UserPlus } from 'lucide-react';
import { ContactSubmission } from '@/hooks/useAdmin';

interface ContactSubmissionsTableProps {
  submissions: ContactSubmission[];
  onTransferToClient: (submission: ContactSubmission) => void;
}

const ContactSubmissionsTable = ({ submissions, onTransferToClient }: ContactSubmissionsTableProps) => {
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Nom</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Téléphone</TableHead>
          <TableHead>Profil</TableHead>
          <TableHead>Message</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions.map((submission) => (
          <TableRow key={submission.id}>
            <TableCell>{formatDate(submission.created_at)}</TableCell>
            <TableCell>{submission.prenom} {submission.nom}</TableCell>
            <TableCell>{submission.email}</TableCell>
            <TableCell>{submission.telephone}</TableCell>
            <TableCell>{submission.profil}</TableCell>
            <TableCell className="max-w-xs truncate">{submission.message || '-'}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onTransferToClient(submission)}
                className="flex items-center gap-2"
              >
                <UserPlus className="h-4 w-4" />
                Transférer en client
              </Button>
            </TableCell>
          </TableRow>
        ))}
        {submissions.length === 0 && (
          <TableRow>
            <TableCell colSpan={7} className="text-center text-gray-500 py-8">
              Aucune soumission pour le moment
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ContactSubmissionsTable;
