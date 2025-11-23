import type { CartProduct, ProductWithCounter, OriginalProduct, VariantMatrixItem, Product, OptionGroup } from '~/types'
import { ProductTypes } from '~/types'
import { readMultipartFormData } from 'h3'
import type { H3Event, EventHandlerRequest } from 'h3'

export let cartProducts: CartProduct[] = []

export const products: OriginalProduct[] = [
  {
    "type": ProductTypes.SIMPLE,
    "id": 1,
    "sku": "s1",
    "title": "Product 1",
    "regular_price": {
      "currency": "USD",
      "value": 27.12
    },
    "image": "/images/products/1.png",
    "brand": {
      "id": 9,
      "name": "Brand 9"
    }
  },
  {
    "type": ProductTypes.CONFIGURABLE,
    "id": 2,
    "sku": "c1",
    "title": "Product 2",
    "regular_price": {
      "currency": "USD",
      "value": 54.21
    },
    "image": "/images/products/conf/default.png",
    "configurable_options": [
      {
        "attribute_id": 93,
        "attribute_code": "color",
        "label": "Color",
        "values": [
          { "label": "Red", "value_index": 931, "value": "#ff0000" },
          { "label": "Blue", "value_index": 932, "value": "#0000ff" },
          { "label": "Black", "value_index": 933, "value": "#000" }
        ]
      },
      {
        "attribute_code": "size",
        "attribute_id": 144,
        "position": 0,
        "id": 2,
        "label": "Size",
        "values": [
          { "label": "M", "value_index": 1441, "value": 1 },
          { "label": "L", "value_index": 1442, "value": 2 }
        ]
      }
    ],
    "variants": [
      {
        "attributes": [
          { "code": "color", "value_index": 931 },
          { "code": "size", "value_index": 1441 }
        ],
        "product": { "id": 2001, "sku": "c1-red-m", "image": "/images/products/conf/red.png" }
      },
      {
        "attributes": [
          { "code": "color", "value_index": 931 },
          { "code": "size", "value_index": 1442 }
        ],
        "product": { "id": 2002, "sku": "c1-red-l", "image": "/images/products/conf/red.png" }
      },
      {
        "attributes": [
          { "code": "color", "value_index": 932 },
          { "code": "size", "value_index": 1441 }
        ],
        "product": { "id": 2003, "sku": "c1-blue-m", "image": "/images/products/conf/blue.png" }
      },
      {
        "attributes": [
          { "code": "color", "value_index": 933 },
          { "code": "size", "value_index": 1442 }
        ],
        "product": { "id": 2004, "sku": "c1-black-l", "image": "/images/products/conf/black.png" }
      }
    ],
    "brand": { "id": 1, "name": "Brand 1" }
  },
  {
    "type": ProductTypes.SIMPLE,
    "id": 3,
    "sku": "s2",
    "title": "Product 3",
    "regular_price": {
      "currency": "USD",
      "value": 36.87
    },
    "image": "/images/products/2.png",
    "brand": { "id": 8, "name": "Brand 8" }
  },
  {
    "type": ProductTypes.SIMPLE,
    "id": 4,
    "sku": "s3",
    "title": "Product 4",
    "regular_price": {
      "currency": "USD",
      "value": 28.91
    },
    "image": "/images/products/3.png",
    "brand": { "id": 2, "name": "Brand 2" }
  },
  {
    "type": ProductTypes.SIMPLE,
    "id": 5,
    "sku": "s4",
    "title": "Product 5",
    "regular_price": {
      "currency": "USD",
      "value": 41.23
    },
    "image": "/images/products/4.png",
    "brand": { "id": 7, "name": "Brand 7" }
  },
  {
    "type": ProductTypes.SIMPLE,
    "id": 6,
    "sku": "s5",
    "title": "Product 6",
    "regular_price": {
      "currency": "USD",
      "value": 88.0
    },
    "image": "/images/products/5.png",
    "brand": { "id": 3, "name": "Brand 3" }
  },
  {
    "type": ProductTypes.SIMPLE,
    "id": 7,
    "sku": "s6",
    "title": "Product 7",
    "regular_price": {
      "currency": "USD",
      "value": 127.41
    },
    "image": "/images/products/6.png",
    "brand": { "id": 6, "name": "Brand 6" }
  },
  {
    "type": ProductTypes.CONFIGURABLE,
    "id": 8,
    "sku": "c2",
    "title": "Product 8",
    "regular_price": {
      "currency": "USD",
      "value": 63.27
    },
    "image": "/images/products/conf/default.png",
    "configurable_options": [
      {
        "attribute_id": 93,
        "attribute_code": "color",
        "label": "Color",
        "values": [
          { "label": "Red", "value_index": 931, "value": "#ff0000" },
          { "label": "Blue", "value_index": 932, "value": "#0000ff" },
          { "label": "Black", "value_index": 933, "value": "#000" }
        ]
      },
      {
        "attribute_code": "size",
        "attribute_id": 144,
        "position": 0,
        "id": 2,
        "label": "Size",
        "values": [
          { "label": "M", "value_index": 1441, "value": 1 },
          { "label": "L", "value_index": 1442, "value": 2 }
        ]
      }
    ],
    "variants": [
      {
        "attributes": [
          { "code": "color", "value_index": 931 },
          { "code": "size", "value_index": 1441 }
        ],
        "product": { "id": 8001, "sku": "c2-red-m", "image": "/images/products/conf/red.png" }
      },
      {
        "attributes": [
          { "code": "color", "value_index": 931 },
          { "code": "size", "value_index": 1442 }
        ],
        "product": { "id": 8002, "sku": "c2-red-l", "image": "/images/products/conf/red.png" }
      },
      {
        "attributes": [
          { "code": "color", "value_index": 932 },
          { "code": "size", "value_index": 1441 }
        ],
        "product": { "id": 8003, "sku": "c2-blue-m", "image": "/images/products/conf/blue.png" }
      },
      {
        "attributes": [
          { "code": "color", "value_index": 933 },
          { "code": "size", "value_index": 1442 }
        ],
        "product": { "id": 8004, "sku": "c2-black-l", "image": "/images/products/conf/black.png" }
      }
    ],
    "brand": { "id": 4, "name": "Brand 4" }
  },
  {
    "type": ProductTypes.SIMPLE,
    "id": 9,
    "sku": "s7",
    "title": "Product 9",
    "regular_price": {
      "currency": "USD",
      "value": 123.4
    },
    "image": "/images/products/7.png",
    "brand": { "id": 5, "name": "Brand 5" }
  },
  {
    "type": ProductTypes.CONFIGURABLE,
    "id": 10,
    "sku": "c3",
    "title": "Product 10",
    "regular_price": {
      "currency": "USD",
      "value": 68.273
    },
    "image": "/images/products/conf/default.png",
    "configurable_options": [
      {
        "attribute_id": 93,
        "attribute_code": "color",
        "label": "Color",
        "values": [
          { "label": "Red", "value_index": 931, "value": "#ff0000" },
          { "label": "Blue", "value_index": 932, "value": "#0000ff" },
          { "label": "Black", "value_index": 933, "value": "#000" }
        ]
      },
      {
        "attribute_code": "size",
        "attribute_id": 144,
        "position": 0,
        "id": 2,
        "label": "Size",
        "values": [
          { "label": "M", "value_index": 1441, "value": 1 },
          { "label": "L", "value_index": 1442, "value": 2 }
        ]
      }
    ],
    "variants": [
      {
        "attributes": [
          { "code": "color", "value_index": 931 },
          { "code": "size", "value_index": 1441 }
        ],
        "product": { "id": 10001, "sku": "c10-red-m", "image": "/images/products/conf/red.png" }
      },
      {
        "attributes": [
          { "code": "color", "value_index": 931 },
          { "code": "size", "value_index": 1442 }
        ],
        "product": { "id": 10002, "sku": "c10-red-l", "image": "/images/products/conf/red.png" }
      },
      {
        "attributes": [
          { "code": "color", "value_index": 932 },
          { "code": "size", "value_index": 1441 }
        ],
        "product": { "id": 10003, "sku": "c10-blue-m", "image": "/images/products/conf/blue.png" }
      },
      {
        "attributes": [
          { "code": "color", "value_index": 933 },
          { "code": "size", "value_index": 1442 }
        ],
        "product": { "id": 10004, "sku": "c10-black-l", "image": "/images/products/conf/black.png" }
      }
    ],
    "brand": { "id": 3, "name": "Brand 3" }
  },
  {
    "type": ProductTypes.SIMPLE,
    "id": 11,
    "sku": "s8",
    "title": "Product 11",
    "regular_price": {
      "currency": "USD",
      "value": 92.32
    },
    "image": "/images/products/8.png",
    "brand": { "id": 1, "name": "Brand 1" }
  },
  {
    "type": ProductTypes.SIMPLE,
    "id": 12,
    "sku": "s9",
    "title": "Product 12",
    "regular_price": {
      "currency": "USD",
      "value": 53.4
    },
    "image": "/images/products/9.png",
    "brand": { "id": 2, "name": "Brand 2" }
  }
]

