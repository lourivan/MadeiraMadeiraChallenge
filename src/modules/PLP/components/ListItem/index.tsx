import React, { memo } from 'react'

import {
  Card,
  Thumbnail,
  Info,
  Title,
  Description,
  Price,
} from '~/modules/PLP/pages/styles'
import { ProductsType } from '~/commons/types/productTypes'
import { formatarMoedaBRL } from '~/commons/utils/formatCurrency'

interface ItemListProps {
  item: ProductsType
  onPress: () => void
}

const ListItem: React.FC<ItemListProps> = ({ item, onPress }) => {
  return (
    <Card
      onPress={onPress}
      testID='cardItem'
      accessibilityLabel='Pressione para ir para os detalhes do produto'
    >
      <Thumbnail source={{ uri: item.image }} />
      <Info>
        <Title>{item.title}</Title>
        <Description>{item.category}</Description>
        <Price>{formatarMoedaBRL(item.price)}</Price>
      </Info>
    </Card>
  )
}

export default memo(ListItem)
