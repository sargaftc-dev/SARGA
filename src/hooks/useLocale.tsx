import { createContext, useContext, useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { Locale } from '../data/i18n'

const STORAGE_KEY = 'sarga-locale'
const LocaleContext = createContext<{ locale: Locale; setLocale: (value: Locale) => void } | undefined>(undefined)

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'hi' || stored === 'te') {
    return stored
  }
  return 'en'
}

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale())

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, locale)
    }
  }, [locale])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    return {
      locale: 'en' as Locale,
      setLocale: () => {},
    }
  }
  return context
}
