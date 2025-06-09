
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { TimeSlot } from "@/hooks/useBookings";

interface TimeSelectionProps {
  timeSlots: TimeSlot[];
  selectedTime: string;
  onTimeSelect: (time: string) => void;
  getEndTime: (startTime: string) => string;
}

const TimeSelection = ({ timeSlots, selectedTime, onTimeSelect, getEndTime }: TimeSelectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">3</span>
          </div>
          <span>Choisissez un créneau</span>
        </CardTitle>
        <CardDescription>Créneaux de 60 minutes disponibles</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {timeSlots.map((slot) => (
            <Button
              key={slot.time}
              variant={selectedTime === slot.time ? "default" : "outline"}
              disabled={!slot.available}
              onClick={() => onTimeSelect(slot.time)}
              className="justify-start"
            >
              <Clock className="h-4 w-4 mr-2" />
              {slot.time} - {getEndTime(slot.time)}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeSelection;
