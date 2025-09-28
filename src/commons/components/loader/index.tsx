import React, { memo } from 'react'

import {
    LoaderContainer, LoaderItem, LoaderText
} from '~/commons/components/loader/style'

interface LoaderProps {
  text?: string
}

const Loader: React.FC<LoaderProps> = ({ text = 'Carregando...' }) => {
  return (
    <LoaderContainer testID='loader'>
      <LoaderItem size='large' />
      <LoaderText testID='textLoader'>{text}</LoaderText>
    </LoaderContainer>
  )
}

export default memo(Loader)
