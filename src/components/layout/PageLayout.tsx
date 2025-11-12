import type { PropsWithChildren } from 'react'
import type { ThemeMode } from '../../hooks/useThemePreference'
import { Header } from './Header'
import { Footer } from './Footer'
import { BackgroundCanvas } from './BackgroundCanvas'
import './page-layout.css'

interface PageLayoutProps extends PropsWithChildren {
  themeMode: ThemeMode
  onThemeChange: (mode: ThemeMode) => void
}

export function PageLayout({ children, themeMode, onThemeChange }: PageLayoutProps) {
  return (
    <div className="page-shell">
      <BackgroundCanvas />
      <div className="page-shell__content">
        <Header themeMode={themeMode} onThemeChange={onThemeChange} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
