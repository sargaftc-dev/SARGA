import { useEffect, useState } from 'react'
import { PageLayout } from './components/layout/PageLayout'
import { HeroSection } from './components/sections/Hero'
import { PracticeAreasSection } from './components/sections/PracticeAreas'
import { PartnersSection } from './components/sections/Partners'
import { ReachSection } from './components/sections/Reach'
import { ContactCTASection } from './components/sections/ContactCTA'
import { CollaborationSection } from './components/sections/Collaboration'
import { WorkWithUsSection } from './components/sections/WorkWithUs'
import { DisclaimerGate } from './components/common/DisclaimerGate'
import { useThemePreference, type ThemeMode } from './hooks/useThemePreference'
import { initRevealAnimations } from './utils/reveal'
import './styles/pages/home.css'
import { LocaleProvider } from './hooks/useLocale'

const DISCLAIMER_KEY = 'sarga-disclaimer-accepted'

const getPathname = () => {
  if (typeof window === 'undefined') {
    return '/'
  }

  const normalized = window.location.pathname.replace(/\/+$/, '')
  return normalized || '/'
}

function App() {
  const { mode, setMode } = useThemePreference()
  const handleThemeChange = (nextMode: ThemeMode) => setMode(nextMode)
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.localStorage.getItem(DISCLAIMER_KEY) === 'true'
  })
  const [currentPath, setCurrentPath] = useState<string>(() => getPathname())

  const handleAcceptDisclaimer = () => {
    setDisclaimerAccepted(true)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(DISCLAIMER_KEY, 'true')
    }
  }

  useEffect(() => {
    initRevealAnimations()
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handlePopState = () => setCurrentPath(getPathname())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    setCurrentPath(getPathname())
  }, [])

  const handleNavigate = (path: string) => {
    if (typeof window === 'undefined') {
      setCurrentPath(path)
      return
    }

    if (getPathname() === path) {
      setCurrentPath(path)
      return
    }

    window.history.pushState({}, '', path)
    setCurrentPath(getPathname())
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const isWorkRoute = currentPath === '/work-with-us'

  return (
    <LocaleProvider>
      <DisclaimerGate open={!disclaimerAccepted} onAccept={handleAcceptDisclaimer} />
      <PageLayout
        themeMode={mode}
        onThemeChange={handleThemeChange}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      >
        {isWorkRoute ? (
          <WorkWithUsSection />
        ) : (
          <>
            <HeroSection />
            <PracticeAreasSection />
            <PartnersSection />
            <CollaborationSection />
            <ReachSection />
            <ContactCTASection />
          </>
        )}
      </PageLayout>
    </LocaleProvider>
  )
}

export default App
