'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Certificate {
  title: string
  description: string
  image: string
  pdfUrl: string
}

interface CertificatesCarouselProps {
  certificates: Certificate[]
}

export function CertificatesCarousel({ certificates }: CertificatesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isPaused, certificates.length])

  const handleManualChange = (action: () => void) => {
    setIsPaused(true)
    action()
    setTimeout(() => setIsPaused(false), 10000)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg max-w-md mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certificates.map((cert, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer rounded-lg bg-stone border border-stone-light hover:border-border-light transition-colors"
              >
                <div className="aspect-[5/3] relative bg-stone-dark">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold mb-1 text-balance">{cert.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{cert.description}</p>
                  <p className="mt-1 text-[10px] text-text-secondary">Click para ver el certificado completo</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-1 top-1/3 -translate-y-1/2 bg-stone/80 hover:bg-stone text-text-primary h-7 w-7"
        onClick={() => handleManualChange(prevSlide)}
        aria-label="Anterior"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1/3 -translate-y-1/2 bg-stone/80 hover:bg-stone text-text-primary h-7 w-7"
        onClick={() => handleManualChange(nextSlide)}
        aria-label="Siguiente"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>

      <div className="mt-2 flex justify-center gap-1">
        {certificates.map((_, index) => (
          <button
            key={index}
            className={`h-1 w-1 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-text-primary w-4'
                : 'bg-stone-light hover:bg-text-muted'
            }`}
            onClick={() => handleManualChange(() => setCurrentIndex(index))}
            aria-label={`Ir al certificado ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
