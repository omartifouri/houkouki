
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Users, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAdmin } from '@/hooks/useAdmin';
import ContactSubmissionsTab from './ContactSubmissionsTab';
import QuestionnaireSubmissionsTab from './QuestionnaireSubmissionsTab';
import BookingsTab from './BookingsTab';

const AdminContent = () => {
  const { contactSubmissions, questionnaireSubmissions, bookings, updateBookingStatus } = useAdmin();
  const { toast } = useToast();

  const handleStatusUpdate = async (bookingId: string, status: any, notes?: string) => {
    const success = await updateBookingStatus(bookingId, status, notes);
    if (success) {
      toast({
        title: "Statut mis à jour",
        description: "Le statut du rendez-vous a été mis à jour avec succès.",
      });
    } else {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le statut.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Espace Administration</h1>
        <p className="text-xl text-gray-600">Gestion des formulaires et des rendez-vous</p>
      </div>

      <Tabs defaultValue="contact" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Formulaire c'est parti
          </TabsTrigger>
          <TabsTrigger value="questionnaire" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Questionnaires
          </TabsTrigger>
          <TabsTrigger value="bookings" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Rendez-vous
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contact" className="mt-6">
          <ContactSubmissionsTab submissions={contactSubmissions} />
        </TabsContent>

        <TabsContent value="questionnaire" className="mt-6">
          <QuestionnaireSubmissionsTab submissions={questionnaireSubmissions} />
        </TabsContent>

        <TabsContent value="bookings" className="mt-6">
          <BookingsTab bookings={bookings} onStatusUpdate={handleStatusUpdate} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AdminContent;
