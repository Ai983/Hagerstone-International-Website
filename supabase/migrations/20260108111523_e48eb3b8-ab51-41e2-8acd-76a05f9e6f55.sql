-- Create routes table for dynamic route management
CREATE TABLE public.routes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  path TEXT NOT NULL UNIQUE,
  component_key TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  keywords TEXT,
  og_image TEXT,
  is_enabled BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.routes ENABLE ROW LEVEL SECURITY;

-- Allow public read access (routes need to be readable by everyone)
CREATE POLICY "Routes are publicly readable"
ON public.routes
FOR SELECT
USING (true);

-- Create trigger for updated_at
CREATE TRIGGER update_routes_updated_at
BEFORE UPDATE ON public.routes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Seed with existing routes
INSERT INTO public.routes (path, component_key, title, description, keywords, is_enabled, sort_order)
VALUES
  ('/about', 'about', 'About Us', 'Learn about Hagerstone International - leading office design and build company delivering exceptional workplace solutions.', 'about hagerstone, office design company, workplace solutions', true, 1),
  ('/our-team', 'our-team', 'Our Team', 'Meet the talented team behind Hagerstone International office design and build projects.', 'hagerstone team, office designers, workplace architects', true, 2),
  ('/projects', 'projects', 'Projects', 'Explore our portfolio of office design and build projects across various sectors.', 'office projects, workplace design portfolio, commercial interiors', true, 3),
  ('/projects/:id', 'project-detail', 'Project Details', 'View detailed project information and gallery.', 'project details, office design case study', true, 4),
  ('/services', 'services', 'Services', 'Comprehensive office design and build services including interior design, fit-out, and project management.', 'office design services, workplace fit-out, interior design', true, 5),
  ('/ideas', 'ideas', 'Ideas', 'Get inspired with office design ideas and trends from Hagerstone International.', 'office design ideas, workplace inspiration, design trends', true, 6),
  ('/blog', 'blog', 'Blog', 'Read the latest insights on office design, workplace trends, and industry news.', 'office design blog, workplace articles, design insights', true, 7),
  ('/blog/:slug', 'blog-post', 'Blog Post', 'Read our latest blog articles on office design and workplace trends.', 'office design articles, workplace blog', true, 8),
  ('/find-your-style', 'find-your-style', 'Find Your Style', 'Discover your ideal office style with our AI-powered quiz and get a personalized cost estimate.', 'office style quiz, design estimator, workplace style', true, 9),
  ('/contact', 'contact', 'Contact Us', 'Get in touch with Hagerstone International for your office design and build needs.', 'contact hagerstone, office design inquiry, workplace consultation', true, 10);