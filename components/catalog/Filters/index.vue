<script setup lang="ts">
import type { DataFilters } from '~/types/catalog'

defineProps<DataFilters>()

const emit = defineEmits(['close', ''])
const selectedFilters = defineModel<number[]>({
  type: Array,
  default: () => []
})

const showBrand = (id: number) => {
  selectedFilters.value.push(id)
}

const resetFilters = () => {
  selectedFilters.value = []
}
</script>

<template>
  <div class="filters">
    <h2 class="filters__title">All brands</h2>
    <div class="filters__list">
      <button
        v-for="filter in filters"
        :key="filter.id"
        :class="['filters__item', {'filters__item--active': selectedFilters.includes(filter.id)}]"
        @click="showBrand(filter.id)"
      >
        {{ filter.title }}
      </button>
    </div>
    <UiButton
      @click="resetFilters"
    >
      Reset brands
    </UiButton>
    <UiButton
      v-if="$viewport.isLessThan('tablet')"
      @click="emit('close')"
    >
      Close
    </UiButton>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>