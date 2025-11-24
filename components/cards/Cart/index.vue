<script setup lang="ts">
import type { PropsProductInCart } from '~/types/cart'
import { ProductTypes } from '~/types'

const props = defineProps<PropsProductInCart>()
</script>

<template>
  <CardsBase
    v-bind="props"
    inCart
  >
    <template #default="{
      returnCurrencySymbol,
      formatNumberLang,
      counter,
      onCounterUpdate,
      cartStore,
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
      <div class="product-card__info-wrap">
        <h2 class="product-card__name">
          {{ brand.name }} / {{ title }}
        </h2>
        <span
          v-if="props.type === ProductTypes.CONFIGURABLE"
          v-for="option in props.options"
          :key="option.value_index"
          class="product-card__option"
        >
          {{ option.code }}: {{ option.label }}
        </span>
      </div>
      <span class="product-card__price">
        {{ returnCurrencySymbol(price.currency) }}{{ formatNumberLang(price.value) }}
      </span>
      <div class="product-card__wrap">
        <UiCounter
          :model-value="counter"
          @update:model-value="setCounter"
          @update="onCounterUpdate"
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