import type { CartState } from '~/types'

export default function (state: CartState) {
  const getCounter = computed(() => state.counter)

  return {
    getCounter
  }
}