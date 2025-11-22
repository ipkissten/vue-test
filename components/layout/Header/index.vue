<script setup lang="ts">
const counter = ref(0)
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
      <span class="header__counter">{{ counter }}</span>
    </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
@use "./style.scss";
</style>