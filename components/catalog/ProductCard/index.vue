<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

interface Props {
  title: string
  img: string
  brand: string
  price: number
}

defineProps<Props>()
</script>

<template>
  <div class="product-card">
    <NuxtPicture
      class="product-card__img"
      :src="img"
      sizes="(max-width: 425px) 100px, 200px"
      width="200"
      height="200"
      alt=""
      format="webp"
      quality="80"
    />
    <h2 class="product-card__title">
      {{ title }}
    </h2>
    <span class="product-card__brand">
      {{ brand }}
    </span>
    <span class="product-card__price">
      ${{ price }}
    </span>
    <UiButton>
      Добавить в корзину
    </UiButton>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>