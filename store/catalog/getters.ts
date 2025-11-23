import type { DataProducts, KeysToRef } from '~/types'

export default function (state: KeysToRef<DataProducts>) {
  const getProducts = computed(() => state.products)

  return {
    getProducts
  }
}