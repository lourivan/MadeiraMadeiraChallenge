import React, { useMemo } from 'react'
import { useCart } from '~/providers/CartProvider'
import CartItem from '~/modules/Cart/components/cartItem'
import CartFooter from '~/modules/Cart/components/cartFooter'
import EmptyContent from '~/commons/components/EmptyContent'
import { CartContainer, CartList } from '~/modules/Cart/pages/style'

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
            keyExtractor={item => String(item.id)}
            renderItem={({ item, index }) => (
              <>
                <CartItem
                  item={item}
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
