
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactSubmission } from '@/hooks/useAdmin';
import { useTransferToClient } from '@/hooks/useTransferToClient';
import ContactSubmissionsTable from './ContactSubmissionsTable';
import TransferToClientDialog from './TransferToClientDialog';

interface ContactSubmissionsTabProps {
  submissions: ContactSubmission[];
  onClientCreated?: () => void;
}

const ContactSubmissionsTab = ({ submissions, onClientCreated }: ContactSubmissionsTabProps) => {
  const {
    isTransferDialogOpen,
    selectedLead,
    transferFormData,
    setTransferFormData,
    isTransferring,
    handleTransferToClient,
    handleConfirmTransfer,
    closeDialog
  } = useTransferToClient(onClientCreated);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Formulaire c'est parti</CardTitle>
        </CardHeader>
        <CardContent>
          <ContactSubmissionsTable 
            submissions={submissions}
            onTransferToClient={handleTransferToClient}
          />
        </CardContent>
      </Card>

      <TransferToClientDialog
        isOpen={isTransferDialogOpen}
        onClose={closeDialog}
        selectedLead={selectedLead}
        transferFormData={transferFormData}
        setTransferFormData={setTransferFormData}
        isTransferring={isTransferring}
        onConfirmTransfer={handleConfirmTransfer}
      />
    </>
  );
};

export default ContactSubmissionsTab;
