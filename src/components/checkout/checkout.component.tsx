import { FunctionComponent, useContext } from 'react'
import { BsBagCheck } from 'react-icons/bs'

// Utilities
import { CartContext } from '../../contexts/cart.context'

// Components
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

// Styles
import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutProducts,
  CheckoutTotal
} from './checkout.styles'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  return (
    <>
      <CheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>

        {products.length > 0 ? (
          <>
            <CheckoutProducts>
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </CheckoutProducts>

            <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>

            <CustomButton startIcon={<BsBagCheck />}>
              Finalizar Compra
            </CustomButton>
          </>
        ) : (
          <p>Seu carrinho está vazio!</p>
        )}
      </CheckoutContainer>
    </>
  )
}

export default Checkout