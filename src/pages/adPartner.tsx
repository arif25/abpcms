import { AppSidebar } from '@/components/layout/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ChevronRight } from 'lucide-react'
import React from 'react'




import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical, Pencil } from "lucide-react";

const data = [
  {
    name: "Video ad Partner",
    status: "Active",
    updated: "2 days ago",
    by: "Sohan",
  },
  {
    name: "Pubmatic",
    status: "Inactive",
    updated: "2 days ago",
    by: "Ashis",
  },
  {
    name: "Google",
    status: "Active",
    updated: "2 days ago",
    by: "Ratul",
  },
  {
    name: "Pubmatic",
    status: "Active",
    updated: "2 days ago",
    by: "Debojyoti",
  },
  {
    name: "Video ad Partner",
    status: "Active",
    updated: "2 days ago",
    by: "Sohan",
  },
  {
    name: "Pubmatic",
    status: "Inactive",
    updated: "2 days ago",
    by: "Ashis",
  },
  {
    name: "Google",
    status: "Active",
    updated: "2 days ago",
    by: "Ratul",
  },
  {
    name: "Pubmatic",
    status: "Active",
    updated: "2 days ago",
    by: "Debojyoti",
  },
  {
    name: "Video ad Partner",
    status: "Active",
    updated: "2 days ago",
    by: "Sohan",
  },
  {
    name: "Pubmatic",
    status: "Inactive",
    updated: "2 days ago",
    by: "Ashis",
  },
  {
    name: "Google",
    status: "Active",
    updated: "2 days ago",
    by: "Ratul",
  },
  {
    name: "Pubmatic",
    status: "Active",
    updated: "2 days ago",
    by: "Debojyoti",
  },
];


const adPartner = () => {
    const [search, setSearch] = useState("");
  return (
    <SidebarProvider>
        <div className="flex h-screen w-full overflow-hidden bg-white">
            <AppSidebar />
            <SidebarInset className="bg-white">
                <main className=" h-full overflow-hidden">
                    
                    <div className="border-b bg-white ">
                        <div className="flex h-14 items-center px-6 ">
                            <div className="flex items-center gap-3">
                                <SidebarTrigger className="cursor-pointer" />
                                <div className="h-5 w-px bg-zinc-200" />

                                <div className="flex items-center gap-2">
                                <span className="text-sm text-zinc-500">Components</span>
                                <ChevronRight className="h-4 w-4 text-zinc-400" />
                                <span className="text-sm font-semibold text-zinc-900">
                                    Ad Partner
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className="p-6 space-y-4 bg-white">
                        {/* Top Bar */}
                        <div className="flex justify-between items-center border-b pb-4">
                            <div className="flex gap-2 border rounded-sm">
                                <Input
                                    placeholder="Search and filter by Page URL, Name"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-[260px] border-0 h-9"
                                />
                                <Button variant="secondary" className='h-9'>Search</Button>
                            </div>

                            <Button className="gap-2 rounded-sm h-9 bg-[#F1F5F9] text-black w-[144px]">
                            + New Records
                            </Button>
                        </div>

                        {/* Table */}
                        <div className=" overflow-hidden">
                            <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Last Update</TableHead>
                                <TableHead>Updated By</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {data.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell>{item.name}</TableCell>

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

                                    <TableCell className="text-right flex justify-end gap-2">
                                    <Button variant="outline" size="sm" className="gap-1">
                                        <Pencil size={14} /> Edit
                                    </Button>

                                    <Button variant="ghost" size="icon">
                                        <MoreVertical size={16} />
                                    </Button>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            </Table>
                        </div>

                        {/* Pagination */}
                        <div className="border-t pt-4 flex justify-center items-center gap-2">
                            <Button variant="ghost" size="sm">
                            Previous
                            </Button>

                            <Button variant="outline" size="sm">
                            1
                            </Button>
                            <Button variant="ghost" size="sm">
                            2
                            </Button>
                            <Button variant="ghost" size="sm">
                            3
                            </Button>

                            <Button variant="ghost" size="sm">
                            Next
                            </Button>
                        </div>
                    </div>

                </main>
            </SidebarInset>
        </div>
    </SidebarProvider>
  )
}

export default adPartner