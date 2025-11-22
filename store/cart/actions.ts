import type { DataCounter, CartState, DataProducts } from '~/types'
import { objectToFormData } from '~/utils/helpers'

export default function (state: CartState) {
  const { $fetchData } = useNuxtApp()

  const fetchCounter = async () => {
    const response = await $fetchData<DataCounter>('/api/cart/counter', { method: 'GET' })

    if (response) {
      state.counter.value = response.counter
    }
  }

  const addToCart = async (productId: number) => {
    const response = await $fetchData<DataCounter>('/api/cart/add', {
      method: 'POST',
      body: objectToFormData({ id: productId })
    })

    if (response) {
      state.counter.value = response.counter
    }
  }

  const fetchList = async () => await $fetchData<DataProducts>('/api/cart/list', { method: 'GET' })

  return {
    fetchCounter,
    addToCart,
    fetchList
  }
}