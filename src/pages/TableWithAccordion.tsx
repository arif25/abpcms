"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, PlayCircle, FileText, HelpCircle, Clock, Play } from "lucide-react"

import { AppSidebar } from '@/components/layout/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ChevronRight, MoreVertical, Pencil, Trash } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const curriculum = [
  {
    title: "Getting Started",
    subtitle: "Introduction and setup",
    completed: true,
    progress: 100,
    time: 35,
    lessons: [
      { title: "Welcome to the Course", type: "video", duration: "5:30", done: true },
      { title: "Course Overview & Goals", type: "reading", duration: "8 min", done: true },
      { title: "Setting Up Your Environment", type: "video", duration: "12:45", done: true },
      { title: "Setting Up Your Environment", type: "video", duration: "12:45", done: true },
      { title: "Knowledge Check", type: "quiz", duration: "10 min", done: true },
      { title: "Welcome to the Course", type: "video", duration: "5:30", done: true },
    ]
  },
  {
    title: "Core Fundamentals",
    subtitle: "Essential concepts and patterns",
    completed: false,
    progress: 40,
    time: 95,
    lessons: [
      { title: "Understanding the Basics", type: "video", duration: "18:20", done: true },
      { title: "Deep Dive: Key Concepts", type: "reading", duration: "15 min", done: true },
      { title: "Hands-on Practice", type: "exercise", duration: "25 min", done: false, active: true },
      { title: "Common Patterns", type: "video", duration: "22:10", done: false },
      { title: "Module Assessment", type: "quiz", duration: "15 min", done: false }
    ]
  },
  
  {
    title: "Getting Started",
    subtitle: "Introduction and setup",
    completed: true,
    progress: 100,
    time: 35,
    lessons: [
      { title: "Welcome to the Course", type: "video", duration: "5:30", done: true },
      { title: "Course Overview & Goals", type: "reading", duration: "8 min", done: true },
      { title: "Setting Up Your Environment", type: "video", duration: "12:45", done: true },
      { title: "Setting Up Your Environment", type: "video", duration: "12:45", done: true },
      { title: "Knowledge Check", type: "quiz", duration: "10 min", done: true },
      { title: "Welcome to the Course", type: "video", duration: "5:30", done: true },
    ]
  },
  {
    title: "Core Fundamentals",
    subtitle: "Essential concepts and patterns",
    completed: false,
    progress: 40,
    time: 95,
    lessons: [
      { title: "Understanding the Basics", type: "video", duration: "18:20", done: true },
      { title: "Deep Dive: Key Concepts", type: "reading", duration: "15 min", done: true },
      { title: "Hands-on Practice", type: "exercise", duration: "25 min", done: false, active: true },
      { title: "Common Patterns", type: "video", duration: "22:10", done: false },
      { title: "Module Assessment", type: "quiz", duration: "15 min", done: false }
    ]
  }
]

const getIcon = (type) => {
  switch (type) {
    case "video":
      return <PlayCircle className="w-4 h-4" />
    case "reading":
      return <FileText className="w-4 h-4" />
    case "quiz":
      return <HelpCircle className="w-4 h-4" />
    default:
      return <PlayCircle className="w-4 h-4" />
  }
}

export default function CourseAccordionTable() {
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

                <div className="w-full  overflow-y-auto">
                  <Card className="border-0 shadow-none ring-0">
                    <CardContent className="p-6 space-y-6 border-0 shadow-none">
                      <div className="flex justify-between items-center">
                        <div className="ml-6">
                          <h2 className="text-xl font-semibold">Course Curriculum</h2>
                          <p className="text-sm text-muted-foreground">4 modules · 18 lessons</p>
                        </div>
                        <div className="w-69">    

                        <div className="flex items-center justify-between w-full gap-4">      
                          {/* Left Text */}
                          <div className="text-sm">
                            <p className="font-medium">33% complete</p>
                            <p className="text-muted-foreground text-xs">
                              6 of 18 lessons
                            </p>
                          </div>
                          {/* Right Progress Bar */}
                          <div className="w-40">
                            <Progress value={33} />
                          </div>              
                        </div>
                        </div>
                      </div>

                      <div className="flex justify-between px-6 text-sm font-medium text-muted-foreground ">
                        <span>Lesson</span>
                        <div className="flex w-[500px] pr-20 items-center gap-36 text-sm text-gray-500">
                          <span className="text-center">Type</span>
                          <span className="text-right">Duration</span>
                        </div>
                      </div>

                      <Accordion type="multiple" className="w-full" defaultValue={["item-0"]}>
                        {curriculum.map((module, i) => (
                          <AccordionItem key={i} value={`item-${i}`} className="px-4">
                            <AccordionTrigger className="py-4 hover:no-underline [&>svg]:order-first [&>svg]:mr-1 [&>svg]:self-start [&>svg]:mt-6">
                              <div className="flex justify-between w-full items-center">
                                <div>
                                     <div className="flex items-start justify-between p-4 rounded-xl hover:bg-muted/50 transition">      
                                      {/* Left content */}
                                      <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                          <h3 className="font-semibold text-sm">{module.title}</h3>
                                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-2xl px-1">
                                            {module.completed ? "Complete" : ""}
                                          </Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground">  
                                          {module.subtitle}
                                        </p>
                                      </div>
                                    </div>
                                </div>

                                <div className="w-62 flex items-center justify-between gap-4"> 
                                  <div className="text-sm hover:no-underline text-right">
                                      <p className="font-medium">4/4 lessons</p>
                                      <p className="text-muted-foreground text-xs">
                                       ~ { module.time } min
                                      </p>
                                  </div>
                                  <div className="w-32">
                                    <Progress value={module.progress} />
                                  </div>
                                </div>
                              </div>
                            </AccordionTrigger>

                            <AccordionContent className="">
                              {module.lessons.map((lesson, idx) => (
                                <div key={idx} className={`flex items-center justify-between p-3`}>
                                {/*  */}
                                <div className="w-full flex items-center justify-between bg-white">
      
                                  {/* Left Section */}
                                  <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                                    <span className="text-sm font-medium text-gray-800">
                                        {lesson.title}
                                    </span>
                                  </div>

                                  {/* Right Section */}
                                  <div className="flex justify-between w-[500px] pr-20 items-center gap-6 text-sm text-gray-500">
                                    
                                    <div className="flex items-center gap-1">
                                      <Play className="w-4 h-4" />
                                      <span>{lesson.type} </span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                      <Clock className="w-4 h-4" />
                                      <span>{lesson.duration}</span>
                                    </div>

                                    <Button variant="ghost" className="text-sm">
                                      Review
                                    </Button>
                                  </div>  
                                </div>
                                {/*  */}
                                </div>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </main>
            </SidebarInset>
        </div>
      </SidebarProvider>
  )
}


