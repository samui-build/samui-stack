import type { User } from '~/lib/db.server'

export function computeUserAvatarUrl(user: Pick<User, 'avatarUrl' | 'username'>) {
  return user.avatarUrl ? user.avatarUrl : defaultUserAvatarUrl(user)
}

export function defaultUserAvatarUrl(user: Pick<User, 'username'>) {
  return `https://api.dicebear.com/9.x/initials/svg?seed=${user.username}&backgroundType=gradientLinear`
}
