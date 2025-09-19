import React, { memo } from 'react'
import { View } from 'react-native'

import { formatarMoedaBRL } from '~/commons/utils/formatCurrency'
import * as S from '~/modules/Cart/components/cartFooter/style'

interface FotterProps {
  total: string
}

const CartFooter:React.FC<FotterProps> = ({total}) => {

  return(
     <S.Footer>
        <View>
          <S.TotalLabel>Total</S.TotalLabel>
          <S.TotalValue>
            {formatarMoedaBRL(total)}
          </S.TotalValue>
        </View>

        <S.CheckoutButton>
          <S.CheckoutText>Finalizar Compra</S.CheckoutText>
        </S.CheckoutButton>
      </S.Footer>
  )
}

export default memo(CartFooter)