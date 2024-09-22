<script setup lang="ts">
import type { Desserts } from '@/interfaces/dessert.interface'

import IconIncrementQuantity from '../icons/IconIncrementQuantity.vue'
import IconDecrementQuantity from '../icons/IconDecrementQuantity.vue'
import IconAddToCart from '../icons/IconAddToCart.vue'

import { formatPrice } from '@/helpers/formatPrice.helper'
import { store } from '@/store/store'
import { ref, watch } from 'vue'

const { category, image, name, price } = defineProps<Desserts>()

const quantity = ref(0)

watch(
  () => store.cart,
  () => {
    const item = store.findOneItem(name)
    quantity.value = item ? item.quantity : 0
  },
  { deep: true }
)
</script>

<template>
  <article class="flex flex-col group gap-4 cursor-pointer">
    <div
      class="w-full overflow-hidden relative transition-all duration-200 rounded-md group-hover:border-2 group-hover:border-custom-Red"
    >
      <img
        :src="image.desktop"
        :alt="name"
        class="rounded-md group-hover:scale-105 transition-all duration-500"
      />

      <button
        class="flex items-center justify-center w-48 gap-3 bg-white px-6 py-2 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 shadow-md text-custom-Rose-900 hover:scale-105 transition-all duration-500"
        @click="store.addToCart({ name, price, quantity: quantity + 1, image })"
        v-if="quantity === 0"
      >
        <IconAddToCart /> Add to cart
      </button>

      <div
        class="flex items-center justify-between w-48 text-white bg-custom-Red px-6 py-2 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 shadow-md text-custom-Rose-900 hover:scale-105 transition-all duration-500"
        v-if="quantity > 0"
      >
        <button
          @click="store.deleteToCart(name)"
          class="rounded-full size-6 border-2 border-white flex items-center justify-center"
        >
          <IconDecrementQuantity />
        </button>
        <span>{{ quantity }}</span>
        <button
          @click="store.addToCart({ name, price, quantity: quantity + 1, image })"
          class="rounded-full size-6 border-2 border-white flex items-center justify-center"
        >
          <IconIncrementQuantity />
        </button>
      </div>
    </div>

    <footer class="space-y-1">
      <h4 class="text-custom-Rose-400 font-medium">
        {{ category }}
      </h4>
      <h3 class="text-custom-Rose-900 font-bold">
        {{ name }}
      </h3>
      <p class="text-custom-Red font-bold">{{ formatPrice(price) }}</p>
    </footer>
  </article>
</template>
