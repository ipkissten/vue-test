import type { DataCart, Total, KeysToRef } from '~/types'

export default function (state: KeysToRef<DataCart & Total>) {
  const getCounter = computed(() => state.counter)
  const getProducts = computed(() => state.products)
  const getTotal = computed(() => state.total)

  return {
    getCounter,
    getProducts,
    getTotal
  }
}