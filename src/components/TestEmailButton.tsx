
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const TestEmailButton = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendTestEmail = async () => {
    if (!email) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir une adresse email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      console.log("Envoi d'email de test vers:", email);
      
      const { data, error } = await supabase.functions.invoke('test-email', {
        body: { email },
      });
      
      if (error) {
        console.error('Erreur envoi test email:', error);
        throw error;
      }
      
      console.log("Réponse test email:", data);
      
      toast({
        title: "Email envoyé !",
        description: `Email de test envoyé avec succès vers ${email}`,
      });
      
      setEmail('');
      
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Erreur lors de l'envoi de l'email de test",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg bg-gray-50">
      <h3 className="font-semibold text-lg">Test d'envoi d'email</h3>
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button
          onClick={sendTestEmail}
          disabled={isLoading}
          className="bg-brand-coral hover:bg-brand-coral-dark"
        >
          {isLoading ? "Envoi..." : "Envoyer test"}
        </Button>
      </div>
      <p className="text-sm text-gray-600">
        Cliquez pour envoyer un email de test et vérifier la configuration Brevo
      </p>
    </div>
  );
};

export default TestEmailButton;
