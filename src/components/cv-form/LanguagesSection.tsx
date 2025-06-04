
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CVData } from '@/types/cvTypes';

interface LanguagesSectionProps {
  languages: CVData['languages'];
  onAdd: () => void;
  onUpdate: (id: string, field: string, value: string) => void;
  onRemove: (id: string) => void;
}

export const LanguagesSection = ({ languages, onAdd, onUpdate, onRemove }: LanguagesSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Langues</CardTitle>
        <Button onClick={onAdd} variant="outline">
          Ajouter une langue
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {languages.map((lang) => (
          <div key={lang.id} className="border p-4 rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Langue</h4>
              <Button
                onClick={() => onRemove(lang.id)}
                variant="destructive"
                size="sm"
              >
                Supprimer
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Langue</Label>
                <Input
                  value={lang.language}
                  onChange={(e) => onUpdate(lang.id, 'language', e.target.value)}
                />
              </div>
              <div>
                <Label>Niveau</Label>
                <Input
                  value={lang.level}
                  onChange={(e) => onUpdate(lang.id, 'level', e.target.value)}
                  placeholder="ex: Natif, Courant, Intermédiaire..."
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
