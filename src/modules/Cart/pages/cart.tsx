import React, { useMemo } from 'react'
import EmptyContent from '~/commons/components/EmptyContent'
import CartFooter from '~/modules/Cart/components/cartFooter'
import CartItem from '~/modules/Cart/components/cartItem'
import { CartContainer, CartList } from '~/modules/Cart/pages/style'
import { useCart } from '~/providers/CartProvider'

const Cart: React.FC = () => {
  const { cartItems, addToCart, removeFromCart, decrementFromCart } = useCart()

  const total: number = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const quantity = item.quantity ?? 1
      return sum + (isNaN(item.price) ? 0 : item.price * quantity)
    }, 0)
  }, [cartItems])

  return (
    <CartContainer>
      {cartItems.length === 0 ? (
        <>
          <EmptyContent text={`Seu carrinho está vazio 🛒`} />
        </>
      ) : (
        <>
          <CartList
            data={cartItems}
            testID='wrapperCart'
            keyExtractor={item => String(item.id)}
            renderItem={({ item, index }) => (
              <>
                <CartItem
                  item={item}
                  testID={`cartItem_${index}`}
                  incrementCallback={() => addToCart(item)}
                  decremenCallback={() => decrementFromCart(item.id)}
                  removeFromCart={() => removeFromCart(index)}
                />
              </>
            )}
          />
          <CartFooter total={total} />
        </>
      )}
    </CartContainer>
  )
}

export default Cart
