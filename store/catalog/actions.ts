import type { DataProducts, DataFilters } from '~/types'

export default function () {
  const { $fetchData } = useNuxtApp()

  const fetchProducts = async (brands?: number[]) => {
    let stringBrands = brands && brands.length ? '?': ''

    brands?.forEach((brand) => {
      stringBrands += `&b=${brand}`
    })

    return await $fetchData<DataProducts>(`/api/catalog/products${stringBrands}`, { method: 'GET' })
  }

  const fetchFilters = async () => await $fetchData<DataFilters>('/api/catalog/filters', { method: 'GET' })

  return {
    fetchProducts,
    fetchFilters,
  }
}