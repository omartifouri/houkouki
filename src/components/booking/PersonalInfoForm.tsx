
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@supabase/supabase-js";

interface PersonalInfoFormProps {
  user: User | null;
  name: string;
  email: string;
  phone: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onPhoneChange: (phone: string) => void;
}

const PersonalInfoForm = ({ 
  user, 
  name, 
  email, 
  phone, 
  onNameChange, 
  onEmailChange, 
  onPhoneChange 
}: PersonalInfoFormProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">4</span>
          </div>
          <span>Vos informations</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="name">Pseudonyme *</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Votre pseudonyme"
            className={user && email ? "bg-blue-50" : ""}
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="votre.email@exemple.com"
            className={user ? "bg-blue-50" : ""}
            disabled={!!user}
          />
          {user && (
            <p className="text-xs text-blue-600 mt-1">
              ✓ Email récupéré depuis votre compte
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Téléphone (optionnel)</Label>
          <Input
            id="phone"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder="06 12 34 56 78"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
