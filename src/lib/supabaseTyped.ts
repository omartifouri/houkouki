
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

const SUPABASE_URL = "https://udipesojingylaeersxn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkaXBlc29qaW5neWxhZWVyc3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4ODYwOTgsImV4cCI6MjA2NDQ2MjA5OH0.U-F8gmv5kN4Ehh79I1a0y1NRuJH4EDZQ2v8112mZXgc";

export const supabaseTyped = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
