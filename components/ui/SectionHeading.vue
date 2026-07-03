<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  /** Set when the heading sits on a navy background */
  light?: boolean
  align?: 'left' | 'center'
}>()
</script>

<template>
  <header
    class="mb-14 md:mb-20"
    :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : ''"
  >
    <p class="eyebrow" data-reveal>{{ eyebrow }}</p>
    <h2
      class="section-title mt-4"
      :class="light ? 'text-ivory' : 'text-navy'"
      data-reveal
    >
      {{ title }}
    </h2>
    <div
      class="gold-rule mt-6"
      :class="align === 'center' ? 'mx-auto bg-gradient-to-r from-transparent via-gold to-transparent' : ''"
      data-reveal
    />
  </header>
</template>
