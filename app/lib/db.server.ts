import { Prisma, type User } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { createPrismaClientServer } from '~/lib/create-prisma-client.server'

let db: AppPrismaClient

declare global {
  // eslint-disable-next-line no-var
  var __db__: AppPrismaClient | undefined
}

// Avoid multiple instances during development
if (process.env.NODE_ENV === 'production') {
  db = createPrismaClientServer()
} else {
  if (!globalThis.__db__) {
    globalThis.__db__ = createPrismaClientServer()
  }
  db = globalThis.__db__
}

export type AppPrismaClient = ReturnType<typeof createPrismaClientServer>

// Re-export types so that there is no reference to @prisma/client in the service layer
export type UserCreateInput = Prisma.UserCreateInput
export type UserUpdateInput = Prisma.UserUpdateInput

export { db, db as prisma, type User }
export * from './generated/zod'

// Some helper functions
function hashPassword(password: string) {
  return bcrypt.hash(password, 10)
}

function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash)
}
