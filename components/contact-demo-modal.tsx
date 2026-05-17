"use client"

import { X, Mail, MessageCircle, Send } from "lucide-react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"

interface ContactDemoModalProps {
  isOpen: boolean
  onClose: () => void
  projectTitle: string
}

export function ContactDemoModal({ isOpen, onClose, projectTitle }: ContactDemoModalProps) {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4">
      <div className="relative max-w-2xl max-h-[90vh] w-full mx-auto bg-background rounded-xl border border-border shadow-2xl overflow-hidden animate-scale-in">
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
            <h2 className="text-2xl font-bold text-foreground mb-2">Request a Personalized Demo</h2>
            <p className="text-muted-foreground">{projectTitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6">
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Interested in seeing how this solution can work for your business? Contact me for a personalized demo tailored to your specific needs.
            </p>

            <div className="space-y-4 pt-4">
              <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Email</h3>
                </div>
                <a 
                  href="mailto:Destinyidode@hotmail.com" 
                  className="text-accent hover:underline break-all"
                >
                  Destinyidode@hotmail.com
                </a>
              </div>

              <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">LinkedIn</h3>
                </div>
                <a 
                  href="https://www.linkedin.com/in/idode-destiny/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours. Include details about your business and what you'd like to see in the demo.
              </p>
            </div>
          </div>
        </div>

        {/* Footer with Actions */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="gap-2 flex-1"
            >
              <a href="mailto:Destinyidode@hotmail.com?subject=Demo Request: {projectTitle}">
                <Send className="w-4 h-4" />
                Send Email
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
