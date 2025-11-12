import { partners } from '../../data/partners'
import { Badge } from '../common/Badge'
import { ProfileCard } from '../common/ProfileCard'
import './partners.css'

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

export function PartnersSection() {
  return (
    <section id="partners" className="section-shell">
      <div className="section-inner partners surface-card">
        <div className="partners__intro" data-reveal="fade-up">
          <Badge tone="outline">Meet our partners</Badge>
          <h2>Strategic thinkers. Trusted advocates. Legal leaders.</h2>
          <p>
            Each partner aligns legal insight with commercial traction, protecting what clients create while
            driving engagements toward decisive results.
          </p>
        </div>
        <div className="partners__grid">
          {partners.map((partner) => (
            <ProfileCard
              key={partner.name}
              title={partner.name}
              subtitle={partner.focus}
              meta={`Advisory ${getInitials(partner.name)}`}
              tags={[...partner.expertise]}
            >
              <p className="partners__narrative">{partner.narrative}</p>
              <p className="partners__body">{partner.body}</p>
            </ProfileCard>
          ))}
        </div>
      </div>
    </section>
  )
}
