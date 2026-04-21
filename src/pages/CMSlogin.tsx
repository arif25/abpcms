"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator";

import logo from "@/assets/logo-sandesh-cms.svg" ;

import { X } from "lucide-react"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [mode, setMode] = useState<"ABP" | "TT">("ABP")
  const [showPass, setShowPass] = useState(false)

  const [value, setValue] = useState("")
  const [error, setError] = useState("")

  const validate = (val: string) => {
    if (!val) return "Email is required"
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(val)) return "Please enter a valid email address"
    return ""
  }

  const handleBlur = () => {
    setError(validate(value))
  }

  const handleChange = (val: string) => {
    setValue(val)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[320px] bg-white">

        {/* Logo + Title */}
        <div className="flex flex-col items-center">
            <img src={logo} alt="logo" className="w-[100px] sm:w-[163px] object-contain" />
        </div>

        {/* Toggle */}
        <div className="flex justify-center mt-14">
          <div className="flex bg-white-200 border rounded-md overflow-hidden text-sm">
           <Button
                onClick={() => setMode("ABP")}
                className={`w-[75px] h-9 font-bold cursor-pointer transition-colors border-0 rounded-none
                ${mode === "ABP" 
                  ? "bg-[#E3E3E3] text-black" 
                  : "bg-white text-[#7F8EA3] hover:bg-gray-100"
                }`}
                >
                ABP
            </Button>
            <Button 
                onClick={ () => setMode("TT") }
                className={`w-[75px] h-9 font-bold cursor-pointer transition-colors border-0 rounded-none
                ${mode === "TT" 
                  ? "bg-[#E3E3E3] text-black" 
                  : "bg-white text-[#7F8EA3] hover:bg-gray-100"
                }`}>
                TT
            </Button>
          </div>
        </div>

        {/* Google Login */}
        <Button className="w-full h-10 bg-slate-900 hover:bg-slate-800 mt-10 tracking-[0.07px]">
          Login via Google
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-6">
          <Separator className="flex-1 bg-[#7F8EA3]" />
          <span>Or continue with</span>
          <Separator className="flex-1 bg-[#7F8EA3]" />
        </div>

        {/* === Form === */}
        <div className="space-y-8 mt-8">
            <div className="space-y-1">
              <div className="relative">
                <Input
                  type="text"
                  inputMode="email"   // 👈 mobile keyboard optimization
                  autoComplete="email"
                  value={value}
                  onChange={(e) => handleChange(e.target.value)}
                  onBlur={handleBlur}
                  placeholder="Enter your email"
                  className={error ? "border-red-500 focus-visible:ring-red-500 pr-10 h-10" : "pr-10 h-10"}
                />

                {value && (
                  <button
                    type="button"
                    onClick={() => {
                      setValue("")
                      setError("")
                      setTouched(false)
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

          {/* Password */}
           <div className="relative">
            <Input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="h-10 text-sm pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>


        {/* Login Buttons */}
        <Button
          variant="secondary" className="cursor-pointer h-10 w-full font-bold bg-[#F1F5F9] hover:bg-gray-300 text-[#0F172A] mt-10"
        >
          Login as User 
        </Button>

        <div className="text-center mt-4">
          <button className="cursor-pointer text-sm font-bold text-[#334155] h-10">
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  )
}