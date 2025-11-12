declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function initAnalytics(measurementId?: string) {
  if (!measurementId || typeof window === 'undefined') {
    return
  }

  const existing = document.querySelector<HTMLScriptElement>('script[data-ga-loader="true"]')
  if (existing) {
    return
  }

  window.dataLayer = window.dataLayer || []
  const gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args)
  }
  window.gtag = gtag

  const loader = document.createElement('script')
  loader.async = true
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  loader.dataset.gaLoader = 'true'
  document.head.append(loader)

  const inline = document.createElement('script')
  inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}`
  document.head.append(inline)

  gtag('js', new Date())
  gtag('config', measurementId)
}
