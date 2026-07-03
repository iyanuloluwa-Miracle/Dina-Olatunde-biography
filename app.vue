<script setup lang="ts">
// One-page digital autobiography. Each section is an independent,
// reusable component; all content lives in ~/data/content.ts.
</script>

<template>
  <div>
    <AppNavbar />
    <main id="main">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <AchievementsSection />
      <ValuesSection />
      <GallerySection />
      <QuoteSection />
      <TributesSection />
      <LegacySection />
    </main>
    <FooterSection />
  </div>
</template>
