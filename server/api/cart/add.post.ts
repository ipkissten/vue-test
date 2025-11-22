import type { Response, DataCounter } from '~/types'
import { cartProducts, products, calculateTotalCounter } from '~/server/utils/store'
import { readMultipartFormData } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readMultipartFormData(event)
  const idField = body?.find(f => f.name === 'id')
  const productId = idField ? Number(idField.data) : undefined
  const product = products.find(product => product.id === productId)

  if (product) {
    cartProducts.push({
      id: product.id,
      counter: 1
    })
  }

  const response: Response<DataCounter> = {
    data: {
      counter: calculateTotalCounter()
    },
    message: '',
    success: true,
  }

  return response

  // throw createError({ statusCode: 404, statusMessage: 'Not found' })
})