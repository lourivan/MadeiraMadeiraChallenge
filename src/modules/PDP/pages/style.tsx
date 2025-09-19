import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`

export const Img = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`

export const Description = styled.Text`
  fotn-size: 16px;
  color: #555;
  margin-vertical: 10px;
`

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #2ecc71;
  margin-bottom: 20px;
`

export const CartButton = styled.Pressable`
  background-color: #2ecc71;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
`

export const Category = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 6px;
  font-weight: 400;
`
