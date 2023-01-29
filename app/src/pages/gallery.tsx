import GalleryCard from '../components/GalleryCard';
import useSignerContext from '../context/SignerContext';
import useArchiveMarket from '../hooks/useArchiveMarket';
import React from 'react';
import {View, ScrollView} from 'react-native';
import PlaceHolder from '../components/Placeholder';
// import {Box, Divider, Flex, Heading, Skeleton, Stack} from '@chakra-ui/react';
import {convertIpfsToHttps} from '../utils/helper';
import globalStyles from '../../globalStyles';
import {StatusBarComp} from '../components/StatusBarComp';
// import {Provider as PaperProvider, useTheme} from 'react-native-paper';
import {Avatar, Button, Card, Text} from 'react-native-paper';
export interface IGalleryPageProps {}
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const MyComponent = () => (
  <Card>
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={LeftContent}
    />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);
function GalleryScreen(): JSX.Element {
  const {signer} = useSignerContext();
  // const {listedNFTs} = useArchiveMarket();
  const {listedNFTs} = useArchiveMarket();
  const isLoading = signer && !listedNFTs;
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'scroll',
          paddingTop: 50,
        }}>
        <Text>All NFTs for sale 🕶 - {listedNFTs?.length}</Text>
        {/*<View style={{flex: 1, flexWrap: 'wrap', padding: 10}}>*/}
        {!isLoading &&
          listedNFTs?.map(nft => <GalleryCard key={nft.id} nft={nft} />)}
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
}

export default GalleryScreen;
