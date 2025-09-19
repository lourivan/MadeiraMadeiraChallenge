import React, { memo } from 'react'

import { ContainerEmpty, EmptyText } from '~/commons/components/EmptyContent/style'

interface EmptyContentProps {
  text: string
}

const EmptyContent:React.FC<EmptyContentProps> = ({text}) => {

  return(
    <ContainerEmpty>
      <EmptyText>{text}</EmptyText>
    </ContainerEmpty>
  )
}

export default memo(EmptyContent)