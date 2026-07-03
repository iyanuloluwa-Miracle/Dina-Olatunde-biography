<script setup lang="ts">
import { legacy } from '~/data/content'

const root = ref<HTMLElement | null>(null)
const { run } = useGsap()

run(root, ({ gsap }) => {
  // Full-bleed image drifts slower than the page — a cinematic close.
  gsap.fromTo(
    '[data-legacy-image]',
    { yPercent: -12, scale: 1.15 },
    {
      yPercent: 12,
      scale: 1.15,
      ease: 'none',
      scrollTrigger: { trigger: root.value, start: 'top bottom', end: 'bottom top', scrub: true },
    }
  )

  // The lead line writes itself word by word.
  gsap.from('[data-legacy-word]', {
    opacity: 0,
    y: 40,
    duration: 0.9,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: { trigger: '[data-legacy-lead]', start: 'top 78%', once: true },
  })

  gsap.from('[data-legacy-copy] > *', {
    opacity: 0,
    y: 32,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: { trigger: '[data-legacy-copy]', start: 'top 82%', once: true },
  })
})
</script>

<template>
  <section
    id="legacy"
    ref="root"
    class="relative overflow-hidden py-32 text-ivory md:py-48"
    aria-label="Legacy"
  >
    <!-- Parallax backdrop -->
    <div class="absolute inset-0" aria-hidden="true">
      <NuxtImg
        data-legacy-image
        :src="legacy.image"
        alt=""
        width="1600"
        height="900"
        sizes="100vw"
        class="h-full w-full object-cover"
        format="webp"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-navy-deep/85" />
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </div>

    <div class="relative mx-auto max-w-4xl px-6 text-center">
      <p class="eyebrow">Chapter VIII · The Inheritance</p>

      <h2
        data-legacy-lead
        class="mt-6 font-display text-4xl leading-tight md:text-6xl lg:text-7xl"
      >
        <span
          v-for="(word, i) in legacy.lead.split(' ')"
          :key="i"
          data-legacy-word
          class="inline-block"
          :class="word === 'people.' ? 'text-gold' : ''"
          >{{ word }}&nbsp;</span
        >
      </h2>

      <div data-legacy-copy class="mx-auto mt-12 max-w-prose2 space-y-7 text-left md:mt-16">
        <p
          v-for="(paragraph, i) in legacy.paragraphs"
          :key="i"
          class="text-lg leading-loose text-ivory/80"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
