
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, X } from "lucide-react";
import { CVData } from '@/types/cvTypes';

interface PersonalInfoSectionProps {
  personalInfo: CVData['personalInfo'];
  onUpdate: (field: keyof CVData['personalInfo'], value: string) => void;
}

export const PersonalInfoSection = ({ personalInfo, onUpdate }: PersonalInfoSectionProps) => {
  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onUpdate('photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    onUpdate('photo', '');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations personnelles</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Photo de profil (optionnelle)</Label>
          <div className="mt-2">
            {personalInfo.photo ? (
              <div className="flex items-center space-x-4">
                <img
                  src={personalInfo.photo}
                  alt="Photo de profil"
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                />
                <Button
                  onClick={removePhoto}
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  <X className="h-4 w-4 mr-1" />
                  Supprimer
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <Upload className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <Label
                    htmlFor="photo-upload"
                    className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Choisir une photo
                  </Label>
                  <p className="text-xs text-gray-500 mt-1">JPG, PNG jusqu'à 5MB</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">Prénom</Label>
            <Input
              id="firstName"
              value={personalInfo.firstName}
              onChange={(e) => onUpdate('firstName', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Nom</Label>
            <Input
              id="lastName"
              value={personalInfo.lastName}
              onChange={(e) => onUpdate('lastName', e.target.value)}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={personalInfo.email}
            onChange={(e) => onUpdate('email', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            value={personalInfo.phone}
            onChange={(e) => onUpdate('phone', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="address">Adresse</Label>
          <Input
            id="address"
            value={personalInfo.address}
            onChange={(e) => onUpdate('address', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="linkedin">LinkedIn (optionnel)</Label>
          <Input
            id="linkedin"
            value={personalInfo.linkedin}
            onChange={(e) => onUpdate('linkedin', e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
};
