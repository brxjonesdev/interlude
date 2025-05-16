'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { User } from '../types/user'
import { UserMetadata } from '@supabase/supabase-js'

export default function useAuth() {
  const supabase = createClient()
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const formatUser = (rawUser: UserMetadata): User | null => {
    if (!rawUser) return null

    return {
      id: rawUser.id,
      email: rawUser.email,
      username:
        rawUser.user_metadata?.preferred_username ||
        rawUser.user_metadata?.user_name ||
        null,
      fullName: rawUser.user_metadata?.full_name || null,
      avatarUrl: rawUser.user_metadata?.avatar_url || null,
      provider: rawUser.app_metadata?.provider || null,
      createdAt: rawUser.created_at,
      lastSignInAt: rawUser.last_sign_in_at,
      emailVerified: rawUser.user_metadata?.email_verified || false,
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: userData, error: userError } = await supabase.auth.getUser()
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession()

        if (userError || sessionError) {
          console.error('Auth error:', userError || sessionError)
          return
        }

        if (!userData?.user) {
          setUser(null)
          setToken(null)
          return
        }

        setUser(formatUser(userData.user))
        setToken(sessionData.session?.provider_token || null)
      } catch (err) {
        console.error('Unexpected auth error:', err)
      }
    }

    fetchUser()
  }, [supabase])

  return { user, token }
}
