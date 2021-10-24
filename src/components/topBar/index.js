import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';
import GoBack from './GoBack';
import OpenDrawer from './OpenDrawer';
import Search from './Search';

const RightAction = ({ navigation, avatar }) => {
  if (avatar) {
    return <OpenDrawer navigation={navigation} />;
  } else {
    return <GoBack navigation={navigation} />;
  }
};

const TopBar = ({ avatar, title, style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      <RightAction navigation={navigation} avatar={avatar} />
      {title && <Text style={styles.title}>{title}</Text>}
      <Search navigation={navigation} />
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
