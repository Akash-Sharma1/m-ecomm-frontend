import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Fonts, Sizes } from 'styles';

const Search = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="search" style={styles.search} />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: Sizes.RADIUS,
    padding: Sizes.PADDING,
  },
  search: {
    ...Fonts.H4,
  },
});

export default Search;
