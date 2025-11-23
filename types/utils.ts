export type KeysToRef<T> = {
  [K in keyof T]: Ref<T[K]>
}