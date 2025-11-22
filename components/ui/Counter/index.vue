<script setup lang="ts">
interface Props {
  id: number
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
  <div class="counter">
    <button
      class="counter__btn"
      @click="decrement"
    >
      -
    </button>
    <input
      :id="id.toString()"
      name="counter"
      class="counter__value"
      v-model="value"
      type="text"
    >
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