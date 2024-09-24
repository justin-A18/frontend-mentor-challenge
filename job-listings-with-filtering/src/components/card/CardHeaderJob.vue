<script lang="ts" setup>
import BadgeFeature from '../badge/BadgeFeature.vue'

const props = defineProps<{
  new: boolean
  company: string
  featured: boolean
}>()
</script>

<template>
  <header class="flex items-center gap-4">
    <h3 class="text-custom-desaturated-dark-cyan font-bold text-sm">
      {{ props.company }}
    </h3>

    <div class="space-x-2">
      <BadgeFeature v-if="props.new" variant="primary"> new </BadgeFeature>

      <BadgeFeature v-if="props.featured" variant="secondary"> feature </BadgeFeature>
    </div>
  </header>
</template>
