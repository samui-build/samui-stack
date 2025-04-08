import { prisma } from '~/lib/db.server'

export async function prismaTodoFindAll() {
  return await prisma.todo.findMany({ orderBy: [{ completed: 'asc' }, { createdAt: 'desc' }] })
}
