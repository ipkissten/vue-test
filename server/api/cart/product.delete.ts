import type { Response, DataCart } from '~/types'
import { cartProducts, setCartProducts, getKey } from '~/server/utils/store'

export default defineEventHandler(async (event) => {
  const productId = await getKey(event, 'id')

  if (productId) {
    setCartProducts(cartProducts.filter(item => item.id !== productId))
  }

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