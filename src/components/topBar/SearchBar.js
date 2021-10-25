import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Fonts, Sizes } from 'styles';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = useCallback(() => {

  }, []);

  const handleChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  return (
    <View style={styles.container}>
      <Input
        onChange={handleChange}
        InputRightElement={
          <TouchableOpacity onPress={handleSearch}>
            <Ionicons name="search" style={styles.icon} />
          </TouchableOpacity>
        }
        placeholder="Search"
        style={styles.input}
        value={searchText}
      />
    </View>
  );
};

export default SearchBar;

const SEARCH_BAR_HEIGHT = Sizes.size(40);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: Sizes.RADIUS,
    height: SEARCH_BAR_HEIGHT,
    marginLeft: Sizes.MARGIN,
    flex: 6,
  },
  input: {
    height: SEARCH_BAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    ...Fonts.H5,
    ...Fonts.BOLD,
  },
  icon: {
    padding: Sizes.PADDING,
    ...Fonts.H4,
  },
});
