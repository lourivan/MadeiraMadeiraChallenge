import { DefaultTheme, Theme } from '@react-navigation/native'
import { Platform } from 'react-native'

export const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2ecc71',
    background: '#F9F9F9',
    card: '#FFFFFF',
    text: '#222222',
    border: '#E0E0E0',
    notification: '#E53935',
  },
  fonts: Platform.select({
    default: {
      regular: {
        fontFamily: 'Dosis-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Dosis-Medium',
        fontWeight: 'normal',
      },
      semiBold: {
        fontFamily: 'Dosis-SemiBold',
        fontWeight: '600',
      },
      bold: {
        fontFamily: 'Dosis-Bold',
        fontWeight: '600',
      },
      heavy: {
        fontFamily: 'Dosis-ExtraBold',
        fontWeight: '700',
      },
    },
  }),
}
