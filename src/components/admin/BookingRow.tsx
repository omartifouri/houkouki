
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TableCell, TableRow } from "@/components/ui/table";
import { AdminBooking } from '@/hooks/useAdmin';

interface BookingRowProps {
  booking: AdminBooking;
  onStatusUpdate: (id: string, status: AdminBooking['status'], notes?: string) => Promise<void>;
}

const BookingRow = ({ booking, onStatusUpdate }: BookingRowProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newStatus, setNewStatus] = useState<AdminBooking['status']>(booking.status);
  const [notes, setNotes] = useState(booking.notes || '');

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

  const handleSave = async () => {
    await onStatusUpdate(booking.id, newStatus, notes);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewStatus(booking.status);
    setNotes(booking.notes || '');
  };

  const handleStatusChange = (value: string) => {
    setNewStatus(value as AdminBooking['status']);
  };

  return (
    <TableRow>
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
        {isEditing ? (
          <div className="space-y-2">
            <Select value={newStatus} onValueChange={handleStatusChange}>
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
              <Button size="sm" onClick={handleSave}>
                Sauver
              </Button>
              <Button size="sm" variant="outline" onClick={handleCancel}>
                Annuler
              </Button>
            </div>
          </div>
        ) : (
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => setIsEditing(true)}
          >
            Modifier
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default BookingRow;
