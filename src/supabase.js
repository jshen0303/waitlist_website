import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://btxzcxqpqiayfnziwbpf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0eHpjeHFwcWlheWZueml3YnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3OTU2MDQsImV4cCI6MjA2ODM3MTYwNH0.331pFlg2StxFS9xURt-GgGjw_6-BJeuKIYkiYNEvf1c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
