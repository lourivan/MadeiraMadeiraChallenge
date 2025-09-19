import styled from 'styled-components/native'

export const CartContainer = styled.View`
  flex: 1;
  background-color: #F8F9FA ;
`

export const CartList = styled.FlatList.attrs({
  contentContainerStyle: {paddingBottom: 120}
})``