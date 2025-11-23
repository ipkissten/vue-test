<script setup lang="ts">
import { useCatalogStore } from '~/store/catalog'
import { useCartStore } from '~/store/cart'

const catalogStore = useCatalogStore()
const cartStore = useCartStore()
const selectedFilters = ref<number[]>([])

const [
  { refresh },
  { data: filters }
] = await Promise.all([
  useAsyncData(
    'products',
    () => catalogStore.fetchProducts(selectedFilters.value)
  ),
  useAsyncData(
    'filters',
    () => catalogStore.fetchFilters(),
    {
      transform: response => response?.filters
    }
  )
])

const filtersIsVisible = ref(false)

const showFilters = () => {
  filtersIsVisible.value = true
}
const hideFilters = () => {
  filtersIsVisible.value = false
}

watch(selectedFilters, () => {
  refresh()
}, {
  deep: true
})

const getCounter = (id: number) => {
  return cartStore.getProducts.value.find(product => product.id === id)?.counter || 0
}
</script>

<template>
  <section class="catalog">
    <Transition>
      <CatalogFilters
        v-if="(filtersIsVisible || $viewport.isGreaterOrEquals('tablet')) && filters"
        :filters="filters"
        @close="hideFilters"
        v-model="selectedFilters"
      />
    </Transition>
    <h1 class="catalog__title">
      Catalog
    </h1>
    <UiButton
      v-if="$viewport.isLessThan('tablet')"
      class="filters__drop-btn"
      @click="showFilters"
    >
      Show filters
    </UiButton>
    <div
      v-if="catalogStore.getProducts.value && catalogStore.getProducts.value.length"
      class="catalog__grid"
    >
      <CardsCatalog
        v-for="item in catalogStore.getProducts.value"
        :key="item.id"
        :title="item.title"
        :brand="item.brand.name"
        :price="item.regular_price"
        :img="item.image"
        :id="item.id"
        :counter="getCounter(item.id)"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>