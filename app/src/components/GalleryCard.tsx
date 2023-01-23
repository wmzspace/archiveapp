import React, {useEffect, useState} from 'react';
import {convertIpfsToHttps, shortenAddress} from '../utils/helper';
import {NFT, NFTMetaData} from '../utils/type';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import useSignerContext from '../context/SignerContext';
import useArchiveMarket from '../hooks/useArchiveMarket';

export interface IGallertCardProps {
  nft: NFT;
}

const GallertCard: React.FunctionComponent<IGallertCardProps> = ({nft}) => {
  const [metaData, setMetaData] = useState<NFTMetaData>();
  // const [displayed, setDisplayed] = useState<string>('block');
  const [displayed, setDisplayed] = useState<string>('flex');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {address} = useSignerContext();
  const {purchaseNFT} = useArchiveMarket();
  const isSellerOwner = address?.toLowerCase() === nft.owner.toLowerCase();
  // const toast = useToast();ss
  // const router = useRouter();

  const fetchMetaData = async () => {
    const metaDataResponse = await fetch(convertIpfsToHttps(nft.tokenURI));
    if (metaDataResponse.status !== 200) {
      return;
    }
    const json = await metaDataResponse.json();
    // console.log(json);
    setMetaData({
      name: json.name,
      description: json.description,
      imageURL: convertIpfsToHttps(json.image),
    });
  };

  // const handleNavigate = () => {
  //   router.push({
  //     pathname: `/gallery/${nft.id}`,
  //     query: {
  //       name: metaData?.name,
  //       description: metaData?.description,
  //       imageURL: metaData?.imageURL,
  //       owner: nft.owner,
  //       price: nft.price,
  //       tokenURI: nft.tokenURI,
  //     },
  //   });
  // };

  const handlePurchaseButtonClicked = async () => {
    setIsLoading(true);
    try {
      await purchaseNFT(nft);
      // toast({
      //   title: 'Successfully purchased :)',
      //   description: 'Wait a second and reload the page to see result.',
      //   status: 'success',
      //   duration: 2000,
      //   isClosable: true,
      // });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMetaData();
  }, [nft.tokenURI]);
  // }, [fetchMetaData, nft.tokenURI]);
  return (
    <View
      style={{
        padding: 10,
        margin: 10,
        borderWidth: 1,
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
      }}>
      <View>
        {metaData ? (
          <Image
            style={{
              height: 150,
              width: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{uri: metaData?.imageURL}}
          />
        ) : undefined}
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}>
        <Text>Id:{nft.id}</Text>
        <Text>Name: {metaData?.name}</Text>
        <Text>Owner: {nft.owner}</Text>
        <Text>Description: {metaData?.description}</Text>
        {/*<Text>{metaData?.imageURL}</Text>*/}

        {/*<Image source={require('../res/img.png')} />*/}
      </View>
    </View>
  );
};

export default GallertCard;
