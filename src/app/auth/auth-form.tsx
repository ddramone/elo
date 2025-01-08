"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Database } from "@/types/supabase"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"

function useRedirectUrl() {
  const isDev = process.env.NODE_ENV === "development"
  const [origin, setOrigin] = useState("")

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  return isDev ? "http://localhost:3000/auth/callback" : `${origin}/auth/callback`
}

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()
  const redirectTo = useRedirectUrl()
  const [email, setEmail] = useState<string | null>(null)

  const [isSent, setIsSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const isValidEmail = email && /^\S+@\S+\.\S+$/.test(email.trim())

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectTo,
      },
    })
    setIsLoading(false)
  }

  const handleEmailSignIn = async () => {
    setIsLoading(true)
    if (!isValidEmail) return
    await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: redirectTo,
      },
    })
    setIsSent(true)
    setIsLoading(false)
  }

  if (isSent)
    return (
      <div className="flex w-full max-w-md flex-col gap-4 animate-in">
        <p>Check your email for the login link to continue</p>
        <p className="text-sm text-muted-foreground">you can close this window</p>
      </div>
    )

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Button
        variant="outline"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className={cn(isLoading && "animate-pulse")}
      >
        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Sign in with Google
      </Button>

      <div className="flex items-center gap-4">
        <div className="h-[1px] flex-1 bg-border" />
        <span className="text-sm text-muted-foreground">or</span>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault()
          await handleEmailSignIn()
        }}
      >
        <div className="flex w-full flex-col gap-4">
          <Input
            placeholder="Email"
            className="w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="accent"
            disabled={!isValidEmail || isLoading}
            className={cn(isLoading && "animate-pulse")}
          >
            Send me Magic Link
          </Button>
        </div>
      </form>
    </div>
  )
}
