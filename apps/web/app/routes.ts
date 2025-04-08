import { index, layout, prefix, type RouteConfig, route } from '@react-router/dev/routes'

export default [
  ...prefix('api', [
    // API routes go here
    route('set-theme', 'api/set-theme.tsx'),
  ]),
  layout('./ui/app-layout-admin.tsx', [
    // Admin routes go here
    ...prefix('admin', [
      ...prefix('users', [
        //
        index('features/admin-users/admin-users.tsx'),
      ]),
    ]),
  ]),
  layout('./ui/app-layout-app.tsx', [
    // App routes go here
    route('dashboard', 'features/dashboard/dashboard.tsx'),
    route('todo', 'features/todo/todo-list.tsx'),
  ]),
  layout('./ui/app-layout-auth.tsx', [
    // Auth routes go here
    route('login', 'features/auth/login.tsx'),
    route('logout', 'features/auth/logout.tsx'),
  ]),
  layout('./ui/app-layout-homepage.tsx', [
    // Homepage routes go here
    index('features/home/index.tsx'),
    route('about', 'features/home/about.tsx'),
  ]),
] satisfies RouteConfig
