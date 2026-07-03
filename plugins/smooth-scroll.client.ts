import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Client-only plugin: creates a single Lenis instance for buttery
 * smooth scrolling and keeps GSAP's ScrollTrigger in sync with it.
 * Injected app-wide as `$lenis`.
 */
export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !prefersReducedMotion,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  nuxtApp.hook('app:beforeMount', () => {
    if (!prefersReducedMotion) {
      // Reveal targets start hidden only once we know JS is running
      // and the user is happy with motion.
      document.documentElement.classList.add('gsap-ready')
    }
  })

  return {
    provide: { lenis },
  }
})
