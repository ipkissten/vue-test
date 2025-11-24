<script setup lang="ts">
import { ProductTypes, } from '~/types'
import type { Product, VariantMatrixItem } from '~/types/catalog'
import { useCartStore } from '~/store/cart'

interface SelectedOptions {
  [code: string]: number | null
}

const cartStore = useCartStore()
const props = defineProps<Product>()
const selectedOptions = ref<SelectedOptions>({})
const currentVariantDetails = ref<VariantMatrixItem | null>(null)

if (props.optionsGroups) {
  props.optionsGroups.forEach(group => {
    selectedOptions.value[group.code] = null
  })
}

const img = computed(() => {
  return currentVariantDetails.value?.image || props.img
})

const getMatchingVariants = computed<VariantMatrixItem[]>(() => {
  if (!props.variantMatrix) return []

  return props.variantMatrix.filter(variant => {
    for (const code in selectedOptions.value) {
      const selectedId = selectedOptions.value[code]

      if (selectedId !== null) {
        if (variant.attributes[code] !== selectedId) {
          return false
        }
      }
    }
    return true
  })
})

const isValueAvailable = (groupCode: string, valueId: number): boolean => {
  if (!props.variantMatrix) return false

  return props.variantMatrix.some(variant => {
    let matches = true

    if (variant.attributes[groupCode] !== valueId) {
      return false
    }

    for (const code in selectedOptions.value) {
      const selectedId = selectedOptions.value[code]

      if (code !== groupCode && selectedId !== null) {
        if (variant.attributes[code] !== selectedId) {
          matches = false
          break
        }
      }
    }
    return matches
  })
}

const changeVariant = (groupCode: string, valueId: number) => {
  if (selectedOptions.value[groupCode] === valueId) {
    selectedOptions.value[groupCode] = null
  } else {
    selectedOptions.value[groupCode] = valueId
  }
}

watch(selectedOptions, (newOptions) => {
  const allSelected = props.optionsGroups?.every(group => newOptions[group.code] !== null)

  if (allSelected) {
    const finalVariant = getMatchingVariants.value[0]
    if (finalVariant) {
      currentVariantDetails.value = finalVariant
      return
    }
  }

  currentVariantDetails.value = null
}, { deep: true })

onMounted(() => {
  if (props.type !== ProductTypes.CONFIGURABLE) return

  const itemInCart = cartStore.getProducts
    .find(p => props.variantMatrix?.some(v => v.id === p.id))

  if (!itemInCart) return

  const variant = props.variantMatrix!.find(v => v.id === itemInCart.id)
  if (!variant) return

  for (const code in variant.attributes) {
    const val = variant.attributes[code] ?? null
    selectedOptions.value[code] = val
  }

  currentVariantDetails.value = variant
})
</script>

<template>
  <CardsBase
    v-bind="props"
    :currentVariantDetailsId="currentVariantDetails?.id"
  >
    <template #default="{
      returnCurrencySymbol,
      formatNumberLang,
      counter,
      onCounterUpdate,
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
        {{ brand.name }}
      </span>
      <span class="product-card__price">
        {{ returnCurrencySymbol(price.currency) }}{{ formatNumberLang(price.value) }}
      </span>
      <div
        v-if="props.optionsGroups?.length"
        class="product-card__options"
      >
        <div
          v-for="(group, idx) in props.optionsGroups"
          :key="idx"
          class="product-card__group"
        >
          <button
            v-for="(value) in group.values"
            :key="value.id"
            :class="['product-card__option', { 'product-card__option--active': selectedOptions[group.code] === value.id }]"
            :disabled="!isValueAvailable(group.code, value.id)"
            :aria-label="value.name"
            :style="group.code === 'color' ? `--background: ${value.value}` : null"
            @click="changeVariant(group.code, value.id)"
          >
            {{ group.code === 'size' ? value.name : '' }}
          </button>
        </div>
      </div>
      <UiCounter
        v-if="counter"
        :model-value="counter"
        @update:model-value="setCounter"
        @update="onCounterUpdate"
        :id
        classMod="counter--catalog"
      />
      <UiButton
        :disabled="!currentVariantDetails && type === ProductTypes.CONFIGURABLE"
        v-else
        @click="cartStore.addToCart(currentVariantDetails?.id || id)"
      >
        Add to cart
      </UiButton>
    </template>
  </CardsBase>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>