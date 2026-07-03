<script setup lang="ts">
import { timeline } from '~/data/content'

const root = ref<HTMLElement | null>(null)
const { run } = useGsap()

run(root, ({ gsap }) => {
  // The golden thread — the page's signature. A gold line draws itself
  // down the spine of his life as the visitor scrolls.
  gsap.fromTo(
    '[data-thread]',
    { scaleY: 0 },
    {
      scaleY: 1,
      transformOrigin: 'top center',
      ease: 'none',
      scrollTrigger: {
        trigger: '[data-thread-track]',
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: 0.6,
      },
    }
  )

  // Each chapter slides in from its own side; nodes ignite as they pass.
  gsap.utils.toArray<HTMLElement>('[data-tl-item]').forEach((item, i) => {
    gsap.from(item.querySelector('[data-tl-card]'), {
      opacity: 0,
      x: item.dataset.side === 'left' ? -56 : 56,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: item, start: 'top 80%', once: true },
    })
    gsap.from(item.querySelector('[data-tl-node]'), {
      scale: 0,
      duration: 0.6,
      delay: 0.1 + (i % 2) * 0.05,
      ease: 'back.out(2)',
      scrollTrigger: { trigger: item, start: 'top 80%', once: true },
    })
  })
})
</script>

<template>
  <section
    id="timeline"
    ref="root"
    class="relative overflow-hidden bg-navy py-24 text-ivory md:py-36"
    aria-label="Life timeline"
  >
    <div class="mx-auto max-w-6xl px-6">
      <UiSectionHeading
        eyebrow="Chapter II · The Journey"
        title="Eight Decades, One Thread"
        light
        align="center"
      />

      <div data-thread-track class="relative">
        <!-- Spine: faint track + animated golden thread -->
        <div
          class="absolute bottom-0 left-5 top-0 w-px bg-ivory/10 md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        >
          <div data-thread class="h-full w-full bg-gradient-to-b from-gold-soft via-gold to-gold/40" />
        </div>

        <ol class="space-y-16 md:space-y-24">
          <li
            v-for="(event, i) in timeline"
            :key="event.title"
            data-tl-item
            :data-side="i % 2 === 0 ? 'left' : 'right'"
            class="relative grid items-center gap-6 pl-14 md:grid-cols-2 md:gap-16 md:pl-0"
          >
            <!-- Node -->
            <span
              data-tl-node
              class="absolute left-5 top-2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-gold/50 bg-navy md:left-1/2 md:top-1/2 md:-translate-y-1/2"
              aria-hidden="true"
            >
              <Icon :name="event.icon" class="h-4 w-4 text-gold" />
            </span>

            <!-- Card (alternates sides on desktop) -->
            <article
              data-tl-card
              class="rounded-sm border border-ivory/10 bg-navy-soft/60 p-7 backdrop-blur-sm md:p-9"
              :class="i % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'"
            >
              <p class="font-quote text-lg italic text-gold">
                Chapter {{ event.chapter }} · {{ event.year }}
              </p>
              <h3 class="mt-2 font-display text-2xl md:text-3xl">{{ event.title }}</h3>
              <p class="mt-4 leading-relaxed text-ivory/70">{{ event.description }}</p>
            </article>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
