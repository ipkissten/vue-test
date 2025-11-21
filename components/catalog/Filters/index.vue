<script setup lang="ts">
const filters = [
  {
    "id": 1,
    "title": "Brand 1",
    "sort": "100",
    "code": "brand_1"
  },
  {
    "id": 2,
    "title": "Brand 2",
    "sort": "200",
    "code": "brand_2"
  },
  {
    "id": 3,
    "title": "Brand 3",
    "sort": "300",
    "code": "brand_3"
  },
  {
    "id": 4,
    "title": "Brand 4",
    "sort": "400",
    "code": "brand_4"
  },
  {
    "id": 5,
    "title": "Brand 5",
    "sort": "500",
    "code": "brand_5"
  },
  {
    "id": 6,
    "title": "Brand 6",
    "sort": "600",
    "code": "brand_6"
  },
  {
    "id": 7,
    "title": "Brand 7",
    "sort": "700",
    "code": "brand_7"
  },
  {
    "id": 8,
    "title": "Brand 8",
    "sort": "700",
    "code": "brand_8"
  },
  {
    "id": 9,
    "title": "Brand 9",
    "sort": "900",
    "code": "brand_9"
  }
]

const emit = defineEmits(['close'])
</script>

<template>
  <div class="filters">
    <h2 class="filters__title">All brands</h2>
    <div class="filters__list">
      <button
        v-for="filter in filters"
        :key="filter.id"
        class="filters__item"
      >
      {{ filter.title }}
      </button>
    </div>
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