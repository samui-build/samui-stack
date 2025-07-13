import type { User } from '~/lib/db.server'
import { getSession } from '~/lib/sessions.server'

export async function getUser(request: Request): Promise<User | undefined> {
  const session = await getSession(request.headers.get('cookie'))

  return session.get('user')
}
