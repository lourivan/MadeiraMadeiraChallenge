import styled from 'styled-components/native'

export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #FFF;
  padding: 16px;
  border-top-width: 1px;
  border-top-Cclor: #eee;
  shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-offset: { width: 0; height: -2px; };
  shadow-radius: 4px;
  elevation: 5;
`

export const TotalLabel = styled.Text`
  font-size: 14px; 
  color: #666;
`

export const TotalValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #27AE60;
`

export const CheckoutButton = styled.Pressable`
  background-color: #27AE60;
  padding-vertical: 12px;
  padding-horizontal: 20px;
  border-radius: 10px;
`
export const CheckoutText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
`