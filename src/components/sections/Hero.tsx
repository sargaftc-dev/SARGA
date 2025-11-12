import { heroContent, aboutContent, founderQuote } from '../../data/brandNarrative'
import { ButtonLink } from '../common/ButtonLink'
import { Badge } from '../common/Badge'
import './hero.css'

export function HeroSection() {
  return (
    <section id="hero" className="hero section-shell">
      <div className="section-inner hero__inner surface-card" data-reveal="fade-up">
        <div className="hero__content">
          <Badge>{heroContent.eyebrow}</Badge>
          <h1>{heroContent.title}</h1>
          <p>{heroContent.description}</p>
          <div className="hero__actions">
            <ButtonLink href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</ButtonLink>
            <ButtonLink variant="ghost" href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
        <div className="hero__about">
          <div className="hero__about-copy">
            <Badge tone="outline">{aboutContent.heading}</Badge>
            <p>{aboutContent.body}</p>
          </div>
          <ul className="hero__about-list">
            {aboutContent.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hero__quote" data-reveal="fade-up">
          <p>“{founderQuote.quote}”</p>
          <div>
            <strong>{founderQuote.author}</strong>
            <span>{founderQuote.context}</span>
          </div>
        </div>
        <div className="hero__meta">
          <div>
            <p className="hero__meta-label">Headquartered</p>
            <p className="hero__meta-value">Hyderabad</p>
          </div>
          <div>
            <p className="hero__meta-label">Counsels</p>
            <p className="hero__meta-value">Delhi · Karnataka · Andhra Pradesh</p>
          </div>
          <div>
            <p className="hero__meta-label">Network</p>
            <p className="hero__meta-value">Senior advocates across India</p>
          </div>
        </div>
      </div>
    </section>
  )
}
