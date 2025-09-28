import React, { memo } from 'react'

import { ProductsType } from '~/commons/types/productTypes'
import { formatarMoedaBRL } from '~/commons/utils/formatCurrency'
import {
    Card, Description, Info, Price, Thumbnail, Title
} from '~/modules/PLP/pages/styles'

interface ItemListProps {
  item: ProductsType
  onPress: () => void
  testID?: string
}

const ListItem: React.FC<ItemListProps> = ({ item, onPress, testID }) => {
  return (
    <Card
      onPress={onPress}
      testID={testID}
      accessibilityLabel='Pressione para ir para os detalhes do produto'
    >
      <Thumbnail testID={`${testID}_plpImage`} source={{ uri: item.image }} />
      <Info>
        <Title testID={`${testID}_plpTitle`}>{item.title}</Title>
        <Description testID={`${testID}_plpCategory`}>
          {item.category}
        </Description>
        <Price testID={`${testID}_plpPrice`}>
          {formatarMoedaBRL(item.price)}
        </Price>
      </Info>
    </Card>
  )
}

export default memo(ListItem)
