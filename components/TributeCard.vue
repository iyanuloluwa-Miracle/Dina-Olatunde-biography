<script setup lang="ts">
import type { Tribute } from '~/types/content'

defineProps<{ tribute: Tribute }>()
</script>

<template>
  <article
    data-reveal
    class="card-lift flex h-full flex-col rounded-sm border border-navy/10 bg-white p-8"
  >
    <Icon name="ph:quotes" class="h-7 w-7 text-gold" aria-hidden="true" />

    <p class="mt-5 flex-1 font-quote text-xl italic leading-relaxed text-navy/85">
      {{ tribute.message }}
    </p>

    <footer class="mt-8 flex items-center gap-4 border-t border-navy/10 pt-6">
      <NuxtImg
        :src="tribute.photo"
        :alt="`Photo of ${tribute.name}`"
        width="112"
        height="112"
        class="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40"
        format="webp"
        loading="lazy"
      />
      <div>
        <p class="font-semibold text-navy">{{ tribute.name }}</p>
        <p class="text-sm text-stone">{{ tribute.relationship }}</p>
      </div>
    </footer>
  </article>
</template>
