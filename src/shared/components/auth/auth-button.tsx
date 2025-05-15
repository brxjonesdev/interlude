"use client"
import React from 'react'
import { Button } from '../shadcn/button'
import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'

export default function AuthButton({ defaultMessage }: { defaultMessage: string }) {
    const supabase = createClient()
    const [buttonText, setButtonText] = useState("Sign in")

    async function signInWithGithub() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        }
      })
    }
  return (
    <Button 
    onClick={async () => {
        setButtonText("Signing in...")
        await signInWithGithub()
        setButtonText("Sign in")
    }}
    >
        {defaultMessage? defaultMessage : buttonText}
    </Button>
  )
}
