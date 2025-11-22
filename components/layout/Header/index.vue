<script setup lang="ts">
import { useCartStore } from '~/store/cart'

const cartStore = useCartStore()

await useAsyncData(
  'cart',
  () => cartStore.fetchCounter()
)
</script>

<template>
  <header class="header">
    <UiLogo />
    <NuxtLink
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