
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { User } from "@supabase/supabase-js";

interface BookingHeaderProps {
  user: User | null;
}

const BookingHeader = ({ user }: BookingHeaderProps) => {
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-2xl font-bold text-red-800">Houkouki</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default BookingHeader;
