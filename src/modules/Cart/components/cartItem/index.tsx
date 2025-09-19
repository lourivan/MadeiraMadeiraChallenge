import React, { memo } from 'react'

import * as S from '~/modules/Cart/components/cartItem/style'
import { formatarMoedaBRL } from '~/commons/utils/formatCurrency'
import { ProductsType } from '~/commons/types/productTypes'

interface CartItemProps {
  item: ProductsType
  decremenCallback?: (id: number) => void
  incrementCallback?: (item: ProductsType) => void
  removeFromCart?: (id: number) => void
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  decremenCallback,
  incrementCallback,
  removeFromCart,
}) => {
  return (
    <S.CardContainer>
      <S.Img source={{ uri: item.image }} alt='Imagem do produto' />
      <S.Info>
        <S.CardTitle>{item.title}</S.CardTitle>
        <S.Price testID='priceItem'>{formatarMoedaBRL(item.price)}</S.Price>
        <S.QuantityContainer>
          <S.QtyButton onPress={decremenCallback}>
            <S.QtyText>-</S.QtyText>
          </S.QtyButton>
          <S.QtyValue>{item.quantity}</S.QtyValue>
          <S.QtyButton onPress={incrementCallback}>
            <S.QtyText>+</S.QtyText>
          </S.QtyButton>
        </S.QuantityContainer>
      </S.Info>
      <S.RemoveButton onPress={removeFromCart}>
        <S.RemoveText>✕</S.RemoveText>
      </S.RemoveButton>
    </S.CardContainer>
  )
}

export default memo(CartItem)
