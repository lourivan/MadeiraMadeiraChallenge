import { ReactElement, PropsWithChildren, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react-native'
import { CartProvider } from '~/providers/CartProvider'
import { NavigationContainer } from '@react-navigation/native'

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
