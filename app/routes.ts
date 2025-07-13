import { index, layout, prefix, type RouteConfig, route } from '@react-router/dev/routes'
import { adminUserRoutes } from './features/user'

export default [
  ...prefix('api', [
    // API routes go here
    route('set-theme', 'api/set-theme.tsx'),
  ]),
  // Admin routes go here
  layout('features/admin/layout-admin.tsx', [
    ...prefix('admin', [
      ...adminUserRoutes,
      index('features/admin/route-admin-dashboard.tsx'),
      ...prefix('settings', [
        //
        route('general', 'features/admin/route-admin-settings-general.tsx'),
        route('security', 'features/admin/route-admin-settings-security.tsx'),
      ]),
    ]),
  ]),
  // App routes go here
  layout('features/app/layout-app.tsx', [
    route('dashboard', 'features/app/route-dashboard.tsx'),
    route('todo', 'features/app/route-todo.tsx'),
  ]),
  // Auth routes go here
  layout('features/auth/layout-auth.tsx', [
    route('login', 'features/auth/route-login.tsx'),
    route('logout', 'features/auth/route-logout.tsx'),
    route('register', 'features/auth/route-register.tsx'),
  ]),
  // Homepage routes go here
  layout('features/homepage/layout-homepage.tsx', [
    index('features/homepage/route-index.tsx'),
    route('about', 'features/homepage/route-about.tsx'),
  ]),
] satisfies RouteConfig
