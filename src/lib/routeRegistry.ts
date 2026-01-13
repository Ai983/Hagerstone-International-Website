import { lazy } from 'react';

/**
 * Maps component_key from database to lazy-loaded React components
 * This allows dynamic route loading while keeping static imports
 */
export const componentRegistry: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  'about': lazy(() => import('@/pages/About')),
  'our-team': lazy(() => import('@/pages/OurTeam')),
  'projects': lazy(() => import('@/pages/Projects')),
  'project-detail': lazy(() => import('@/pages/ProjectDetail')),
  'services': lazy(() => import('@/pages/Services')),
  'ideas': lazy(() => import('@/pages/Ideas')),
  'blog': lazy(() => import('@/pages/Blog')),
  'blog-post': lazy(() => import('@/pages/BlogPost')),
  'office-workspace-design': lazy(() => import('@/pages/blog/office-workspace-design')),
  'find-your-style': lazy(() => import('@/pages/FindYourStyle')),
  'contact': lazy(() => import('@/pages/Contact')),
};
