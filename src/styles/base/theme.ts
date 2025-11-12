export const palette = {
  primary: '#A9D7FF',
  primaryStrong: '#111317',
  primarySoft: '#E6F3FF',
  accent: '#5FB0FF',
  muted: '#7B8794',
  surface: '#FFFFFF',
  line: 'rgba(44, 58, 75, 0.12)',
} as const

export const typography = {
  sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  serif: 'Playfair Display, Georgia, serif',
} as const

export const layout = {
  maxWidth: 1200,
  radiusLg: 28,
  radiusMd: 18,
  radiusSm: 10,
} as const

export const gradients = {
  hero: 'linear-gradient(135deg, rgba(169, 215, 255, 0.8) 0%, rgba(44, 58, 75, 0.85) 100%)',
  card: 'linear-gradient(160deg, rgba(255, 255, 255, 0.75), rgba(169, 215, 255, 0.4))',
} as const
