
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabaseTyped } from '@/lib/supabaseTyped';
import { Plus, Send, Eye, EyeOff } from 'lucide-react';

interface Client {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  login: string;
  temporary_password: string;
  password_changed: boolean;
  created_at: string;
}

interface ClientsTabProps {
  clients: Client[];
  onClientCreated: () => void;
}

const ClientsTab = ({ clients, onClientCreated }: ClientsTabProps) => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    login: ''
  });
  const [isCreating, setIsCreating] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const generatePassword = () => {
    const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const hashPassword = async (password: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const handleCreateClient = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const temporaryPassword = generatePassword();
      const passwordHash = await hashPassword(temporaryPassword);

      const { data, error } = await supabaseTyped
        .from('clients')
        .insert({
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          login: formData.login,
          password_hash: passwordHash,
          temporary_password: temporaryPassword,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Client créé",
        description: "Le client a été créé avec succès. Vous pouvez maintenant lui envoyer ses accès.",
      });

      setFormData({ nom: '', prenom: '', email: '', login: '' });
      setIsCreateDialogOpen(false);
      onClientCreated();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message || "Erreur lors de la création du client",
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }
  };

  const handleSendAccess = async (client: Client) => {
    setIsSendingEmail(true);

    try {
      const { error } = await supabaseTyped.functions.invoke('send-client-access', {
        body: {
          nom: client.nom,
          prenom: client.prenom,
          email: client.email,
          login: client.login,
          password: client.temporary_password
        }
      });

      if (error) throw error;

      toast({
        title: "Email envoyé",
        description: `Les accès ont été envoyés à ${client.email}`,
      });
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: "Erreur lors de l'envoi de l'email",
        variant: "destructive",
      });
    } finally {
      setIsSendingEmail(false);
    }
  };

  const togglePasswordVisibility = (clientId: string) => {
    setShowPasswords(prev => ({
      ...prev,
      [clientId]: !prev[clientId]
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Gestion des Clients</CardTitle>
              <CardDescription>
                Créez des comptes clients et envoyez leurs accès par email
              </CardDescription>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Nouveau Client
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Créer un nouveau client</DialogTitle>
                  <DialogDescription>
                    Créez un compte client avec un mot de passe temporaire
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateClient}>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="nom">Nom</Label>
                      <Input
                        id="nom"
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="prenom">Prénom</Label>
                      <Input
                        id="prenom"
                        value={formData.prenom}
                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="login">Login</Label>
                      <Input
                        id="login"
                        value={formData.login}
                        onChange={(e) => setFormData({ ...formData, login: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" disabled={isCreating}>
                      {isCreating ? "Création..." : "Créer le client"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Prénom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Login</TableHead>
                <TableHead>Mot de passe temporaire</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>{client.nom}</TableCell>
                  <TableCell>{client.prenom}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.login}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm">
                        {showPasswords[client.id] ? client.temporary_password : '••••••••'}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => togglePasswordVisibility(client.id)}
                      >
                        {showPasswords[client.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      client.password_changed 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {client.password_changed ? 'Activé' : 'En attente'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSendAccess(client)}
                      disabled={isSendingEmail}
                      className="flex items-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Envoyer accès
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {clients.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-gray-500 py-8">
                    Aucun client créé pour le moment
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientsTab;
