
CREATE TABLE IF NOT EXISTS public.courses (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,
  progress    INTEGER NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  icon_name   TEXT NOT NULL DEFAULT 'book-open',
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON public.courses
  FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO public.courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns',          75, 'code2'),
  ('TypeScript Deep Dive',             48, 'layers'),
  ('Node.js & API Architecture',       30, 'server'),
  ('System Design for Engineers',      62, 'cpu')
ON CONFLICT DO NOTHING;

SELECT id, title, progress, icon_name, created_at
FROM public.courses

