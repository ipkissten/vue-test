<script setup lang="ts">
</script>

<template>
    <header class="header">
        <UiLogo />
        <NuxtLink
            to="/cart"
            class="header__cart"
            title="В корзину"
        >
            <img
                src="/images/cart.svg"
                alt="Корзина"
                class="header__cart-icon"
                width=""
                height=""
            >
        </NuxtLink>
    </header>
</template>

<style lang="scss" scoped>
@use "./style.scss";
</style>