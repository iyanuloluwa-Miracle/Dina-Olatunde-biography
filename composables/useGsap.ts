import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

/**
 * Central access point for GSAP inside components.
 *
 * `run(setup)` executes animation code inside a gsap.context scoped to
 * the given root element and automatically reverts everything when the
 * component unmounts — no leaked ScrollTriggers, no double-registration.
 *
 * When the user prefers reduced motion, `run` simply never executes,
 * so content stays fully visible and static.
 */
export function useGsap() {
  if (import.meta.client && !registered) {
    gsap.registerPlugin(ScrollTrigger)
    registered = true
  }

  const prefersReducedMotion = () =>
    import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const run = (
    root: Ref<HTMLElement | null> | HTMLElement | null,
    setup: (ctx: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void
  ) => {
    let ctx: gsap.Context | undefined

    onMounted(() => {
      if (prefersReducedMotion()) return
      const el = root && 'value' in root ? root.value : root
      ctx = gsap.context(() => setup({ gsap, ScrollTrigger }), el ?? undefined)
    })

    onBeforeUnmount(() => ctx?.revert())
  }

  return { gsap, ScrollTrigger, run, prefersReducedMotion }
}
