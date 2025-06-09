
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import AuthModal from '@/components/AuthModal';

const AdminLoginPrompt = () => {
  return (
    <div className="text-center py-16">
      <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Accès administrateur requis</h2>
      <p className="text-gray-600 mb-6">Vous devez être connecté avec un compte administrateur</p>
      <AuthModal>
        <Button className="bg-red-600 hover:bg-red-700">
          Se connecter
        </Button>
      </AuthModal>
    </div>
  );
};

export default AdminLoginPrompt;
