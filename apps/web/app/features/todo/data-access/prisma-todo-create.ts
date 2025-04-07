import { prisma } from '~/lib/db.server'

export async function prismaTodoCreate(data: FormData) {
  const title = data.get('title')
  if (!title || typeof title !== 'string') {
    throw new Error('title is required')
  }

  return await prisma.todo.create({ data: { title } })
}
