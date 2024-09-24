<script lang="ts" setup>
const variants = {
  primary: 'bg-custom-desaturated-dark-cyan text-white uppercase rounded-full text-xs',
  secondary: 'bg-custom-very-dark-grayish-cyan text-white uppercase rounded-full text-xs',
  tertiary:
    'bg-custom-light-grayish-cyan-background text-custom-desaturated-dark-cyan hover:bg-custom-desaturated-dark-cyan hover:text-white cursor-pointer transition-colors duration-300 rounded-md text-sm',
  ghost: 'bg-transparent text-gray-400 rounded-md text-sm'
}

const { variant } = defineProps<{
  variant: keyof typeof variants
}>()
</script>

<template>
  <span :class="`font-medium px-2 py-1 ${variants[variant]}`">
    <slot />
  </span>
</template>
