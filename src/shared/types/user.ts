export type User = {
  id: string
  email: string
  username?: string
  fullName?: string
  avatarUrl?: string
  provider?: string
  createdAt?: string
  lastSignInAt?: string
  emailVerified?: boolean
}

export function createNewUser(): User {
  return {
    id: '',
    email: '',
    username: '',
    fullName: '',
    avatarUrl: '',
    provider: '',
    createdAt: '',
    lastSignInAt: '',
    emailVerified: false
  }
}
