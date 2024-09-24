<script setup lang="ts">
import JobItem from './components/JobItem.vue'
import HeroHeader from './components/HeroHeader.vue'
import jobs from './mocks/data.json'
</script>

<template>
  <HeroHeader />
  <main class="bg-custom-light-grayish-cyan-background px-4 py-8 w-full min-h-[calc(100vh-8rem)]">
    <section class="max-w-2xl mx-auto space-y-8">
      <JobItem v-for="job in jobs" :key="job.id" v-bind="job" />
    </section>
  </main>
</template>
