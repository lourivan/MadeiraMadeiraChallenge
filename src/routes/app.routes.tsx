import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartButton from '~/commons/components/cartButton'

// Routes
import Plp from '~/modules/PLP/pages/plp'
import Pdp from '~/modules/PDP/pages/pdp'
import Cart from '~/modules/Cart/pages/cart'

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Produtos">
        <Stack.Screen name="Produtos" options={({navigation}) => ({
          title: 'Sample Commerce', 
          headerRight: () => (<><CartButton navigation={navigation} /></>)
        })} component={Plp} />
        <Stack.Screen name="Detalhes" options={({navigation}) => ({
          title: 'Detalhes do produto', 
          headerRight: () => (<><CartButton navigation={navigation} /></>)
        })} component={Pdp} />
        <Stack.Screen name="Carrinho" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}