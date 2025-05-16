"use client"

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { User } from '../types/user'
import { UserMetadata } from '@supabase/supabase-js'

export default function useAuth() {
  const supabase = createClient()
  const [user, setUser] = useState<User | null>(null)

  const formatUser = (rawUser: UserMetadata): User | null => {
    if (!rawUser) return null

    return {
      id: rawUser.id,
      email: rawUser.email,
      username: rawUser.user_metadata?.preferred_username || rawUser.user_metadata?.user_name,
      fullName: rawUser.user_metadata?.full_name,
      avatarUrl: rawUser.user_metadata?.avatar_url,
      provider: rawUser.app_metadata?.provider,
      createdAt: rawUser.created_at,
      lastSignInAt: rawUser.last_sign_in_at,
      emailVerified: rawUser.user_metadata?.email_verified,
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser()

      if (error) {
        console.error("Error fetching user:", error)
        return
      }

      if (!data?.user) {
        console.log("No user found")
        setUser(null)
        return
      }

      setUser(formatUser(data.user))
    }

    fetchUser()
  }, [supabase])

  return { user }
}
