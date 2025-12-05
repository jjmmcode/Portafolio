import { PhoneCall } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  icon?: LucideIcon
}

export function ExperienceCard({ title, company, period, description, icon: Icon = PhoneCall }: ExperienceCardProps) {
  return (
    <div className="mb-8 flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone border border-stone-light">
          <Icon className="h-6 w-6 text-button-icon" />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-sm text-text-muted">{period}</span>
        </div>
        <p className="mb-3 text-text-secondary">{company}</p>
        <p className="leading-relaxed text-text-muted text-sm">{description}</p>
      </div>
    </div>
  )
}
