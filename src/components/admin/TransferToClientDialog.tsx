
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContactSubmission } from '@/hooks/useAdmin';

interface TransferToClientDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLead: ContactSubmission | null;
  transferFormData: { login: string };
  setTransferFormData: (data: { login: string }) => void;
  isTransferring: boolean;
  onConfirmTransfer: () => void;
}

const TransferToClientDialog = ({
  isOpen,
  onClose,
  selectedLead,
  transferFormData,
  setTransferFormData,
  isTransferring,
  onConfirmTransfer
}: TransferToClientDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
              placeholder="email@example.com"
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
          <Button variant="outline" onClick={onClose}>
            Annuler
          </Button>
          <Button onClick={onConfirmTransfer} disabled={isTransferring || !transferFormData.login}>
            {isTransferring ? "Transfert..." : "Créer le client"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TransferToClientDialog;
