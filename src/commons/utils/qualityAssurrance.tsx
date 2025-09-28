import { Platform } from 'react-native'

interface ItestID {
  accessible?: boolean
  testID: string
  accessibilityLabel?: string
}
const testID = (testID: string): ItestID =>
  Platform.OS === 'android'
    ? {
        testID,
        accessible: true,
        accessibilityLabel: testID,
      }
    : {
        testID,
        accessible: false,
      }

export type componentType =
  | 'ActivityIndicator'
  | 'View'
  | 'Lottie'
  | 'ScrollView'
  | 'Modal'
  | 'TextInput'
  | 'Image'
  | 'Text'
  | 'ImageBackground'
  | 'TouchableOpacity'
  | 'Radio'
  | 'Switch'
  | 'Checkbox'
  | 'SafeAreaView'
  | 'Swiper'
  | 'Slider'
  | 'Segment'
  | 'Pressable'
  | 'Button'

export const assignTestId = (
  componentType: componentType,
  componentId: string,
): ItestID => {
  const id = `${componentType}_${componentId}`
  return testID(id)
}
export const mockTestID = (
  componentType: componentType,
  componentId: string,
): ItestID => assignTestId(componentType, componentId)
