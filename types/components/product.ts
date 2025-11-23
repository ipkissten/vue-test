import type { Price } from '~/types'

export interface ProductProps {
  title: string
  img: string
  brand: string
  price: Price
  id: number
  counter: number
}