import type { ComponentProps } from 'react'
import './button-link.css'

interface ButtonLinkProps extends ComponentProps<'a'> {
  variant?: 'solid' | 'ghost'
}

export function ButtonLink({ variant = 'solid', className = '', ...rest }: ButtonLinkProps) {
  return <a className={`button-link button-link--${variant} ${className}`.trim()} {...rest} />
}
