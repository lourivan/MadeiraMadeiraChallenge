import { StatusBar, useColorScheme, View, Text } from 'react-native'
import Routes from '~/routes'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import { CartProvider } from '~/providers/CartProvider'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <CartProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Routes />
        </SafeAreaView>
      </SafeAreaProvider>
    </CartProvider>
  )
}

export default App
