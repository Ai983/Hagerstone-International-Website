-- Extend the leads table so every field a form collects can actually be stored.
--
-- Before this migration `leads` held only (name, email, number). The contact
-- form at src/pages/Contact.tsx collects eight fields, so company, project
-- type, location, subject and message had nowhere to go.
--
-- Also adds lightweight attribution (source_type / source_path / UTMs) so a
-- lead can be traced back to the page that produced it. Every column is
-- nullable — existing insert paths (LeadPopupForm, verify-otp) keep working
-- unchanged.

ALTER TABLE public.leads
  -- Enquiry detail
  ADD COLUMN IF NOT EXISTS company      TEXT,
  ADD COLUMN IF NOT EXISTS project_type TEXT,
  ADD COLUMN IF NOT EXISTS city         TEXT,
  ADD COLUMN IF NOT EXISTS subject      TEXT,
  ADD COLUMN IF NOT EXISTS message      TEXT,

  -- Attribution: which surface and which page produced this lead
  ADD COLUMN IF NOT EXISTS source_type  TEXT,  -- contact | popup | quiz | calculator
  ADD COLUMN IF NOT EXISTS source_path  TEXT,  -- e.g. /contact
  ADD COLUMN IF NOT EXISTS referrer     TEXT,
  ADD COLUMN IF NOT EXISTS utm_source   TEXT,
  ADD COLUMN IF NOT EXISTS utm_medium   TEXT,
  ADD COLUMN IF NOT EXISTS utm_campaign TEXT,

  -- Simple pipeline state for whoever works the lead
  ADD COLUMN IF NOT EXISTS status       TEXT NOT NULL DEFAULT 'new';

-- Phone is the field that always exists; email does not. WhatsApp-first
-- surfaces (sticky CTA, calculators) will capture a number and no address, so
-- email must be optional for submitLead() to serve them without a second
-- migration later. Existing forms still mark it required in the UI.
ALTER TABLE public.leads ALTER COLUMN email DROP NOT NULL;

-- Newest-first is how leads are actually read in the dashboard.
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads (created_at DESC);

-- Lets us answer "which pages produce leads" without a full scan.
CREATE INDEX IF NOT EXISTS leads_source_type_idx ON public.leads (source_type);

COMMENT ON COLUMN public.leads.source_type IS 'Capture surface: contact | popup | quiz | calculator';
COMMENT ON COLUMN public.leads.source_path IS 'Path of the page the lead was submitted from';
COMMENT ON COLUMN public.leads.status      IS 'Pipeline state: new | contacted | qualified | won | lost';
