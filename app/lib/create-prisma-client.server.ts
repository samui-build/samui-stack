import { PrismaClient } from '~/lib/generated/prisma/client'
import { computeUserAvatarUrl, defaultUserAvatarUrl } from '~/lib/helpers/compute-user-avatar-url'

export function createPrismaClientServer() {
  return new PrismaClient().$extends({
    query: {
      user: {
        update: ({ args, query }) => {
          const username = args.where.username || args.data.username
          if (typeof username === 'string' && args.data.avatarUrl !== undefined) {
            if (args.data.avatarUrl === defaultUserAvatarUrl({ username })) {
              delete args.data.avatarUrl
            }
          }
          return query(args)
        },
      },
    },
    result: {
      user: {
        avatarUrl: { compute: computeUserAvatarUrl },
      },
    },
  })
}
