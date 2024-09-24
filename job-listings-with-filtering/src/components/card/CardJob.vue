<script lang="ts" setup>
import CardHeaderJob from './CardHeaderJob.vue'
import CardFooterJob from './CardFooterJob.vue'

const props = defineProps<{
  new: boolean
  company: string
  featured: boolean
  position: string
  postedAt: string
  contract: string
  location: string
}>()
</script>

<template>
  <div class="space-y-1.5">
    <CardHeaderJob v-bind:="props" />

    <h2 class="text-custom-very-dark-grayish-cyan font-bold">
      {{ props.position }}
    </h2>

    <CardFooterJob v-bind:="props" />
  </div>
</template>
