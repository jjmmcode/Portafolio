import { GraduationCap, Shield } from 'lucide-react'

interface EducationCardProps {
  institution: string
  degree: string
  period: string
  description: string
  status?: string
}

export function EducationCard({ institution, degree, period, description, status }: EducationCardProps) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-shrink-0 mt-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone">
          <GraduationCap className="h-6 w-6 text-button-icon" />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-xl font-semibold">{institution}</h3>
          <div className="flex items-center gap-2 text-sm text-text-muted sm:shrink-0">
            <span>{period}</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone">
              <Shield className="h-4 w-4 text-button-icon" />
            </div>
          </div>
        </div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <p className="text-lg text-text-secondary">{degree}</p>
          {status && (
            <span className="rounded-full border border-stone-light px-2 py-0.5 text-xs font-medium text-text-muted">
              {status}
            </span>
          )}
        </div>
        <p className="text-text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
