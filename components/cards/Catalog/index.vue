<script setup lang="ts">
import type { ProductProps } from '~/types/components/product'

const props = defineProps<ProductProps>()
</script>

<template>
  <CardsBase v-bind="props">
    <template #default="{
      returnCurrencySymbol,
      formatNumberLang,
      cartStore,
      counter,
      setCounter
    }">
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
      <UiCounter
        v-if="counter"
        :model-value="counter"
        :id
        classMod="counter--catalog"
        @update:model-value="setCounter"
      />
      <UiButton
        v-else
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