import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

import Navbar from '../components/Navbar';
import {SignerContextProvider} from '../context/SignerContext';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import GalleryPage from './gallery';

const GRAPH_URL = process.env.NEXT_PUBLIC_GRAPH_URL as string;

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: GRAPH_URL,
  uri: 'https://api.studio.thegraph.com/query/40910/archive/0.0.1',
});

function Home(): JSX.Element {
  // console.log('start');
  return (
    <ScrollView style={{margin: 10}}>
      <SignerContextProvider>
        <ApolloProvider client={apolloClient}>
          {/*<Navbar />*/}
          <GalleryPage />
        </ApolloProvider>
      </SignerContextProvider>
    </ScrollView>
  );
}
export default Home;
