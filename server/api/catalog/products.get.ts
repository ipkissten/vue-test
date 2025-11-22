import type { Response, DataProducts } from '~/types'
import { products } from '~/server/utils/store'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const brands: string[] | false = query?.b ? Array.isArray(query?.b) ? query.b : [query?.b] : false
  const returnedProducts = brands ? products.filter(item => brands.includes(String(item.brand.id))) : products
  const response: Response<DataProducts> = {
    data: {
      products: returnedProducts
    },
    message: '',
    success: true,
  }

  return response

  // throw createError({ statusCode: 404, statusMessage: 'Not found' })
})