<script setup lang="ts">
import { gallery } from '~/data/content'

const root = ref<HTMLElement | null>(null)
useReveal(root)

const activeIndex = ref<number | null>(null)
const active = computed(() => (activeIndex.value === null ? null : gallery[activeIndex.value]))
let lastFocused: HTMLElement | null = null

function open(index: number, event: MouseEvent) {
  lastFocused = event.currentTarget as HTMLElement
  activeIndex.value = index
}

function close() {
  activeIndex.value = null
  lastFocused?.focus()
}

function step(direction: 1 | -1) {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + direction + gallery.length) % gallery.length
}

function onKeydown(e: KeyboardEvent) {
  if (activeIndex.value === null) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') step(1)
  if (e.key === 'ArrowLeft') step(-1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))

// Lock native scroll while the lightbox is open.
const { $lenis } = useNuxtApp()
watch(activeIndex, (value) => {
  if (value === null) $lenis?.start()
  else $lenis?.stop()
})
</script>

<template>
  <section id="gallery" ref="root" class="bg-ivory py-24 md:py-36" aria-label="Photo gallery">
    <div class="mx-auto max-w-7xl px-6">
      <UiSectionHeading eyebrow="Chapter V · The Moments" title="A Life in Photographs" />

      <!-- Masonry via CSS columns; each figure avoids column breaks. -->
      <div class="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        <figure
          v-for="(image, i) in gallery"
          :key="image.src"
          data-reveal="zoom"
          class="break-inside-avoid"
        >
          <button
            class="group relative block w-full overflow-hidden rounded-sm"
            :aria-label="`Open photo: ${image.caption}`"
            @click="open(i, $event)"
          >
            <NuxtImg
              :src="image.src"
              :alt="image.alt"
              :width="image.shape === 'wide' ? 900 : 700"
              :height="image.shape === 'tall' ? 900 : image.shape === 'wide' ? 600 : 700"
              sizes="sm:90vw md:45vw lg:30vw"
              class="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              format="webp"
              loading="lazy"
            />
            <span
              class="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              <span class="text-sm font-medium text-ivory">{{ image.caption }}</span>
            </span>
          </button>
        </figure>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="active"
          class="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-sm md:p-10"
          role="dialog"
          aria-modal="true"
          :aria-label="`Photo: ${active.caption}`"
          @click.self="close"
        >
          <figure class="max-h-full max-w-4xl">
            <img
              :src="active.src"
              :alt="active.alt"
              class="max-h-[78vh] w-auto rounded-sm object-contain shadow-2xl"
            >
            <figcaption class="mt-4 text-center font-quote text-lg italic text-ivory/80">
              {{ active.caption }}
            </figcaption>
          </figure>

          <button
            class="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-gold hover:text-gold"
            aria-label="Close photo"
            @click="close"
          >
            <Icon name="ph:x" class="h-5 w-5" />
          </button>
          <button
            class="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-gold hover:text-gold md:left-8"
            aria-label="Previous photo"
            @click="step(-1)"
          >
            <Icon name="ph:caret-left" class="h-5 w-5" />
          </button>
          <button
            class="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-gold hover:text-gold md:right-8"
            aria-label="Next photo"
            @click="step(1)"
          >
            <Icon name="ph:caret-right" class="h-5 w-5" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
