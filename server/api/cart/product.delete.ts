import type { Response, DataCart } from '~/types'
import { cartProducts, setCartProducts, findProduct } from '~/server/utils/store'

export default defineEventHandler(async (event) => {
  const product = await findProduct(event)

  if (product) {
    setCartProducts(cartProducts.filter(item => item.id !== product.id))
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