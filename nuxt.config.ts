// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/motion/nuxt',
    '@nuxt/eslint',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Chief Emmanuel Adewale — A Life Well Lived',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'A digital legacy celebrating the life, values and enduring impact of Chief Emmanuel Adewale — educator, community builder, husband and father.',
        },
        { name: 'theme-color', content: '#0F172A' },
        // Open Graph
        { property: 'og:type', content: 'profile' },
        { property: 'og:title', content: 'Chief Emmanuel Adewale — A Life Well Lived' },
        {
          property: 'og:description',
          content:
            'An interactive digital autobiography preserving the story, wisdom and legacy of a remarkable father.',
        },
        { property: 'og:image', content: '/images/og-cover.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          // Structured data — REPLACE with real details.
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Emmanuel Adewale',
            jobTitle: 'Educator & Community Leader',
            description:
              'A digital tribute to the life and legacy of Chief Emmanuel Adewale.',
          }),
        },
      ],
    },
  },

  icon: {
    // Phosphor is bundled locally (@iconify-json/ph) — no runtime
    // requests to the Iconify API, faster and works offline.
    serverBundle: { collections: ['ph'] },
  },

  image: {
    // Placeholder photography is served from picsum.photos.
    // Once real family photos are added to /public/images, this can be removed.
    domains: ['picsum.photos'],
  },

  eslint: {
    config: { stylistic: false },
  },

  typescript: { strict: true },
})
