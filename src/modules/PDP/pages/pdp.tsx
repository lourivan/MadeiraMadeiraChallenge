import { StaticScreenProps, useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Toast } from 'toastify-react-native'
import EmptyContent from '~/commons/components/EmptyContent'
import Loader from '~/commons/components/loader'
import { formatarMoedaBRL } from '~/commons/utils/formatCurrency'
import * as S from '~/modules/PDP/pages/style'
import { getProductDetail } from '~/modules/PDP/services/productDetailService'
import { ProductsCartProps, useCart } from '~/providers/CartProvider'

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
            testID='containerPdp'
            accessible={true}
            accessibilityLabel='Isso é uma peagina de detalhes do produto'
          >
            <S.Category testID='productCategory'>{product.category}</S.Category>
            <S.Img
              testID='productImage'
              source={{ uri: product.image }}
              alt='Imagem do produto'
            />
            <S.Title testID='productTitle'>{product.title}</S.Title>
            <S.Description testID='productDescription'>
              {product.description}
            </S.Description>
            <S.Price testID='productPrice'>
              {formatarMoedaBRL(product.price)}
            </S.Price>

            <S.CartButton
              onPress={addItemTocart}
              testID='addToCart'
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
