import { TechBadge } from "@/components/tech-badge"
import { Button } from "@/components/ui/button"
import { Bot, ExternalLink, Github, Hammer, Package } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  technologies: Array<{ icon: string; label: string }>
  image?: string
  imageAlt?: string
  links?: {
    demo?: string
    github?: string
    evidence?: string
  }
  icon?: 'package' | 'check' | 'bot' | 'hammer'
}

export function ProjectCard({ 
  title, 
  subtitle, 
  description, 
  technologies, 
  image,
  imageAlt,
  links,
  icon = 'package'
}: ProjectCardProps) {
  const IconComponent = icon === 'bot' ? Bot : icon === 'hammer' ? Hammer : icon === 'package' ? Package : null

  return (
    <article className="group mb-8 overflow-hidden rounded-xl border border-stone-light/70 bg-stone/30 p-4 transition-colors duration-200 hover:border-stone-light hover:bg-stone/50 sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
        <div className="flex min-w-0 flex-1 gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-stone-light bg-stone text-button-icon transition-colors group-hover:border-button-icon/50">
              {IconComponent ? <IconComponent className="h-5 w-5" aria-hidden="true" /> : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-4">
              <h3 className="text-lg font-semibold tracking-tight text-text-primary">{title}</h3>
              <p className="mt-1 text-sm font-medium text-text-secondary">{subtitle}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">{description}</p>
            </div>

            <div className="mb-4 flex flex-wrap gap-2" aria-label={`Tecnologías utilizadas en ${title}`}>
              {technologies.map((tech, index) => (
                <TechBadge key={`${tech.label}-${index}`} icon={tech.icon} label={tech.label} />
              ))}
            </div>

            {(links?.demo || links?.github || links?.evidence) && (
              <div className="flex flex-wrap gap-2">
                {links.demo && (
                  <Button variant="ghost" size="sm" className="h-10 gap-2 rounded-md border border-stone-light bg-stone px-3 text-text-secondary hover:bg-stone-light hover:text-text-primary" asChild>
                    <a href={links.demo} target="_blank" rel="noopener noreferrer" aria-label={`Ver demo de ${title}`}>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span>Demo</span>
                    </a>
                  </Button>
                )}
                {links.evidence && (
                  <Button variant="ghost" size="sm" className="h-10 gap-2 rounded-md border border-stone-light bg-stone px-3 text-text-secondary hover:bg-stone-light hover:text-text-primary" asChild>
                    <a href={links.evidence} target="_blank" rel="noopener noreferrer" aria-label={`Ver evidencias de ${title}`}>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span>Ver evidencias</span>
                    </a>
                  </Button>
                )}
                {links.github && (
                  <Button variant="ghost" size="sm" className="h-10 gap-2 rounded-md border border-stone-light bg-stone px-3 text-text-secondary hover:bg-stone-light hover:text-text-primary" asChild>
                    <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${title} en GitHub`}>
                      <Github className="h-4 w-4" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="w-full flex-shrink-0 lg:w-64">
          <div className="flex h-full min-h-40 items-center justify-center overflow-hidden rounded-lg border border-stone-light bg-stone p-4 transition-colors group-hover:border-stone-light">
            {image ? (
              <Image src={image} alt={imageAlt ?? `Vista previa de ${title}`} width={256} height={160} className="h-auto w-full object-contain" />
            ) : IconComponent ? (
              <div className="flex flex-col items-center gap-3 text-center text-text-muted">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-stone-light bg-stone-900 text-button-icon">
                  <IconComponent className="h-7 w-7" aria-hidden="true" />
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.18em]">Vista previa pendiente</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
