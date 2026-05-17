"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageModal } from "@/components/image-modal"
import { ProjectDetailsModal } from "@/components/project-details-modal"
import { ContactDemoModal } from "@/components/contact-demo-modal"
import { Eye, Calendar, MessageCircle, Package, BarChart, Users, FileText } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  fullDescription?: string
  technology_tags: string[]
  link: string
  linkType: "github" | "kaggle" | "website"
  index: number
  status?: string
  buttonText?: string
  image?: string
  contactForDemo?: boolean
}

export function ProjectCard({ title, description, fullDescription, technology_tags, link, linkType, index, status, buttonText, image, contactForDemo }: ProjectCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Get the appropriate icon for each project
  const getProjectIcon = (title: string) => {
    switch (title) {
      case "Table Booking Bot":
        return <Calendar className="w-12 h-12 text-accent" />
      case "Customer Support Automation":
        return <MessageCircle className="w-12 h-12 text-accent" />
      case "Inventory Check Automation":
        return <Package className="w-12 h-12 text-accent" />
      case "Restaurant Feedback Agent":
        return <Users className="w-12 h-12 text-accent" />
      case "Shopify Analytics Agent":
        return <BarChart className="w-12 h-12 text-accent" />
      case "Client Onboarding Workflow":
        return <FileText className="w-12 h-12 text-accent" />
      default:
        return <Calendar className="w-12 h-12 text-accent" />
    }
  }

  const project = {
    title,
    description: fullDescription || description,
    technology_tags,
    link,
    linkType,
    buttonText
  }

  return (
    <>
      <Card className="group border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 animate-fade-in relative" style={{ animationDelay: `${index * 0.1}s` }}>
        {status === "under-construction" && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2 py-1 text-xs font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full">
              Under Construction
            </span>
          </div>
        )}
        
        {/* Project Icon with View Workflow Button */}
        <div className="relative h-48 bg-gradient-to-br from-accent/10 to-primary/10 border-b border-border overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center">
            {getProjectIcon(title)}
          </div>
          
          {/* Overlay with View Workflow Button */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={() => setIsImageModalOpen(true)}
              className="px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg"
            >
              <Eye className="w-4 h-4" />
              View Workflow
            </button>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-accent transition-colors">{title}</CardTitle>
          <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {technology_tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className={contactForDemo ? "flex flex-col gap-3" : ""}>
            {contactForDemo ? (
              <>
                <Button 
                  size="lg" 
                  className="gap-2 group-hover:shadow-md transition-shadow min-h-[44px] w-full"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Request Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2 group-hover:shadow-md transition-shadow min-h-[44px] w-full"
                  onClick={() => setIsDetailsModalOpen(true)}
                >
                  View Details
                </Button>
              </>
            ) : (
              <Button 
                size="lg" 
                className="gap-2 group-hover:shadow-md transition-shadow min-h-[44px] w-full"
                onClick={() => setIsDetailsModalOpen(true)}
              >
                {buttonText || (linkType === "github" ? "View Code (GitHub)" : linkType === "kaggle" ? "View Project (Kaggle)" : "View Details")}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Image Modal - Only opens if there's an actual image */}
      {image && (
        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          imageSrc={image}
          title={title}
        />
      )}

      {/* Project Details Modal */}
      <ProjectDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        project={project}
      />

      {/* Contact Demo Modal */}
      <ContactDemoModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        projectTitle={title}
      />
    </>
  )
}
