import styled from 'styled-components/native'

export const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`
export const LoaderText = styled.Text`
  margin-top: 12px;
  font-size: 16px;
  color: #555;
  font-weight: 500;
`
export const LoaderItem = styled.ActivityIndicator.attrs({
  color: '#27AE60',
})``
