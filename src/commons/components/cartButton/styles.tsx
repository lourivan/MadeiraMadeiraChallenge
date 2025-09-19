import styled from 'styled-components/native'

export const TouchableCart = styled.Pressable`
  margin-right: 16px;
`

export const CartText = styled.Text`
  font-size: 18px;
`

export const Badge = styled.View`
  position: absolute;
  right: -6px;
  top: -4px;
  background-color: red;
  border-radius: 10px;
  min-width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  padding-horizontal: 4px;
`

export const BadgeText = styled.Text`
  color: #FFF;
  font-size: 12px;
  font-weight: bold;
`