
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CVData } from '@/types/cvTypes';

interface EducationSectionProps {
  education: CVData['education'];
  onAdd: () => void;
  onUpdate: (id: string, field: string, value: string) => void;
  onRemove: (id: string) => void;
}

export const EducationSection = ({ education, onAdd, onUpdate, onRemove }: EducationSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Formation</CardTitle>
        <Button onClick={onAdd} variant="outline">
          Ajouter une formation
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="border p-4 rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Formation</h4>
              <Button
                onClick={() => onRemove(edu.id)}
                variant="destructive"
                size="sm"
              >
                Supprimer
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Établissement</Label>
                <Input
                  value={edu.institution}
                  onChange={(e) => onUpdate(edu.id, 'institution', e.target.value)}
                />
              </div>
              <div>
                <Label>Diplôme</Label>
                <Input
                  value={edu.degree}
                  onChange={(e) => onUpdate(edu.id, 'degree', e.target.value)}
                />
              </div>
              <div>
                <Label>Date de début</Label>
                <Input
                  type="month"
                  value={edu.startDate}
                  onChange={(e) => onUpdate(edu.id, 'startDate', e.target.value)}
                />
              </div>
              <div>
                <Label>Date de fin</Label>
                <Input
                  type="month"
                  value={edu.endDate}
                  onChange={(e) => onUpdate(edu.id, 'endDate', e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
