import { useEffect, useState } from 'react'
import type { ThemeMode } from '../../hooks/useThemePreference'
import { ThemeToggle } from '../common/ThemeToggle'
import './header.css'

const navLinks = [
  { label: 'Approach', href: '/#about' },
  { label: 'Practice Areas', href: '/#practice-areas' },
  { label: 'Reach', href: '/#reach' },
]

interface HeaderProps {
  themeMode: ThemeMode
  onThemeChange: (mode: ThemeMode) => void
}

export function Header({ themeMode, onThemeChange }: HeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const closeNav = () => setIsNavOpen(false)

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    if (document.body.dataset.disclaimer === 'true') {
      return
    }

    document.body.style.overflow = isNavOpen ? 'hidden' : ''
    return () => {
      if (document.body.dataset.disclaimer !== 'true') {
        document.body.style.overflow = ''
      }
    }
  }, [isNavOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#">
          <span>SARGA</span>
          <small>Legal Strategy</small>
        </a>
        <div className="site-header__actions">
          <button
            className="site-header__menu-toggle"
            type="button"
            aria-expanded={isNavOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d={isNavOpen ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h10'}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <nav
            id="primary-navigation"
            className={`site-header__nav ${isNavOpen ? 'is-open' : ''}`.trim()}
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeNav}>
                {link.label}
              </a>
            ))}
            <a className="site-header__contact" href="/work-with-us" onClick={closeNav}>
              Work with us
            </a>
          </nav>
          <ThemeToggle mode={themeMode} onChange={onThemeChange} />
        </div>
      </div>
      {isNavOpen && <div className="site-header__nav-backdrop" onClick={closeNav} aria-hidden="true" />}
    </header>
  )
}
