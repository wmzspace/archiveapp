import GalleryCard from '../components/GalleryCard';
import useSignerContext from '../context/SignerContext';
import useArchiveMarket from '../hooks/useArchiveMarket';
import React from 'react';
import {View, ScrollView, Alert} from 'react-native';

import {Avatar, Button, Card, Switch, Text} from 'react-native-paper';
import {PreferencesContext} from '../context/PreferencesContext';

export interface IGalleryPageProps {}

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

/*
 * http://waa.cool:4000/app/saleown
 * http://waa.cool:4000/app/saleuse
 * http://waa.cool:4000/app/login
 * */

const usrLogin = () => {
  fetch('http://waa.cool:4000/app/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: 'email=123@qq.com&password=123456',
    body: JSON.stringify({
      email: '123@qq.com',
      password: '123456',
    }),
  })
    .then(res => {
      /*      if (!res.ok) {
              Alert.alert('res error!');
            } else {
              res.json().then(data => {
                console.log(data);
              });
            }*/
      res.json().then(data => {
        console.log(data);
      });
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
        <Button onPress={usrLogin}>Log in</Button>
      </View>
    </ScrollView>
  );
}

export default SettingsScreen;
