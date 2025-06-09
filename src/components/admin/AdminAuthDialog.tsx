
import React from 'react';
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthModal from '@/components/AuthModal';

interface AdminAuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdminAuthDialog = ({ open, onOpenChange }: AdminAuthDialogProps) => {
  const navigate = useNavigate();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-red-600" />
            Accès administrateur requis
          </AlertDialogTitle>
          <AlertDialogDescription>
            Vous devez être connecté avec un compte administrateur pour accéder à cette section.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/')}>
            Retour à l'accueil
          </Button>
          <AuthModal>
            <AlertDialogAction>
              Se connecter
            </AlertDialogAction>
          </AuthModal>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AdminAuthDialog;
