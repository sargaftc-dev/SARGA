import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import type { ThemeMode } from '../../hooks/useThemePreference'
import { ThemeToggle } from '../common/ThemeToggle'
import { copy, locales } from '../../data/i18n'
import { useLocale } from '../../hooks/useLocale'
import './header.css'

const navLinks = [
  { key: 'approach', href: '#hero', type: 'hash' },
  { key: 'practice', href: '#practice-areas', type: 'hash' },
  { key: 'reach', href: '#reach', type: 'hash' },
  { key: 'workWithUs', href: '/work-with-us', type: 'route' },
] as const

interface HeaderProps {
  themeMode: ThemeMode
  onThemeChange: (mode: ThemeMode) => void
  currentPath: string
  onNavigate?: (path: string) => void
}

export function Header({ themeMode, onThemeChange, currentPath, onNavigate }: HeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { locale, setLocale } = useLocale()
  const navMenuId = 'primary-nav'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isNavOpen])

  useEffect(() => {
    setIsNavOpen(false)
  }, [currentPath])

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string, type: (typeof navLinks)[number]['type']) => {
    if (type === 'route' && onNavigate) {
      event.preventDefault()
      onNavigate(href)
    }
    setIsNavOpen(false)
  }

  const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      event.preventDefault()
      onNavigate('/')
    }
    setIsNavOpen(false)
  }

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <div className="nav-card">
          <a className="nav-brand" href="/" onClick={handleBrandClick}>
            <span>SARGA</span>
            <small>Future of Creation</small>
          </a>
          <nav className={`nav-links ${isNavOpen ? 'is-open' : ''}`} aria-label="Primary" id={navMenuId}>
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                aria-current={link.type === 'route' && currentPath === link.href ? 'page' : undefined}
                onClick={(event) => handleNavClick(event, link.href, link.type)}
              >
                {copy.nav[link.key as keyof typeof copy.nav]?.[locale] ?? link.key}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <ThemeToggle mode={themeMode} onChange={onThemeChange} />
            <label htmlFor="locale-select" className="sr-only">
              Change language
            </label>
            <select
              id="locale-select"
              value={locale}
              onChange={(e) => setLocale(e.target.value as keyof typeof locales)}
              aria-label="Select language"
            >
              {Object.entries(locales).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <a className="nav-cta" href="#contact" aria-label="Book a consult">
              Book consult
            </a>
            <button
              className={`nav-toggle ${isNavOpen ? 'is-open' : ''}`}
              type="button"
              aria-expanded={isNavOpen}
              aria-controls={navMenuId}
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        {isNavOpen && <div className="nav-backdrop" onClick={() => setIsNavOpen(false)} />}
      </div>
    </header>
  )
}
