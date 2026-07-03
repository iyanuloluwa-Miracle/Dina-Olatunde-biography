/**
 * Declarative scroll reveals.
 *
 * Mark elements inside a section with `data-reveal` (optionally
 * `data-reveal="up|left|right|zoom"`), call `useReveal(sectionRef)`,
 * and each element fades in as it enters the viewport. Elements that
 * share a parent are staggered automatically.
 */
export function useReveal(root: Ref<HTMLElement | null>) {
  const { run } = useGsap()

  run(root, ({ gsap }) => {
    const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]')

    const fromVars = (kind: string | undefined): gsap.TweenVars => {
      switch (kind) {
        case 'left':
          return { opacity: 0, x: -48 }
        case 'right':
          return { opacity: 0, x: 48 }
        case 'zoom':
          return { opacity: 0, scale: 0.94 }
        default:
          return { opacity: 0, y: 40 }
      }
    }

    targets.forEach((el) => {
      gsap.fromTo(el, fromVars(el.dataset.reveal || 'up'), {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        delay: Number(el.dataset.revealDelay ?? 0),
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      })
    })
  })
}
