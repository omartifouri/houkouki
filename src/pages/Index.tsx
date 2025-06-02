import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { AuthModal } from "@/components/AuthModal";

const Index = () => {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-2xl font-bold text-red-800">Houkouki</span>
          </div>
          <div className="flex items-center space-x-4">
            {user && (
              <span className="text-sm text-gray-600">
                Bonjour, {user.email}
              </span>
            )}
            <button
              onClick={handleAuthAction}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              {user ? 'Déconnexion' : 'Connexion'}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenue sur Houkouki
          </h1>
          <p className="text-xl text-gray-600">
            Votre plateforme pour créer un CV professionnel et réserver des
            consultations d'orientation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/create-cv">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Créer votre CV
              </h2>
              <p className="text-gray-600">
                Utilisez notre outil de création de CV pour réaliser un CV
                professionnel en quelques minutes.
              </p>
              <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white">
                Commencer à créer
              </Button>
            </div>
          </Link>

          <Link to="/booking">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Réserver une consultation
              </h2>
              <p className="text-gray-600">
                Prenez rendez-vous avec un conseiller d'orientation pour discuter
                de votre avenir professionnel.
              </p>
              <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white">
                Réserver une consultation
              </Button>
            </div>
          </Link>
        </div>
      </div>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Index;
