import GalleryCard from '../components/GalleryCard';
import useSignerContext from '../context/SignerContext';
import useArchiveMarket from '../hooks/useArchiveMarket';
import React from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  TouchableHighlight,
} from 'react-native';
import PlaceHolder from '../components/Placeholder';
// import {Box, Divider, Flex, Heading, Skeleton, Stack} from '@chakra-ui/react';
import {convertIpfsToHttps} from '../utils/helper';
import globalStyles from '../../globalStyles';
import {StatusBarComp} from '../components/StatusBarComp';
// import {Provider as PaperProvider, useTheme} from 'react-native-paper';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {wait} from '@apollo/client/testing';
import RNRestart from 'react-native-restart';
export interface IGalleryPageProps {}
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

function GalleryScreen(): JSX.Element {
  const {signer} = useSignerContext();
  const {listedNFTs} = useArchiveMarket();
  const isLoading = signer && !listedNFTs;
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      RNRestart.Restart();
      setRefreshing(false);

      // let a = useListedNFTs();
      // navigation.navigate('Gallery');
      // navigation.navigate('Settings');
    });
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {refreshing ? undefined : (
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
      )}
    </ScrollView>
  );
}

export default GalleryScreen;
