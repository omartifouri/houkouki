
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Users, Calendar, UserCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAdmin } from '@/hooks/useAdmin';
import ContactSubmissionsTab from './ContactSubmissionsTab';
import QuestionnaireSubmissionsTab from './QuestionnaireSubmissionsTab';
import BookingsTab from './BookingsTab';
import ClientsTab from './ClientsTab';

const AdminContent = () => {
  const { 
    contactSubmissions, 
    questionnaireSubmissions, 
    bookings, 
    clients,
    updateBookingStatus,
    loadClients 
  } = useAdmin();
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

  const handleClientCreated = () => {
    console.log('Rafraîchissement de la liste des clients...');
    loadClients();
  };

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Espace Administration</h1>
        <p className="text-xl text-gray-600">Gestion des formulaires, des rendez-vous et des clients</p>
      </div>

      <Tabs defaultValue="contact" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
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
          <TabsTrigger value="clients" className="flex items-center gap-2">
            <UserCheck className="h-4 w-4" />
            Clients
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contact" className="mt-6">
          <ContactSubmissionsTab submissions={contactSubmissions} onClientCreated={handleClientCreated} />
        </TabsContent>

        <TabsContent value="questionnaire" className="mt-6">
          <QuestionnaireSubmissionsTab submissions={questionnaireSubmissions} />
        </TabsContent>

        <TabsContent value="bookings" className="mt-6">
          <BookingsTab bookings={bookings} onStatusUpdate={handleStatusUpdate} />
        </TabsContent>

        <TabsContent value="clients" className="mt-6">
          <ClientsTab clients={clients} onClientCreated={handleClientCreated} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AdminContent;
