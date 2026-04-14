import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { RouteConfig } from '@/types/routes';

/**
 * Fetches enabled routes from the database
 * Cached for 5 minutes to minimize API calls
 */
export const useRoutes = () => {
  return useQuery({
    queryKey: ['routes'],
    queryFn: async (): Promise<RouteConfig[]> => {
      const { data, error } = await supabase
        .from('routes')
        .select('*')
        .eq('is_enabled', true)
        .order('sort_order');

      if (error) throw error;
      return data as RouteConfig[];
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    gcTime: 1000 * 60 * 10, // Keep in cache for 10 minutes
  });
};

/**
 * Get a specific route by path
 */
export const useRouteByPath = (path: string) => {
  const { data: routes } = useRoutes();
  return routes?.find(route => route.path === path);
};
