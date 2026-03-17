import Link from 'next/link'
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary'

type BaseProps = {
  variant?: ButtonVariant
  children: React.ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never
  }

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white focus-visible:ring-2 focus-visible:ring-offset-2 rounded-[6px]',
  secondary:
    'border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 rounded-[6px]',
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50'

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
