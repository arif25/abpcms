import { AppSidebar } from '@/components/layout/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ChevronRight, MoreVertical, Pencil, Trash } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"

import AddPartnerModal from '@/components/ad-partner/AddPartnerModal'
import EditPartnerModal from '@/components/ad-partner/EditPartnerModal'
import DeletePartnerModal from '@/components/ad-partner/DeletePartnerModal'

const data = [
  { name: "রাতের অশান্তির পর সকালেও থমথমে জগদ্দল, সংঘর্ষের ঘটনায় গ্রেফতার তৃণমূলের কাউন্সিলর-সহ মোট চার জন", status: "Active", updated: "2 days ago", by: "Sohan" },
  { name: "ইরানের ক্ষেপণাস্ত্রের মোকাবিলা করতে সংযুক্ত আরব আমিরশাহিকে ‘আয়রন ডোম’ দিচ্ছে ইজ়রায়েল! দাবি রিপোর্টে", status: "Inactive", updated: "2 days ago", by: "Ashis" },
  { name: "সেনার গোপন তথ্য ফাঁস করে বেটিংয়ে কোটিপতি! বাহিনীতে জুয়ার আসক্তি বাড়াতে ‘সাট্টা বাজার’ খুলেছেন খোদ ট্রাম্প?", status: "Active", updated: "2 days ago", by: "Ratul" },
  { name: "৩০ মিনিটে দিতে না পারলে বিনামূল্যে! ৪-৬-৫-৮ নিয়মে বাজিমাত করে ভারতে বন্ধ হতে হতে বাঁচে", status: "Active", updated: "2 days ago", by: "Sohan" },
  { name: "‘একজন শিশুকামী, ধর্ষক ও বিশ্বাসঘাতক’! সাংবাদিকের মুখে বন্দুকবাজের বিবৃতি শুনে ক্রুদ্ধ ট্রাম্প", status: "Inactive", updated: "2 days ago", by: "Ashis" },
  { name: "গণতান্ত্রিক দেশে ভোট না দেওয়াও তো অধিকার! এই অভ্যাস কি সমর্থন করেন ইন্দ্রাণী-শিলাজিৎ-অনিরুদ্ধেরা", status: "Active", updated: "2 days ago", by: "Ratul" },
]

const AdPartner = () => {
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

            {/* Header */}
            <div className="border-b h-14 flex items-center px-6">
              <SidebarTrigger />
              <div className="mx-3 w-px h-5 bg-zinc-200" />
              <span className="text-sm text-zinc-500">Components</span>
              <ChevronRight className="mx-2 h-4 w-4 text-zinc-400" />
              <span className="text-sm font-semibold">Ad Partner</span>
            </div>

            <div className="p-6 space-y-4">

              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between gap-3 border-b pb-4">
                <div className="flex border rounded-md w-[320px]">
                  <Input
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-0"
                  />
                  <Button variant="secondary">Search</Button>
                </div>

                <Button
                  onClick={() => setModalType("add")}
                  className="bg-[#F1F5F9] text-black"> 
                  + New Records
                </Button>
              </div>

              {/* Table */}
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead>Updated By</TableHead>
                    <TableHead />
                  </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((item, i) => (
                    <TableRow key={i}>

                    <TableCell 
                         className="whitespace-normal align-top w-[300px] md:w-[450px] min-w-[300px]">
                        <div
                            className="overflow-hidden"
                            title='৩০ মিনিটে দিতে না পারলে বিনামূল্যে! ৪-৬-৫-৮ নিয়মে বাজিমাত করে ভারতে বন্ধ হতে হতে বাঁচে ৩০ মিনিটে দিতে না পারলে বিনামূল্যে! ৪-৬-৫-৮ নিয়মে বাজিমাত করে ভারতে বন্ধ হতে হতে বাঁচে'
                            style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            wordBreak: "break-word",
                            }}
                        >
                            ৩০ মিনিটে দিতে না পারলে বিনামূল্যে! ৪-৬-৫-৮ নিয়মে বাজিমাত করে ভারতে বন্ধ হতে হতে বাঁচে
                            ৩০ মিনিটে দিতে না পারলে বিনামূল্যে! ৪-৬-৫-৮ নিয়মে বাজিমাত করে ভারতে বন্ধ হতে হতে বাঁচে
                        </div>
                        </TableCell>


                      <TableCell>
                        <Badge
                          className={
                            "bg-white px-2.5 py-0.5 rounded-full " +
                            (item.status === "Active"
                              ? "text-green-600 border-green-400"
                              : "text-gray-500 border-gray-300")
                          }
                        >
                          {item.status}
                        </Badge>
                      </TableCell>

                      <TableCell>{item.updated}</TableCell>
                      <TableCell>{item.by}</TableCell>

                      <TableCell className="text-right relative">
                        <div className="flex justify-end gap-2">

                          {/* Edit Button */}
                          <Button
                            className='cursor-pointer'
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setSelectedItem(item)
                              setModalType("edit")
                            }}
                          >
                            <Pencil size={14} /> Edit
                          </Button>

                          {/* Menu Button */}
                          <Button
                            className='cursor-pointer'
                            size="icon"
                            variant="ghost"
                            onClick={() =>
                              setOpenMenuIndex(openMenuIndex === i ? null : i)
                            }
                          >
                            <MoreVertical size={16} />
                          </Button>
                        </div>

                        {/* Dropdown */}
                        {openMenuIndex === i && (
                          <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-md z-50">

                            <div
                              onClick={() => {
                                setSelectedItem(item)
                                setModalType("edit")
                                setOpenMenuIndex(null)
                              }}
                              className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                            >
                              <Pencil size={14} /> Edit
                            </div>

                            <div
                              onClick={() => {
                                setSelectedItem(item)
                                setModalType("delete")
                                setOpenMenuIndex(null)
                              }}
                              className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 border-t cursor-pointer"
                            >
                              <Trash size={14} /> Delete

                            <Button
                                className='cursor-pointer'
                                size="icon"
                                variant="ghost"
                                onClick={() => {
                                    setSelectedItem(item)
                                    setModalType("delete")
                                }}
                                >
                                <MoreVertical size={16} />
                            </Button>

                            </div>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="border-t pt-4 flex justify-center gap-2">
                <Button variant="ghost" size="sm">Previous</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="ghost" size="sm">2</Button>
                <Button variant="ghost" size="sm">3</Button>
                <Button variant="ghost" size="sm">Next</Button>
              </div>

            </div>

            {/* ✅ GLOBAL MODALS */}
            <AddPartnerModal
              open={modalType === "add"}
              onClose={() => setModalType(null)}
            />

            <EditPartnerModal
              open={modalType === "edit"}
              data={selectedItem}
              onClose={() => setModalType(null)}
            />

            <DeletePartnerModal
              open={modalType === "delete"}
              data={selectedItem}
              onClose={() => setModalType(null)}
            />

          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default AdPartner