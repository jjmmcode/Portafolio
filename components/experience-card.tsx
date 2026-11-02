import { PhoneCall } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  icon?: LucideIcon
  current?: boolean
  modality?: string
}

export function ExperienceCard({ title, company, period, description, icon: Icon = PhoneCall, current, modality }: ExperienceCardProps) {
  return (
    <div className="mb-8 flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone border border-stone-light">
          <Icon className="h-6 w-6 text-button-icon" />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            {current && (
              <span className="rounded-full border border-stone-light px-2 py-0.5 text-xs font-medium text-text-muted">
                Empleo actual
              </span>
            )}
          </div>
          <span className="text-sm text-text-muted">{period}</span>
        </div>
        <p className="mb-2 text-text-secondary sm:mb-3">
          {company}
          {modality && <span className="text-text-muted"> · {modality}</span>}
        </p>
        <p className="text-sm leading-[1.6] text-text-muted sm:leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
