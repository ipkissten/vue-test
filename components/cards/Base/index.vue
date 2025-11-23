<script setup lang="ts">
import type { Product } from '~/types/catalog'
import { ProductTypes } from '~/types'
import { returnCurrencySymbol, formatNumberLang } from '~/utils/helpers'
import { useCartStore } from '~/store/cart'

interface Props extends Product {
  currentVariantId?: number
}

const cartStore = useCartStore()
const props = defineProps<Props>()

// const getCounter = computed(() => {
//   if (props.type === ProductTypes.SIMPLE) {
//     return cartStore.getProducts.value.find(product => product.id === props.id)?.counter || 0
//   } else {
//     return cartStore.getProducts.value.find(product => product.id === props.currentVariantId)?.counter || 0
//   }
// })

// const counter = ref(getCounter.value)
// const DEBOUNCE_DELAY = 500
// let timeoutId: ReturnType<typeof setTimeout> | null = null
// let skip = false

// const setCounter = (val: number) => {
//   counter.value = val
// }

// watch(counter, async (newValue, prevValue) => {
//   if (newValue === 1 && prevValue === 0 || newValue === prevValue) {
//     return
//   }

//   if (skip) {
//     skip = false
//     return
//   }

//   if (timeoutId) {
//     clearTimeout(timeoutId)
//   }

//   timeoutId = setTimeout(async () => {
//     const success = await cartStore.updateProductCounter(
//       props.currentVariantId || props.id,
//       newValue
//     )

//     if (!success) {
//       skip = true
//       setCounter(getCounter.value)
//     }
//   }, DEBOUNCE_DELAY)
// })

// watch(getCounter, (newValue) => {
//   setCounter(newValue)
// })
</script>

<template>
  <div class="product-card">
    <slot
      :returnCurrencySymbol="returnCurrencySymbol"
      :formatNumberLang="formatNumberLang"
      :cartStore="cartStore"
    />
  </div>
</template>