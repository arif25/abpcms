import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function LoginForm() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/dashboard")
  }

  const handleAnimationSpin = () => {
    navigate("/animation")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5] px-4">
      <Card className="w-full max-w-md border border-gray-200 shadow-sm rounded-lg">
        <CardHeader className="pb-3 pt-6 px-6">
          <CardTitle className="text-lg font-semibold">
            Login to your account
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 mt-1">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5 px-6 pb-6">
          {/* Email */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Email</p>
            <Input className="h-11" type="email" />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Password</p>
              <button
                type="button"
                className="text-sm text-gray-500 hover:underline"
              >
                Forgot your password?
              </button>
            </div>
            <Input className="h-11" type="password" />
          </div>

          {/* Login Button */}
          <Button
            onClick={handleLogin}
            className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white"
          >
            Sorter Manager
          </Button>

          {/* Google Login */}
          <Button
            onClick={handleAnimationSpin}
            variant="outline"
            className="w-full h-11 bg-white hover:bg-gray-50"
          >
            Animation Spin
          </Button>

          {/* Signup */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/cmslogin")}
              className="underline cursor-pointer text-gray-700"
            >
              Sandesh Login
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}