<script setup lang="ts">
import DessertSection from '../components/dessert/DessertContainer.vue'
import CartSection from '../components/cart/CartContainer.vue'
import { ref } from 'vue'

const isOpenModal = ref<boolean>(false)

const handleIsOpenModal = () => {
  isOpenModal.value = !isOpenModal.value
}
</script>

<template>
  <main class="grid md:grid-cols-[1fr_400px] max-w-7xl mx-auto w-full p-4 gap-8">
    <DessertSection :open-modal="handleIsOpenModal" />
    <CartSection :is-open-modal="isOpenModal" :close-modal="handleIsOpenModal" />
  </main>
</template>
