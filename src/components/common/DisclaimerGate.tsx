import { useEffect } from 'react'
import './disclaimer-gate.css'

interface DisclaimerGateProps {
  open: boolean
  onAccept: () => void
}

const disclaimerPoints = [
  'This website provides general information about SARGA and should not be construed as legal advice.',
  'Viewing the site or contacting us via the form does not create an attorney-client relationship.',
  'Please avoid sharing confidential or sensitive information until an engagement is formalized.',
]

export function DisclaimerGate({ open, onAccept }: DisclaimerGateProps) {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.dataset.disclaimer = open ? 'true' : 'false'
    return () => {
      document.body.dataset.disclaimer = 'false'
    }
  }, [open])

  if (!open) {
    return null
  }

  return (
    <div className="disclaimer-gate" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
      <div className="disclaimer-gate__backdrop" aria-hidden="true" />
      <div className="disclaimer-gate__panel">
        <div className="disclaimer-gate__spinner" aria-hidden="true">
          <span />
        </div>
        <p className="disclaimer-gate__eyebrow">Important notice</p>
        <h2 id="disclaimer-title">Please confirm before entering</h2>
        <p className="disclaimer-gate__body">
          SARGA maintains this experience to share our philosophy and capabilities. Continue only if you understand and
          accept the following statements:
        </p>
        <ul className="disclaimer-gate__list">
          {disclaimerPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <button type="button" className="disclaimer-gate__cta" onClick={onAccept}>
          Accept & Continue
        </button>
        <small>By selecting Accept you confirm that you have read and agree with this disclaimer.</small>
      </div>
    </div>
  )
}
