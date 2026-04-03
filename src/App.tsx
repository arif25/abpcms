
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"



export default function App({ children }: { children: React.ReactNode }) {
  return (


    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>




// export default function App() {
//   return (
    // <div className="p-6">

    //   <div className="bg-white text-red-500 p-10">
    //   Tailwind Test
    //   <Button variant="ghost">Click me</Button> 
    //   <Button variant="secondary">Click me</Button>
    //   <Button size="lg">Click me</Button>
    //   <Button>Click me</Button>
    //   <Button>Click me</Button>
    //    <div className="p-10">
    //   <h1 className="text-2xl font-bold text-red-500">
    //     Tailwind Working 🚀
    //   </h1>
    // </div>
    // </div>
    //   <Card className="w-[350px]">
    //     <CardHeader>
    //       <CardTitle>Total Post</CardTitle>
    //       <CardDescription>Last Month publish summary</CardDescription>
    //     </CardHeader>
    //     <CardContent>
    //       <p className="text-3xl font-bold">128</p>
    //     </CardContent>
    //   </Card>


    // </div>
  )
}
