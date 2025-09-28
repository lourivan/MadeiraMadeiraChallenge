import { NavigationContainer } from '@react-navigation/native'
import { render, RenderOptions } from '@testing-library/react-native'
import { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { CartProvider } from '~/providers/CartProvider'

// Wrapper que inclui o provider
const AllProviders = ({ children }: PropsWithChildren<ReactNode>) => {
  return (
    <CartProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </CartProvider>
  )
}

// Função customizada de render
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react-native'
export { customRender as render }
