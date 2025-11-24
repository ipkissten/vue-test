import type { ProductTypes, Price } from '~/types'

export interface CartProduct {
  id: number
  counter: number
  type: ProductTypes
}

export interface DataCart {
  products: CartProduct[]
  counter: number
}

export interface ProductInCartResponseBase {
  counter: number
  price: Price
  img: string
  brand: {
    name: string
    id: number
  }
  title: string
  id: number
}

export interface SimpleProductInCartResponse extends ProductInCartResponseBase {
  type: ProductTypes.SIMPLE
}

export interface ConfigurableProductInCartResponse extends ProductInCartResponseBase {
  type: ProductTypes.CONFIGURABLE
  options: Array<{
    code: string
    value_index: number
    label: string
  }>
}

export type ProductInCartResponse =
  | (SimpleProductInCartResponse & { options?: undefined })
  | ConfigurableProductInCartResponse

export type PropsProductInCart = ProductInCartResponse & {
  counter: number
}

export interface Total {
  total: number
}

export interface TotalDataCart extends Total {
  products: ProductInCartResponse[]
  counter: number
}
