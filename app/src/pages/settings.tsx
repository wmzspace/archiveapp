import GalleryCard from '../components/GalleryCard';
import useSignerContext from '../context/SignerContext';
import useArchiveMarket from '../hooks/useArchiveMarket';
import React from 'react';
import {View, ScrollView, Alert} from 'react-native';

import {Avatar, Button, Card, Switch, Text} from 'react-native-paper';
import {PreferencesContext} from '../context/PreferencesContext';
export interface IGalleryPageProps {}
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const testFetch = () => {
  fetch('https://waa.cool/post', {
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        Alert.alert('res error!');
      } else {
        res.json().then(data => {
          console.log(data);
        });
      }
    })
    .catch(e => {
      console.log(e);
    });
};

function SettingsScreen(): JSX.Element {
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);
  const {signer} = useSignerContext();
  // const {listedNFTs} = useArchiveMarket();
  const {listedNFTs} = useArchiveMarket();
  const isLoading = signer && !listedNFTs;

  return (
    <ScrollView>
      <View style={{paddingTop: 30}}>
        <Button onPress={testFetch}>Test</Button>
      </View>
    </ScrollView>
  );
}

export default SettingsScreen;
