<script setup lang="ts">
import { useCartStore } from '~/store/cart'

const cartStore = useCartStore()
const route = useRoute()

await useAsyncData(
  'cart-counter',
  () => cartStore.fetchState()
)

const isCartPage = computed(() => route.path === '/cart')
</script>

<template>
  <header :class="['header', { 'header--cart': isCartPage }]">
    <UiLogo />
    <NuxtLink
      v-if="!isCartPage"
      to="/cart"
      class="header__cart"
      title="To cart"
    >
      <img
        src="/images/cart.svg"
        alt="Cart"
        class="header__cart-icon"
        width="30"
        height="30"
      >
      <span class="header__counter">{{ cartStore.getCounter }}</span>
    </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
@use "./style.scss"
</style>