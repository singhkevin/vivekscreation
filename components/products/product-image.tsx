import Image from 'next/image'

type ProductImageProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function ProductImage({
  src,
  alt,
  className = '',
  priority = false,
}: ProductImageProps) {
  return (
    <div
      className={`relative aspect-[3/2] overflow-hidden rounded-lg bg-grey-light ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        className="object-cover"
        priority={priority}
      />
    </div>
  )
}