export function transformProduct(originalProduct: OriginalProduct): Product {
  if (!originalProduct.configurable_options || originalProduct.configurable_options.length === 0 || !originalProduct.variants || originalProduct.variants.length === 0) {
    return {
      id: originalProduct.id,
      title: originalProduct.title,
      price: originalProduct.regular_price,
      brand: originalProduct.brand.name,
      type: originalProduct.type,
      img: originalProduct.image,
    }
  }

  const variantMatrix: VariantMatrixItem[] = originalProduct.variants.map(variant => {
    const attributes: { [code: string]: number } = {}

    variant.attributes.forEach(attr => {
      attributes[attr.code] = attr.value_index
    })

    return {
      attributes,
      id: variant.product.id,
      image: variant.product.image,
    }
  })

  const optionsGroups: OptionGroup[] = originalProduct.configurable_options.map(option => ({
    code: option.attribute_code,
    label: option.label,
    values: option.values.map(val => ({
      name: val.label,
      value: val.value,
      id: val.value_index,
    })),
  }))

  return {
    id: originalProduct.id,
    title: originalProduct.title,
    price: originalProduct.regular_price,
    brand: originalProduct.brand.name,
    type: originalProduct.type,
    img: originalProduct.image,
    optionsGroups: optionsGroups,
    variantMatrix: variantMatrix,
  }
}

