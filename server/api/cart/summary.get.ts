import type { Response, TotalDataCart } from '~/types'
import { calculateTotalCounter, getProductsInCart, calculateTotalPrice } from '~/server/utils/store'

export default defineEventHandler(() => {
  const response: Response<TotalDataCart> = {
    data: {
      counter: calculateTotalCounter(),
      products: getProductsInCart(),
      total: calculateTotalPrice()
    },
    message: '',
    success: true,
  }

  return response

  // throw createError({ statusCode: 404, statusMessage: 'Not found' })
})