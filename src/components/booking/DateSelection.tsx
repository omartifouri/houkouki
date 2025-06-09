
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

interface DateSelectionProps {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
}

const DateSelection = ({ selectedDate, onDateSelect }: DateSelectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#C0997A] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">2</span>
          </div>
          <span>Choisissez une date</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onDateSelect}
          disabled={(date) => {
            const today = new Date();
            const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
            const dayOfWeek = date.getDay();
            
            // Disable past dates, dates beyond 30 days, and weekends (0 = Sunday, 6 = Saturday)
            return date < today || date > maxDate || dayOfWeek === 0 || dayOfWeek === 6;
          }}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  );
};

export default DateSelection;
