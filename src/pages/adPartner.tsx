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
import { MoreVertical, Pencil, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

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

    const [openNewRecords, setOpenNewRecords] = useState(false);
    const [openEditRecords, setOpenEditRecords] = useState(false);
    const [openDeleteRecords, setOpenDeleteRecords] = useState(false);
    const [active, setActive] = useState(true);

    const [openMenuIndex, setOpenMenuIndex] = useState(null);

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
                       <div className="flex flex-col gap-3 border-b pb-4 sm:flex-row sm:items-center sm:justify-between">  
                            {/* Search Section */}
                            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto sm:flex-1">
                                <div className="flex border rounded-md w-[300px] sm:w-[330px]">
                                    <Input
                                        placeholder="Search and filter by Page URL, Name"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="w-[260px] sm:w-[270px] border-0 h-9"
                                    />
                                    <Button variant="secondary" className="h-9 ml-2 shrink-0">
                                        Search
                                    </Button>
                                </div>
                            </div>
                            {/* Action Button */}
                            <Button
                                onClick={() => setOpenNewRecords(true)} 
                                className="gap-2 rounded-sm h-9 bg-[#F1F5F9] text-black w-full sm:w-auto sm:shrink-0">
                                + New Records
                            </Button>
                            {/* Modal + new Records */}
                            <Dialog open={openNewRecords} onOpenChange={setOpenNewRecords}>
                            <DialogContent className="sm:max-w-[470px]">
                            <DialogHeader>
                                <DialogTitle>Add New Records</DialogTitle>
                            </DialogHeader>

                            <div className="space-y-4 mt-2">
                            {/* Input */}
                            <div>
                            <label className="text-sm font-medium">
                                Ad Partner Name
                            </label>
                            <Input placeholder="Ad Partner Name" className="mt-1" />
                            </div>

                            {/* Status */}
                            <div>
                            <label className="text-sm font-medium">Status</label>
                            <div className="flex items-center gap-2 mt-2">
                            <Switch
                                checked={active}
                                onCheckedChange={setActive}
                                className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-300"
                            />
                            <span className="text-sm font-medium">
                                {active ? "Active" : "Inactive"}
                            </span>
                            </div>
                            </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-2 pt-4">
                                <Button
                                    variant="outline"
                                    onClick={() => setOpenNewRecords(false)}
                                >
                                    Reset
                                </Button>
                                <Button className="bg-black text-white">
                                    Save
                                </Button>
                                </div>
                            </div>
                            </DialogContent>
                            </Dialog>
                            {/*  */}
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
                                    <Button 
                                        onClick={() => setOpenEditRecords(true) }
                                        variant="outline" size="sm" className="gap-1">
                                        <Pencil size={14} /> Edit
                                    </Button>
                                    {/* Modal + Edit Records */}
                                    <Dialog open={openEditRecords} onOpenChange={setOpenEditRecords}>
                                        <DialogContent className="sm:max-w-[420px]"> 
                                        <DialogHeader>
                                            <DialogTitle>Edit Records</DialogTitle>
                                        </DialogHeader>

                                        <div className="space-y-4 mt-2">
                                        {/* Input */}
                                        <div>
                                        <label className="text-sm font-medium">
                                            Ad Partner Name
                                        </label>
                                        <Input defaultValue='Video ad Partner' className="mt-1" />
                                        </div>

                                        {/* Status */}
                                        <div>
                                        <label className="text-sm font-medium">Status</label>
                                        <div className="flex items-center gap-2 mt-2">
                                        <Switch
                                            checked={active}
                                            onCheckedChange={setActive}
                                            className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-300"
                                        />
                                        <span className="text-sm font-medium">
                                            {active ? "Active" : "Inactive"}
                                        </span>
                                        </div>
                                        </div>

                                            {/* Buttons */}
                                            <div className="flex justify-end gap-2 pt-4">
                                            <Button
                                                variant="outline"
                                                onClick={() => setOpenEditRecords(false)}
                                            >
                                                Reset
                                            </Button>
                                            <Button className="bg-black text-white">
                                                Save
                                            </Button>
                                            </div>
                                        </div>
                                        </DialogContent>
                                    </Dialog>
                                    {/*  */}
                                    <Button 
                                        className='cursor-pointer'
                                         onClick={() =>
                                            setOpenMenuIndex(openMenuIndex === i ? null : i)
                                        }
                                        variant="ghost" size="icon">
                                        <MoreVertical size={16} />
                                    </Button>

                                        {/* openMenuIndex */}
                                        {openMenuIndex === i && (
                                            <div className="absolute right-0 mt-8 cursor-pointer w-32 bg-white border rounded-md shadow-lg z-50 text-left">
                                            <div
                                                onClick={() => {
                                                setOpenEditRecords(true);
                                                setOpenMenuIndex(null);
                                                }}
                                                className="flex px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                                <Pencil size={14} /> 
                                                <span> Edit</span>
                                            </div>
                                            <div 
                                                onClick={() =>
                                                    setOpenDeleteRecords(true)
                                                }
                                                className="flex px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer border-t">
                                                <Trash size={14} /> 
                                                <span> Delete</span>
                                            </div>
                                            {/* Modal + Delete Records */}
                                            <Dialog open={openDeleteRecords} onOpenChange={setOpenDeleteRecords}>
                                                <DialogOverlay className="bg-black/40" />

                                                <DialogContent className="sm:max-w-[480px] rounded-xl p-8 [&>button]:hidden">
                                                    <DialogHeader className="space-y-2">
                                                    <DialogTitle className="text-lg font-semibold text-gray-900">
                                                        Are you sure you want to delete this?
                                                    </DialogTitle>

                                                    <p className="text-sm text-gray-500">
                                                        You won't be able to revert this!
                                                    </p>
                                                    </DialogHeader>

                                                    <div className="flex justify-end gap-3 mt-6">
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => setOpenDeleteRecords(false)}
                                                    >
                                                        Cancel
                                                    </Button>

                                                    <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                                                        Yes, Delete
                                                    </Button>
                                                    </div>
                                                </DialogContent> 
                                            </Dialog>
                                            {/*  */}
                                            </div>
                                        )}
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