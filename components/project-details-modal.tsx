"use client"

import { X, ExternalLink, Clock, TrendingUp, Users, CheckCircle } from "lucide-react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"

interface ProjectDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    fullDescription?: string
    problem?: string
    solution?: string
    result?: string
    technology_tags: string[]
    link: string
    linkType: "github" | "kaggle" | "website"
    buttonText?: string
    metrics?: {
      timeSaved?: string
      efficiencyGained?: string
      revenueImpact?: string
      errorReduction?: string
    }
  }
}

export function ProjectDetailsModal({ isOpen, onClose, project }: ProjectDetailsModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Parse the description to extract problem, solution, result if not provided
  const parseDescription = (desc: string) => {
    const problemMatch = desc.match(/Problem: ([^.]+)/)
    const solutionMatch = desc.match(/Solution: ([^.]+)/)
    const resultMatch = desc.match(/Result: ([^.]+)/)
    
    return {
      problem: problemMatch?.[1] || "",
      solution: solutionMatch?.[1] || "",
      result: resultMatch?.[1] || ""
    }
  }

  const parsed = parseDescription(project.description)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4">
      <div className="relative max-w-4xl max-h-[90vh] w-full mx-auto bg-background rounded-xl border border-border shadow-2xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="relative p-6 border-b border-border bg-gradient-to-r from-accent/10 to-primary/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/90 hover:bg-background border border-border shadow-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          <div className="pr-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">{project.title}</h2>
            <p className="text-muted-foreground">AI Automation Solution</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6">
          {/* Problem */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <Clock className="w-4 h-4 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">The Problem</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-10">
              {parsed.problem || "Manual processes were consuming valuable time and resources, preventing the business from focusing on growth and customer satisfaction."}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">The Solution</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-10">
              {parsed.solution || "Implemented AI automation to handle repetitive tasks, improve efficiency, and deliver consistent results without manual intervention."}
            </p>
          </div>

          {/* Results */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">The Results</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-10">
              {parsed.result || "Significant improvements in efficiency, cost savings, and overall business performance with measurable ROI."}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Time Saved</p>
              <p className="text-lg font-semibold text-foreground">10-20 hrs/week</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Efficiency</p>
              <p className="text-lg font-semibold text-foreground">50-80% Gain</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <Users className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Customer Impact</p>
              <p className="text-lg font-semibold text-foreground">30-40% Better</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <CheckCircle className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Error Rate</p>
              <p className="text-lg font-semibold text-foreground">Near Zero</p>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technology_tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-accent/10 text-accent border border-accent/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Full Description */}
          {project.fullDescription && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Project Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          )}
        </div>

        {/* Footer with Actions */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2 flex-1">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                {project.buttonText || "View Project"}
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </div>

      {/* Backdrop Click to Close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
        aria-label="Close modal backdrop"
      />
    </div>
  )
}
