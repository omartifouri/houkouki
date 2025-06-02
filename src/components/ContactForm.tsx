
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  profil: string;
  message: string;
}

interface ContactFormProps {
  children: React.ReactNode;
}

const ContactForm = ({ children }: ContactFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    defaultValues: {
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      profil: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Formulaire soumis:", data);
    setIsSubmitted(true);
    
    toast({
      title: "Demande envoyée",
      description: "Nous avons bien reçu votre demande, vous serez contacté dans les plus brefs délais.",
    });

    // Réinitialiser après 30 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      form.reset();
    }, 30000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            {isSubmitted ? "Demande envoyée !" : "C'est parti !"}
          </DialogTitle>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nous avons bien reçu votre demande
            </h3>
            <p className="text-gray-600">
              Vous serez contacté dans les plus brefs délais.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-center text-gray-600 mb-6">
              Nous aurons besoin de quelques informations pour bien vous accompagner :
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

                <FormField
                  control={form.control}
                  name="telephone"
                  rules={{ required: "Le téléphone est requis" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone *</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre numéro de téléphone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                      <FormLabel>Adresse email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="profil"
                  rules={{ required: "Veuillez sélectionner votre profil" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vous êtes *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre profil" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="etudiant">Étudiant</SelectItem>
                          <SelectItem value="jeune-diplome">Jeunes diplômés</SelectItem>
                          <SelectItem value="professionnel">Professionnels</SelectItem>
                          <SelectItem value="client-banque">Client de banque</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Décrivez-nous votre situation et vos objectifs..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                >
                  Envoyer
                </Button>
              </form>
            </Form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
