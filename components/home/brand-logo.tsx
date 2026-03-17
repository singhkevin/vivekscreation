'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { Brand } from '@/lib/constants'

type BrandLogoProps = {
  brand: Brand
  variant?: 'light' | 'dark'
  className?: string
}

export function BrandLogo({
  brand,
  variant = 'light',
  className = '',
}: BrandLogoProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <span
        className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold ${className}`}
        style={
          variant === 'light'
            ? {
                color: 'rgba(255,255,255,0.95)',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              }
            : {
                color: '#334155',
              }
        }
      >
        {brand.name}
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center justify-center px-4 py-2 ${className}`}
    >
      <Image
        src={brand.logo}
        alt={brand.name}
        width={160}
        height={64}
        className="h-12 w-auto max-w-[140px] object-contain object-center sm:h-14"
        onError={() => setHasError(true)}
      />
    </span>
  )
}
