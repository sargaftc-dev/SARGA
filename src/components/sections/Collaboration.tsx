import { collaborationContent } from '../../data/collaboration'
import { Badge } from '../common/Badge'
import { ButtonLink } from '../common/ButtonLink'
import './collaboration.css'

export function CollaborationSection() {
  return (
    <section id="collaborate" className="section-shell">
      <div className="section-inner collaboration surface-card" data-reveal="fade-up">
        <div className="collaboration__intro">
          <Badge tone="outline">{collaborationContent.eyebrow}</Badge>
          <h2>{collaborationContent.title}</h2>
          <p>{collaborationContent.description}</p>
          <ul className="collaboration__audiences">
            {collaborationContent.audiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="collaboration__value-grid">
          {collaborationContent.valueProps.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
        <div className="collaboration__cta">
          <div>
            <p className="collaboration__cta-label">Ready to collaborate?</p>
            <p className="collaboration__cta-body">
              Send an intro with your focus areas, current matters, or partnership goals. We reply within one business day.
            </p>
            <div className="collaboration__cta-links">
              <a href={`mailto:${collaborationContent.cta.email}`}>{collaborationContent.cta.email}</a>
              <a href={`tel:${collaborationContent.cta.phone.replace(/\s+/g, '')}`}>
                {collaborationContent.cta.phone}
              </a>
            </div>
          </div>
          <div className="collaboration__cta-actions">
            <ButtonLink href="/work-with-us">Share statement of purpose</ButtonLink>
            <ButtonLink variant="ghost" href="https://wa.me/917816040259" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
