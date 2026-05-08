"use client"

import type React from "react"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar } from "@/components/sidebar"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { ThemeChooser } from "@/components/theme-chooser"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-10 left-4 z-50 p-2 rounded-full bg-background border-2 border-border shadow-md hover:bg-accent/10 transition-colors flex items-center gap-2"
        aria-label="Toggle Sidebar"
      >
        <Avatar className="w-10 h-10">
          <AvatarImage src="/professional-headshot.png" alt="IDODE DESTINY M" />
          <AvatarFallback className="text-xs bg-primary text-primary-foreground">IM</AvatarFallback>
        </Avatar>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile Overlay - Click to Close Sidebar */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close Sidebar"
        />
      )}

      <div className={`fixed lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[28rem] bg-sidebar border-r border-sidebar-border z-40 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} lg:block w-80 h-full`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "lg:ml-[28rem]" : "ml-0 lg:ml-[28rem]"} min-h-screen`}>
        <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12 lg:py-16 pt-10 lg:pt-16 space-y-24">
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
      <ThemeChooser />
    </div>
  )
}
