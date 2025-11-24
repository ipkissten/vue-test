import type { Response, DataCart } from '~/types'
import { cartProducts, calculateTotalCounter, removeProduct } from '~/server/utils/store'

export default defineEventHandler(async (event) => {
  await removeProduct(event)

  const response: Response<DataCart> = {
    data: {
      counter: calculateTotalCounter(),
      products: cartProducts,
    },
    message: '',
    success: true,
  }

  return response

  // throw createError({ statusCode: 404, statusMessage: 'Not found' })
})