<script setup lang="ts">
import type { ProductProps } from '~/types/components/product'
import { returnCurrencySymbol, formatNumberLang } from '~/utils/helpers'
import { useCartStore } from '~/store/cart'

const cartStore = useCartStore()

const props = defineProps<ProductProps>()
</script>

<template>
  <CardsBase>
    <template #default="{ }">
      <NuxtImg
        class="product-card__img"
        :src="img"
        width="200"
        height="200"
        :alt="title"
        format="webp"
        quality="80"
      />
      <h2 class="product-card__title">
        {{ title }}
      </h2>
      <span class="product-card__brand">
        {{ brand }}
      </span>
      <span class="product-card__price">
        {{ returnCurrencySymbol(price.currency) }}{{ formatNumberLang(price.value) }}
      </span>
      <UiButton
        @click="cartStore.addToCart(id)"
      >
        Add to cart
      </UiButton>
    </template>
  </CardsBase>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>