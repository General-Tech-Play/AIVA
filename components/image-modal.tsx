"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  title: string
}

export function ImageModal({ isOpen, onClose, imageSrc, title }: ImageModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-4xl max-h-[90vh] w-full mx-4 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/90 hover:bg-background border border-border shadow-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Image Container */}
        <div className="bg-background rounded-lg border border-border shadow-2xl overflow-hidden">
          {/* Title Bar */}
          <div className="p-4 border-b border-border bg-muted/50">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">Workflow Diagram</p>
          </div>

          {/* Image */}
          <div className="p-4 bg-card">
            <img
              src={imageSrc}
              alt={`${title} workflow diagram`}
              className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
            />
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
