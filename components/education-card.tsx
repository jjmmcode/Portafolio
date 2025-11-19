import { GraduationCap, Shield } from 'lucide-react'

interface EducationCardProps {
  institution: string
  degree: string
  period: string
  description: string
}

export function EducationCard({ institution, degree, period, description }: EducationCardProps) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-shrink-0 mt-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone">
          <GraduationCap className="h-6 w-6 text-button-icon" />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold">{institution}</h3>
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span>{period}</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone">
              <Shield className="h-4 w-4 text-button-icon" />
            </div>
          </div>
        </div>
        <p className="text-lg text-text-secondary mb-2">{degree}</p>
        <p className="text-text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
