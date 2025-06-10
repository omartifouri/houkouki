
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { supabaseTyped } from '@/lib/supabaseTyped';
import { ContactSubmission } from '@/hooks/useAdmin';

export const useTransferToClient = (onClientCreated?: () => void) => {
  const [isTransferDialogOpen, setIsTransferDialogOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<ContactSubmission | null>(null);
  const [transferFormData, setTransferFormData] = useState({
    login: ''
  });
  const [isTransferring, setIsTransferring] = useState(false);
  const { toast } = useToast();

  const generatePassword = () => {
    const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const hashPassword = async (password: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const handleTransferToClient = (lead: ContactSubmission) => {
    setSelectedLead(lead);
    setTransferFormData({
      login: lead.email // Utiliser l'email comme login par défaut
    });
    setIsTransferDialogOpen(true);
  };

  const handleConfirmTransfer = async () => {
    if (!selectedLead) return;

    setIsTransferring(true);

    try {
      const temporaryPassword = generatePassword();
      const passwordHash = await hashPassword(temporaryPassword);

      console.log('Tentative de création du client:', {
        nom: selectedLead.nom,
        prenom: selectedLead.prenom,
        email: selectedLead.email,
        login: transferFormData.login
      });

      // Créer le client
      const { data: client, error: clientError } = await supabaseTyped
        .from('clients')
        .insert({
          nom: selectedLead.nom,
          prenom: selectedLead.prenom,
          email: selectedLead.email,
          login: transferFormData.login,
          password_hash: passwordHash,
          temporary_password: temporaryPassword,
        })
        .select()
        .single();

      if (clientError) {
        console.error('Erreur création client:', clientError);
        throw clientError;
      }

      console.log('Client créé avec succès:', client);

      // Envoyer l'email d'accès
      const { error: emailError } = await supabaseTyped.functions.invoke('send-client-access', {
        body: {
          nom: selectedLead.nom,
          prenom: selectedLead.prenom,
          email: selectedLead.email,
          login: transferFormData.login,
          password: temporaryPassword
        }
      });

      if (emailError) {
        console.error('Erreur envoi email:', emailError);
        // On continue même si l'email échoue
      }

      toast({
        title: "Lead transféré",
        description: `${selectedLead.prenom} ${selectedLead.nom} a été transféré en client avec succès.`,
      });

      setIsTransferDialogOpen(false);
      setSelectedLead(null);
      setTransferFormData({ login: '' });

      // Rafraîchir la liste des clients
      if (onClientCreated) {
        onClientCreated();
      }
    } catch (error: any) {
      console.error('Erreur transfert:', error);
      toast({
        title: "Erreur",
        description: error.message || "Erreur lors du transfert en client",
        variant: "destructive",
      });
    } finally {
      setIsTransferring(false);
    }
  };

  const closeDialog = () => {
    setIsTransferDialogOpen(false);
    setSelectedLead(null);
    setTransferFormData({ login: '' });
  };

  return {
    isTransferDialogOpen,
    selectedLead,
    transferFormData,
    setTransferFormData,
    isTransferring,
    handleTransferToClient,
    handleConfirmTransfer,
    closeDialog
  };
};
