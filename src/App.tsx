import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from "./pages/login"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import MainContent from "@/components/main-content"

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
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App