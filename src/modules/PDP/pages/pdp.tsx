import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ProductsType } from '~/commons/types/productTypes'
import { RootStackParamList } from '~/routes/navigationTypes'
import { getProductDetail } from '~/modules/PDP/services/productDetailService'
import { formatarMoedaBRL } from '~/commons/utils/formatCurrency'
import { useCart } from '~/providers/CartProvider'
import EmptyContent from '~/commons/components/EmptyContent'
import * as S from '~/modules/PDP/pages/style'
import Loader from '~/commons/components/loader'

type PdpScreenProps = NativeStackScreenProps<RootStackParamList, 'Detalhes'>

const Pdp = ({ route }: PdpScreenProps) => {
  const [product, setProduct] = useState<ProductsType>()
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
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [productId])

  const addItemTocart = (product: ProductsType) => {
    addToCart(product)
    navigation.navigate('Carrinho')
  }

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
              onPress={() => addItemTocart(product)}
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
