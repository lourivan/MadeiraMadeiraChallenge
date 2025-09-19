import React, { useCallback, useMemo } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native'
import { useCart } from '~/providers/CartProvider'
import { formatarMoedaBRL } from '~/commons/utils/formatCurrency'
import CartItem from '~/modules/Cart/components/cartItem'
import CartFooter from '~/modules/Cart/components/cartFooter'
import EmptyContent from '~/commons/components/EmptyContent'
import { CartContainer, CartList } from '~/modules/Cart/pages/style'

const Cart: React.FC = () => {
  const { cartItems, addToCart, removeFromCart, decrementFromCart } = useCart()

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      return sum + (isNaN(item.price) ? 0 : item.price * item.quantity)
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
