import { practiceAreas } from '../../data/practiceAreas'
import { Badge } from '../common/Badge'
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
  return (
    <section id="practice-areas" className="section-shell">
      <div className="section-inner">
        <div className="practice-header" data-reveal="fade-up">
          <Badge tone="outline">Focus Areas</Badge>
          <h2>Precision teams for every critical matter.</h2>
          <p>
            From filings to crisis response, each practice squad combines specialist counsel, embedded advisors, and
            playbooks that keep timelines and outcomes predictable.
          </p>
        </div>
        <div className="practice-gallery">
          {practiceAreas.map((area, index) => (
            <article key={area.title} className="practice-panel" data-reveal="fade-up" data-reveal-delay={`${index * 100}`}>
              <div className="practice-panel__accent" aria-hidden="true" />
              <div className="practice-panel__media">
                {area.icon && iconMap[area.icon] && (
                  <img src={iconMap[area.icon]} alt="" />
                )}
              </div>
              <div className="practice-panel__content">
                <div className="practice-panel__eyebrow">{area.stat}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <ul>
                  {area.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="practice-panel__tags">
                  {area.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href="#contact" className="practice-panel__cta">
                  Brief us on {area.title.split('&')[0].trim()}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
