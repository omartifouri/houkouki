import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { supabaseTyped } from "@/lib/supabaseTyped";
import { Mail, Phone, User, Building, MessageSquare, Send, FileText } from "lucide-react";

interface DevisRequestData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  entreprise?: string;
  poste?: string;
  typeService: string;
  message: string;
}

const DevisRequestForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<DevisRequestData>({
    defaultValues: {
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      entreprise: "",
      poste: "",
      typeService: "",
      message: ""
    }
  });

  const onSubmit = async (data: DevisRequestData) => {
    setIsSubmitting(true);
    
    try {
      console.log("Envoi du formulaire de demande de devis:", data);
      
      // Enregistrer dans la base de données
      const { error: dbError } = await supabaseTyped
        .from('contact_submissions')
        .insert([{
          nom: data.nom,
          prenom: data.prenom,
          telephone: data.telephone,
          email: data.email,
          profil: "demande-devis",
          message: `DEMANDE DE DEVIS
Type de service: ${data.typeService}
${data.entreprise ? `Entreprise: ${data.entreprise}\n` : ''}${data.poste ? `Poste: ${data.poste}\n` : ''}
Message: ${data.message}`
        }]);

      if (dbError) {
        console.error('Erreur base de données:', dbError);
        throw dbError;
      }
      
      setIsSubmitted(true);
      toast({
        title: "Demande de devis envoyée",
        description: "Nous avons bien reçu ta demande de devis et vous recontacterons rapidement.",
      });

      // Réinitialiser après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 5000);
      
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de ta demande.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Demande de devis envoyée !
            </h3>
            <p className="text-gray-600 text-lg">
              Nous analysons ta demande et vous proposerons un devis personnalisé dans les plus brefs délais.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-[#C0997A] to-[#A68A6E] text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <FileText className="w-6 h-6" />
          Demande de devis personnalisé
        </CardTitle>
        <CardDescription className="text-[#C0997A]/20">
          Remplissez ce formulaire pour recevoir un devis adapté à vos besoins
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Informations personnelles */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5 text-[#C0997A]" />
                Informations personnelles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nom"
                  rules={{ required: "Le nom est requis" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ton nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="prenom"
                  rules={{ required: "Le prénom est requis" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prénom *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ton prénom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  rules={{ 
                    required: "L'email est requis",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email invalide"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="ton@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telephone"
                  rules={{ required: "Le téléphone est requis" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Téléphone *
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Ton numéro" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Informations professionnelles */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-[#C0997A]" />
                Informations professionnelles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="entreprise"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Entreprise</FormLabel>
                      <FormControl>
                        <Input placeholder="Nom de ton entreprise" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="poste"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Poste actuel</FormLabel>
                      <FormControl>
                        <Input placeholder="Ton poste" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Détails du projet */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#C0997A]" />
                Détails de ton projet
              </h3>
              
              <FormField
                control={form.control}
                name="typeService"
                rules={{ required: "Veuillez sélectionner un type de service" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de service souhaité *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="coaching-individuel">Coaching individuel</SelectItem>
                        <SelectItem value="suivi-complet">Suivi complet (coaching + CV + préparation entretiens)</SelectItem>
                        <SelectItem value="optimisation-cv">Optimisation CV uniquement</SelectItem>
                        <SelectItem value="preparation-entretiens">Préparation entretiens uniquement</SelectItem>
                        <SelectItem value="bilan-competences">Bilan de compétences</SelectItem>
                        <SelectItem value="formation-equipe">Formation d'équipe</SelectItem>
                        <SelectItem value="autre">Autre (préciser dans le message)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              rules={{ required: "Veuillez décrire tes besoins" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Décrive tes besoins *
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Décrive ta situation actuelle, tes objectifs, et tout ce qui pourrait nous aider à te proposer le meilleur accompagnement..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#C0997A] to-[#A68A6E] hover:from-[#A68A6E] hover:to-[#8B7355] text-lg py-3"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer la demande de devis
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default DevisRequestForm;