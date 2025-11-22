import type { Response, DataCounter } from '~/types'
import { cartProducts, calculateTotalCounter } from '~/server/utils/store'

export default defineEventHandler(() => {
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