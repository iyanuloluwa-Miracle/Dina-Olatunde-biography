<script setup lang="ts">
import { hero } from '~/data/content'

const root = ref<HTMLElement | null>(null)
const { run } = useGsap()
const { $lenis } = useNuxtApp()

run(root, ({ gsap }) => {
  // One orchestrated entrance — the page's opening scene.
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('[data-hero="eyebrow"]', { y: 24, opacity: 0, duration: 0.9 })
    .from(
      '[data-hero="name"] .line',
      { yPercent: 110, duration: 1.2, stagger: 0.12, ease: 'power4.out' },
      '-=0.5'
    )
    .from('[data-hero="bio"]', { y: 24, opacity: 0, duration: 0.9 }, '-=0.6')
    .from('[data-hero="quote"]', { y: 24, opacity: 0, duration: 0.9 }, '-=0.6')
    .from('[data-hero="cta"]', { y: 16, opacity: 0, duration: 0.8 }, '-=0.5')
    .from('[data-hero="portrait"]', { scale: 1.12, opacity: 0, duration: 1.6, ease: 'power2.out' }, 0.3)
    .from('[data-hero="scroll"]', { opacity: 0, duration: 1 }, '-=0.4')

  // Gentle parallax as the hero scrolls away.
  gsap.to('[data-hero="portrait"]', {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: { trigger: root.value, start: 'top top', end: 'bottom top', scrub: true },
  })
  gsap.to('[data-hero="copy"]', {
    yPercent: -8,
    opacity: 0.4,
    ease: 'none',
    scrollTrigger: { trigger: root.value, start: 'top top', end: 'bottom top', scrub: true },
  })
})

function discover() {
  $lenis?.scrollTo('#about', { offset: -8 })
}
</script>

<template>
  <section
    id="hero"
    ref="root"
    class="relative flex min-h-screen items-center overflow-hidden bg-navy text-ivory"
    aria-label="Introduction"
  >
    <!-- Ambient background texture -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div class="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
    </div>

    <div class="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-24 pt-32 lg:grid-cols-[1.1fr,0.9fr] lg:gap-20">
      <!-- Copy -->
      <div data-hero="copy">
        <p data-hero="eyebrow" class="eyebrow">A Life Well Lived · Est. 1952</p>

        <h1
          data-hero="name"
          class="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span class="block overflow-hidden"><span class="line block">Chief Emmanuel</span></span>
          <span class="block overflow-hidden"
            ><span class="line block text-gold">Adewale</span></span
          >
        </h1>

        <p data-hero="bio" class="mt-6 text-sm font-semibold uppercase tracking-widest2 text-stone-light">
          {{ hero.occupation }}
        </p>

        <p data-hero="bio" class="mt-6 max-w-xl text-lg leading-relaxed text-ivory/80">
          {{ hero.bio }}
        </p>

        <blockquote
          data-hero="quote"
          class="mt-8 border-l border-gold/60 pl-5 font-quote text-xl italic leading-relaxed text-ivory/90 md:text-2xl"
        >
          {{ hero.quote }}
        </blockquote>

        <div data-hero="cta" class="mt-10">
          <button
            class="group inline-flex items-center gap-3 rounded-full border border-gold/70 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-500 hover:bg-gold hover:text-navy"
            @click="discover"
          >
            Discover My Journey
            <Icon
              name="ph:arrow-down"
              class="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1"
            />
          </button>
        </div>
      </div>

      <!-- Portrait -->
      <figure data-hero="portrait" class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="absolute -inset-3 rounded-sm border border-gold/25" aria-hidden="true" />
        <NuxtImg
          :src="hero.portrait"
          alt="Portrait of Chief Emmanuel Adewale"
          width="900"
          height="1200"
          sizes="sm:90vw md:60vw lg:40vw"
          class="relative aspect-[3/4] w-full rounded-sm object-cover shadow-2xl shadow-black/40"
          format="webp"
          loading="eager"
          fetchpriority="high"
        />
        <figcaption class="sr-only">Hero portrait</figcaption>
      </figure>
    </div>

    <!-- Scroll indicator -->
    <div
      data-hero="scroll"
      class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      aria-hidden="true"
    >
      <span class="text-[10px] uppercase tracking-widest2 text-stone-light">Scroll</span>
      <span class="relative block h-12 w-px overflow-hidden bg-ivory/20">
        <span class="animate-scroll-hint absolute left-0 top-0 h-4 w-px bg-gold" />
      </span>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll-hint {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(400%);
  }
}
.animate-scroll-hint {
  animation: scroll-hint 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
</style>
