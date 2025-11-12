import { useEffect, useMemo, useState } from 'react'

export type Theme = 'light' | 'dark'
export type ThemeMode = Theme | 'system'

const STORAGE_KEY = 'sarga-theme-mode'

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const getInitialMode = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'system'
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored
  }

  return 'system'
}

export function useThemePreference() {
  const initialMode = getInitialMode()
  const [mode, setMode] = useState<ThemeMode>(() => initialMode)
  const [theme, setTheme] = useState<Theme>(() =>
    initialMode === 'system' ? getSystemTheme() : (initialMode as Theme),
  )

  useEffect(() => {
    if (mode === 'system') {
      setTheme(getSystemTheme())
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(STORAGE_KEY)
      }
    } else {
      setTheme(mode)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, mode)
      }
    }
  }, [mode])

  useEffect(() => {
    if (mode !== 'system' || typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      const matches = 'matches' in event ? event.matches : media.matches
      setTheme(matches ? 'dark' : 'light')
    }

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', handleChange)
      return () => media.removeEventListener('change', handleChange)
    }

    media.addListener(handleChange)
    return () => media.removeListener(handleChange)
  }, [mode])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const root = document.documentElement
    root.dataset.theme = theme
    document.body.dataset.theme = theme
  }, [theme])

  return useMemo(() => ({ mode, theme, setMode }), [mode, theme])
}
