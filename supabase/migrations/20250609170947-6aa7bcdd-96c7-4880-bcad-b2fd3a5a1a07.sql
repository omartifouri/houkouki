
-- Créer une table pour les clients avec leurs accès
CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  login TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  temporary_password TEXT NOT NULL,
  password_changed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Ajouter RLS pour que seuls les admins puissent gérer les clients
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre aux admins de voir tous les clients
CREATE POLICY "Admins can view all clients" 
  ON public.clients 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE admin_users.user_id = auth.uid()
    )
  );

-- Politique pour permettre aux admins de créer des clients
CREATE POLICY "Admins can create clients" 
  ON public.clients 
  FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE admin_users.user_id = auth.uid()
    )
  );

-- Politique pour permettre aux admins de modifier des clients
CREATE POLICY "Admins can update clients" 
  ON public.clients 
  FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE admin_users.user_id = auth.uid()
    )
  );

-- Politique pour permettre aux admins de supprimer des clients
CREATE POLICY "Admins can delete clients" 
  ON public.clients 
  FOR DELETE 
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE admin_users.user_id = auth.uid()
    )
  );
