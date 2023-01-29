import * as React from 'react';
// import {useColorScheme} from 'react-native';

import HomeScreen from './src/pages/home';
import GalleryScreen from './src/pages/gallery';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Navbar from './src/components/Navbar';
import {SignerContextProvider} from './src/context/SignerContext';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {ScrollView, useColorScheme, View} from 'react-native';

import {
  Provider as PaperProvider,
  useTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
const {LightTheme} = adaptNavigationTheme({reactNavigationLight: DefaultTheme});

const GRAPH_URL = process.env.NEXT_PUBLIC_GRAPH_URL as string;
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: GRAPH_URL,
  uri: 'https://api.studio.thegraph.com/query/40910/archive/0.0.1',
});

const stateHandler = (prevState, newState, action) => {
  console.log('onStateChange: ACTION:', action);
};

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

// import {MaterialCommunityIcons} from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import globalStyles from './globalStyles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBarComp} from './src/components/StatusBarComp';
import UploadScreen from './src/pages/upload';

const App: any = () => {
  // console.log('start');
  return (
    <PaperProvider theme={{version: 3}}>
      {/*theme={MD3LightTheme}*/}
      <View style={globalStyles.container}>
        <StatusBarComp />
        <SignerContextProvider>
          <ApolloProvider client={apolloClient}>
            <NavigationContainer>
              {/*<NavigationContainer theme={LightTheme}>*/}
              <Tab.Navigator initialRouteName="Gallery" barStyle={{height: 70}}>
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
                    tabBarBadge: '6',

                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={20}
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
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons
                        name="upload"
                        color={color}
                        size={20}
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
