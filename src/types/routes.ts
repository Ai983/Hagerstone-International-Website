export interface RouteConfig {
  id: string;
  path: string;
  component_key: string;
  title: string;
  description: string | null;
  keywords: string | null;
  og_image: string | null;
  is_enabled: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}
