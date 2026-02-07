-- Drop overly permissive SELECT policy on leads table
-- No client-side code reads from leads; admin access is via Supabase dashboard
DROP POLICY IF EXISTS "Allow authenticated users to view leads" ON public.leads;