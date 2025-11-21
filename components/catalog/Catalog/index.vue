<script setup lang="ts">
const products = [
  {
    "type": "simple",
    "id": 1,
    "sku": "s1",
    "title": "Product 1",
    "regular_price": {
      "currency": "USD",
      "value": 27.12
    },
    "image": "/images/products/1.png",
    "brand": {
      "id": 9,
      "name": "Brand 9"
    }
  },
  {
    "type": "simple",
    "id": 2,
    "sku": "s2",
    "title": "Product 2",
    "regular_price": {
      "currency": "USD",
      "value": 36.87
    },
    "image": "/images/products/2.png",
    "brand": {
      "id": 8,
      "name": "Brand 8"
    }
  },
  {
    "type": "simple",
    "id": 3,
    "sku": "s3",
    "title": "Product 3",
    "regular_price": {
      "currency": "USD",
      "value": 28.91
    },
    "image": "/images/products/3.png",
    "brand": {
      "id": 2,
      "name": "Brand 2"
    }
  },
  {
    "type": "simple",
    "id": 4,
    "sku": "s4",
    "title": "Product 4",
    "regular_price": {
      "currency": "USD",
      "value": 41.23
    },
    "image": "/images/products/4.png",
    "brand": {
      "id": 7,
      "name": "Brand 7"
    }
  },
  {
    "type": "simple",
    "id": 5,
    "sku": "s5",
    "title": "Product 5",
    "regular_price": {
      "currency": "USD",
      "value": 88.00
    },
    "image": "/images/products/5.png",
    "brand": {
      "id": 3,
      "name": "Brand 3"
    }
  },
  {
    "type": "simple",
    "id": 6,
    "sku": "s6",
    "title": "Product 6",
    "regular_price": {
      "currency": "USD",
      "value": 127.41
    },
    "image": "/images/products/6.png",
    "brand": {
      "id": 6,
      "name": "Brand 6"
    }
  },
  {
    "type": "simple",
    "id": 7,
    "sku": "s7",
    "title": "Product 7",
    "regular_price": {
      "currency": "USD",
      "value": 123.40
    },
    "image": "/images/products/7.png",
    "brand": {
      "id": 5,
      "name": "Brand 5"
    }
  },
  {
    "type": "simple",
    "id": 8,
    "sku": "s8",
    "title": "Product 8",
    "regular_price": {
      "currency": "USD",
      "value": 92.32
    },
    "image": "/images/products/8.png",
    "brand": {
      "id": 1,
      "name": "Brand 1"
    }
  },
  {
    "type": "simple",
    "id": 9,
    "sku": "s9",
    "title": "Product 9",
    "regular_price": {
      "currency": "USD",
      "value": 53.40
    },
    "image": "/images/products/9.png",
    "brand": {
      "id": 2,
      "name": "Brand 2"
    }
  }
]

const filtersIsVisible = ref(false)

const showFilters = () => {
  filtersIsVisible.value = true
}
const hideFilters = () => {
  filtersIsVisible.value = false
}
</script>

<template>
  <section class="catalog">
    <Transition>
      <CatalogFilters
        v-if="filtersIsVisible || $viewport.isGreaterOrEquals('tablet')"
        @close="hideFilters"
      />
    </Transition>
    <h1 class="catalog__title">Catalog</h1>
    <UiButton
      v-if="$viewport.isLessThan('tablet')"
      class="filters__drop-btn"
      @click="showFilters"
    >
      Show filters
    </UiButton>
    <div class="catalog__grid">
      <CatalogProductCard
        v-for="item in products"
        :key="item.id"
        :title="item.title"
        :brand="item.brand.name"
        :price="item.regular_price.value"s
        :img="item.image"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>