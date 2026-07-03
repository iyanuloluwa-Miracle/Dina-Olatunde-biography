<script setup lang="ts">
import { values } from '~/data/content'

const root = ref<HTMLElement | null>(null)
const { run } = useGsap()
useReveal(root)

run(root, ({ gsap }) => {
  // Cards rise in a wave; icons breathe gently on hover via CSS.
  gsap.from('[data-value-card]', {
    opacity: 0,
    y: 48,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.08,
    scrollTrigger: { trigger: '[data-values-grid]', start: 'top 80%', once: true },
  })
})
</script>

<template>
  <section ref="root" class="bg-navy py-24 text-ivory md:py-36" aria-label="Core values">
    <div class="mx-auto max-w-7xl px-6">
      <UiSectionHeading
        eyebrow="Chapter IV · The Compass"
        title="The Values He Lives By"
        light
        align="center"
      />

      <div data-values-grid class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="value in values"
          :key="value.title"
          data-value-card
          class="group rounded-sm border border-ivory/10 bg-navy-soft/50 p-8 text-center transition-colors duration-500 hover:border-gold/40"
        >
          <span
            class="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-500 group-hover:scale-110"
            aria-hidden="true"
          >
            <Icon :name="value.icon" class="h-5 w-5" />
          </span>
          <h3 class="mt-5 font-display text-xl">{{ value.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-ivory/60">{{ value.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
