<script lang="ts" setup>
import BadgeFeature from '../badge/BadgeFeature.vue'

const props = defineProps<{
  role: string
  level: string
  tools: string[]
  languages: string[]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-2 flex-1 sm:justify-end">
    <BadgeFeature variant="tertiary">{{ props.role }}</BadgeFeature>
    <BadgeFeature variant="tertiary">{{ props.level }}</BadgeFeature>

    <BadgeFeature v-for="tool in props.tools" :key="tool" variant="tertiary">
      {{ tool }}
    </BadgeFeature>

    <BadgeFeature v-for="language in props.languages" :key="language" variant="tertiary">
      {{ language }}
    </BadgeFeature>
  </div>
</template>
