
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, User, Mail, Key, UserCheck } from 'lucide-react';

interface Client {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  login: string;
  temporary_password: string;
  password_changed: boolean;
  created_at: string;
}

interface ValidationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  client: Client | null;
  onConfirm: () => void;
  isSending: boolean;
}

const ValidationDialog = ({ open, onOpenChange, client, onConfirm, isSending }: ValidationDialogProps) => {
  if (!client) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-blue-600" />
            Validation des accès client
          </DialogTitle>
          <DialogDescription>
            Vérifiez les informations de souscription avant d'envoyer l'email d'accès
          </DialogDescription>
        </DialogHeader>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">Informations de souscription</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium">{client.prenom} {client.nom}</p>
                <p className="text-xs text-gray-500">Nom complet</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium">{client.email}</p>
                <p className="text-xs text-gray-500">Email de destination</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium">{client.login}</p>
                <p className="text-xs text-gray-500">Identifiant de connexion</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Key className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{client.temporary_password}</p>
                <p className="text-xs text-gray-500">Mot de passe temporaire</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-800">
                ⚠️ L'email sera envoyé à <strong>{client.email}</strong> avec les accès de connexion.
                Le client devra changer son mot de passe lors de sa première connexion.
              </p>
            </div>
          </CardContent>
        </Card>

        <DialogFooter className="gap-2">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            disabled={isSending}
          >
            Annuler
          </Button>
          <Button 
            onClick={onConfirm}
            disabled={isSending}
            className="flex items-center gap-2"
          >
            <Send className="h-4 w-4" />
            {isSending ? "Envoi en cours..." : "Confirmer et envoyer"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ValidationDialog;
