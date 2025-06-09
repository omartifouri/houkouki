import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabaseTyped } from '@/lib/supabaseTyped';
import { UserPlus } from 'lucide-react';
import { ContactSubmission } from '@/hooks/useAdmin';

interface ContactSubmissionsTabProps {
  submissions: ContactSubmission[];
  onClientCreated?: () => void;
}

const ContactSubmissionsTab = ({ submissions, onClientCreated }: ContactSubmissionsTabProps) => {
  const [isTransferDialogOpen, setIsTransferDialogOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<ContactSubmission | null>(null);
  const [transferFormData, setTransferFormData] = useState({
    login: ''
  });
  const [isTransferring, setIsTransferring] = useState(false);
  const { toast } = useToast();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

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
      login: `${lead.prenom.toLowerCase()}.${lead.nom.toLowerCase()}`
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

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Formulaire c'est parti</CardTitle>
        </CardHeader>
        <CardContent>
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
                      onClick={() => handleTransferToClient(submission)}
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
        </CardContent>
      </Card>

      <Dialog open={isTransferDialogOpen} onOpenChange={setIsTransferDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Transférer en client</DialogTitle>
            <DialogDescription>
              Créer un compte client pour {selectedLead?.prenom} {selectedLead?.nom}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="login">Login</Label>
              <Input
                id="login"
                value={transferFormData.login}
                onChange={(e) => setTransferFormData({ ...transferFormData, login: e.target.value })}
                placeholder="login.utilisateur"
                required
              />
            </div>
            <div className="text-sm text-gray-600">
              <p><strong>Email :</strong> {selectedLead?.email}</p>
              <p><strong>Nom :</strong> {selectedLead?.prenom} {selectedLead?.nom}</p>
              <p>Un mot de passe temporaire sera généré automatiquement et envoyé par email.</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsTransferDialogOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleConfirmTransfer} disabled={isTransferring || !transferFormData.login}>
              {isTransferring ? "Transfert..." : "Créer le client"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactSubmissionsTab;
