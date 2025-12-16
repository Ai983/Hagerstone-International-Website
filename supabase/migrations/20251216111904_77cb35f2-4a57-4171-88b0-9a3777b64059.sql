-- Shared OTP storage so send-otp and verify-otp can work across cold starts

CREATE TABLE IF NOT EXISTS public.otp_codes (
  phone TEXT PRIMARY KEY,
  otp_hash TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.otp_codes ENABLE ROW LEVEL SECURITY;

-- No public policies: only Edge Functions using Service Role should access

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

DROP TRIGGER IF EXISTS update_otp_codes_updated_at ON public.otp_codes;
CREATE TRIGGER update_otp_codes_updated_at
BEFORE UPDATE ON public.otp_codes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_otp_codes_expires_at ON public.otp_codes (expires_at);