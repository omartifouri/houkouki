
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserBookings } from '@/hooks/useUserBookings';

export const BookingsManagerTab = () => {
  const { bookings, loading, error } = useUserBookings();

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: 'En attente', variant: 'secondary' as const },
      confirmed: { label: 'Confirmé', variant: 'default' as const },
      cancelled: { label: 'Annulé', variant: 'destructive' as const },
      completed: { label: 'Terminé', variant: 'outline' as const }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Chargement de vos rendez-vous...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-red-600">
            <p>Erreur lors du chargement de vos rendez-vous</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Mes rendez-vous</h2>
        <Link to="/booking">
          <Button className="bg-red-600 hover:bg-red-700">
            <Plus className="h-4 w-4 mr-2" />
            Nouveau rendez-vous
          </Button>
        </Link>
      </div>

      {bookings && bookings.length > 0 ? (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {booking.service}
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {formatDate(booking.date)} à {booking.time}
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(booking.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>{booking.email}</span>
                  </div>
                  {booking.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>{booking.phone}</span>
                    </div>
                  )}
                  {booking.notes && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">{booking.notes}</p>
                    </div>
                  )}
                  <div className="text-xs text-gray-500 pt-2">
                    Réservé le {new Date(booking.created_at).toLocaleDateString('fr-FR')}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-8 text-center">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Aucun rendez-vous</h3>
            <p className="text-gray-600 mb-4">
              Vous n'avez pas encore de rendez-vous planifiés
            </p>
            <Link to="/booking">
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="h-4 w-4 mr-2" />
                Réserver un rendez-vous
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
