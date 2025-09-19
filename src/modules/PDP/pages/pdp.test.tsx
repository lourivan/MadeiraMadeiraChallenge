import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pdp from '~/modules/PDP/pages/pdp'
import {
  CartProvider,
  ProductsCartProps,
  useCart,
} from '~/providers/CartProvider'

const Stack = createNativeStackNavigator()

const mock = {
  id: '1',
  title: 'Produto Teste',
  price: 'R$ 100,00',
  thumbnail: 'https://via.placeholder.com/70',
  category: 'test',
  description: 'as',
}

const renderWithProvider = ui => {
  return render(
    <CartProvider>
      <TestNavigationContainer>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Detalhes' component={() => children} />
          </Stack.Navigator>
        </NavigationContainer>
      </TestNavigationContainer>
    </CartProvider>,
  )
}

describe('Product detail page', () => {
  it('renderiza lista de produtos', async () => {
    const mockRoute = {
      params: {
        productId: 4,
      },
    }
    const Wrapper = () => {
      return <Pdp route={mockRoute} />
    }
    jest.runAllTimers()
    const { getByText, getByTestId } = renderWithProvider(<Wrapper />)
    jest.useFakeTimers()

    expect(getByTestId('productCategory')).toBeTruthy()
  })
})
