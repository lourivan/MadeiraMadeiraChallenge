import React from 'react'
import { render, waitFor, fireEvent } from '~/commons/utils/test-utils'
import CartButton from '~/commons/components/cartButton'
import { ProductsCartProps, useCart } from '~/providers/CartProvider'

const itensCart: ProductsCartProps = {
  id: 1,
  title: 'Produto Teste',
  price: 100,
  image: 'https://via.placeholder.com/70',
  quantity: 1,
} as ProductsCartProps

describe('Cart button component', () => {
  it('Should render button cart and badge with total items', async () => {
    let props = {
      navigate: jest.fn(),
    }
    const Wrapper = () => {
      const { addToCart } = useCart()
      React.useEffect(() => {
        addToCart(itensCart)
      }, [])
      return <CartButton navigation={props} />
    }

    const { queryByTestId, getByText } = render(<Wrapper />)
    const sut = queryByTestId('cartButtonHeader')

    expect(sut).toBeTruthy()
    await waitFor(() => {
      expect(getByText('1')).toBeTruthy()
      fireEvent.press(sut, 'press')
      expect(props.navigate).toHaveBeenCalledTimes(1)
    })
  })
})
