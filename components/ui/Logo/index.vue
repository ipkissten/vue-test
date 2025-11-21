<script setup lang="ts">
import { NuxtLink } from '#components'

const route = useRoute()

const tag = computed(() => {
    return route.path === '/' ? 'div' : NuxtLink
})

const title = computed(() => {
    return route.path === '/' ? null : 'На главную страницу';
})

const url = computed(() => {
    return route.path === '/' ? null : '/';
})
</script>

<template>
    <component
        :is="tag"
        :title="title"
        :to="url"
        class="logo"
    >
        <img
            class="logo__img"
            src="/images/logo.webp"
            width="151"
            height="34"
            alt="Astrio"
        />
    </component>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>