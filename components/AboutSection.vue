<script setup lang="ts">
import { about } from '~/data/content'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section id="about" ref="root" class="bg-ivory py-24 md:py-36" aria-label="About his life">
    <div class="mx-auto max-w-7xl px-6">
      <UiSectionHeading eyebrow="Chapter I · The Beginning" title="The Making of the Man" />

      <div class="grid gap-14 lg:grid-cols-[0.85fr,1.15fr] lg:gap-20">
        <!-- Portrait column -->
        <figure data-reveal="left" class="relative self-start lg:sticky lg:top-28">
          <NuxtImg
            :src="about.portrait"
            alt="A young Emmanuel Adewale"
            width="800"
            height="1000"
            sizes="sm:90vw lg:38vw"
            class="aspect-[4/5] w-full rounded-sm object-cover shadow-xl shadow-navy/10"
            format="webp"
            loading="lazy"
          />
          <figcaption class="mt-4 flex items-center gap-3 text-sm text-stone">
            <span class="gold-rule !w-8" aria-hidden="true" />
            Ondo State, where the story begins
          </figcaption>
        </figure>

        <!-- Story column -->
        <div class="max-w-prose2">
          <p
            v-for="(paragraph, i) in about.paragraphs"
            :key="i"
            data-reveal
            class="mb-8 text-lg leading-loose text-navy/80 first:font-quote first:text-2xl first:leading-relaxed first:text-navy md:first:text-3xl"
          >
            <span
              v-if="i === 0"
              class="float-left mr-3 font-display text-6xl leading-[0.8] text-gold md:text-7xl"
              aria-hidden="true"
              >{{ paragraph.charAt(0) }}</span
            >{{ i === 0 ? paragraph.slice(1) : paragraph }}
          </p>

          <!-- Decorative divider -->
          <div data-reveal class="mt-12 flex items-center gap-4" aria-hidden="true">
            <span class="h-px flex-1 bg-navy/10" />
            <Icon name="ph:diamond" class="h-3 w-3 text-gold" />
            <span class="h-px flex-1 bg-navy/10" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
