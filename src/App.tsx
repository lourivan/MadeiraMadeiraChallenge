import { StatusBar, useColorScheme } from 'react-native'
import Routes from '~/routes'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import { CartProvider } from '~/providers/CartProvider'
import ToastManager from 'toastify-react-native/components/ToastManager'

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <CartProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Routes />
          <ToastManager />
        </SafeAreaView>
      </SafeAreaProvider>
    </CartProvider>
  )
}

export default App
