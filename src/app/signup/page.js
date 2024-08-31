"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Github, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import { getCsrfToken } from "next-auth/react"

export default function Component({
  csrfToken,
}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !password) {
      setError("All fields are required")
      return
    }

    console.log("Signup submitted", { name, email, password })
  }

  const handleGoogleSignup = () => {
    console.log("Google signup clicked")
  }

  const handleGithubSignup = () => {
    console.log("GitHub signup clicked")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-2xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative space-y-8"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold text-white"
            >
              Sign Up
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-2 text-sm text-gray-400"
            >
              Create your account to get started
            </motion.p>
          </div>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button onClick={handleGoogleSignup} variant="outline" className="w-full bg-white/10 text-white hover:bg-white/20">
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
                Sign up with Google
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button onClick={handleGithubSignup} variant="outline" className="w-full bg-white/10 text-white hover:bg-white/20">
                <Github className="mr-2 h-4 w-4" />
                Sign up with GitHub
              </Button>
            </motion.div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full border-t border-gray-600" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-800 px-2 text-gray-400">Or continue with</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6" method="post" action="/api/auth/signin/email">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="name" className="text-gray-200">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/10 text-white placeholder-gray-400"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="email" className="text-gray-200">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 text-white placeholder-gray-400"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="password" className="text-gray-200">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/10 text-white placeholder-gray-400"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Sign Up with Email
              </Button>
            </motion.div>
          </form>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-4 text-center text-sm text-gray-400"
          >
            Already have an account?{" "}
            <Button variant="link" className="font-medium text-primary hover:underline" onClick={(() => router.push('/signin'))}>Sign In</Button>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export async function getServerSidePropss(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}