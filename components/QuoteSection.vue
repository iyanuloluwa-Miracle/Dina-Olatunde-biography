<script setup lang="ts">
import { lessons } from '~/data/content'

const root = ref<HTMLElement | null>(null)
const { run } = useGsap()

run(root, ({ gsap }) => {
  gsap.utils.toArray<HTMLElement>('[data-lesson]').forEach((el) => {
    gsap.from(el.querySelectorAll('[data-lesson-part]'), {
      opacity: 0,
      y: 36,
      duration: 1.1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 78%', once: true },
    })
  })

  // Slow parallax on the floating decorative marks.
  gsap.to('[data-float]', {
    yPercent: -30,
    ease: 'none',
    scrollTrigger: { trigger: root.value, start: 'top bottom', end: 'bottom top', scrub: true },
  })
})
</script>

<template>
  <section
    ref="root"
    class="relative overflow-hidden bg-navy-deep py-28 text-ivory md:py-44"
    aria-label="Life lessons"
  >
    <!-- Floating decorative quotation marks -->
    <span
      data-float
      class="pointer-events-none absolute -top-10 left-8 select-none font-display text-[16rem] leading-none text-gold/5 md:text-[26rem]"
      aria-hidden="true"
      >“</span
    >
    <span
      data-float
      class="pointer-events-none absolute -bottom-32 right-4 select-none font-display text-[16rem] leading-none text-gold/5 md:text-[26rem]"
      aria-hidden="true"
      >”</span
    >

    <div class="relative mx-auto max-w-4xl px-6">
      <UiSectionHeading
        eyebrow="Chapter VI · The Wisdom"
        title="Lessons He Taught Us"
        light
        align="center"
      />

      <div class="space-y-24 md:space-y-32">
        <blockquote v-for="lesson in lessons" :key="lesson.quote" data-lesson class="text-center">
          <p
            data-lesson-part
            class="font-quote text-3xl italic leading-snug text-ivory md:text-5xl md:leading-tight"
          >
            “{{ lesson.quote }}”
          </p>
          <footer data-lesson-part class="mt-8 flex items-center justify-center gap-4">
            <span class="h-px w-10 bg-gold/60" aria-hidden="true" />
            <cite class="text-xs font-semibold uppercase not-italic tracking-widest2 text-gold">
              {{ lesson.context }}
            </cite>
            <span class="h-px w-10 bg-gold/60" aria-hidden="true" />
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>
