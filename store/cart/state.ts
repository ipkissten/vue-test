import type { CartState } from '~/types'

export default function (): CartState {
  const counter = ref(0)

  return {
    counter
  }
}