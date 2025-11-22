<script setup lang="ts">
import type { Price } from '~/types'
import { formatNumberLang } from '~/utils/helpers'

interface Props {
  title: string
  img: string
  brand: string
  price: Price
}

const { price } = defineProps<Props>()

const currency = computed(() => {
  switch (price.currency) {
    case 'USD':
      return '$'
    case 'EUR':
      return '€'
  }
})
</script>

<template>
  <div class="product-card">
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
      {{ currency }}{{ formatNumberLang(price.value) }}
    </span>
    <UiButton>
      Add to cart
    </UiButton>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>