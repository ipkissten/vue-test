<script setup lang="ts">
import type { ProductProps } from '~/types/components/product'
import { returnCurrencySymbol, formatNumberLang } from '~/utils/helpers'
import { useCartStore } from '~/store/cart'

const cartStore = useCartStore()

const props = defineProps<ProductProps>()
const counter = ref(0)
</script>

<template>
  <CardsBase>
    <template #default="{}">
      <NuxtImg
        class="product-card__img"
        :src="img"
        width="60"
        height="60"
        :alt="title"
        format="webp"
        quality="80"
      />
      <h2 class="product-card__name">
        {{ brand }} / {{ title }}
      </h2>
      <span class="product-card__price">
        {{ returnCurrencySymbol(price.currency) }}{{ formatNumberLang(price.value) }}
      </span>
      <div class="product-card__wrap">
        <UiCounter
          v-model="counter"
          :id
        />
        <span class="product-card__price">
          {{ returnCurrencySymbol(price.currency) }}{{ formatNumberLang(counter * price.value) }}
        </span>
      </div>
      <button
        class="product-card__remove"
      >
        R
      </button>
    </template>
  </CardsBase>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>