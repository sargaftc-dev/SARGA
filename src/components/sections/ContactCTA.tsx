import { partners } from '../../data/partners'
import { ButtonLink } from '../common/ButtonLink'
import './contact-cta.css'

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xkgknejn'

export function ContactCTASection() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-inner contact-cta surface-card">
        <div className="contact-cta__info" data-reveal="fade-up">
          <p className="contact-cta__eyebrow">From first step to full scale</p>
          <h2>Let’s co-design the legal layer of your next move.</h2>
          <p>
            Share your growth targets, launch timelines, and priority regions. We activate the right mix of
            in-house counsel and senior advocates so every engagement stays confidential, responsive, and results
            driven. NDAs and secure channels are available on request.
          </p>
          <div className="contact-cta__map-card">
            <div className="contact-cta__map-embed">
              <iframe
                title="SARGA location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.3505%2C17.459%2C78.3635%2C17.465&layer=mapnik&marker=17.4622%2C78.357"
              ></iframe>
            </div>
            <a
              className="contact-cta__map-link"
              href="https://www.openstreetmap.org/?mlat=17.4622&mlon=78.357#map=16/17.4622/78.357"
              target="_blank"
              rel="noreferrer"
            >
              Open map in new tab
            </a>
          </div>
          <ul className="contact-cta__details">
            <li>
              <span>Address</span>
              <p>504, CBR ACE MONTE CARLO, Kondapur, Telangana 500084</p>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:+917816040259">+91 78160 40259</a>
            </li>
            <li>
              <span>Email</span>
              <a href="mailto:sargaftc@gmail.com">sargaftc@gmail.com</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href="https://www.linkedin.com/in/sarga-future-of-creation-50153a32a" target="_blank" rel="noreferrer">
                linkedin.com/in/sarga-future-of-creation
              </a>
            </li>
          </ul>
          <div className="contact-cta__actions">
            <ButtonLink href="mailto:sargaftc@gmail.com">Email our team</ButtonLink>
            <ButtonLink variant="ghost" href="#practice-areas">
              Review capabilities
            </ButtonLink>
          </div>
        </div>
        <form className="contact-form" action={formEndpoint} method="POST" data-reveal="fade-up" data-reveal-delay="200">
          <input type="hidden" name="_subject" value="SARGA | Consultation Request" />
          <input type="hidden" name="source" value="sarga-website" />
          <div className="contact-form__group">
            <label htmlFor="fullName">Full name</label>
            <input id="fullName" name="fullName" type="text" placeholder="Your name" required />
          </div>
          <div className="contact-form__group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@email.com" required />
          </div>
          <div className="contact-form__group">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" />
          </div>
          <div className="contact-form__group">
            <label htmlFor="partnerPreference">Who would you like to speak with?</label>
            <select id="partnerPreference" name="partnerPreference" defaultValue="">
              <option value="">No preference</option>
              {partners.map((partner) => (
                <option key={partner.name} value={partner.name}>
                  {partner.name}
                </option>
              ))}
            </select>
          </div>
          <div className="contact-form__group">
            <label htmlFor="matterFocus">Matter focus</label>
            <select id="matterFocus" name="matterFocus" defaultValue="" required>
              <option value="" disabled>
                Select the matter type
              </option>
              <option value="Venture Structuring">Venture Structuring</option>
              <option value="Intellectual Property">Intellectual Property</option>
              <option value="Regulatory Strategy">Regulatory Strategy</option>
              <option value="Complex Disputes">Complex Disputes</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="contact-form__group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share timelines, objectives, and any sensitive considerations."
              required
            ></textarea>
          </div>
          <div className="contact-form__footer">
            <button type="submit">Submit request</button>
            <p>We respond within one business day. Submissions remain confidential.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
