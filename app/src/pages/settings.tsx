import GalleryCard from '../components/GalleryCard';
import useSignerContext from '../context/SignerContext';
import useArchiveMarket from '../hooks/useArchiveMarket';
import React from 'react';
import {View, ScrollView} from 'react-native';

import {Avatar, Button, Card, Switch, Text} from 'react-native-paper';
import {PreferencesContext} from '../context/PreferencesContext';
export interface IGalleryPageProps {}
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

function SettingsScreen(): JSX.Element {
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

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
        <Switch color={'red'} value={isThemeDark} onValueChange={toggleTheme} />
      </View>
    </ScrollView>
  );
}

export default SettingsScreen;
