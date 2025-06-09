
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useAdmin } from '@/hooks/useAdmin';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminAuthDialog from '@/components/admin/AdminAuthDialog';
import AdminContent from '@/components/admin/AdminContent';
import AdminLoginPrompt from '@/components/admin/AdminLoginPrompt';

const Admin = () => {
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdmin();
  const [showAuthAlert, setShowAuthAlert] = useState(false);

  // TEMPORAIRE : Désactiver les vérifications d'authentification pour les tests
  const isTestMode = true;

  if (authLoading || adminLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <AdminAuthDialog open={showAuthAlert} onOpenChange={setShowAuthAlert} />
      <AdminHeader />
      
      <div className="container mx-auto px-4 py-8">
        {/* En mode test, afficher directement AdminContent */}
        {isTestMode ? <AdminContent /> : (user && isAdmin ? <AdminContent /> : <AdminLoginPrompt />)}
      </div>
    </div>
  );
};

export default Admin;
