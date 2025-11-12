import type { PropsWithChildren } from 'react'
import type { ThemeMode } from '../../hooks/useThemePreference'
import { Header } from './Header'
import { Footer } from './Footer'
import { BackgroundCanvas } from './BackgroundCanvas'
import './page-layout.css'

interface PageLayoutProps extends PropsWithChildren {
  themeMode: ThemeMode
  onThemeChange: (mode: ThemeMode) => void
  currentPath?: string
  onNavigate?: (path: string) => void
}

export function PageLayout({ children, themeMode, onThemeChange, currentPath = '/', onNavigate }: PageLayoutProps) {
  return (
    <div className="page-shell">
      <BackgroundCanvas />
      <div className="page-shell__content">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header themeMode={themeMode} onThemeChange={onThemeChange} currentPath={currentPath} onNavigate={onNavigate} />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
