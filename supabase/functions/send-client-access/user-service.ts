
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

export const createOrUpdateSupabaseUser = async (email: string, password: string, nom: string, prenom: string) => {
  console.log("=== DÉBUT GESTION UTILISATEUR SUPABASE ===");
  
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  
  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Variables Supabase manquantes:", { 
      supabaseUrl: !!supabaseUrl, 
      supabaseServiceKey: !!supabaseServiceKey 
    });
    throw new Error('Variables Supabase manquantes');
  }

  console.log("Initialisation client Supabase...");
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  console.log('Vérification/création du compte utilisateur pour:', email);

  // Vérifier si l'utilisateur existe déjà
  console.log("Récupération de la liste des utilisateurs...");
  const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();
  
  if (listError) {
    console.error('Erreur lors de la récupération des utilisateurs:', listError);
    throw new Error(`Erreur vérification utilisateurs: ${listError.message}`);
  }

  console.log("Nombre d'utilisateurs trouvés:", existingUsers.users.length);
  const existingUser = existingUsers.users.find(user => user.email === email);

  if (existingUser) {
    console.log('=== UTILISATEUR EXISTANT TROUVÉ ===');
    console.log('ID utilisateur existant:', existingUser.id);
    console.log('Email confirmé:', existingUser.email_confirmed_at ? 'Oui' : 'Non');
    
    // Mettre à jour le mot de passe de l'utilisateur existant
    console.log("Mise à jour du mot de passe...");
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

    console.log('=== UTILISATEUR MIS À JOUR AVEC SUCCÈS ===');
    console.log('Données mises à jour:', updatedUser.user?.id);
    return { user: updatedUser.user };
  } else {
    console.log('=== CRÉATION NOUVEL UTILISATEUR ===');
    
    // Créer l'utilisateur dans Supabase Auth
    console.log("Création du compte Auth...");
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

    console.log('=== NOUVEL UTILISATEUR CRÉÉ AVEC SUCCÈS ===');
    console.log('ID nouvel utilisateur:', authUser.user?.id);
    console.log('Email confirmé automatiquement:', authUser.user?.email_confirmed_at ? 'Oui' : 'Non');
    
    return authUser;
  }
};
