import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ChevronRight,
  History,
  Lock,
  MoreVertical,
  Pencil,
  Plus,
} from "lucide-react"

type SorterItem = { 
  id: number
  sorterName: string   
  displayName: string
  status: "active" | "inactive"
  locked?: boolean
  lastModified: string 
}

const allSorterData: SorterItem[] = [
  {
    id: 208,
    sorterName: "Purulia Birbhum Banku...",
    displayName: "যুদ্ধ কেন পথে",
    status: "active",
    lastModified: "12:34 , 25-12-2022",
  },
  {
    id: 390,
    sorterName: "Max Sorter Name displ...",
    displayName: "সম্পাদকের পছন্দ...",
    status: "active",
    locked: true,
    lastModified: "15:34 , 25-12-2022",
  },
  {
    id: 108,
    sorterName: "ABP My Kolkata Section",
    displayName: "আইপিএল ২০২৩ ...",
    status: "inactive",
    lastModified: "16:30 , 25-12-2022",
  },
  {
    id: 451,
    sorterName: "Breaking News Priority",
    displayName: "ব্রেকিং নিউজ",
    status: "active",
    lastModified: "11:00 , 26-12-2022",
  },
  {
    id: 512,
    sorterName: "Featured Homepage",
    displayName: "ফিচার স্টোরি",
    status: "inactive",
    lastModified: "10:15 , 27-12-2022",
  },
  {
    id: 208,
    sorterName: "Purulia Birbhum Banku...",
    displayName: "যুদ্ধ কেন পথে",
    status: "active",
    lastModified: "12:34 , 25-12-2022",
  },
  {
    id: 390,
    sorterName: "Max Sorter Name displ...",
    displayName: "সম্পাদকের পছন্দ...",
    status: "active",
    locked: true,
    lastModified: "15:34 , 25-12-2022",
  },
  {
    id: 108,
    sorterName: "ABP My Kolkata Section",
    displayName: "আইপিএল ২০২৩ ...",
    status: "inactive",
    lastModified: "16:30 , 25-12-2022",
  },
  {
    id: 451,
    sorterName: "Breaking News Priority",
    displayName: "ব্রেকিং নিউজ",
    status: "active",
    lastModified: "11:00 , 26-12-2022",
  },
  {
    id: 512,
    sorterName: "Featured Homepage",
    displayName: "ফিচার স্টোরি",
    status: "inactive",
    lastModified: "10:15 , 27-12-2022",
  },
]

const collectionData: SorterItem[] = [
  {
    id: 701,
    sorterName: "Collection One",
    displayName: "সংগ্রহ ১",
    status: "active",
    lastModified: "09:15 , 21-12-2022",
  },
  {
    id: 702,
    sorterName: "Collection Two",
    displayName: "সংগ্রহ ২",
    status: "inactive",
    lastModified: "10:45 , 22-12-2022",
  },
  {
    id: 703,
    sorterName: "Premium Collection",
    displayName: "প্রিমিয়াম সংগ্রহ",
    status: "active",
    locked: true,
    lastModified: "18:20 , 23-12-2022",
  },
  {
    id: 704,
    sorterName: "Collection One",
    displayName: "সংগ্রহ ১",
    status: "active",
    lastModified: "09:15 , 21-12-2022",
  },
  {
    id: 705,
    sorterName: "Collection Two",
    displayName: "সংগ্রহ ২",
    status: "inactive",
    lastModified: "10:45 , 22-12-2022",
  },
  {
    id: 706,
    sorterName: "Premium Collection",
    displayName: "প্রিমিয়াম সংগ্রহ",
    status: "active",
    locked: true,
    lastModified: "18:20 , 23-12-2022",
  },
  {
    id: 707,
    sorterName: "Collection One",
    displayName: "সংগ্রহ ১",
    status: "active",
    lastModified: "09:15 , 21-12-2022",
  },
  {
    id: 708,
    sorterName: "Collection Two",
    displayName: "সংগ্রহ ২",
    status: "inactive",
    lastModified: "10:45 , 22-12-2022",
  },
  {
    id: 709,
    sorterName: "Premium Collection",
    displayName: "প্রিমিয়াম সংগ্রহ",
    status: "active",
    locked: true,
    lastModified: "18:20 , 23-12-2022",
  },
  {
    id: 710,
    sorterName: "Collection One",
    displayName: "সংগ্রহ ১",
    status: "active",
    lastModified: "09:15 , 21-12-2022",
  },
  {
    id: 711,
    sorterName: "Collection Two",
    displayName: "সংগ্রহ ২",
    status: "inactive",
    lastModified: "10:45 , 22-12-2022",
  },
  {
    id: 712,
    sorterName: "Premium Collection",
    displayName: "প্রিমিয়াম সংগ্রহ",
    status: "active",
    locked: true,
    lastModified: "18:20 , 23-12-2022",
  },
]

function StatusBadge({
  status,
  locked,
}: {
  status: "active" | "inactive"
  locked?: boolean
}) {
  return (
    <div className="flex items-center gap-2">
      {status === "active" ? (
        <span className="inline-flex h-7 items-center rounded-full border border-emerald-500 px-3 text-xs font-medium text-emerald-600">
          Active
        </span>
      ) : (
        <span className="inline-flex h-7 items-center rounded-full border border-zinc-300 px-3 text-xs font-medium text-zinc-500">
          Inactive
        </span>
      )}

      {locked ? (
        <span className="inline-flex h-7 items-center rounded-full border border-red-500 px-3 text-xs font-medium text-red-500">
          Lock
        </span>
      ) : null}
    </div>
  )
}

