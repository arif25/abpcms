"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import logo from "@/assets/logo-sandesh-cms.svg" 

export default function LoginPage() {
  const [mode, setMode] = useState<"ABP" | "TT">("ABP")

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm bg-white p-6 space-y-6">

        {/* Logo + Title */}
        <div className="flex flex-col items-center space-y-2">
            <img src={logo} alt="logo" className="w-[163px] object-contain" />
        </div>

        {/* Toggle */}
        <div className="flex justify-center">
          <div className="flex bg-white-200 border rounded-md overflow-hidden text-sm">
           <Button
                onClick={() => setMode("ABP")}
                variant={mode === "ABP" ? "secondary" : "outline"} 
                className="px-4 py-1.5 text-sm rounded-none border-0" 
                >
                ABP
            </Button>
            <Button 
                onClick={ () => setMode("TT") }
                variant={mode === "TT" ? "secondary" : "outline"} 
                className="px-4, py-1.5 text-sm rounded-none border-0">
                TT
            </Button>
          </div>
        </div>

        {/* Google Login */}
        <Button className="w-full bg-slate-900 hover:bg-slate-800">
          Login via Google
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Separator className="flex-1" />
          <span>Or continue with</span>
          <Separator className="flex-1" />
        </div>

        {/* Form */}
        <div className="space-y-4">
          <Input placeholder="Username" />
          <Input type="password" placeholder="Password" />
        </div>

        {/* Login Buttons */}
        <Button
          variant="secondary"
          className="w-full bg-gray-200 hover:bg-gray-300 text-black"
        >
          Login as User
        </Button>

        <div className="text-center">
          <button className="text-sm text-gray-600 hover:underline">
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  )
}