import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'SUA_URL_DO_SUPABASE';
const supabaseKey = 'SUA_CHAVE_PUBLICA';
export const supabase = createClient(supabaseUrl, supabaseKey);