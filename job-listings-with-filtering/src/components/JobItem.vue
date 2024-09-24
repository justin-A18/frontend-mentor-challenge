<script lang="ts" setup>
import type { Job } from '@/interfaces/job.interface'
import CardJob from './card/CardJob.vue'
import TagsJob from './tags/TagsJob.vue'

const props = defineProps<Job>()
</script>

<template>
  <article
    class="bg-white px-6 py-4 shadow-md rounded-sm border-l-4 hover:border-custom-desaturated-dark-cyan transition-all duration-400"
  >
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
      <div class="flex items-center gap-4">
        <img class="size-14 md:size-16" 
          :src="props.logo" 
          :alt="props.company" />

        <CardJob v-bind:="props" />
      </div>

      <hr class="sm:hidden border" />

      <TagsJob v-bind:="props" />
    </div>
  </article>
</template>
