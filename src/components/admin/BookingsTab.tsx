
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AdminBooking } from '@/hooks/useAdmin';
import BookingRow from './BookingRow';

interface BookingsTabProps {
  bookings: AdminBooking[];
  onStatusUpdate: (id: string, status: AdminBooking['status'], notes?: string) => Promise<void>;
}

const BookingsTab = ({ bookings, onStatusUpdate }: BookingsTabProps) => {
  return (
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
              <BookingRow 
                key={booking.id} 
                booking={booking} 
                onStatusUpdate={onStatusUpdate}
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BookingsTab;
