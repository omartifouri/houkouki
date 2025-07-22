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
import { Mail, Phone, User, Building, MessageSquare, Send } from "lucide-react";

interface ProfessionalContactFormData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  entreprise?: string;
  poste?: string;
  profil: string;
  message: string;
}

const ProfessionalContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ProfessionalContactFormData>({
    defaultValues: {
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      entreprise: "",
      poste: "",
      profil: "",
      message: ""
    }
  });

  const onSubmit = async (data: ProfessionalContactFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log("Envoi du formulaire contact professionnel:", data);
      
      // Enregistrer dans la base de données
      const { error: dbError } = await supabaseTyped
        .from('contact_submissions')
        .insert([{
          nom: data.nom,
          prenom: data.prenom,
          telephone: data.telephone,
          email: data.email,
          profil: data.profil,
          message: `${data.entreprise ? `Entreprise: ${data.entreprise}\n` : ''}${data.poste ? `Poste: ${data.poste}\n` : ''}${data.message}`
        }]);

      if (dbError) {
        console.error('Erreur base de données:', dbError);
        throw dbError;
      }

      // Si l'utilisateur est étudiant, envoyer l'email de bienvenue
      if (data.profil === "etudiant") {
        console.log("Envoi de l'email de bienvenue pour étudiant depuis le formulaire contact professionnel");
        
        const welcomeData = {
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
          occupationActuelle: "etudiant"
        };
        
        const { data: emailResponse, error } = await supabaseTyped.functions.invoke('send-questionnaire', {
          body: welcomeData,
        });
        
        if (error) {
          console.error('Erreur envoi email de bienvenue:', error);
          throw error;
        }
        
        console.log("Email de bienvenue envoyé avec succès:", emailResponse);
      }
      
      setIsSubmitted(true);
      toast({
        title: "Demande envoyée avec succès",
        description: data.profil === "etudiant" 
          ? "Nous avons bien reçu votre demande et vous avez reçu un email de bienvenue !"
          : "Nous avons bien reçu votre demande, vous serez contacté dans les plus brefs délais.",
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
        description: "Une erreur est survenue lors de l'envoi.",
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
              <Send className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Message envoyé avec succès !
            </h3>
            <p className="text-gray-600 text-lg">
              {form.getValues("profil") === "etudiant" 
                ? "Vous avez également reçu un email de bienvenue avec toutes les informations nécessaires."
                : "Nous vous recontacterons dans les plus brefs délais."
              }
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <MessageSquare className="w-6 h-6" />
          Contactez-nous
        </CardTitle>
        <CardDescription className="text-red-100">
          Nous sommes là pour vous accompagner dans vos projets professionnels
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Informations personnelles */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5 text-red-600" />
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
                        <Input placeholder="Votre nom" {...field} />
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
                        <Input placeholder="Votre prénom" {...field} />
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
                        <Input type="email" placeholder="votre@email.com" {...field} />
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
                        <Input placeholder="Votre numéro" {...field} />
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
                <Building className="w-5 h-5 text-red-600" />
                Informations professionnelles
              </h3>
              
              <FormField
                control={form.control}
                name="profil"
                rules={{ required: "Veuillez sélectionner votre profil" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre profil *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre profil" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="etudiant">Étudiant</SelectItem>
                        <SelectItem value="jeune-diplome">Jeune diplômé</SelectItem>
                        <SelectItem value="professionnel">Professionnel</SelectItem>
                        <SelectItem value="client-banque">Client de banque</SelectItem>
                        <SelectItem value="dirigeant">Dirigeant d'entreprise</SelectItem>
                        <SelectItem value="consultant">Consultant</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="entreprise"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Entreprise</FormLabel>
                      <FormControl>
                        <Input placeholder="Nom de votre entreprise" {...field} />
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
                        <Input placeholder="Votre poste" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              rules={{ required: "Le message est requis" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Votre message *
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Décrivez-nous votre projet, vos besoins ou vos questions..."
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
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg py-3"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProfessionalContactForm;