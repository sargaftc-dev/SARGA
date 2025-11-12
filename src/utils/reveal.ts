let observer: IntersectionObserver | null = null

export function initRevealAnimations() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  if (!elements.length || typeof IntersectionObserver === 'undefined') {
    return
  }

  const reduceMotion =
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) {
    elements.forEach((element) => element.classList.add('is-visible'))
    return
  }

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )
  }

  elements.forEach((element) => {
    if (!element.classList.contains('is-visible')) {
      observer?.observe(element)
    }
  })
}
