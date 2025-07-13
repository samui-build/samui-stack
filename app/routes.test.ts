import { describe, expect, it } from 'vitest'
import routes from './routes'

describe('routes', () => {
  it('should match the route snapshot', () => {
    // ARRANGE
    // ACT
    // ASSERT
    expect(routes).toMatchInlineSnapshot(`
      [
        {
          "children": undefined,
          "file": "api/set-theme.tsx",
          "path": "api/set-theme",
        },
        {
          "children": [
            {
              "children": undefined,
              "file": "./features/user/admin-user-list.tsx",
              "index": true,
              "path": "admin/users",
            },
            {
              "children": undefined,
              "file": "./features/user/admin-user-create.tsx",
              "path": "admin/users/create",
            },
            {
              "children": undefined,
              "file": "./features/user/admin-user-detail.tsx",
              "path": "admin/users/:id/*",
            },
            {
              "children": undefined,
              "file": "features/admin/route-admin-dashboard.tsx",
              "index": true,
              "path": "admin",
            },
            {
              "children": undefined,
              "file": "features/admin/route-admin-settings-general.tsx",
              "path": "admin/settings/general",
            },
            {
              "children": undefined,
              "file": "features/admin/route-admin-settings-security.tsx",
              "path": "admin/settings/security",
            },
          ],
          "file": "features/admin/layout-admin.tsx",
        },
        {
          "children": [
            {
              "children": undefined,
              "file": "features/app/route-dashboard.tsx",
              "path": "dashboard",
            },
            {
              "children": undefined,
              "file": "features/app/route-todo.tsx",
              "path": "todo",
            },
          ],
          "file": "features/app/layout-app.tsx",
        },
        {
          "children": [
            {
              "children": undefined,
              "file": "features/auth/route-login.tsx",
              "path": "login",
            },
            {
              "children": undefined,
              "file": "features/auth/route-logout.tsx",
              "path": "logout",
            },
            {
              "children": undefined,
              "file": "features/auth/route-register.tsx",
              "path": "register",
            },
          ],
          "file": "features/auth/layout-auth.tsx",
        },
        {
          "children": [
            {
              "file": "features/homepage/route-index.tsx",
              "index": true,
            },
            {
              "children": undefined,
              "file": "features/homepage/route-about.tsx",
              "path": "about",
            },
          ],
          "file": "features/homepage/layout-homepage.tsx",
        },
      ]
    `)
  })
})
