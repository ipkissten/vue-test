import type { Response, DataCart } from '~/types'
import { changeCounterProductInCart, calculateTotalCounter, cartProducts } from '~/server/utils/store'

export default defineEventHandler(async (event) => {
  await changeCounterProductInCart(event)

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