<script setup lang="ts">
import type { PropsBaseProduct } from '~/types/catalog'
import { ProductTypes } from '~/types'
import { returnCurrencySymbol, formatNumberLang } from '~/utils/helpers'
import { useCartStore } from '~/store/cart'

const cartStore = useCartStore()
const props = defineProps<PropsBaseProduct>()

const getCounter = computed(() => {
  if (props.type === ProductTypes.SIMPLE || props.inCart) {
    return cartStore.getProducts.find(product => product.id === props.id)?.counter || 0
  } else {
    return cartStore.getProducts.find(product => product.id === props.currentVariantDetailsId)?.counter || 0
  }
})

const counter = ref(getCounter.value)
const DEBOUNCE_DELAY = 200
let timeoutId: ReturnType<typeof setTimeout> | null = null

const setCounter = (val: number) => {
  counter.value = val
}

const onCounterUpdate = async () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(async () => {
    const success = await cartStore.updateProductCounter(
      props.currentVariantDetailsId || props.id,
      counter.value
    )

    if (!success) {
      setCounter(getCounter.value)
    }
  }, DEBOUNCE_DELAY)
}

watch(getCounter, (newValue) => {
  setCounter(newValue)
})
</script>

<template>
  <div class="product-card">
    <slot
      :returnCurrencySymbol="returnCurrencySymbol"
      :formatNumberLang="formatNumberLang"
      :counter="counter"
      :onCounterUpdate="onCounterUpdate"
      :cartStore="cartStore"
      :setCounter="setCounter"
    />
  </div>
</template>