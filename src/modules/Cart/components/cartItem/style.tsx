import styled from 'styled-components/native'

export const CardContainer = styled.View.attrs({
  style: { shadowOffset: { width: 0, height: 2 } },
})`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  margin-horizontal: 16px;
  margin-vertical: 8px;
  border-radius: 12px;
  padding: 12px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 3px;
  elevation: 2;
`

export const Img = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: #eee;
`

export const Info = styled.View`
  flex: 1;
  margin-left: 12px;
`

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
`

export const Price = styled.Text`
  fontsize: 15px;
  font-weight: bold;
  color: #2ecc71;
  margin-bottom: 6px;
`

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const QtyButton = styled.Pressable`
  background-color: #eee;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

export const QtyText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`

export const QtyValue = styled.Text`
  margin-horizontal: 10px;
  font-size: 16px;
  font-weight: 600;
`

export const RemoveButton = styled.Pressable`
  margin-left: 10px;
  background-color: #fdedec;
  padding: 8px;
  border-radius: 20px;
`

export const RemoveText = styled.Text`
  color: #e74c3c;
  font-size: 14ppx;
  font-weight: bold;
`
