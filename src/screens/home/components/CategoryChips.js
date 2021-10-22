import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';
import { topCategoryTabItem } from '../utils/constants';
import { Chip } from 'components';

const CategoryChips = () => {
  const [selectedItem, setSelectedItem] = useState(topCategoryTabItem[0]);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={topCategoryTabItem}
      renderItem={({ item }) => (
        <Chip
          label={item}
          containerStyle={styles.textContainer}
          style={selectedItem === item ? styles.selectedText : styles.text}
          onPress={setSelectedItem}
          selected={selectedItem === item}
        />
      )}
      keyExtractor={(item) => item}
    />
  );
};

export default CategoryChips;

const styles = StyleSheet.create({
  text: {
    padding: 0,
    ...Fonts.H5,
    ...Fonts.BOLD,
  },
  textContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderWidth: 0,
    margin: 0,
    marginRight: Sizes.size(30),
    backgroundColor: Colors.TRANSPARENT,
  },
  selectedText: {
    padding: 0,
    ...Fonts.H5,
    ...Fonts.BOLD,
    color: Colors.ACTION,
  },
});
