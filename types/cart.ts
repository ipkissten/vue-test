import type { Product } from '~/types'

export interface CartProduct {
  id: number
  counter: number
}

export interface DataCart {
  products: CartProduct[]
  counter: number
}

export type ProductWithCounter = Product & {
  counter: number
}

export interface Total {
  total: number
}

export interface TotalDataCart extends Total {
  products: ProductWithCounter[]
  counter: number
}
