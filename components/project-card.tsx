import { TechBadge } from "@/components/tech-badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Package } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  technologies: Array<{ icon: string; label: string }>
  image?: string
  links?: {
    demo?: string
    github?: string
  }
  icon?: 'package' | 'check'
}

export function ProjectCard({ 
  title, 
  subtitle, 
  description, 
  technologies, 
  image,
  links,
  icon = 'package'
}: ProjectCardProps) {
  const IconComponent = icon === 'package' ? Package : () => (
    <svg className="h-6 w-6 text-button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )

  return (
    <div className="mb-8 flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone border border-stone-light">
          <IconComponent className="h-6 w-6 text-button-icon" />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="mb-2 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-text-secondary mb-3">{subtitle}</p>
            <p className="leading-relaxed text-text-muted text-sm mb-4">{description}</p>
            
            <div className="mb-4 flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <TechBadge key={index} icon={tech.icon} label={tech.label} />
              ))}
            </div>
            
            {links && (
              <div className="flex gap-2">
                {links.demo && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-stone hover:bg-stone-light h-9 w-9 rounded-full"
                    asChild
                  >
                    <a href={links.demo} target="_blank" rel="noopener noreferrer" aria-label="Ver proyecto">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {links.github && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-stone hover:bg-stone-light h-9 w-9 rounded-full"
                    asChild
                  >
                    <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="Ver en GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
          
          {image && (
            <div className="lg:w-64 flex-shrink-0">
              <div className="rounded-lg border border-stone-light bg-stone p-4 overflow-hidden">
                <Image 
                  src={image || "/placeholder.svg"} 
                  alt={title}
                  width={256}
                  height={160}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
