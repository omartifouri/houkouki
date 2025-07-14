import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Phone, Mail, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface DevisSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DevisSuccessModal = ({ isOpen, onClose }: DevisSuccessModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Demande envoyée avec succès !
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-center text-gray-600">
            Votre demande de devis a été transmise à notre équipe juridique. 
            Nous analysons votre demande et vous contacterons rapidement.
          </p>

          {/* Prochaines étapes */}
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Prochaines étapes
            </h3>
            <div className="space-y-2 text-sm text-red-700">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Accusé de réception par email dans les 5 minutes</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Analyse de votre demande par nos juristes</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Proposition détaillée sous 24h ouvrées</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Appel de notre équipe pour finaliser</span>
              </div>
            </div>
          </div>

          {/* Contact d'urgence */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Besoin urgent ?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Pour les demandes urgentes, contactez-nous directement :
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-red-600" />
                <span>+212 5 22 XX XX XX</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4 text-red-600" />
                <span>contact@houkouki.com</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-4">
            <Button 
              onClick={onClose}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
            >
              Parfait, j'ai compris
            </Button>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild className="flex-1">
                <Link to="/fr" className="flex items-center justify-center gap-1">
                  <span>Retour accueil</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="flex-1">
                <Link to="/fr/contact" className="flex items-center justify-center gap-1">
                  <span>Nous contacter</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Numéro de référence */}
          <div className="text-center pt-2 border-t">
            <p className="text-xs text-gray-500">
              Numéro de référence : DEV-{new Date().getFullYear()}-{String(Date.now()).slice(-6)}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DevisSuccessModal;