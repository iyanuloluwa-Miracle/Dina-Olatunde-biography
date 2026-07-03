<script setup lang="ts">
import { footer } from '~/data/content'

const { $lenis } = useNuxtApp()
const year = new Date().getFullYear()

function backToTop() {
  $lenis?.scrollTo(0)
}
</script>

<template>
  <footer class="bg-navy-deep py-16 text-ivory" aria-label="Footer">
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center">
      <p class="font-display text-3xl md:text-4xl">
        {{ footer.name }}
      </p>
      <p class="font-quote text-lg italic text-gold">{{ footer.years }}</p>

      <div class="h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden="true" />

      <p class="text-sm text-ivory/60">
        © {{ year }} · {{ footer.builtBy }}
      </p>

      <button
        class="group mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-ivory/70 transition-colors hover:text-gold"
        @click="backToTop"
      >
        <Icon
          name="ph:arrow-up"
          class="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1"
        />
        Back to top
      </button>
    </div>
  </footer>
</template>
