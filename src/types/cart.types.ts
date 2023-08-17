import Product from '../types/product.types'

interface CartProduct extends Product {
  quantity: number
}

export default CartProduct
