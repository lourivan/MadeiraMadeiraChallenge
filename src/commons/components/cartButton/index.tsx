import React, { memo, useCallback } from 'react'
import { useCart } from '~/providers/CartProvider'
import {
  TouchableCart,
  CartText,
  Badge,
  BadgeText,
} from '~/commons/components/cartButton/styles'

interface CartProps {
  navigation: any
}

const CartButton: React.FC<CartProps> = ({ navigation }) => {
  const { cartItems } = useCart()

  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity ?? 1),
    0,
  )

  const redirectButton = useCallback(() => {
    navigation.navigate('Carrinho')
  }, [])

  return (
    <TouchableCart
      onPress={redirectButton}
      accessibilityLabel='Pressione aqui para acessar a página do carrinho'
    >
      <>
        <CartText>🛒</CartText>
        {totalItems > 0 && (
          <Badge>
            <BadgeText>{totalItems}</BadgeText>
          </Badge>
        )}
      </>
    </TouchableCart>
  )
}

export default memo(CartButton)
