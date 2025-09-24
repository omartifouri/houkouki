
import React from 'react';
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ArrowLeft className="h-5 w-5" />
          <span>Retour à l'accueil</span>
        </Link>
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/dfdc0f4e-a6f8-4767-9a16-dccbe2acd2af.png" 
            alt="ILAA Logo" 
            className="h-8 w-auto"
          />
          <span className="text-2xl font-bold text-brand-coral-dark">ILAA Admin</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
