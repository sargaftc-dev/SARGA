import type { PropsWithChildren } from 'react'
import './badge.css'

interface BadgeProps {
  tone?: 'primary' | 'outline'
}

export function Badge({ children, tone = 'primary' }: PropsWithChildren<BadgeProps>) {
  return <span className={`badge badge--${tone}`}>{children}</span>
}
