
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronRight, MoreVertical, Pencil, Trash } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"


export default const curriculamAccordion = () => {
  const [search, setSearch] = useState("")
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)

  // ✅ single source of truth
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [modalType, setModalType] = useState<null | "add" | "edit" | "delete">(null)

  return (
    <SidebarProvider>
        <div className="flex h-screen w-full bg-white overflow-hidden">
            <AppSidebar />

            <SidebarInset>
                <main className="h-full">



                    <h1>Curriculam</h1>




                    
                </main>
            </SidebarInset>
        </div>
    </SidebarProvider>
  )
}