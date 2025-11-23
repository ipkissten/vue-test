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
          :model-value="counter"
          @update:model-value="setCounter"
          :id
        />
        <span class="product-card__price">
          <span
            v-if="$viewport.isLessThan('tablet')"
            class="product-card__mob-subtitle"
          >
            Total:
          </span>
          {{ returnCurrencySymbol(price.currency) }}{{ counter && formatNumberLang(counter * price.value) }}
        </span>
      </div>
      <button
        class="product-card__remove"
        @click="cartStore.removeFromCart(props.id)"
      >
        <img
          src="/images/trash.svg"
          alt="Remove product"
          class="product-card__remove-icon"
          width="20"
          height="20"
        >
      </button>
    </template>
  </CardsBase>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>