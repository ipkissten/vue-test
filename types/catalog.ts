export type Сurrency = 'USD' | 'EUR'

export type ProductType = 'simple'

export interface Price {
  currency: Сurrency
  value: number
}

export interface Product {
  type: ProductType
  id: number
  sku: string
  title: string
  regular_price: Price
  image: string
  brand: {
    id: number
    name: string
  }
}

export interface DataProducts {
  products: Product[]
}

export interface Filter {
  id: number
  title: string
  sort: string
  code: string
}

export interface DataFilters {
  filters: Filter[]
}