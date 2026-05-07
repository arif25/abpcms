import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from "./pages/sample"

import CMSlogin from "./pages/CMSlogin"
import AdPartner from "./pages/adPartner"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import MainContent from "@/components/main-content"

import RainbowAnimation from "./pages/rainbowAnimation"
import TableWithAccordion from "./pages/TableWithAccordion"



function Layout() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CMSlogin />} />  
        <Route path="/adpartner" element={<AdPartner />} />
        <Route path="/tablewithaccordion" element={<TableWithAccordion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App