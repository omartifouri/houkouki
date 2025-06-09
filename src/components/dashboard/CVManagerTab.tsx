
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, Edit, Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserCV } from '@/hooks/useUserCV';
import { exportToPDF } from '@/utils/pdfExport';

export const CVManagerTab = () => {
  const { userCV, loading, error } = useUserCV();

  const handleExportToPDF = async () => {
    if (userCV) {
      await exportToPDF(userCV);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Chargement de vos CV...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-red-600">
            <p>Erreur lors du chargement de vos CV</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Mes CV</h2>
        <Link to="/create-cv">
          <Button className="bg-red-600 hover:bg-red-700">
            <Plus className="h-4 w-4 mr-2" />
            {userCV ? 'Modifier mon CV' : 'Créer un CV'}
          </Button>
        </Link>
      </div>

      {userCV ? (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {userCV.title}
                </CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Dernière modification : {new Date(userCV.updated_at).toLocaleDateString('fr-FR')}
                </p>
              </div>
              <Badge variant="secondary">Actuel</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userCV.personal_info && (
                <div>
                  <h4 className="font-semibold mb-2">Informations personnelles</h4>
                  <p className="text-sm text-gray-600">
                    {userCV.personal_info.firstName} {userCV.personal_info.lastName}
                  </p>
                  <p className="text-sm text-gray-600">{userCV.personal_info.email}</p>
                </div>
              )}

              {userCV.summary && (
                <div>
                  <h4 className="font-semibold mb-2">Résumé</h4>
                  <p className="text-sm text-gray-600 line-clamp-3">{userCV.summary}</p>
                </div>
              )}

              <div className="flex gap-2 pt-4">
                <Link to="/create-cv">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Modifier
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={handleExportToPDF}>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger PDF
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-8 text-center">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Aucun CV créé</h3>
            <p className="text-gray-600 mb-4">
              Créez votre premier CV professionnel dès maintenant
            </p>
            <Link to="/create-cv">
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="h-4 w-4 mr-2" />
                Créer mon premier CV
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
