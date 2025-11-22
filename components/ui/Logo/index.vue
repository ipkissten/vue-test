<script setup lang="ts">
import { NuxtLink } from '#components'

const route = useRoute()

const tag = computed(() => {
  return route.path === '/' ? 'div' : NuxtLink
})

const title = computed(() => {
  return route.path === '/' ? null : 'Go to main page';
})

const url = computed(() => {
  return route.path === '/' ? null : '/';
})
</script>

<template>
  <component
    class="logo"
    :is="tag"
    :title="title"
    :to="url"
  >
    <img class="logo__img" src="/images/logo.webp" width="151" height="34" alt="Astrio" />
  </component>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>