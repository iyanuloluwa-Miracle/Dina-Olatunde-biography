<script setup lang="ts">
import type { Achievement } from '~/types/content'

defineProps<{ achievement: Achievement }>()
</script>

<template>
  <article
    data-reveal
    class="card-lift group relative flex h-full flex-col rounded-sm border border-navy/10 bg-white p-8"
  >
    <span
      class="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold transition-all duration-500 group-hover:rotate-6 group-hover:bg-gold group-hover:text-navy"
      aria-hidden="true"
    >
      <Icon :name="achievement.icon" class="h-6 w-6" />
    </span>

    <h3 class="mt-6 font-display text-xl text-navy md:text-2xl">
      {{ achievement.title }}
    </h3>
    <p class="mt-3 flex-1 leading-relaxed text-stone">{{ achievement.description }}</p>

    <p class="mt-6 border-t border-navy/10 pt-4 text-xs font-semibold uppercase tracking-widest2 text-gold">
      {{ achievement.year }}
    </p>
  </article>
</template>
