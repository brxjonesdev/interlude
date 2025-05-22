"use client"
import React from 'react'
import { Button } from '../shadcn/button'
import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/components/shadcn/alert-dialog"


export default function AuthButton({ defaultMessage }: { defaultMessage: string }) {
    const supabase = createClient()
    const [buttonText, setButtonText] = useState("Sign in")
    const [error, setError] = useState<string | null>(null)

    async function signInWithGithub() {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        }
      })
      if (error) {
        setError(error.message)
      } else {
        setError(null)
      }
    }

    function handleSignIn() {
      setButtonText("Signing in...")
      signInWithGithub()
    }
  return (
    <>
    <Button 
    onClick={handleSignIn}
    className='w-full max-w-[200px]'
    >
        {defaultMessage? defaultMessage : buttonText}
    </Button>
    <AlertDialog open={error !== null}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>
        {error}
      </AlertDialogTitle>
      <AlertDialogDescription>
        It seems like there was an error signing in. Please try again.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={() => setError(null)}>
        Cancel
      </AlertDialogCancel>
      <AlertDialogAction onClick={() => {
        setError(null)
        handleSignIn()
      }
      }>
        Retry
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  </>)
}
