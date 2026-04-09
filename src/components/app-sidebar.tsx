import * as React from "react"
import {
  BookOpen,
  ChevronDown,
  ChevronsUpDown,
  Ellipsis,
  Folder,
  Grid2x2Plus,
  Library,
  Settings2,
  SquareTerminal,
  Box,
  FileText,
  SlidersHorizontal,
  User,
  LogOut,
  Building2,
  RefreshCcw,
} from "lucide-react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const platformItems = [
  {
    title: "Playground",
    icon: SquareTerminal,
    defaultOpen: true,
    children: [
      { title: "History", href: "#" },
      { title: "Starred", href: "#" },
      { title: "Settings", href: "#" },
    ],
  },
  {
    title: "Models",
    icon: Grid2x2Plus,
    defaultOpen: false,
    children: [
      { title: "All Models", href: "#" },
      { title: "Active Models", href: "#" },
      { title: "Archived Models", href: "#" },
    ],
  },
  {
    title: "Documentation",
    icon: BookOpen,
    defaultOpen: false,
    children: [
      { title: "Articles", href: "#" },
      { title: "Guides", href: "#" },
      { title: "API Docs", href: "#" },
    ],
  },
  {
    title: "Settings",
    icon: Settings2,
    defaultOpen: false,
    children: [
      { title: "General", href: "#" },
      { title: "Users", href: "#" },
      { title: "Permissions", href: "#" },
    ],
  },
]

const baseProjectItems = [
  { title: "Design Engineering", icon: Folder, href: "#" },
  { title: "Sales & Marketing", icon: Library, href: "#" },
  { title: "Travel", icon: BookOpen, href: "#" },
]

const extraProjectItems = [
  { title: "Archive", icon: FileText, href: "#" },
  { title: "Filters", icon: SlidersHorizontal, href: "#" },
]

function SidebarDropdownItem({
  title,
  icon: Icon,
  defaultOpen = false,
  childrenItems,
}: {
  title: string
  icon: React.ElementType
  defaultOpen?: boolean
  childrenItems: { title: string; href: string }[]
}) {
  return (
    <Collapsible defaultOpen={defaultOpen} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="h-11 rounded-lg px-2 text-[16px] font-medium text-[#18181b] hover:bg-black/5">
            <Icon className="h-4.5 w-4.5 shrink-0 text-[#18181b]" />
            <span>{title}</span>
            <SidebarMenuAction className="right-2 top-5 -translate-y-1/2 text-[#18181b] hover:bg-transparent">
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
            </SidebarMenuAction>
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub className="ml-[14px] mt-1 border-l border-[#d4d4d8] pl-4">
            {childrenItems.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  asChild
                  className="h-10 rounded-md px-2 text-[16px] text-[#27272a] hover:bg-transparent hover:text-[#111111]"
                >
                  <a href={subItem.href}>
                    <span>{subItem.title}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

export function AppSidebar() {
  const [showMoreProjects, setShowMoreProjects] = React.useState(false)

  const visibleProjectItems = showMoreProjects
    ? [...baseProjectItems, ...extraProjectItems]
    : baseProjectItems

  return (
    <Sidebar
      collapsible="icon"
      className="border-r bg-[#f5f5f5] text-[#111827]"
      style={
        {
          "--sidebar-width": "16rem",
          "--sidebar-width-icon": "3.5rem",
        } as React.CSSProperties
      }
    >
      <SidebarHeader className="border-b-0 px-3 pt-5 pb-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#111111] text-white shadow-sm">
              <Box className="h-5 w-5" />
            </div>

            <div className="min-w-0 group-data-[collapsible=icon]:hidden">
              <p className="truncate text-[18px] font-semibold leading-none text-[#111111]">
                Anandabazar
              </p>
              <p className="mt-1 text-[14px] text-[#52525b]">
                CMC Enterprise V 0.2
              </p>
            </div>
          </div>

          <div className="group-data-[collapsible=icon]:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-md text-[#52525b] transition hover:bg-black/5"
                >
                  <ChevronsUpDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" sideOffset={8} className="w-56 rounded-xl">
                <DropdownMenuLabel className="text-xs font-medium text-zinc-500">
                  Workspace
                </DropdownMenuLabel>

                <DropdownMenuItem>
                  <Building2 className="mr-2 h-4 w-4" />
                  <span>Anandabazar</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Settings2 className="mr-2 h-4 w-4" />
                  <span>Workspace Settings</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  <span>Switch Workspace</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup className="pt-2">
          <SidebarGroupLabel className="px-2 pb-3 text-[15px] font-medium text-[#71717a] group-data-[collapsible=icon]:hidden">
            Platform
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {platformItems.map((item) => (
                <SidebarDropdownItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  defaultOpen={item.defaultOpen}
                  childrenItems={item.children}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="pt-8">
          <SidebarGroupLabel className="px-2 pb-3 text-[15px] font-medium text-[#71717a] group-data-[collapsible=icon]:hidden">
            Projects
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {visibleProjectItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="h-11 rounded-lg px-2 text-[16px] font-medium text-[#18181b] hover:bg-black/5"
                  >
                    <a href={item.href} className="flex items-center">
                      <item.icon className="h-4.5 w-4.5 shrink-0 text-[#18181b]" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <SidebarMenuButton
                  type="button"
                  onClick={() => setShowMoreProjects((prev) => !prev)}
                  className="h-11 rounded-lg px-2 text-[16px] font-medium text-[#18181b] hover:bg-black/5"
                >
                  <Ellipsis className="h-4.5 w-4.5 shrink-0 text-[#18181b]" />
                  <span>{showMoreProjects ? "Less" : "More"}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-2 pb-4 pt-3">
        <div className="flex items-center justify-between rounded-xl px-2 py-2 transition hover:bg-black/5">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="avatar"
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />

            <div className="min-w-0 group-data-[collapsible=icon]:hidden">
              <p className="truncate text-[18px] font-semibold leading-none text-[#111111]">
                shadcn
              </p>
              <p className="mt-1 truncate text-[14px] text-[#52525b]">
                m@example.com
              </p>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#52525b] transition hover:bg-black/5 group-data-[collapsible=icon]:hidden"
          >
            <ChevronsUpDown className="h-4 w-4" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}