<script setup lang="ts">
import { tributes } from '~/data/content'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section id="tributes" ref="root" class="bg-ivory py-24 md:py-36" aria-label="Family tributes">
    <div class="mx-auto max-w-7xl px-6">
      <UiSectionHeading
        eyebrow="Chapter VII · The Voices"
        title="In the Words of Those Who Love Him"
      />

      <div class="grid gap-6 md:grid-cols-2 lg:gap-8">
        <TributeCard v-for="tribute in tributes" :key="tribute.name" :tribute="tribute" />
      </div>
    </div>
  </section>
</template>
