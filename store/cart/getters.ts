import type { DataCart, Total, KeysToRef } from '~/types'

export default function (state: KeysToRef<DataCart & Total>) {
  const getCounter = computed(() => state.counter.value)
  const getProducts = computed(() => state.products.value)
  const getTotal = computed(() => state.total.value)

  return {
    getCounter,
    getProducts,
    getTotal
  }
}