import { defineStore } from 'pinia'
import useState from './state'
import useGetters from './getters'
import useActions from './actions'

export const useCatalogStore = defineStore('Catalog', () => {
  const state = useState()
  const getters = useGetters()
  const actions = useActions()

  return {
    ...state,
    ...getters,
    ...actions
  }
})
