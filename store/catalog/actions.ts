import type { DataProducts, DataFilters } from '@/types'

export default function () {
  const { $fetchData } = useNuxtApp()

  const getProducts = (brands?: number[]) => {
    let stringBrands = brands && brands.length ? '?': ''

    brands?.forEach((brand) => {
      stringBrands += `&b=${brand}`
    })

    return $fetchData<DataProducts>(`/api/catalog/products${stringBrands}`, { method: 'GET' })
  }

  const getFilters = () => $fetchData<DataFilters>('/api/catalog/filters', { method: 'GET' })

  return {
    getProducts,
    getFilters,
  }
}