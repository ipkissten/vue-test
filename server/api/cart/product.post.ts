import type { Response, DataCart } from '~/types'
import { ProductTypes } from '~/types'
import { cartProducts, findProduct, calculateTotalCounter } from '~/server/utils/store'

export default defineEventHandler(async (event) => {
  const product = await findProduct(event)

  if (product) {
    if (product.type === ProductTypes.SIMPLE) {
      if (cartProducts.find((item: CartProduct) => item.id === product.id)) {
        return
      }

      cartProducts.push({
        id: product.id,
        counter: 1,
        type: product.type
      })
    } else if (product.type === ProductTypes.CONFIGURABLE) {
      if (cartProducts.find((item: CartProduct) => item.id === product.product.id)) {
        return
      }

      cartProducts.push({
        id: product.product.id,
        counter: 1,
        type: product.type
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