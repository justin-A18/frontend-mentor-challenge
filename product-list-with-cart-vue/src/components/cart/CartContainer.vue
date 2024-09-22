<script setup lang="ts">
import { watch } from 'vue'

import { formatPrice } from '@/helpers/formatPrice.helper'

import IconCarbonNeutral from '../icons/IconCarbonNeutral.vue'
import IconClose from '../icons/IconClose.vue'
import CardItem from './CartItem.vue'

import { store } from '@/store/store'

defineProps<{
  closeModal: () => void
  isOpenModal: boolean
}>()

watch(
  () => store.cart,
  () => {
    store.updateTotalPrice(), store.setTotalQuantity()
  },
  { deep: true }
)

</script>

<template>
  <div
    :class="`p-4 ${isOpenModal ? 'block opacity-100 visible -translate-y-0' : 'opacity-0 invisible -translate-y-40'} bg-custom-Rose-100 w-full min-h-full fixed top-0 left-0 transition-all duration-500 md:relative md:block md:translate-y-0 md:visible md:opacity-100`"
  >
    <button class="md:hidden" @click="closeModal">
      <IconClose />
    </button>

    <div class="sticky space-y-8 top-5">
      <div class="rounded-md space-y-4 p-4 bg-white">
        <h2 class="text-custom-Red font-bold text-2xl">Your Cart ({{ store.totalQuantity }})</h2>

        <div v-if="store.cart.length === 0" class="flex flex-col items-center">
          <img src="/images/illustration-empty-cart.svg" alt="illustration" />

          <h3 class="text-custom-Rose-500 text-center font-medium py-4">
            Your added items will appear here
          </h3>
        </div>

        <div v-if="store.cart.length >= 1" class="space-y-4">
          <CardItem
            v-for="cart in store.cart"
            v-bind:key="cart.name"
            :name="cart.name"
            :quantity="cart.quantity"
            :price="cart.price"
            :image="cart.image"
          />
        </div>

        <div class="flex items-center justify-between">
          <span class="text-custom-Rose-900 font-bold">Order Total</span>
          <span class="text-2xl text-custom-Rose-900 font-bold">{{
            formatPrice(store.totalPrice)
          }}</span>
        </div>
      </div>

      <div class="flex items-center gap-2 justify-center">
        <IconCarbonNeutral />

        <p class="text-custom-Rose-500">
          This is a
          <span class="font-bold text-custom-Rose-900">carbon-neutral</span> delivery
        </p>
      </div>

      <button
        class="w-full max-w-[80%] transition-colors duration-500 mx-auto block p-3 bg-custom-Red text-white rounded-full hover:bg-transparent hover:text-custom-Red border-2 hover:border-custom-Red"
      >
        Confirm Order
      </button>
    </div>
  </div>
</template>
