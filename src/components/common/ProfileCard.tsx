import type { PropsWithChildren } from 'react'
import './profile-card.css'

interface ProfileCardProps extends PropsWithChildren {
  title: string
  subtitle: string
  meta?: string
  tags?: string[]
}

export function ProfileCard({ title, subtitle, meta, tags, children }: ProfileCardProps) {
  return (
    <article className="profile-card" data-reveal="fade-up">
      <div className="profile-card__header">
        <div>
          <p className="profile-card__title">{title}</p>
          <p className="profile-card__subtitle">{subtitle}</p>
        </div>
        {meta && <span className="profile-card__meta">{meta}</span>}
      </div>
      <div className="profile-card__body">{children}</div>
      {tags && tags.length > 0 && (
        <div className="profile-card__tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </article>
  )
}
