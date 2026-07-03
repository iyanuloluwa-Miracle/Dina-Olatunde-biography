<script setup lang="ts">
import { achievements } from '~/data/content'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section
    id="achievements"
    ref="root"
    class="bg-ivory py-24 md:py-36"
    aria-label="Achievements"
  >
    <div class="mx-auto max-w-7xl px-6">
      <UiSectionHeading eyebrow="Chapter III · The Work" title="A Record of Quiet Excellence" />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <AchievementCard
          v-for="achievement in achievements"
          :key="achievement.title"
          :achievement="achievement"
        />
      </div>
    </div>
  </section>
</template>
