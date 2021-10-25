import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';
import GoBack from './GoBack';
import OpenDrawer from './OpenDrawer';
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
  goBack,
  cart,
  style,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      {avatar && <OpenDrawer navigation={navigation} />}
      {goBack && <GoBack navigation={navigation} />}
      {title && <Text style={styles.title}>{title}</Text>}
      {search && <Search />}
      {drawerMenu && <DrawerMenu />}
      {searchBar && <SearchBar />}
      {cart && <Cart />}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.TRANSPARENT,
    justifyContent: 'space-between',
    paddingBottom: Sizes.PADDING,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...Fonts.H2,
    ...Fonts.BOLD,
  },
});

export default TopBar;
