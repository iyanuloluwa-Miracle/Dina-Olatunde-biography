<script setup lang="ts">
const { $lenis } = useNuxtApp()

const links = [
  { label: 'Story', target: '#about' },
  { label: 'Journey', target: '#timeline' },
  { label: 'Achievements', target: '#achievements' },
  { label: 'Gallery', target: '#gallery' },
  { label: 'Tributes', target: '#tributes' },
  { label: 'Legacy', target: '#legacy' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function goTo(target: string) {
  menuOpen.value = false
  $lenis?.scrollTo(target, { offset: -8 })
}
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="
      scrolled || menuOpen
        ? 'bg-navy/90 py-3 shadow-lg shadow-navy/20 backdrop-blur-md'
        : 'bg-transparent py-6'
    "
    aria-label="Main navigation"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6">
      <button
        class="font-display text-lg tracking-wide text-ivory"
        aria-label="Back to top"
        @click="goTo('#hero')"
      >
        E<span class="text-gold">.</span>A<span class="text-gold">.</span>
      </button>

      <!-- Desktop links -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.target">
          <button
            class="text-sm font-medium tracking-wide text-ivory/80 transition-colors hover:text-gold"
            @click="goTo(link.target)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>

      <!-- Mobile toggle -->
      <button
        class="md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <Icon :name="menuOpen ? 'ph:x' : 'ph:list'" class="h-6 w-6 text-ivory" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul v-if="menuOpen" id="mobile-menu" class="space-y-1 px-6 pb-6 pt-4 md:hidden">
        <li v-for="link in links" :key="link.target">
          <button
            class="block w-full py-2 text-left text-base text-ivory/90 hover:text-gold"
            @click="goTo(link.target)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>
    </Transition>
  </nav>
</template>
