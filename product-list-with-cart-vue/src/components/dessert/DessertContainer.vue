<script setup lang="ts">
import DessertCard from './DessertCard.vue'
import desserts from '../../mocks/data.json'
import IconShoppingCart from '../icons/IconShoppingCart.vue'

defineProps<{
  openModal: () => void
}>()

</script>

<template>
  <div class="flex flex-col gap-4">
    <header class="flex items-center justify-between">
      <h1 class="text-4xl text-custom-Rose-900 font-bold">Dessers</h1>
      <button class="md:hidden" @click="openModal">
        <IconShoppingCart />
      </button>
    </header>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      <DessertCard
        v-for="dessert in desserts"
        v-bind:key="dessert.name"
        :name="dessert.name"
        :price="dessert.price"
        :image="dessert.image"
        :category="dessert.category"
      />
    </div>
  </div>
</template>
