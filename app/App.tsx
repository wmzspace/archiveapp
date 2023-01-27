import * as React from 'react';
// import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from './src/pages/home';
import GalleryScreen from './src/pages/gallery';

export default function App() {
  // console.log('start');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            headerShown: false,
          }}
        />
        {/*<Stack.Screen*/}
        {/*  name="Signup"*/}
        {/*  component={SignupScreen}*/}
        {/*  options={{*/}
        {/*    title: '注册账号',*/}
        {/*    headerTitleAlign: 'center',*/}
        {/*    headerStyle: [*/}
        {/*      useColorScheme() === 'dark'*/}
        {/*        ? styles.darkBackgroundColor*/}
        {/*        : styles.lightBackgroundColor,*/}
        {/*    ],*/}
        {/*    headerTintColor: useColorScheme() === 'dark' ? '#ffffff' : 'black',*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="Login"*/}
        {/*  component={LoginScreen}*/}
        {/*  options={{*/}
        {/*    title: '登录账号',*/}
        {/*    headerTitleAlign: 'center',*/}
        {/*    headerStyle: [*/}
        {/*      useColorScheme() === 'dark'*/}
        {/*        ? styles.darkBackgroundColor*/}
        {/*        : styles.lightBackgroundColor,*/}
        {/*      {borderWidth: 0},*/}
        {/*    ],*/}
        {/*    headerTitleStyle: {borderColor: 'white', borderWidth: 0},*/}
        {/*    headerTintColor: useColorScheme() === 'dark' ? '#ffffff' : 'black',*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="Main"*/}
        {/*  component={MainScreen}*/}
        {/*  options={{*/}
        {/*    // headerShown: false,*/}

        {/*    title: 'Yechat',*/}
        {/*    headerTitleAlign: 'center',*/}
        {/*    headerStyle: [*/}
        {/*      useColorScheme() === 'dark'*/}
        {/*        ? styles.darkBackgroundColor*/}
        {/*        : styles.lightBackgroundColor,*/}
        {/*      {borderWidth: 0},*/}
        {/*    ],*/}
        {/*    headerTitleStyle: {borderColor: 'white', borderWidth: 0},*/}
        {/*    headerTintColor: useColorScheme() === 'dark' ? '#ffffff' : 'black',*/}
        {/*  }}*/}
        {/*/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
