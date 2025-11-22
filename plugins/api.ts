import type { Response } from '~/types'

export default defineNuxtPlugin(() => {
  const api = $fetch.create({
    baseURL: '/',
  })

  const fetchData = async <T>(
    url: string,
    options?: Parameters<typeof api>[1]
  ): Promise<T | undefined> => {
    try {
      const response: Response<T> = await api(url, options)

      if (response.success) {
        return response.data
      } else {
        console.warn(`[API Error] ${url}`, response.message)
      }
    } catch (error: any) {
      console.warn(`[API Exception] ${url}`, error)
    }
  }

  return {
    provide: {
      api,
      fetchData,
    },
  }
})
