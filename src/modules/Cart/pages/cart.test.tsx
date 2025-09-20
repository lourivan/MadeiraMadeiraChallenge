import React from 'react'
import Cart from '~/modules/Cart/pages/cart'
import { ProductsCartProps, useCart } from '~/providers/CartProvider'
import { render, fireEvent } from '~/commons/utils/test-utils'

describe('Cart Screen', () => {
  it('Show expty cart after load', async () => {
    jest.useFakeTimers()
    const { getByText } = render(<Cart />)
    jest.runAllTimers()
    expect(getByText('Seu carrinho está vazio 🛒')).toBeTruthy()
  })

  it('Add product in the cart and show then', async () => {
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

    const { getByText, getAllByText } = render(<Wrapper />)
    jest.runAllTimers()

    expect(getByText('Produto Teste')).toBeTruthy()
    expect(getAllByText('R$ 100,00')[0]).toBeTruthy()
  })

  it('Increase and decrease item', async () => {
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

    const { getByText, getAllByText } = render(<Wrapper />)
    jest.runAllTimers()

    expect(getByText('1')).toBeTruthy()

    fireEvent.press(getAllByText('+')[0])
    expect(getByText('2')).toBeTruthy()

    fireEvent.press(getAllByText('-')[0])
    expect(getByText('1')).toBeTruthy()
  })

  it('Remove item from the cart', async () => {
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

    const { getByText, queryByText } = render(<Wrapper />)
    jest.runAllTimers()

    fireEvent.press(getByText('✕'))
    expect(queryByText('Produto Remover')).toBeNull()
    expect(getByText('Seu carrinho está vazio 🛒')).toBeTruthy()
  })
})
