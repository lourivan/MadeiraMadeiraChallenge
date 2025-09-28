import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import ToastManager from 'toastify-react-native/components/ToastManager'
import { CartProvider } from '~/providers/CartProvider'
import Routes from '~/routes'

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaProvider>
      <CartProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Routes />
          <ToastManager />
        </SafeAreaView>
      </CartProvider>
    </SafeAreaProvider>
  )
}

export default App
