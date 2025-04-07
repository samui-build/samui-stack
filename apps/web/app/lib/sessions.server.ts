import { createCookieSessionStorage } from 'react-router'
import { createThemeSessionResolver } from 'remix-themes'

const appId = process.env.APP_ID ?? 'samui-stack'
const domain = process.env.DOMAIN ?? 'localhost'
const secret = process.env.COOKIE_SECRET ?? ''
const secure = process.env.NODE_ENV === 'production'

const sessionStorage = createCookieSessionStorage({
  cookie: {
    domain,
    httpOnly: true,
    name: `__${appId}-theme`,
    path: '/',
    secrets: [secret],
    secure,
  },
})

export const themeSessionResolver = createThemeSessionResolver(sessionStorage)
