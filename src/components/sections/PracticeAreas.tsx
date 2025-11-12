import { useMemo, useState } from 'react'
import { practiceAreas } from '../../data/practiceAreas'
import { Badge } from '../common/Badge'
import { copy } from '../../data/i18n'
import { useLocale } from '../../hooks/useLocale'
import './practice-areas.css'

const iconMap: Record<string, string> = {
  trademark: '/assets/images/trademarks.png',
  copyright: '/assets/images/copyright.png',
  design: '/assets/images/IP.png',
  cybercrime: '/assets/images/Cybercrime.png',
  insurance: '/assets/images/insurance.png',
  labour: '/assets/images/Labour.png',
}

export function PracticeAreasSection() {
  const { locale } = useLocale()
  const [activeIndex, setActiveIndex] = useState(0)

  const activeArea = useMemo(() => practiceAreas[activeIndex], [activeIndex])

  return (
    <section id="practice-areas" className="section-shell">
      <div className="section-inner">
        <div className="practice-header" data-reveal="fade-up">
          <Badge tone="outline">{copy.practiceHeader.headline[locale]}</Badge>
          <h2>{copy.practiceHeader.headline[locale]}</h2>
          <p>{copy.practiceHeader.subcopy[locale]}</p>
        </div>

        <div className="practice-layout">
          <div className="practice-grid">
            {practiceAreas.map((area, index) => (
              <button
                key={area.title}
                type="button"
                className={`practice-tile ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={index === activeIndex}
              >
                <span className="practice-tile__index">0{index + 1}</span>
                <div className="practice-tile__icon">
                  {area.icon && iconMap[area.icon] && (
                    <img src={iconMap[area.icon]} alt={`${area.title} icon`} loading="lazy" />
                  )}
                </div>
                <div className="practice-tile__copy">
                  <p className="practice-tile__stat">{area.stat}</p>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
                <span className="practice-tile__cta">{copy.practiceHeader.cta?.[locale] ?? 'Brief us'}</span>
              </button>
            ))}
          </div>

          <aside className="practice-detail" aria-live="polite">
            <article className="practice-detail__panel">
              <header className="practice-detail__header">
                <div className="practice-detail__icon">
                  {activeArea.icon && iconMap[activeArea.icon] && (
                    <img src={iconMap[activeArea.icon]} alt={`${activeArea.title} icon`} loading="lazy" />
                  )}
                </div>
                <div>
                  <p className="practice-detail__stat">{activeArea.stat}</p>
                  <h3>{activeArea.title}</h3>
                  <p>{activeArea.description}</p>
                </div>
              </header>

              <ul className="practice-detail__list">
                {activeArea.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span aria-hidden="true">✦</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="practice-detail__tags">
                {activeArea.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a href="#contact" className="practice-detail__cta">
                {copy.practiceHeader.cta?.[locale] ?? 'Brief us'}
              </a>
            </article>
          </aside>
        </div>
      </div>
    </section>
  )
}
