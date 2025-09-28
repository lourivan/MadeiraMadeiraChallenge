import React, { memo, useCallback } from 'react'
import {
  Badge,
  BadgeText,
  CartText,
  TouchableCart,
} from '~/commons/components/cartButton/styles'
import { useCart } from '~/providers/CartProvider'

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
      testID='cartButtonHeader'
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
