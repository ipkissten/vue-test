export type Сurrency = 'USD' | 'EUR'

export enum ProductTypes {
  SIMPLE = 'simple',
  CONFIGURABLE = 'configurable'
}

export interface Price {
  currency: Сurrency
  value: number
}

export interface VariantAttribute {
  code: string
  value_index: number
}

export interface VariantProduct {
  id: number
  sku: string
  image: string
}

export interface Variant {
  attributes: VariantAttribute[]
  product: VariantProduct
  type?: ProductTypes.CONFIGURABLE
}

export interface AttributeValue {
  label: string
  value_index: number
  value: string | number
}

export interface ConfigurableOption {
  attribute_code: string
  attribute_id: number
  label: string
  values: AttributeValue[]
  position?: number
  id?: number
}

export interface OriginalProduct {
  id: number
  title: string
  regular_price: Price
  configurable_options?: ConfigurableOption[]
  variants?: Variant[]
  sku: string
  brand: {
    id: number
    name: string
  }
  type: ProductTypes
  image: string
}

export interface SimpleProduct extends Omit<OriginalProduct, 'configurable_options' | 'variants'> {
  type: ProductTypes.SIMPLE
}

export interface ConfigurableProduct extends OriginalProduct {
  type: ProductTypes.CONFIGURABLE
  configurable_options: ConfigurableOption[]
  variants: Variant[]
}

export interface OptionValue {
  name: string
  value: string | number
  id: number
}

export interface OptionGroup {
  code: string
  label: string
  values: OptionValue[]
}

export interface VariantMatrixItem {
  attributes: {
    [attributeCode: string]: number
  }
  id: number
  image: string
}

export interface Product {
  id: number
  title: string
  price: Price
  brand: {
    id: number
    name: string
  }
  type: ProductTypes
  img: string
  optionsGroups?: OptionGroup[]
  variantMatrix?: VariantMatrixItem[]
}

export interface PropsProduct extends Product {
  counter: number
}

export interface PropsBaseProduct extends Product {
  currentVariantDetailsId?: number
  inCart?: boolean
}

export interface DataProducts {
  products: Product[]
}

export interface Filter {
  id: number
  title: string
  sort: string
  code: string
}

export interface DataFilters {
  filters: Filter[]
}