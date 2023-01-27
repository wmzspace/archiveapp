import GalleryCard from '../components/GalleryCard';
import useSignerContext from '../context/SignerContext';
import useArchiveMarket from '../hooks/useArchiveMarket';
import React from 'react';
import {Text, View} from 'react-native';
import PlaceHolder from '../components/Placeholder';
// import {Box, Divider, Flex, Heading, Skeleton, Stack} from '@chakra-ui/react';
import {convertIpfsToHttps} from '../utils/helper';

export interface IGalleryPageProps {}

function GalleryScreen(): JSX.Element {
  const {signer} = useSignerContext();
  // const {listedNFTs} = useArchiveMarket();
  const {listedNFTs} = useArchiveMarket();
  const isLoading = signer && !listedNFTs;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'scroll',
      }}>
      <Text>All NFTs for sale 🕶 - {listedNFTs?.length}</Text>
      {/*<View style={{flex: 1, flexWrap: 'wrap', padding: 10}}>*/}
      {!isLoading &&
        listedNFTs?.map(nft => <GalleryCard key={nft.id} nft={nft} />)}
      {/*</View>*/}
    </View>
  );
}

export default GalleryScreen;
