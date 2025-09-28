import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import EmptyContent from '~/commons/components/EmptyContent'
import Loader from '~/commons/components/loader'
import { ProductsType } from '~/commons/types/productTypes'
import ListItem from '~/modules/PLP/components/ListItem'
import * as S from '~/modules/PLP/pages/styles'
import { getProducts } from '~/modules/PLP/services/listProductsService'

const Plp: React.FC = () => {
  const [products, setProducts] = useState<ProductsType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const navigation = useNavigation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProducts()
        if (data) {
          setProducts(data)
        }
      } catch (err) {
        setProducts([])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <Loader text='Carregando produtos...' />
  }

  return (
    <>
      {!products.length ? (
        <EmptyContent text='Não ha produtos a serem exibidos' />
      ) : (
        <S.Container>
          <S.Header testID='TextHeader'>Catálogo de produtos</S.Header>
          <S.ListItens
            data={products}
            windowSize={8}
            keyExtractor={item => String(item.id)}
            renderItem={({ index, item }) => (
              <>
                <ListItem
                  item={item}
                  testID={`cardItem_${index}`}
                  onPress={() =>
                    navigation.navigate('Detalhes', { productId: item.id })
                  }
                />
              </>
            )}
            initialNumToRender={10}
          />
        </S.Container>
      )}
    </>
  )
}

export default Plp
