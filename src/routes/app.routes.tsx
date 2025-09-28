import { NavigationContainer, StaticParamList } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartButton from '~/commons/components/cartButton'
import { AppTheme } from '~/commons/theme/defaultTheme'
// Routes
import { Linking, Text } from 'react-native'
import Cart from '~/modules/Cart/pages/cart'
import Pdp from '~/modules/PDP/pages/pdp'
import Plp from '~/modules/PLP/pages/plp'

const Stack = createNativeStackNavigator()

type RootStackParamList = StaticParamList<typeof Stack>
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function AppRoutes() {
  const linking = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        Produtos: 'products',
        Carrinho: 'cart',
        Detalhes: 'product/:id',
      },
    },
  }

  Linking.addEventListener('url', ({ url }) => {
    console.log(url)
  })

  return (
    <NavigationContainer
      theme={AppTheme}
      linking={linking}
      fallback={<Text>Loading...</Text>}
    >
      <Stack.Navigator
        initialRouteName='Produtos'
        screenOptions={{
          headerStyle: {
            backgroundColor: AppTheme.colors.card,
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: AppTheme.colors.primary,
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name='Produtos'
          options={({ navigation }) => ({
            headerRight: () => (
              <>
                <CartButton navigation={navigation} />
              </>
            ),
          })}
          component={Plp}
        />

        <Stack.Screen
          name='Detalhes'
          options={({ navigation }) => ({
            headerBackTitle: 'Voltar',
            title: 'Detalhes do produto',
            headerRight: () => (
              <>
                <CartButton navigation={navigation} />
              </>
            ),
          })}
          component={Pdp}
        />

        <Stack.Screen
          options={{ headerBackTitle: 'voltar' }}
          name='Carrinho'
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
