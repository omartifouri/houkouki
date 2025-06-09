
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, FileText, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CVManagerTab } from '@/components/dashboard/CVManagerTab';
import { BookingsManagerTab } from '@/components/dashboard/BookingsManagerTab';
import AuthModal from '@/components/AuthModal';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Retour à l'accueil</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-2xl font-bold text-red-800">Houkouki</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16 text-center">
          <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Connexion requise</h2>
          <p className="text-gray-600 mb-6">Vous devez être connecté pour accéder à votre espace personnel</p>
          <AuthModal>
            <Button className="bg-red-600 hover:bg-red-700">
              Se connecter
            </Button>
          </AuthModal>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour à l'accueil</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-2xl font-bold text-red-800">Houkouki</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mon espace personnel</h1>
          <p className="text-gray-600">Gérez vos CV et vos rendez-vous</p>
        </div>

        <Tabs defaultValue="cv" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="cv" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Mes CV
            </TabsTrigger>
            <TabsTrigger value="bookings" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Mes rendez-vous
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="cv" className="space-y-6">
              <CVManagerTab />
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <BookingsManagerTab />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
