<script setup lang="ts">
interface Props {
  id: number
  classMod?: string
}

defineProps<Props>()
const value = defineModel<number>({
  type: Number,
  default: 0
})

const increment = () => {
  value.value++
}

const decrement = () => {
  value.value--
}
</script>

<template>
  <div :class="['counter', classMod]">
    <button
      class="counter__btn"
      @click="decrement"
    >
      -
    </button>
    <span
      class="counter__value"
    >
    {{ value }}
    </span>
    <button
      class="counter__btn"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use './style.scss'
</style>