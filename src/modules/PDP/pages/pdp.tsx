import React, { useState, useEffect, useCallback } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation, StaticScreenProps } from '@react-navigation/native'
import { getProductDetail } from '~/modules/PDP/services/productDetailService'
import { formatarMoedaBRL } from '~/commons/utils/formatCurrency'
import { useCart, ProductsCartProps } from '~/providers/CartProvider'
import EmptyContent from '~/commons/components/EmptyContent'
import * as S from '~/modules/PDP/pages/style'
import Loader from '~/commons/components/loader'
import { Toast } from 'toastify-react-native'

type Props = StaticScreenProps<{
  productId: number
}>

const Pdp: React.FC<Props> = ({ route }) => {
  const [product, setProduct] = useState<ProductsCartProps>()
  const [loading, setLoading] = useState<boolean>(true)
  const { addToCart } = useCart()
  const { productId } = route.params
  const navigation = useNavigation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProductDetail(productId)
        if (data) {
          setProduct(data)
        }
      } catch (err) {
        Toast.show({
          type: 'error',
          text1: 'Que pena',
          text2: 'O produto que você procura não esta disponível',
          position: 'bottom',
          visibilityTime: 4000,
          autoHide: true,
        })
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [productId])

  const addItemTocart = useCallback(() => {
    if (product) {
      addToCart(product)
      navigation.navigate('Carrinho')
    }
  }, [product])

  if (loading) {
    return (
      <>
        <Loader text='Carregando produto' />
      </>
    )
  }

  return (
    <>
      {product ? (
        <ScrollView>
          <S.Container
            accessible={true}
            accessibilityLabel='Isso é uma peagina de detalhes do produto'
          >
            <S.Category testID='productCategory'>{product.category}</S.Category>
            <S.Img source={{ uri: product.image }} alt='Imagem do produto' />
            <S.Title>{product.title}</S.Title>
            <S.Description>{product.description}</S.Description>
            <S.Price>{formatarMoedaBRL(product.price)}</S.Price>

            <S.CartButton
              onPress={addItemTocart}
              accessibilityLabel='Pressione para adicionar o item ao carrinho'
              accessibilityRole='button'
            >
              <S.ButtonText>Adicionar ao Carrinho 🛒</S.ButtonText>
            </S.CartButton>
          </S.Container>
        </ScrollView>
      ) : (
        <EmptyContent text='Produto não encontrado' />
      )}
    </>
  )
}

export default Pdp
