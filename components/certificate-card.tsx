import Image from 'next/image'

interface CertificateCardProps {
  title: string
  description: string
  image: string
}

export function CertificateCard({ title, description, image }: CertificateCardProps) {
  return (
    <div className="rounded-lg bg-stone overflow-hidden border border-stone-light hover:border-border-light transition-colors">
      <div className="aspect-[4/3] relative bg-stone-dark">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-balance">{title}</h3>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
