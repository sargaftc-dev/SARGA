import { useState } from 'react'
import './work-with-us.css'

const talentEndpoint =
  import.meta.env.VITE_FORMSPREE_TALENT_ENDPOINT || import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xkgknejn'

const expertiseOptions = [
  'Litigation & Disputes',
  'Corporate & Transactions',
  'Regulatory & Policy',
  'Intellectual Property',
  'Taxation & Finance',
  'Research / Academia',
  'Operations / Knowledge Management',
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function WorkWithUsSection() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const honeypot = form.querySelector<HTMLInputElement>('input[name="company"]')

    if (honeypot?.value) {
      return
    }

    setStatus('loading')
    setStatusMessage('Submitting your statement…')

    const formData = new FormData(form)
    formData.append('submittedAt', new Date().toISOString())

    try {
      const response = await fetch(talentEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      form.reset()
      setStatus('success')
      setStatusMessage('Thanks for sharing your statement. We will get back within one business day.')
    } catch (error) {
      console.error(error)
      setStatus('error')
      setStatusMessage('Submission failed—please email sargaftc@gmail.com with “Work With SARGA” in the subject.')
    }
  }

  return (
    <section id="work-with-us" className="section-shell">
      <div className="section-inner work-with-us surface-card" data-reveal="fade-up">
        <div className="work-with-us__intro">
          <p className="work-with-us__eyebrow">Work with SARGA</p>
          <h2>Join a creation-first legal collective.</h2>
          <p>
            We look for practitioners and operators who thrive in collaborative, high-integrity environments. Share your
            statement of purpose and we will connect within one business day.
          </p>
        </div>
        <form className="work-with-us__form" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="formType" value="Talent Collaboration" />
          <div className="form-honeypot" aria-hidden="true">
            <label>
              Company
              <input type="text" name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="work-with-us__grid">
            <label>
              Full name
              <input type="text" name="fullName" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@email.com" required />
            </label>
            <label>
              Phone / WhatsApp
              <input type="tel" name="phone" placeholder="+91 00000 00000" />
            </label>
            <label>
              Location
              <input type="text" name="location" placeholder="City, State" />
            </label>
            <label>
              Primary expertise
              <select name="expertise" defaultValue="">
                <option value="" disabled>
                  Select focus area
                </option>
                {expertiseOptions.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Years of experience
              <input type="number" name="experience" min="0" placeholder="e.g., 5" />
            </label>
          </div>
          <label className="work-with-us__statement">
            Statement of purpose
            <textarea
              name="statementOfPurpose"
              rows={5}
              placeholder="Share your current practice, why you’d like to collaborate, and how we can build together."
              required
            ></textarea>
          </label>
          <label>
            Portfolio / website (optional)
            <input type="url" name="portfolio" placeholder="https://" />
          </label>
          <div className="work-with-us__footer">
            <p>
              Attachments can be emailed to <a href="mailto:sargaftc@gmail.com">sargaftc@gmail.com</a> with the subject
              “Work With SARGA”.
            </p>
            <p className="work-with-us__privacy">
              By submitting you agree to our confidentiality policy. Your information is stored securely and only used to
              coordinate collaborations.
            </p>
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting…' : 'Submit statement'}
            </button>
            <p className={`form-status form-status--${status}`} aria-live="polite">
              {status !== 'idle' ? statusMessage : ''}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
