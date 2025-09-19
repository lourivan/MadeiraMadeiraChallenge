import React, { ReactElement } from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Cart from '~/modules/Cart/pages/cart'
import {
  CartProvider,
  ProductsCartProps,
  useCart,
} from '~/providers/CartProvider'
import { ProductsType } from '~/commons/types/productTypes'

const renderWithProvider = ui => {
  return render(<CartProvider>{ui}</CartProvider>)
}

describe('Cart Screen', () => {
  it('mostra carrinho vazio após carregar', async () => {
    jest.useFakeTimers()
    const { getByText } = renderWithProvider(<Cart />)
    jest.runAllTimers()
    expect(getByText('Seu carrinho está vazio 🛒')).toBeTruthy()
  })

  it('adiciona item e mostra no carrinho', async () => {
    const Wrapper = () => {
      const { addToCart } = useCart()
      const itensCart: ProductsCartProps = {
        id: 1,
        title: 'Produto Teste',
        price: 100.0,
        image: 'https://via.placeholder.com/70',
        quantity: 1,
      } as ProductsCartProps

      React.useEffect(() => {
        addToCart(itensCart)
      }, [])
      return <Cart />
    }

    const { getByText, getAllByText } = renderWithProvider(<Wrapper />)
    jest.runAllTimers()

    expect(getByText('Produto Teste')).toBeTruthy()
    expect(getAllByText('R$ 100,00')[0]).toBeTruthy()
  })

  it('incrementa e decrementa quantidade', async () => {
    const Wrapper = () => {
      const { addToCart } = useCart()
      const itensCart: ProductsCartProps = {
        id: 2,
        title: 'Produto Qtd',
        price: 50.0,
        image: 'https://via.placeholder.com/70',
        quantity: 1,
      } as ProductsCartProps

      React.useEffect(() => {
        addToCart(itensCart)
      }, [])
      return <Cart />
    }

    const { getByText, getAllByText } = renderWithProvider(<Wrapper />)
    jest.runAllTimers()

    expect(getByText('1')).toBeTruthy()

    fireEvent.press(getAllByText('+')[0])
    expect(getByText('2')).toBeTruthy()

    fireEvent.press(getAllByText('-')[0])
    expect(getByText('1')).toBeTruthy()
  })

  it('remove item do carrinho', async () => {
    const Wrapper = () => {
      const { addToCart } = useCart()
      const itensCart: ProductsCartProps = {
        id: 3,
        title: 'Produto Remover',
        price: 30.0,
        image: 'https://via.placeholder.com/70',
        quantity: 1,
      } as ProductsCartProps
      React.useEffect(() => {
        addToCart(itensCart)
      }, [])
      return <Cart />
    }

    const { getByText, queryByText } = renderWithProvider(<Wrapper />)
    jest.runAllTimers()

    fireEvent.press(getByText('✕'))
    expect(queryByText('Produto Remover')).toBeNull()
  })
})
