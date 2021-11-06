import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Fonts, Sizes } from 'styles';

const SearchInput = ({
  handleSearch,
  containerStyle,
  style,
}) => {
  const [text, setText] = useState('');

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    handleSearch && handleSearch(text);
  }, [text, handleSearch]);

  return (
    <View style={[styles.container, containerStyle]}>
      <Input
        variant="rounded"
        InputRightElement={
          <TouchableOpacity onPress={handleSubmit}>
            <Ionicons name="search" style={styles.icon} />
          </TouchableOpacity>
        }
        style={[styles.input, style]}
        onChange={handleChange}
        placeholder="Search"
        value={text}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: Sizes.RADIUS_2,
    flex: 1,
  },
  input: {
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
