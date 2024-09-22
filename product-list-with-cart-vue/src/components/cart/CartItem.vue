<script setup lang="ts">
import { formatPrice } from '@/helpers/formatPrice.helper'
import IconRemoveToCart from '../icons/IconRemoveToCart.vue'
import type { CartItem } from '@/interfaces/cart.interface'
import { store } from '@/store/store'

defineProps<CartItem>()
</script>

<template>
  <article class="flex items-center justify-between">
    <div class="space-y-1">
      <h3 class="font-bold text-custom-Rose-900">{{ name }}</h3>
      <div class="space-x-2">
        <span class="font-medium text-custom-Red">{{ quantity }}x</span>
        <span class="text-custom-Rose-400 font-medium">@ {{ formatPrice(price) }}</span>
        <span class="text-custom-Rose-400 font-medium">{{ formatPrice(price * quantity) }}</span>
      </div>
    </div>

    <button @click="store.deleteToCart(name)">
      <IconRemoveToCart />
    </button>
  </article>
</template>
