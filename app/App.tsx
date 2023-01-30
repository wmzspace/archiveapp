import * as React from 'react';
import {ScrollView, useColorScheme, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {StatusBarComp} from './src/components/StatusBarComp';

import {SignerContextProvider} from './src/context/SignerContext';
import {PreferencesContext} from './src/context/PreferencesContext';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
const GRAPH_URL = process.env.NEXT_PUBLIC_GRAPH_URL as string;
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: GRAPH_URL,
  uri: 'https://api.studio.thegraph.com/query/40910/archive/0.0.1',
});

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD2LightTheme,
  MD2DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import globalStyles from './src/global/globalStyles';

import GalleryScreen from './src/pages/gallery';
import UploadScreen from './src/pages/upload';
import SettingsScreen from './src/pages/settings';
import {CombinedDarkTheme, CombinedDefaultTheme} from './src/utils/theme';
import useArchiveMarket from './src/hooks/useArchiveMarket';
import useListedNFTs from './src/hooks/useListedNFTs';
import globalConstants from './src/global/globalConstants';

const App: any = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        {/*theme={MD3LightTheme}*/}
        <View style={globalStyles.container}>
          <StatusBarComp />
          <SignerContextProvider>
            <ApolloProvider client={apolloClient}>
              <NavigationContainer theme={theme}>
                {/*<NavigationContainer theme={LightTheme}>*/}
                <Tab.Navigator
                  initialRouteName="Gallery"
                  barStyle={isThemeDark ? null : {backgroundColor: '#ffffff'}}>
                  {/*<Tab.Navigator initialRouteName="Gallery">*/}
                  <Tab.Screen
                    name="Gallery"
                    component={GalleryScreen}
                    options={{
                      // headerShown: false,
                      title: 'Gallery',
                      // headerTitleAlign: 'center',
                      // headerStyle: [
                      // useColorScheme() === 'dark' ?
                      // ],
                      tabBarLabel: 'Home',
                      tabBarBadge: globalConstants.tabBarBadgeHome
                        ? globalConstants.tabBarBadgeHome
                        : '?',

                      tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                          name="home"
                          color={color}
                          size={size ? size : 20}
                        />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Upload"
                    component={UploadScreen}
                    options={{
                      // headerShown: false,
                      title: 'Upload',
                      // headerTitleStyle: {color: 'red'},
                      // headerTitleAlign: 'center',
                      // headerStyle: [
                      // useColorScheme() === 'dark' ?
                      // ],
                      // headerTintColor:
                      tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                          name="upload"
                          color={color}
                          size={size ? size : 20}
                        />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                      // headerShown: false,
                      title: 'Settings',
                      // headerTitleStyle: {color: 'red'},
                      // headerTitleAlign: 'center',
                      // headerStyle: [
                      // useColorScheme() === 'dark' ?
                      // ],
                      // headerTintColor:
                      tabBarIcon: ({color, size}) => (
                        <Ionicons
                          name="settings"
                          color={color}
                          size={size ? size : 18}
                        />
                      ),
                    }}
                  />
                </Tab.Navigator>
              </NavigationContainer>
            </ApolloProvider>
          </SignerContextProvider>
        </View>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
//
// <Stack.Navigator initialRouteName="Gallery">
//     <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//             headerShown: true,
//             title: 'Gallery',
//             headerTitleAlign: 'center',
//             headerStyle: [
//                 // useColorScheme() === 'dark' ?
//             ],
//             // headerTintColor:
//         }}
//     />
//
//     <Stack.Screen
//         name="Gallery"
//         component={GalleryScreen}
//         options={{
//             headerShown: false,
//             title: 'Gallery',
//             headerTitleAlign: 'center',
//             headerStyle: [
//                 // useColorScheme() === 'dark' ?
//             ],
//         }}
//     />
// </Stack.Navigator>
