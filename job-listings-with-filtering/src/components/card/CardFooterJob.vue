<script lang="ts" setup>
import BadgeFeature from '../badge/BadgeFeature.vue'

const props = defineProps<{
  postedAt: string
  contract: string
  location: string
}>()
</script>

<template>
  <footer class="flex flex-wrap gap-1">
    <BadgeFeature variant="ghost">{{ props.postedAt }}</BadgeFeature>
    <BadgeFeature variant="ghost">{{ props.contract }}</BadgeFeature>
    <BadgeFeature variant="ghost">{{ props.location }}</BadgeFeature>
  </footer>
</template>
