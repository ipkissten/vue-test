import type { Response, DataProducts } from '~/types'
import { products, cartProducts } from '~/server/utils/store'

export default defineEventHandler(() => {

  const response: Response<DataProducts> = {
    data: {
      products: products.filter(item => cartProducts.some(product => product.id === item.id))
    },
    message: '',
    success: true,
  }

  return response

  // throw createError({ statusCode: 404, statusMessage: 'Not found' })
})