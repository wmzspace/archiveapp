import GalleryCard from '../components/GalleryCard';
import useSignerContext from '../context/SignerContext';
import useArchiveMarket from '../hooks/useArchiveMarket';
import React from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import {Avatar, Button, Card, Text, Appbar} from 'react-native-paper';
import {wait} from '@apollo/client/testing';
import RNRestart from 'react-native-restart';
import {PreferencesContext} from '../context/PreferencesContext';
import globalConstants from '../global/globalConstants';

export interface IGalleryPageProps {}

function GalleryScreen(): JSX.Element {
  const {signer} = useSignerContext();
  const {listedNFTs} = useArchiveMarket();
  const isLoading = signer && !listedNFTs;
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      RNRestart.Restart();
      setRefreshing(false);
    });
  }, []);

  globalConstants.tabBarBadgeHome = listedNFTs?.length;
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Appbar.Header>
        {/*<Appbar.BackAction onPress={() => {}} />*/}
        <Appbar.Content title="Home" style={{paddingLeft: '42%'}} />
        <Appbar.Action
          icon="theme-light-dark"
          onPress={() => {
            toggleTheme();
          }}
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'scroll',
          paddingTop: 20,
        }}>
        <Text>All NFTs for sale 🕶 - {listedNFTs?.length}</Text>

        {!isLoading &&
          listedNFTs?.map(nft => <GalleryCard key={nft.id} nft={nft} />)}
      </View>
    </ScrollView>
  );
}

export default GalleryScreen;
