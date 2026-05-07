"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import logo from "@/assets/logo-sandesh-cms.svg"

import { X, Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const navigate = useNavigate()

  const [mode, setMode] = useState<"ABP" | "TT">("ABP")
  const [showPass, setShowPass] = useState(false)

  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  // 🔹 Validation
  const validateEmail = (val: string) => {
    if (!val) return "Email is required"
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(val)) return "Invalid email address"
    return ""
  }

  const handleEmailBlur = () => {
    setError(validateEmail(email))
  }

  const clearEmail = () => {
    setEmail("")
    setError("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[340px]">

        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="w-[120px] sm:w-[160px]" />
        </div>

        {/* Toggle */}
        <div className="flex justify-center mt-12">
          <div className="flex border rounded-md overflow-hidden text-sm">
            {["ABP", "TT"].map((item) => (
              <Button
                key={item}
                onClick={() => setMode(item as "ABP" | "TT")}
                className={`w-[80px] h-9 font-semibold rounded-none border-0 transition cursor-pointer
                  ${
                    mode === item
                      ? "bg-gray-200 text-black"
                      : "bg-white text-gray-500 hover:bg-gray-100"
                  }`}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        {/* Google Login */}
        <Button
          onClick={() => navigate("/adpartner")}
          className="w-full h-10 mt-10 bg-slate-900 hover:bg-slate-800 text-white cursor-pointer"
        >
          Login with Google
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-6">
          <Separator className="flex-1" />
          <span>Or continue with</span>
          <Separator className="flex-1" />
        </div>

        {/* Form */}
        <div className="space-y-6 mt-6">

          {/* Email */}
          <div className="relative">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
              placeholder="Enter your email"
              className={`h-10 pr-10 ${
                error ? "border-red-500 focus-visible:ring-red-500" : ""
              }`}
            />

            {email && (
              <button
                type="button"
                onClick={clearEmail}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <X size={16} />
              </button>
            )}

            {error && (
              <p className="text-xs text-red-500 mt-1">{error}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <Input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="h-10 pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Actions */}
        <Button
          onClick={() => navigate("/tablewithaccordion")}
          className="w-full h-10 mt-10 bg-gray-100 hover:bg-gray-300 text-gray-900 font-semibold cursor-pointer"
        >
          Login as User
        </Button>

        <Button
          variant="outline"
          className="w-full mt-4 border-0"
        >
          Login as Admin
        </Button>
      </div>
    </div>
  )
}