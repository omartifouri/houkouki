import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FileText, User, Phone, Mail, Clock, Euro, MessageSquare, Upload } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  type_client: z.string().min(1, "Veuillez sélectionner votre profil"),
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  entreprise: z.string().optional(),
  secteur_activite: z.string().optional(),
  type_prestation: z.string().min(1, "Veuillez sélectionner un type de prestation"),
  domaine_juridique: z.string().min(1, "Veuillez sélectionner un domaine juridique"),
  description_besoin: z.string().min(20, "Veuillez décrire votre besoin (minimum 20 caractères)"),
  accompagnement_souhaite: z.array(z.string()).default([]),
  rgpd_accepte: z.boolean().refine(val => val === true, "Vous devez accepter le traitement de vos données"),
});

type FormData = z.infer<typeof formSchema>;

const FrDevis = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type_client: "",
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      entreprise: "",
      secteur_activite: "",
      type_prestation: "",
      domaine_juridique: "",
      description_besoin: "",
      accompagnement_souhaite: [],
      rgpd_accepte: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Données du devis:", data);
      alert("Votre demande de devis a été envoyée avec succès ! Nous vous contacterons sous 24h.");
      form.reset();
    } catch (error) {
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Demander un devis personnalisé</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Remplissez ce formulaire détaillé pour recevoir une proposition adaptée à vos besoins juridiques.
            Notre équipe vous contactera sous 24 heures.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-4xl mx-auto space-y-8">
            
            {/* Section 1: Profil Client */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <User className="h-5 w-5" />
                  Votre profil
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="type_client"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type de client *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre profil" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="particulier">Particulier</SelectItem>
                          <SelectItem value="entreprise">Entreprise</SelectItem>
                          <SelectItem value="association">Association</SelectItem>
                          <SelectItem value="professionnel">Professionnel libéral</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="prenom"
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

                  <FormField
                    control={form.control}
                    name="nom"
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
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
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone *</FormLabel>
                        <FormControl>
                          <Input placeholder="+212 6 12 02 30 XX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="entreprise"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Entreprise / Organisation</FormLabel>
                        <FormControl>
                          <Input placeholder="Nom de votre entreprise" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="secteur_activite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Secteur d'activité</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez votre secteur" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="technologie">Technologie</SelectItem>
                            <SelectItem value="commerce">Commerce</SelectItem>
                            <SelectItem value="sante">Santé</SelectItem>
                            <SelectItem value="education">Éducation</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="immobilier">Immobilier</SelectItem>
                            <SelectItem value="industrie">Industrie</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Besoin Juridique */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <FileText className="h-5 w-5" />
                  Votre besoin juridique
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="type_prestation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type de prestation *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez une prestation" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="consultation">Consultation juridique</SelectItem>
                            <SelectItem value="redaction">Rédaction d'actes</SelectItem>
                            <SelectItem value="representation">Représentation juridique</SelectItem>
                            <SelectItem value="audit">Audit juridique</SelectItem>
                            <SelectItem value="formation">Formation juridique</SelectItem>
                            <SelectItem value="veille">Veille réglementaire</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="domaine_juridique"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Domaine juridique *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un domaine" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="droit-travail">Droit du travail</SelectItem>
                            <SelectItem value="droit-commercial">Droit commercial</SelectItem>
                            <SelectItem value="droit-civil">Droit civil</SelectItem>
                            <SelectItem value="droit-famille">Droit de la famille</SelectItem>
                            <SelectItem value="droit-immobilier">Droit immobilier</SelectItem>
                            <SelectItem value="droit-penal">Droit pénal</SelectItem>
                            <SelectItem value="droit-administratif">Droit administratif</SelectItem>
                            <SelectItem value="propriete-intellectuelle">Propriété intellectuelle</SelectItem>
                            <SelectItem value="droit-international">Droit international</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description_besoin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description détaillée de votre besoin *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Décrivez votre situation, vos objectifs et les enjeux juridiques..."
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </CardContent>
            </Card>

            {/* Section 3: Validation */}
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <FormField
                  control={form.control}
                  name="rgpd_accepte"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          J'accepte le traitement de mes données personnelles *
                        </FormLabel>
                        <p className="text-xs text-muted-foreground">
                          Vos données seront utilisées uniquement pour traiter votre demande de devis. 
                          Elles ne seront pas transmises à des tiers sans votre accord.
                        </p>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Bouton de soumission */}
            <div className="flex justify-center">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
              </Button>
            </div>
          </form>
        </Form>

        {/* Footer informatif */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-blue-900 mb-2">Que se passe-t-il après l'envoi ?</h3>
            <div className="text-sm text-blue-700 space-y-1">
              <p>✓ Accusé de réception immédiat par email</p>
              <p>✓ Analyse de votre demande par notre équipe juridique</p>
              <p>✓ Proposition personnalisée sous 24h ouvrées</p>
              <p>✓ Échange téléphonique pour affiner votre besoin</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <CareerSupportPopup />
    </div>
  );
};

export default FrDevis;