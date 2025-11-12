import { regionalPresence } from '../../data/regionalPresence'
import './reach.css'

export function ReachSection() {
  return (
    <section id="reach" className="section-shell">
      <div className="section-inner reach surface-card">
        <header data-reveal="fade-up">
          <p className="reach__eyebrow">Pan-India presence</p>
          <h2>Regional depth, national reach.</h2>
          <p>
            Embedded counsels and senior advocates operate as one field team, giving clients on-the-ground
            intelligence, faster escalations, and stronger stakeholder engagement.
          </p>
        </header>
        <div className="reach__grid">
          {regionalPresence.map((city, index) => (
            <article
              key={city.region}
              data-reveal="fade-up"
              data-reveal-delay={`${index * 100}`}
            >
              <p className="reach__region">{city.region}</p>
              <p className="reach__role">{city.role}</p>
              <p className="reach__focus">{city.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
