<script setup lang="ts">
import type { ProductProps } from '~/types/components/product'
import { returnCurrencySymbol, formatNumberLang } from '~/utils/helpers'
import { useCartStore } from '~/store/cart'

const cartStore = useCartStore()

const props = defineProps<ProductProps>()
const counter = ref(props.counter)
const DEBOUNCE_DELAY = 500
let timeoutId: ReturnType<typeof setTimeout> | null = null
let skip = false

const setCounter = (val: number) => {
  counter.value = val
}

watch(counter, async (newValue, prevValue) => {
  if (newValue === 1 && prevValue === 0 || newValue === prevValue) {
    return
  }

  if (skip) {
    skip = false
    return
  }

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(async () => {
    const success = await cartStore.updateProductCounter(
      props.id,
      newValue
    )

    if (!success) {
      skip = true
      setCounter(props.counter)
    }
  }, DEBOUNCE_DELAY)
})

watch(() => props.counter, (newValue) => {
  setCounter(newValue)
})
</script>

<template>
  <div class="product-card">
    <slot
      :returnCurrencySymbol="returnCurrencySymbol"
      :formatNumberLang="formatNumberLang"
      :cartStore="cartStore"
      :counter="counter"
      :setCounter="setCounter"
    />
  </div>
</template>