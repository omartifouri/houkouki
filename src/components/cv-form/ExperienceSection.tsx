
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CVData } from '@/types/cvTypes';

interface ExperienceSectionProps {
  experience: CVData['experience'];
  onAdd: () => void;
  onUpdate: (id: string, field: string, value: string) => void;
  onRemove: (id: string) => void;
}

export const ExperienceSection = ({ experience, onAdd, onUpdate, onRemove }: ExperienceSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expérience professionnelle</CardTitle>
        <Button onClick={onAdd} variant="outline">
          Ajouter une expérience
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {experience.map((exp) => (
          <div key={exp.id} className="border p-4 rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Expérience</h4>
              <Button
                onClick={() => onRemove(exp.id)}
                variant="destructive"
                size="sm"
              >
                Supprimer
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Entreprise</Label>
                <Input
                  value={exp.company}
                  onChange={(e) => onUpdate(exp.id, 'company', e.target.value)}
                />
              </div>
              <div>
                <Label>Poste</Label>
                <Input
                  value={exp.position}
                  onChange={(e) => onUpdate(exp.id, 'position', e.target.value)}
                />
              </div>
              <div>
                <Label>Date de début</Label>
                <Input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => onUpdate(exp.id, 'startDate', e.target.value)}
                />
              </div>
              <div>
                <Label>Date de fin</Label>
                <Input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => onUpdate(exp.id, 'endDate', e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label>Description</Label>
              <Textarea
                value={exp.description}
                onChange={(e) => onUpdate(exp.id, 'description', e.target.value)}
                rows={3}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
