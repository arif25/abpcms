import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import MainContent from "@/components/main-content"

function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-white">  
        <AppSidebar /> 

        <SidebarInset className="bg-white">
          <main className="flex h-full flex-1 overflow-hidden">
            <MainContent />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default App