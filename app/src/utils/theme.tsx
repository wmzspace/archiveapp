import {MD2DarkTheme, MD2LightTheme} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

export const CombinedDefaultTheme = {
  ...MD2LightTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...MD2LightTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
export const CombinedDarkTheme = {
  ...MD2DarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...MD2DarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};
