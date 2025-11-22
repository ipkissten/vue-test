import { defineStore } from 'pinia'
import useState from './state'
import useGetters from './getters'
import useActions from './actions'

export const useCartStore = defineStore('Cart', () => {
  const state = useState()
  const getters = useGetters(state)
  const actions = useActions(state)

  return {
    ...state,
    ...getters,
    ...actions
  }
})
