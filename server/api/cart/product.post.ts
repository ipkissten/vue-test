import type { Response, DataCart } from '~/types'
import { cartProducts, findProduct } from '~/server/utils/store'

export default defineEventHandler(async (event) => {
  const product = await findProduct(event)

  if (product) {
    if ('id' in product) {
      cartProducts.push({
        id: product.id,
        counter: 1
      })
    } else {
      cartProducts.push({
        id: product.product.id,
        counter: 1
      })
    }
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