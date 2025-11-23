export default function (): KeysToRef<DataProducts> {
  const products: Ref<Product[]> = ref([])

  return {
    products
  }
}