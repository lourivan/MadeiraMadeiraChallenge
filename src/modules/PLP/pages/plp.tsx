import React, { useState, useEffect } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as S from '~/modules/PLP/pages/styles'
import { getProducts } from '~/modules/PLP/services/listProductsService'
import { ProductsType } from '~/commons/types/productTypes'
import { RootStackParamList } from '~/routes/navigationTypes'
import ListItem from '~/modules/PLP/components/ListItem'
import Loader from '~/commons/components/loader'
import { useNavigation } from '@react-navigation/native'

type PlpScreenProps = NativeStackScreenProps<RootStackParamList, 'Produtos'>

interface PlpListItem {
  item: ProductsType
}

const Plp: React.FC<PlpScreenProps> = () => {
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
    return (
      <>
        <Loader text='Carregando produtos' />
      </>
    )
  }

  return (
    <S.Container>
      <S.Header>📱 Catálogo de produtos</S.Header>
      <S.ListItens
        data={products}
        windowSize={8}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <>
            <ListItem
              item={item}
              onPress={() =>
                navigation.navigate('Detalhes', { productId: item.id })
              }
            />
          </>
        )}
        initialNumToRender={10}
      />
    </S.Container>
  )
}

export default Plp
