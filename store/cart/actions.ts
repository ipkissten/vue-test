import type { DataCart, TotalDataCart } from '~/types'
import { objectToFormData } from '~/utils/helpers'

export default function (state: KeysToRef<DataCart & Total>) {
  const { $fetchData } = useNuxtApp()

  const fetchState = async () => {
    const response = await $fetchData<DataCart>('/api/cart/state', { method: 'GET' })

    if (response) {
      state.counter.value = response.counter
      state.products.value = response.products
    }

    return null
  }

  const addToCart = async (productId: number) => {
    const response = await $fetchData<DataCart>('/api/cart/product', {
      method: 'POST',
      body: objectToFormData({ id: productId })
    })

    if (response) {
      state.products.value = response.products
      state.counter.value = response.counter

      return true
    }
  }

  const removeFromCart = async (productId: number) => {
    const response = await $fetchData<DataCart>('/api/cart/product', {
      method: 'DELETE',
      body: objectToFormData({ id: productId })
    })

    if (response) {
      state.products.value = response.products
      state.counter.value = response.counter

      return true
    }
  }

  const updateProductCounter = async (productId: number, counter: number) => {
    if (counter <= 0) {
      return removeFromCart(productId)
    }

    const response = await $fetchData<DataCart>('/api/cart/product', {
      method: 'PUT',
      body: objectToFormData({
        id: productId,
        counter
      })
    })

    if (response) {
      state.products.value = response.products
      state.counter.value = response.counter

      return true
    }
  }

  const fetchCart = async () => {
    const response = await $fetchData<TotalDataCart>('/api/cart/summary', { method: 'GET' })

    if (response) {
      state.counter.value = response.counter
      state.total.value = response.total
    }

    return response
  }

  return {
    fetchState,
    addToCart,
    removeFromCart,
    updateProductCounter,
    fetchCart
  }
}