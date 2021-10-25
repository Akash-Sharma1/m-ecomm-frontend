import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Fonts, Sizes } from 'styles';
import { useNavigation } from '@react-navigation/core';

const SearchBar = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigation.openDrawer}
    >
      <Ionicons name="menu" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: Sizes.RADIUS,
    padding: Sizes.PADDING,
  },
  icon: {
    ...Fonts.H4,
  },
});
