
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send } from "lucide-react";

const RecommendToFriend = () => {
  const [friendEmail, setFriendEmail] = useState('');
  const [yourName, setYourName] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendRecommendation = async () => {
    if (!friendEmail || !yourName) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir au moins votre nom et l'email de votre ami(e)",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      console.log("Envoi de recommandation vers:", friendEmail);
      
      const { data, error } = await supabase.functions.invoke('send-recommendation', {
        body: { 
          friendEmail,
          yourName,
          personalMessage
        },
      });
      
      if (error) {
        console.error('Erreur envoi recommandation:', error);
        throw error;
      }
      
      console.log("Réponse recommandation:", data);
      
      toast({
        title: "Recommandation envoyée !",
        description: `Votre recommandation a été envoyée avec succès à ${friendEmail}`,
      });
      
      // Réinitialiser le formulaire
      setFriendEmail('');
      setYourName('');
      setPersonalMessage('');
      
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Erreur lors de l'envoi de la recommandation",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6 border rounded-lg bg-gradient-to-br from-red-50 to-white">
      <div className="flex items-center gap-2 mb-2">
        <Send className="h-5 w-5 text-red-600" />
        <h3 className="font-semibold text-lg text-red-800">Recommander Houkouki à un(e) ami(e)</h3>
      </div>
      
      <div className="grid gap-3">
        <div>
          <Label htmlFor="yourName">Votre nom</Label>
          <Input
            id="yourName"
            type="text"
            placeholder="Votre prénom et nom"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="friendEmail">Email de votre ami(e)</Label>
          <Input
            id="friendEmail"
            type="email"
            placeholder="email@exemple.com"
            value={friendEmail}
            onChange={(e) => setFriendEmail(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="personalMessage">Message personnel (optionnel)</Label>
          <Textarea
            id="personalMessage"
            placeholder="Ajoutez un message personnel pour votre ami(e)..."
            value={personalMessage}
            onChange={(e) => setPersonalMessage(e.target.value)}
            className="min-h-[80px]"
          />
        </div>
      </div>
      
      <Button
        onClick={sendRecommendation}
        disabled={isLoading}
        className="bg-red-600 hover:bg-red-700 text-white"
      >
        <Send className="mr-2 h-4 w-4" />
        {isLoading ? "Envoi..." : "Envoyer la recommandation"}
      </Button>
      
      <p className="text-sm text-gray-600">
        Votre ami(e) recevra un email de recommandation personnalisé sur les services Houkouki
      </p>
    </div>
  );
};

export default RecommendToFriend;
