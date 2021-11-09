import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { Sizes } from 'styles';
import Input from '../Input';

const SearchBar = () => {
  const handleSearch = useCallback((value) => {
  }, []);

  return (
    <Input
      onSubmit={handleSearch}
      containerStyle={styles.container}
      style={styles.input}
    />
  );
};

export default SearchBar;

const SEARCH_BAR_HEIGHT = Sizes.size(40);

const styles = StyleSheet.create({
  container: {
    height: SEARCH_BAR_HEIGHT,
    marginLeft: Sizes.MARGIN,
    flex: 1,
  },
  input: {
    height: SEARCH_BAR_HEIGHT,
  },
});
