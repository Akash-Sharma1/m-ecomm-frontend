import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text } from 'react-native';

import { Colors, ComponentAttributes, Fonts, Sizes } from 'styles';
import WelcomeUserAvatar from './WelcomeUserAvatar';
import Search from './Search';
import SearchBar from './SearchBar';
import DrawerMenu from './DrawerMenu';
import Cart from './Cart';


const TopBar = ({
  avatar,
  title,
  search,
  searchBar,
  drawerMenu,
  cart,
  style,
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, style]}>
      {avatar && <WelcomeUserAvatar navigation={navigation} />}
      {title && <Text style={styles.title}>{title}</Text>}
      {search && <Search />}
      {drawerMenu && <DrawerMenu />}
      {searchBar && <SearchBar />}
      {cart && <Cart />}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
    justifyContent: 'space-between',
    marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: Sizes.PADDING,
    // eslint-disable-next-line max-len
    paddingTop: Platform.OS === 'android' ? (Sizes.STATUS_BAR_SIZE + Sizes.size(15)) : 0,
    height: ComponentAttributes.TOP_BAR_HEIGHT,
    zIndex: ComponentAttributes.TOP_BAR_Z_INDEX,
  },
  title: {
    ...Fonts.H3,
    ...Fonts.BOLD,
  },
});

export default TopBar;