function SorterTable({ data }: { data: SorterItem[] }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <div className="min-h-0 flex-1 overflow-y-auto">
        <Table>
          <TableHeader className="sticky top-0 z-10 bg-white">
            <TableRow className="hover:bg-white">
              <TableHead className="h-14 w-[80px] px-4 text-sm font-semibold text-zinc-900">
                ID
              </TableHead>
              <TableHead className="h-14 w-[260px] px-4 text-sm font-semibold text-zinc-900">
                Sorter Name
              </TableHead>
              <TableHead className="h-14 w-[260px] px-4 text-sm font-semibold text-zinc-900">
                Display Name
              </TableHead>
              <TableHead className="h-14 w-[170px] px-4 text-sm font-semibold text-zinc-900">
                Status
              </TableHead>
              <TableHead className="h-14 w-[220px] px-4 text-sm font-semibold text-zinc-900">
                Last Modified
              </TableHead>
              <TableHead className="h-14 w-[220px] px-4 text-sm font-semibold text-zinc-900">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item, index) => (
              <TableRow key={`${item.id}-${index}`}>
                <TableCell className="w-[80px] px-4 py-4 text-sm text-zinc-800">
                  {item.id}
                </TableCell>

                <TableCell className="w-[260px] px-4 py-4 text-sm text-zinc-800">
                  <div className="truncate">{item.sorterName}</div>
                </TableCell>

                <TableCell className="w-[260px] px-4 py-4 text-sm text-zinc-800">
                  <div className="truncate">{item.displayName}</div>
                </TableCell>

                <TableCell className="w-[170px] px-4 py-4">
                  <StatusBadge status={item.status} locked={item.locked} />
                </TableCell>

                <TableCell className="w-[220px] px-4 py-4 text-sm text-zinc-800">
                  {item.lastModified}
                </TableCell>

                <TableCell className="w-[220px] px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => alert(`Edit Article: ${item.id}`)}
                      className="h-10 cursor-pointer rounded-xl border-zinc-300 px-4 shadow-sm hover:bg-zinc-50"
                    >
                      <Pencil className="mr-2 h-4 w-4 shrink-0" />
                      <span>Edit Article</span>
                    </Button>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-10 w-10 cursor-pointer rounded-md text-zinc-700 hover:bg-zinc-100"
                        >
                          <MoreVertical className="h-5 w-5 shrink-0" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="end"
                        sideOffset={8}
                        className="w-44 rounded-xl"
                      >
                        <DropdownMenuItem className="cursor-pointer">
                          <Pencil className="mr-2 h-4 w-4 shrink-0" />
                          <span>Edit</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="cursor-pointer">
                          <Lock className="mr-2 h-4 w-4 shrink-0" />
                          <span>Release Lock</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="cursor-pointer">
                          <History className="mr-2 h-4 w-4 shrink-0" />
                          <span>Activity Log</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="shrink-0 border-t border-zinc-200 bg-white px-6 py-4">
        <Pagination className="justify-center">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default function MainContent() {
  const [activeTab, setActiveTab] = useState("all-sorter")
  const currentData = activeTab === "all-sorter" ? allSorterData : collectionData

  return (
    <div className="flex h-full flex-1 flex-col overflow-hidden bg-white">
      <div className="shrink-0 border-b bg-white">
        <div className="flex h-14 items-center px-6">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="cursor-pointer" />
            <div className="h-5 w-px bg-zinc-200" />

            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-500">Components</span>
              <ChevronRight className="h-4 w-4 text-zinc-400" />
              <span className="text-sm font-semibold text-zinc-900">
                Sorter Manager
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="shrink-0 bg-white px-6 py-5">
        <div className="flex flex-col gap-4 border-b pb-5 xl:flex-row xl:items-center xl:justify-between">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-fit"
          >
            <TabsList className="h-9 overflow-hidden rounded-[10px] border border-[#d4d4d8] bg-white p-0">
              <TabsTrigger
                value="all-sorter"
                className="cursor-pointer h-9 min-w-[94px] rounded-none border-0 bg-transparent px-4 text-[14px] font-semibold text-[#18181b] shadow-none data-[state=active]:bg-[#e5e7eb] data-[state=active]:text-[#18181b] data-[state=active]:shadow-none"
              >
                All Sorter
              </TabsTrigger>

              <TabsTrigger
                value="collection"
                className="cursor-pointer h-9 min-w-[98px] rounded-none border-0 border-l border-[#d4d4d8] bg-transparent px-4 text-[14px] font-semibold text-[#18181b] shadow-none data-[state=active]:bg-[#e5e7eb] data-[state=active]:text-[#18181b] data-[state=active]:shadow-none"
              >
                Collection
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-4">
            <div className="flex h-10 items-center overflow-hidden rounded-[10px] border border-[#d4d4d8] bg-white">
              <Input
                placeholder="Search and filter by Sorter ID, Name"
                className="h-10 w-[273px] border-0 bg-transparent px-4 text-[14px] text-[#64748b] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />

              <Button
                type="button"
                className="h-10 rounded-none border-l border-[#d4d4d8] bg-[#f4f4f5] px-5 text-[14px] font-semibold text-[#18181b] shadow-none hover:bg-[#e4e4e7]"
              >
                Search
              </Button>
            </div>

            <Button
            type="button"
            onClick={() => alert("Create New")}
            className="h-10 cursor-pointer rounded-[10px] bg-[#f4f4f5] px-5 text-[14px] font-semibold text-[#18181b] shadow-none hover:bg-[#e4e4e7] active:scale-95"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create New
          </Button>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-6 pb-6">
        <SorterTable data={currentData} />
      </div>
    </div>
  )
}