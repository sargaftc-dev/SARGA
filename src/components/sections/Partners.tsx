import { useEffect, useState } from 'react'
import { partners } from '../../data/partners'
import { Badge } from '../common/Badge'
import { useLocale } from '../../hooks/useLocale'
import { copy } from '../../data/i18n'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import './partners.css'

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

export function PartnersSection() {
  const { locale } = useLocale()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalPartners = partners.length
  const autoRotateDelay = 6500
  const prefersReducedMotion = usePrefersReducedMotion()
  const formatIndex = (value: number) => String(value).padStart(2, '0')

  useEffect(() => {
    if (isPaused || totalPartners <= 1 || prefersReducedMotion) return
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPartners)
    }, autoRotateDelay)
    return () => window.clearInterval(timer)
  }, [isPaused, totalPartners, prefersReducedMotion])

  const prevIndex = (activeIndex - 1 + totalPartners) % totalPartners
  const nextIndex = (activeIndex + 1) % totalPartners

  const cardState = (index: number) => {
    if (index === activeIndex) return 'is-active'
    if (prefersReducedMotion) return 'is-off'
    if (index === prevIndex) return 'is-prev'
    if (index === nextIndex) return 'is-next'
    return 'is-off'
  }

  const goTo = (index: number) => {
    setActiveIndex((index + totalPartners) % totalPartners)
  }

  const step = (direction: 'prev' | 'next') => {
    goTo(direction === 'prev' ? activeIndex - 1 : activeIndex + 1)
  }

  return (
    <section id="partners" className="section-shell">
      <div className="section-inner partners surface-card">
        <div className="partners__layout">
          <div className="partners__intro" data-reveal="fade-up">
            <Badge tone="outline">{copy.partners.badge[locale]}</Badge>
            <h2>{copy.partners.headline[locale]}</h2>
            <p>{copy.partners.subcopy[locale]}</p>
            <dl className="partners__highlights">
              <div>
                <dt>Courts</dt>
                <dd>High Courts, District Courts, arbitral panels</dd>
              </div>
              <div>
                <dt>Coverage</dt>
                <dd>Hyderabad HQ + Delhi, Karnataka, Andhra Pradesh</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>IP, cyber, disputes, governance, regulated sectors</dd>
              </div>
            </dl>
          </div>
          <div
            className="partners__stage"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-live="polite"
          >
            {partners.map((partner, index) => (
              <article
                key={partner.name}
                className={`partner-card ${cardState(index)} ${prefersReducedMotion ? 'no-motion' : ''}`}
                aria-hidden={index !== activeIndex}
              >
                <div className="partner-card__header">
                  <div className="partner-card__avatar" aria-hidden="true">
                    <span>{getInitials(partner.name)}</span>
                  </div>
                  <div>
                    <p className="partner-card__name">{partner.name}</p>
                    <p className="partner-card__focus">{partner.focus}</p>
                  </div>
                  <span className="partner-card__meta">{copy.partners.quoteLabel[locale]}</span>
                </div>
                <p className="partners__quote">“{partner.quote}”</p>
                <p className="partners__body">{partner.body}</p>
                <div className="partner-card__tags" aria-label="Expertise">
                  {partner.expertise.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a className="partner-card__cta" href="#contact">
                  {copy.partners.cta(partner.name.split(' ')[0], locale)}
                </a>
              </article>
            ))}
          </div>
        </div>
        <div className="partners__controls">
          <button type="button" onClick={() => step('prev')} aria-label="Show previous partner">
            ←
          </button>
          <div className="partners__counter">
            {formatIndex(activeIndex + 1)} / {formatIndex(totalPartners)}
          </div>
          <div className="partners__dots">
            {partners.map((partner, index) => (
              <button
                key={partner.name}
                type="button"
                className={index === activeIndex ? 'is-active' : ''}
                aria-label={`Show ${partner.name}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button type="button" onClick={() => step('next')} aria-label="Show next partner">
            →
          </button>
        </div>
      </div>
    </section>
  )
}
