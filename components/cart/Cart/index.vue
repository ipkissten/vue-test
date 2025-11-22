<script setup lang="ts">
import { useCartStore } from '~/store/cart'
import { returnCurrencySymbol, formatNumberLang } from '~/utils/helpers'

const cartStore = useCartStore()
const total = 111
const listHeads = ['Item', 'Price', 'Qty', 'Total']

const { data: products } = await useAsyncData(
  'cart',
  () => cartStore.fetchList(),
  {
    transform: response => response?.products
  }
)
</script>

<template>
  <section class="cart">
    <h1 class="cart__title">Shopping Cart</h1>
    <template v-if="products && products.length">
      <div class="cart__list">
        <div
          v-if="$viewport.isGreaterOrEquals('tablet')"
          class="cart__list-heads"
        >
          <span
            v-for="(item, idx) in listHeads"
            :key="idx"
            class="cart__head"
          >
            {{ item }}
          </span>
        </div>
        <CardsCart
          v-for="item in products"
          :key="item.id"
          :title="item.title"
          :brand="item.brand.name"
          :price="item.regular_price"
          :img="item.image"
          :id="item.id"
        />
      </div>
      <div class="cart__total">
        Subtotal: {{ returnCurrencySymbol('USD') }}{{ formatNumberLang(total) }}
      </div>
      <UiButton>
        Checkout
      </UiButton>
    </template>
    <div
      v-else
      class="cart__empty"
    >
      Empty cart. Add something
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./style.scss"
</style>