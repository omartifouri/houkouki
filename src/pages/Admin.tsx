
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, FileText, Calendar, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '@/hooks/useAuth';
import { useAdmin } from '@/hooks/useAdmin';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import AuthModal from '@/components/AuthModal';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminLoading, contactSubmissions, questionnaireSubmissions, bookings, updateBookingStatus } = useAdmin();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showAuthAlert, setShowAuthAlert] = useState(false);
  const [editingBooking, setEditingBooking] = useState<string | null>(null);
  const [newStatus, setNewStatus] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Vérifier l'authentification et les droits admin
  React.useEffect(() => {
    if (!authLoading && !user) {
      setShowAuthAlert(true);
    }
  }, [user, authLoading]);

  const handleStatusUpdate = async (bookingId: string) => {
    if (!newStatus) return;

    const success = await updateBookingStatus(bookingId, newStatus as any, notes);
    if (success) {
      toast({
        title: "Statut mis à jour",
        description: "Le statut du rendez-vous a été mis à jour avec succès.",
      });
      setEditingBooking(null);
      setNewStatus('');
      setNotes('');
    } else {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le statut.",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "En attente", variant: "secondary" as const },
      confirmed: { label: "Confirmé", variant: "default" as const },
      cancelled: { label: "Annulé", variant: "destructive" as const },
      completed: { label: "Terminé", variant: "outline" as const }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (authLoading || adminLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Pop-up d'authentification */}
      <AlertDialog open={showAuthAlert} onOpenChange={setShowAuthAlert}>
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-600" />
              Accès administrateur requis
            </AlertDialogTitle>
            <AlertDialogDescription>
              Vous devez être connecté avec un compte administrateur pour accéder à cette section.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => navigate('/')}>
              Retour à l'accueil
            </Button>
            <AuthModal>
              <AlertDialogAction>
                Se connecter
              </AlertDialogAction>
            </AuthModal>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour à l'accueil</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-2xl font-bold text-red-800">Houkouki Admin</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {user && isAdmin ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Espace Administration</h1>
              <p className="text-xl text-gray-600">Gestion des formulaires et des rendez-vous</p>
            </div>

            <Tabs defaultValue="contact" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="contact" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Formulaires Contact
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
                <Card>
                  <CardHeader>
                    <CardTitle>Soumissions du formulaire "C'est parti !"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Nom</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Téléphone</TableHead>
                          <TableHead>Profil</TableHead>
                          <TableHead>Message</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contactSubmissions.map((submission) => (
                          <TableRow key={submission.id}>
                            <TableCell>{formatDate(submission.created_at)}</TableCell>
                            <TableCell>{submission.prenom} {submission.nom}</TableCell>
                            <TableCell>{submission.email}</TableCell>
                            <TableCell>{submission.telephone}</TableCell>
                            <TableCell>{submission.profil}</TableCell>
                            <TableCell className="max-w-xs truncate">{submission.message || '-'}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="questionnaire" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Soumissions du questionnaire "Parlez-nous de vous"</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Nom</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Occupation</TableHead>
                          <TableHead>Localisation</TableHead>
                          <TableHead>Objectifs</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {questionnaireSubmissions.map((submission) => (
                          <TableRow key={submission.id}>
                            <TableCell>{formatDate(submission.created_at)}</TableCell>
                            <TableCell>{submission.prenom} {submission.nom}</TableCell>
                            <TableCell>{submission.email}</TableCell>
                            <TableCell>{submission.occupation_actuelle}</TableCell>
                            <TableCell>{submission.situation_geographique || '-'}</TableCell>
                            <TableCell className="max-w-xs truncate">{submission.objectifs_carriere || '-'}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bookings" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Gestion des rendez-vous</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Client</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Statut</TableHead>
                          <TableHead>Notes</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bookings.map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell>{booking.date} à {booking.time}</TableCell>
                            <TableCell>{booking.service}</TableCell>
                            <TableCell>{booking.name}</TableCell>
                            <TableCell>
                              <div>
                                <div>{booking.email}</div>
                                {booking.phone && <div className="text-sm text-gray-500">{booking.phone}</div>}
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(booking.status)}</TableCell>
                            <TableCell className="max-w-xs truncate">{booking.notes || '-'}</TableCell>
                            <TableCell>
                              {editingBooking === booking.id ? (
                                <div className="space-y-2">
                                  <Select value={newStatus} onValueChange={setNewStatus}>
                                    <SelectTrigger className="w-32">
                                      <SelectValue placeholder="Statut" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="pending">En attente</SelectItem>
                                      <SelectItem value="confirmed">Confirmé</SelectItem>
                                      <SelectItem value="cancelled">Annulé</SelectItem>
                                      <SelectItem value="completed">Terminé</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <Textarea
                                    placeholder="Notes..."
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    className="min-h-[60px]"
                                  />
                                  <div className="flex gap-2">
                                    <Button size="sm" onClick={() => handleStatusUpdate(booking.id)}>
                                      Sauver
                                    </Button>
                                    <Button size="sm" variant="outline" onClick={() => setEditingBooking(null)}>
                                      Annuler
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => {
                                    setEditingBooking(booking.id);
                                    setNewStatus(booking.status);
                                    setNotes(booking.notes || '');
                                  }}
                                >
                                  Modifier
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <div className="text-center py-16">
            <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Accès administrateur requis</h2>
            <p className="text-gray-600 mb-6">Vous devez être connecté avec un compte administrateur</p>
            <AuthModal>
              <Button className="bg-red-600 hover:bg-red-700">
                Se connecter
              </Button>
            </AuthModal>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
