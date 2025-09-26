import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "@/components/ui/phone-input";
import FrenchNavigation from "@/components/FrenchNavigation";
import Footer from "@/components/Footer";
import CareerSupportPopup from "@/components/CareerSupportPopup";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const FrContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    acceptMarketing: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Ici on pourrait ajouter la logique d'envoi du formulaire
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <FrenchNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez Houkouki</h1>
            <p className="text-xl text-brand-beige font-medium mb-2">Votre juriste à portée de main</p>
            
            {/* Call to action */}
            <div className="bg-red-100 border-l-4 border-red-600 p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-red-600 mr-3" />
                <div>
                  <p className="text-lg font-semibold text-red-800">
                    Appelez le +212.(0)529.045.999 dès maintenant !
                  </p>
                  <p className="text-sm text-red-700 mt-1">
                    Écrivez-nous sur ce formulaire ou envoyez votre question au{" "}
                    <a href="mailto:contact@houkouki.com" className="font-medium underline">
                      contact@houkouki.com
                    </a>
                  </p>
                  <p className="text-sm text-red-700">Un commercial vous contactera.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Votre nom et prénom *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Votre nom et prénom"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Votre email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Votre numéro de téléphone</Label>
                    <div className="mt-2">
                      <PhoneInput
                        id="phone"
                        value={formData.phone}
                        onChange={(value) => handleInputChange("phone", value)}
                        defaultCountry="+212"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Objet *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Objet de votre demande"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Votre message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Décrivez votre besoin juridique..."
                      required
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="marketing"
                      checked={formData.acceptMarketing}
                      onCheckedChange={(checked) => handleInputChange("acceptMarketing", checked as boolean)}
                    />
                    <Label htmlFor="marketing" className="text-sm text-gray-600 leading-relaxed">
                      J'accepte de recevoir des publicités personnalisées de la part du site et de ses partenaires
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-beige hover:bg-brand-beige/80 text-white py-3"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informations de contact */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Notre Siège</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-brand-beige mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Adresse</h3>
                      <p className="text-gray-600">27, Rue Ain Asserdoune</p>
                      <p className="text-gray-600">Quartier C.I.L</p>
                      <p className="text-gray-600">CASABLANCA</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-brand-beige mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Téléphone</h3>
                      <p className="text-gray-600">+212 (0)529 045 999</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-brand-beige mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">E-mail et support</h3>
                      <p className="text-gray-600">contact@houkouki.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-brand-beige mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Horaires d'ouverture</h3>
                      <p className="text-gray-600">Lundi - Vendredi : 9h00 - 19h00</p>
                      <p className="text-gray-600">Samedi : 9h00 - 13h00</p>
                      <p className="text-gray-600">Dimanche : Fermé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pourquoi nous contacter */}
              <Card className="shadow-lg bg-gradient-to-br from-brand-beige/10 to-red-50">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Pourquoi nous contacter ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-beige rounded-full"></div>
                      <span className="text-gray-700">Devis personnalisé sous 24h</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-beige rounded-full"></div>
                      <span className="text-gray-700">Accompagnement sur mesure</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-beige rounded-full"></div>
                      <span className="text-gray-700">Disponible à distance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <CareerSupportPopup />
    </div>
  );
};

export default FrContact;