
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

export const createOrUpdateSupabaseUser = async (email: string, password: string, nom: string, prenom: string) => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Variables Supabase manquantes');
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  console.log('Vérification/création du compte utilisateur Supabase pour:', email);

  // D'abord vérifier si l'utilisateur existe déjà
  const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();
  
  if (listError) {
    console.error('Erreur lors de la vérification des utilisateurs:', listError);
    throw new Error(`Erreur vérification utilisateurs: ${listError.message}`);
  }

  const existingUser = existingUsers.users.find(user => user.email === email);

  if (existingUser) {
    console.log('Utilisateur existant trouvé:', existingUser.id);
    
    // Mettre à jour le mot de passe de l'utilisateur existant
    const { data: updatedUser, error: updateError } = await supabase.auth.admin.updateUserById(
      existingUser.id,
      {
        password: password,
        user_metadata: {
          first_name: prenom,
          last_name: nom,
        }
      }
    );

    if (updateError) {
      console.error('Erreur mise à jour utilisateur:', updateError);
      throw new Error(`Erreur mise à jour utilisateur: ${updateError.message}`);
    }

    console.log('Mot de passe utilisateur mis à jour avec succès');
    return { user: updatedUser.user };
  } else {
    console.log('Création d\'un nouvel utilisateur');
    
    // Créer l'utilisateur dans Supabase Auth
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true, // Confirmer automatiquement l'email
      user_metadata: {
        first_name: prenom,
        last_name: nom,
      }
    });

    if (authError) {
      console.error('Erreur création utilisateur Auth:', authError);
      throw new Error(`Erreur création utilisateur: ${authError.message}`);
    }

    console.log('Nouvel utilisateur Auth créé avec succès:', authUser.user?.id);
    return authUser;
  }
};
