import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Fonts } from 'styles';

const Search = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={navigation.openDrawer}
    >
      <Ionicons name="search" style={styles.search} />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  search: {
    ...Fonts.H1,
  },
});

export default Search;
