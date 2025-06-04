
import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SummarySectionProps {
  summary: string;
  onUpdate: (value: string) => void;
}

export const SummarySection = ({ summary, onUpdate }: SummarySectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Résumé professionnel</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Décrivez brièvement votre profil professionnel..."
          value={summary}
          onChange={(e) => onUpdate(e.target.value)}
          rows={4}
        />
      </CardContent>
    </Card>
  );
};
