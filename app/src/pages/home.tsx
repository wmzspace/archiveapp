import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Navbar from '../components/Navbar';
import {SignerContextProvider} from '../context/SignerContext';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// const GRAPH_URL = process.env.NEXT_PUBLIC_GRAPH_URL as string;

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.studio.thegraph.com/query/40910/archive/0.0.1',
});

function Home(): JSX.Element {
  return (
    <>
      <SignerContextProvider>
        <ApolloProvider client={apolloClient}>
          <Navbar />
        </ApolloProvider>
        <View>
          <Text>HelloWorld</Text>
        </View>
      </SignerContextProvider>
    </>
  );
}
export default Home;
