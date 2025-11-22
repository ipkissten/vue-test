export interface DataCounter {
  counter: number
}

export interface CartState {
  counter: Ref<number>
}

export interface CartItem {
  id: number
  counter: number
}