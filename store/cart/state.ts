import type { DataCart, Total, KeysToRef } from '~/types'

export default function (): KeysToRef<DataCart & Total> {
  const counter = ref(0)
  const products = ref([])
  const total = ref(0)

  return {
    counter,
    products,
    total
  }
}