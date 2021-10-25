import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

const ProductTitle = ({ title, style, textStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Text
        style={styles.title}
      >
        Shri Ram Darbar
      </Text>
      <Text style={styles.description}>Marble, 2.6 feet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    color: Colors.DEFAULT_FONT_COLOR,
    flex: 1,
  },
  description: {
    ...Fonts.H6,
    // ...Fonts.BOLD,
    color: Colors.GRAY_DARK,
    paddingTop: Sizes.size(5),
    flex: 1,
  },
});

export default ProductTitle;
