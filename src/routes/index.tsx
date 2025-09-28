import React from 'react'
import styled from 'styled-components/native'
import AppRoutes from '~/routes/app.routes'

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
`

const Routes: React.FC = () => {
  return(
    <Wrapper>
      <AppRoutes />
    </Wrapper>
  )
}

export default Routes