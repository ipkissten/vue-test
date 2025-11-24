import type { DataProducts, DataFilters } from '~/types'

export default function (state: KeysToRef<DataProducts>) {
  const { $fetchData } = useNuxtApp()

  const fetchProducts = async (brands?: number[]) => {
    let stringBrands = ''

    brands?.forEach((brand, index) => {
      stringBrands += !index ? `?b=${brand}` : `&b=${brand}`
    })

    const response = await $fetchData<DataProducts>(`/api/catalog/products${stringBrands}`, { method: 'GET' })

    if (response) {
      state.products.value = response.products
    }

    return null
  }

  const fetchFilters = async () => await $fetchData<DataFilters>('/api/catalog/filters', { method: 'GET' })

  return {
    fetchProducts,
    fetchFilters,
  }
}