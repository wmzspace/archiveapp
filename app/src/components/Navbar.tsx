import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Image} from 'react-native';

// import {
//   Box,
//   Flex,
//   Heading,
//   Link,
//   IconButton,
//   Button,
//   Drawer,
//   useDisclosure,
//   DrawerBody,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   useColorMode,
//   useToast,
// } from '@chakra-ui/react';
// import logo  from '../../public/logo.svg';
// import ConnectButton from './ConnectButton';

const Navbar = props => {
  // const Navbar: React.FunctionComponent<INavbarProps> = props => {
  // const {isOpen, onOpen, onClose} = useDisclosure();
  // const menuRef = useRef<any>();
  // const {colorMode, toggleColorMode} = useColorMode();
  // const toast = useToast();

  return (
    <View
      style={{
        padding: 3,
        // padding: '2rem 4rem',
        // background : "whiteAlpha.100",
        alignItems: 'center',
        justifyContent: 'space-between',
        // bg : "blackAlpha.400",
        // width: '100vw',
        width: 100,
      }}>
      {/*<View style={{alignItems: 'center', gap : '1.5rem'}}>*/}
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          // boxSize="2rem"
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
        >
          {/*<Image source={require('../../public/logo.svg')} alt="logo" />*/}
        </View>
        <View
        // as="h1"
        // display={{
        //   xs: 'none',
        //   sm: 'none',
        //   md: 'none',
        //   lg: 'flex',
        //   xl: 'flex',
        // }}
        >
          <Text
            style={{
              textDecorationLine: 'underline',
              textDecorationColor: '#ED8936',
              // textUnderlineOffset: '3px',
            }}>
            Archive
          </Text>
          <Text>.com</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        {/*<View*/}
        {/*  alignItems="center"*/}
        {/*  gap="2rem"*/}
        {/*  display={{*/}
        {/*    xs: 'none',*/}
        {/*    sm: 'none',*/}
        {/*    md: 'none',*/}
        {/*    lg: 'none',*/}
        {/*    xl: 'flex',*/}
        {/*  }}>*/}
        {/*  <Link href="/">Home</Link>*/}
        {/*  <Link href="/gallery">Gallery</Link>*/}
        {/*  <Link href="/upload">Upload</Link>*/}
        {/*  <Link href="/dashboard">Dashboard</Link>*/}
        {/*  <Link href="/contact">Contact</Link>*/}
        {/*</View>*/}
        {/*<View gap=".5rem">*/}
        {/*  <IconButton*/}
        {/*    aria-label="open menu"*/}
        {/*    icon={<HamburgerIcon />}*/}
        {/*    display={{*/}
        {/*      xs: 'flex',*/}
        {/*      sm: 'flex',*/}
        {/*      md: 'flex',*/}
        {/*      lg: 'flex',*/}
        {/*      xl: 'none',*/}
        {/*    }}*/}
        {/*    ref={menuRef}*/}
        {/*    onClick={onOpen}*/}
        {/*  />*/}
        {/*  <IconButton*/}
        {/*    aria-label="theme"*/}
        {/*    onClick={toggleColorMode}*/}
        {/*    icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}*/}
        {/*  />*/}
        <View style={{alignItems: 'center'}}>{/*<ConnectButton />*/}</View>
      </View>
      {/*<Drawer*/}
      {/*  isOpen={isOpen}*/}
      {/*  placement="top"*/}
      {/*  onClose={onClose}*/}
      {/*  finalFocusRef={menuRef}>*/}
      {/*  <DrawerOverlay />*/}
      {/*  <DrawerContent>*/}
      {/*    <DrawerCloseButton />*/}
      {/*    <DrawerHeader textAlign="center">Archive.com</DrawerHeader>*/}

      {/*    <DrawerBody>*/}
      {/*      <View alignItems="center" gap="2rem" flexDir="column">*/}
      {/*        <Link href="/">Home</Link>*/}
      {/*        <Link href="/gallery">Gallery</Link>*/}
      {/*        <Link href="/upload">Upload</Link>*/}
      {/*        <Link href="/dashboard">Dashboard</Link>*/}
      {/*        <Link href="/contact">Contact</Link>*/}
      {/*      </View>*/}
      {/*    </DrawerBody>*/}

      {/*    <DrawerFooter />*/}
      {/*  </DrawerContent>*/}
      {/*</Drawer>*/}
    </View>
  );
};

export default Navbar;
