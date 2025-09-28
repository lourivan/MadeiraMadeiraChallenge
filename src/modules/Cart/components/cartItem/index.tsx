import React, { memo } from 'react'

import { ProductsType } from '~/commons/types/productTypes'
import { formatarMoedaBRL } from '~/commons/utils/formatCurrency'
import * as S from '~/modules/Cart/components/cartItem/style'
interface CartItemProps {
  item: ProductsType
  decremenCallback?: (id: number) => void
  incrementCallback?: (item: ProductsType) => void
  removeFromCart?: (id: number) => void
  testID?: string
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  decremenCallback,
  incrementCallback,
  removeFromCart,
  testID,
}) => {
  return (
    <S.CardContainer testID={`${testID}_containerCart`}>
      <S.Img
        testID={`${testID}_imgCart`}
        source={{ uri: item.image }}
        alt='Imagem do produto'
      />
      <S.Info>
        <S.CardTitle>{item.title}</S.CardTitle>
        <S.Price testID={`${testID}_priceItem`}>
          {formatarMoedaBRL(item.price)}
        </S.Price>
        <S.QuantityContainer>
          <S.QtyButton
            testID={`${testID}_decrementItem`}
            onPress={decremenCallback}
          >
            <S.QtyText>-</S.QtyText>
          </S.QtyButton>
          <S.QtyValue testID={`${testID}_quantity`}>{item.quantity}</S.QtyValue>
          <S.QtyButton
            testID={`${testID}_incrementItem`}
            onPress={incrementCallback}
          >
            <S.QtyText>+</S.QtyText>
          </S.QtyButton>
        </S.QuantityContainer>
      </S.Info>
      <S.RemoveButton testID={`${testID}_removeItem`} onPress={removeFromCart}>
        <S.RemoveText>✕</S.RemoveText>
      </S.RemoveButton>
    </S.CardContainer>
  )
}

export default memo(CartItem)