export const prepareProducts = () => {
  return products.map(product => transformProduct(product))
}

export const setCartProducts = (products: CartProduct[]) => cartProducts = products

export const calculateTotalCounter = () => {
  return cartProducts.reduce((total, product) => total + product.counter, 0)
}

export const calculateTotalPrice = () => {
  return cartProducts.reduce((total, product) => {
    const item = products.find(item => item.id === product.id)

    if (item) {
      total += item.regular_price.value * product.counter
    }
    return total
  }, 0)
}

export const getProductsInCart = () => {
  return cartProducts.reduce<ProductWithCounter[]>((acc, product) => {
    const item = products.find(item => item.id === product.id)

    if (item) {
      acc.push({
        ...product,
        ...item
      })
    }

    return acc
  }, [])
}

export const findProduct = async (event: H3Event<EventHandlerRequest>) => {
  const body = await readMultipartFormData(event)
  const idField = body?.find(f => f.name === 'id')
  const productId = idField ? Number(idField.data) : undefined

  if (!productId) {
    return undefined
  }

  let foundVariant: Variant | undefined = undefined
  let foundProduct: OriginalProduct | undefined = undefined

  for (const item of products) {
    if (item.type === ProductTypes.CONFIGURABLE) {
      foundVariant = item.variants?.find(variant => variant.product.id === productId)

      if (foundVariant) {
        foundProduct = item
        break
      }
    } else {
      if (item.id === productId) {
        foundProduct = item
        break
      }
    }
  }

  return foundVariant || foundProduct
}

export const changeCounterProductInCart = async (event: H3Event<EventHandlerRequest>) => {
  const body = await readMultipartFormData(event)
  const idField = body?.find(f => f.name === 'id')
  const counterField = body?.find(f => f.name === 'counter')
  const productCounter = counterField ? Number(counterField.data) : undefined
  const productId = idField ? Number(idField.data) : undefined
  const product = cartProducts.find(item => item.id === productId)

  if (product && productCounter) {
    product.counter = productCounter
  }
}