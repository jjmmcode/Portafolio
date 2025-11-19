interface TechBadgeProps {
  icon: string
  label: string
  variant?: 'plain' | 'original' | 'line'
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}

export function TechBadge({ icon, label, variant = 'plain' }: TechBadgeProps) {
  const iconClass = `devicon-${icon}-${variant} colored`
  
  return (
    <div className="inline-flex items-center gap-2 rounded-md bg-stone-900 px-3 py-1.5 text-sm font-medium text-stone-400 border border-stone-800">
      <i className={`${iconClass} text-lg`}></i>
      <span>{label}</span>
    </div>
  )
}
