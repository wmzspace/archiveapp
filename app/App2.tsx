import * as React from 'react';
// import {useColorScheme} from 'react-native';

import HomeScreen from './src/pages/home';
import GalleryScreen from './src/pages/gallery';
import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';


// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();
// function App() {
//   // console.log('start');
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//
//         <Stack.Screen
//           name="Gallery"
//           component={GalleryScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//         {/*<Stack.Screen*/}
//         {/*  name="Signup"*/}
//         {/*  component={SignupScreen}*/}
//         {/*  options={{*/}
//         {/*    title: '注册账号',*/}
//         {/*    headerTitleAlign: 'center',*/}
//         {/*    headerStyle: [*/}
//         {/*      useColorScheme() === 'dark'*/}
//         {/*        ? styles.darkBackgroundColor*/}
//         {/*        : styles.lightBackgroundColor,*/}
//         {/*    ],*/}
//         {/*    headerTintColor: useColorScheme() === 'dark' ? '#ffffff' : 'black',*/}
//         {/*  }}*/}
//         {/*/>*/}
//         {/*<Stack.Screen*/}
//         {/*  name="Login"*/}
//         {/*  component={LoginScreen}*/}
//         {/*  options={{*/}
//         {/*    title: '登录账号',*/}
//         {/*    headerTitleAlign: 'center',*/}
//         {/*    headerStyle: [*/}
//         {/*      useColorScheme() === 'dark'*/}
//         {/*        ? styles.darkBackgroundColor*/}
//         {/*        : styles.lightBackgroundColor,*/}
//         {/*      {borderWidth: 0},*/}
//         {/*    ],*/}
//         {/*    headerTitleStyle: {borderColor: 'white', borderWidth: 0},*/}
//         {/*    headerTintColor: useColorScheme() === 'dark' ? '#ffffff' : 'black',*/}
//         {/*  }}*/}
//         {/*/>*/}
//         {/*<Stack.Screen*/}
//         {/*  name="Main"*/}
//         {/*  component={MainScreen}*/}
//         {/*  options={{*/}
//         {/*    // headerShown: false,*/}
//
//         {/*    title: 'Yechat',*/}
//         {/*    headerTitleAlign: 'center',*/}
//         {/*    headerStyle: [*/}
//         {/*      useColorScheme() === 'dark'*/}
//         {/*        ? styles.darkBackgroundColor*/}
//         {/*        : styles.lightBackgroundColor,*/}
//         {/*      {borderWidth: 0},*/}
//         {/*    ],*/}
//         {/*    headerTitleStyle: {borderColor: 'white', borderWidth: 0},*/}
//         {/*    headerTintColor: useColorScheme() === 'dark' ? '#ffffff' : 'black',*/}
//         {/*  }}*/}
//         {/*/>*/}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import {StackViewStyleInterpolator} from 'react-navigation-stack';
import Navbar from './src/components/Navbar';
import {SignerContextProvider} from './src/context/SignerContext';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {ScrollView} from 'react-native';
import GalleryPage from './src/pages/gallery';

const GRAPH_URL = process.env.NEXT_PUBLIC_GRAPH_URL as string;

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: GRAPH_URL,
  uri: 'https://api.studio.thegraph.com/query/40910/archive/0.0.1',
});

const stateHandler = (prevState, newState, action) => {
  console.log('onStateChange: ACTION:', action);
};

const transitionConfig = () => ({
  screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
});

const App: any = () => (
  <ScrollView style={{margin: 10}}>
    <SignerContextProvider>
      <ApolloProvider client={apolloClient}>
        {/*<GalleryScreen />*/}
        {/*<Navbar />*/}
        <Router>
          <Stack key="root">
            <Scene key="gallery" component={GalleryScreen} title="Login" />
          </Stack>
        </Router>
      </ApolloProvider>
    </SignerContextProvider>
  </ScrollView>
);

export default App;
