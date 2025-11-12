import type { ReactNode } from 'react'
import type { ThemeMode } from '../../hooks/useThemePreference'
import './theme-toggle.css'

const OPTIONS: Array<{ value: ThemeMode; label: string; icon: ReactNode }> = [
  {
    value: 'system',
    label: 'Auto',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3M18 12h3M6.34 17.66l-2.12 2.12M19.78 4.22l-2.12 2.12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    value: 'light',
    label: 'Light',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M6.34 17.66l-2.12 2.12M19.78 4.22l-2.12 2.12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
        <path
          d="M20 15.5A8.5 8.5 0 1 1 10.5 4 7 7 0 0 0 20 15.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

interface ThemeToggleProps {
  mode: ThemeMode
  onChange: (mode: ThemeMode) => void
}

export function ThemeToggle({ mode, onChange }: ThemeToggleProps) {
  return (
    <div className="theme-toggle" role="group" aria-label="Color theme selector">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`theme-toggle__option ${mode === option.value ? 'is-active' : ''}`.trim()}
          onClick={() => onChange(option.value)}
          aria-pressed={mode === option.value}
        >
          {option.icon}
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  )
}
