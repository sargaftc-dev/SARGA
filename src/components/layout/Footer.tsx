import './footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div>
          <p className="site-footer__title">SARGA</p>
          <p className="site-footer__tagline">Legal strategy for builders of tomorrow.</p>
        </div>
        <div className="site-footer__meta">
          <span>504, CBR ACE MONTE CARLO, Kondapur, Telangana 500084</span>
          <a href="tel:+917816040259">+91 78160 40259</a>
          <a href="mailto:sargaftc@gmail.com">sargaftc@gmail.com</a>
          <a href="https://www.linkedin.com/in/sarga-future-of-creation-50153a32a" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()} SARGA Legal. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
