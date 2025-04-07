import { index, prefix, type RouteConfig, route } from '@react-router/dev/routes'

export default [
  index('features/home.tsx'),
  ...prefix('api', [
    // API routes go here
    route('set-theme', 'api/set-theme.tsx'),
  ]),
  route('todo', 'features/todo/todo-list.tsx'),
] satisfies RouteConfig
