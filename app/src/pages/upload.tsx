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

function UploadScreen(): JSX.Element {
  const {signer} = useSignerContext();
  // const {listedNFTs} = useArchiveMarket();
  const {listedNFTs} = useArchiveMarket();
  const isLoading = signer && !listedNFTs;
  return (
    <ScrollView>
      <View style={{paddingTop: 30}}>
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

export default UploadScreen;
