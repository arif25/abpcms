
import AnimatedBgRaw from "@/components/animation/AnimatedBgRaw";
import { Button } from "@/components/ui/button";
import "@/styles/animated-spin.scss";
import { useNavigate } from "react-router-dom";

export default function RainbowAnimation() {

  const navigate = useNavigate()

  const backToHome = () =>{
    navigate("/dashboard");
  }

  return (
    <div className="h-screen w-full overflow-hidden bg-black">
      <div className="h-[86vh]  text-center">
        <Button className="cursor-pointer mt-4" onClick={backToHome}>Home</Button>
      </div>
      <AnimatedBgRaw />
    </div>
  );
}