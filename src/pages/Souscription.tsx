import { useState } from "react";
import visaLogo from "@/assets/visa-logo.png";
import mastercardLogo from "@/assets/mastercard-logo.png";
import cmiLogo from "@/assets/cmi-logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, CreditCard, Building, FileText } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";

const Souscription = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Récupérer le type d'abonnement depuis les paramètres d'URL
  const searchParams = new URLSearchParams(location.search);
  const planType = searchParams.get('plan') || 'PARTICULIER';
  const isEntreprise = planType !== 'PARTICULIER';
  
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    ville: "",
    codePostal: "",
    adresse: "",
    // Champs entreprise
    raisonSociale: "",
    ice: "",
    effectif: "",
    paymentMethod: "carte",
    accepteTraitement: false
  });

  const planDetails = {
    'PARTICULIER': {
      title: 'Abonnement Particulier',
      price: '3000 MAD TTC',
      description: 'Accompagnement juridique complet pour particuliers'
    },
    '1-50': {
      title: 'Abonnement Entreprise (1-50 employés)',
      price: '6500 MAD TTC',
      description: 'Solution complète pour petites et moyennes entreprises'
    }
  };

  const currentPlan = planDetails[planType as keyof typeof planDetails] || planDetails['PARTICULIER'];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier l'acceptation du traitement des données
    if (!formData.accepteTraitement) {
      alert('Vous devez accepter le traitement de vos données personnelles pour continuer.');
      return;
    }

    // Vérifier les champs obligatoires pour les entreprises
    if (isEntreprise && (!formData.raisonSociale || !formData.ice || !formData.effectif)) {
      alert('Veuillez remplir tous les champs obligatoires de l\'entreprise.');
      return;
    }
    
    // Logique de soumission du formulaire
    console.log('Données de souscription:', formData);
    
    // Redirection vers une page de confirmation ou traitement du paiement
    if (formData.paymentMethod === 'carte') {
      // Redirection vers le processus de paiement par carte
      console.log('Redirection vers le paiement par carte');
    } else if (formData.paymentMethod === 'virement') {
      // Afficher les informations de virement
      console.log('Affichage des informations de virement');
    } else {
      // Informations pour le paiement par chèque
      console.log('Informations pour le paiement par chèque');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* En-tête avec bouton retour */}
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/fr/tarifs')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux tarifs
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Souscription</h1>
          </div>

          {/* Récapitulatif de l'abonnement choisi */}
          <Card className="mb-8 border-2 border-red-200">
            <CardHeader>
              <CardTitle className="text-xl text-red-800">
                {currentPlan.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">{currentPlan.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-red-600">{currentPlan.price}</div>
                  <div className="text-sm text-gray-500">Paiement annuel</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informations personnelles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  Vos informations personnelles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => handleInputChange('nom', e.target.value)}
                      placeholder="Votre nom"
                      required
                      className="border-gray-300 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input
                      id="prenom"
                      value={formData.prenom}
                      onChange={(e) => handleInputChange('prenom', e.target.value)}
                      placeholder="Votre prénom"
                      required
                      className="border-gray-300 focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      value={formData.telephone}
                      onChange={(e) => handleInputChange('telephone', e.target.value)}
                      placeholder="06 12 34 56 78"
                      className="border-gray-300 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="votre.email@exemple.com"
                      required
                      className="border-gray-300 focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ville">Ville</Label>
                    <Input
                      id="ville"
                      value={formData.ville}
                      onChange={(e) => handleInputChange('ville', e.target.value)}
                      placeholder="Votre ville"
                      className="border-gray-300 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="codePostal">Code postal</Label>
                    <Input
                      id="codePostal"
                      value={formData.codePostal}
                      onChange={(e) => handleInputChange('codePostal', e.target.value)}
                      placeholder="12345"
                      className="border-gray-300 focus:border-red-500"
                    />
                  </div>
                </div>

                {/* Champs entreprise conditionnels */}
                {isEntreprise && (
                  <>
                    <Separator className="my-6" />
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Informations entreprise</h3>
                      
                      <div>
                        <Label htmlFor="raisonSociale">Raison sociale *</Label>
                        <Input
                          id="raisonSociale"
                          value={formData.raisonSociale}
                          onChange={(e) => handleInputChange('raisonSociale', e.target.value)}
                          placeholder="Nom de votre entreprise"
                          required={isEntreprise}
                          className="border-gray-300 focus:border-red-500"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="ice">ICE *</Label>
                          <Input
                            id="ice"
                            value={formData.ice}
                            onChange={(e) => handleInputChange('ice', e.target.value)}
                            placeholder="Identifiant Commun de l'Entreprise"
                            required={isEntreprise}
                            className="border-gray-300 focus:border-red-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="effectif">Effectif *</Label>
                          <Select 
                            value={formData.effectif} 
                            onValueChange={(value) => handleInputChange('effectif', value)}
                            required={isEntreprise}
                          >
                            <SelectTrigger className="border-gray-300 focus:border-red-500">
                              <SelectValue placeholder="Sélectionnez l'effectif" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectItem value="1-10 employés">1-10 employés</SelectItem>
                              <SelectItem value="10-20 employés">10 - 20 employés</SelectItem>
                              <SelectItem value="20-50 employés">20 - 50 employés</SelectItem>
                              <SelectItem value="50-100 employés">50 - 100 employés</SelectItem>
                              <SelectItem value="100-200 employés">100 - 200 employés</SelectItem>
                              <SelectItem value="+200 employés">+ 200 employés</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <Label htmlFor="adresse">Adresse</Label>
                  <Textarea
                    id="adresse"
                    value={formData.adresse}
                    onChange={(e) => handleInputChange('adresse', e.target.value)}
                    placeholder="Votre adresse complète"
                    className="border-gray-300 focus:border-red-500 min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Méthode de paiement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  Choisissez votre méthode de paiement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={formData.paymentMethod} 
                  onValueChange={(value) => handleInputChange('paymentMethod', value)}
                  className="space-y-4"
                >
                  {/* Carte bancaire */}
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="carte" id="carte" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="carte" className="flex items-center gap-2 font-semibold cursor-pointer">
                        <CreditCard className="w-5 h-5" />
                        Carte bancaire
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">
                        Visa, Mastercard
                      </p>
                      <div className="flex gap-2 mt-2">
                        <img src={visaLogo} alt="Visa" className="h-5 w-auto" />
                        <img src={mastercardLogo} alt="Mastercard" className="h-5 w-auto" />
                        <img src={cmiLogo} alt="CMI" className="h-4 w-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Virement */}
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="virement" id="virement" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="virement" className="flex items-center gap-2 font-semibold cursor-pointer">
                        <Building className="w-5 h-5" />
                        Virement
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">
                        Merci de procéder au virement de votre commande
                      </p>
                      <div className="text-xs text-gray-500 mt-2 space-y-1">
                        <div>RIB : 022780000087000512461274</div>
                        <div>Code swift : SGMBMAMC</div>
                      </div>
                    </div>
                  </div>

                  {/* Chèque */}
                  <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="cheque" id="cheque" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="cheque" className="flex items-center gap-2 font-semibold cursor-pointer">
                        <FileText className="w-5 h-5" />
                        Chèque
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">
                        Le chèque doit être libellé à l'ordre de HOUKOUKI
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Il faut le déposer à l'adresse suivante :
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Acceptation du traitement des données */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 p-4 border-l-4 border-red-200 bg-red-50/50">
                  <Checkbox
                    id="accepteTraitement"
                    checked={formData.accepteTraitement}
                    onCheckedChange={(checked) => handleInputChange('accepteTraitement', !!checked)}
                    className="mt-0.5"
                    required
                  />
                  <div className="flex-1">
                    <Label htmlFor="accepteTraitement" className="font-semibold cursor-pointer text-sm">
                      J'accepte le traitement de mes données personnelles *
                    </Label>
                    <p className="text-xs text-gray-600 mt-1">
                      Vos données seront utilisées uniquement pour traiter votre demande de devis. 
                      Elles ne seront pas transmises à des tiers sans votre accord.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button 
                type="button"
                variant="outline" 
                onClick={() => navigate('/fr/tarifs')}
                className="sm:w-auto"
              >
                Annuler
              </Button>
              <Button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white sm:w-auto"
              >
                Confirmer la souscription
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Souscription;