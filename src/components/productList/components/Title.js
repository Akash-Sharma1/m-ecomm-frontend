import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

const ProductTitle = ({ title, style, textStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.title}
      >
        Shri Ram Darbar
      </Text>
      <Text style={styles.description}>Marble, 2.6 feet</Text>
    </View>
  );
};

const TITLE_HEIGHT = Sizes.H3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    color: Colors.DEFAULT_FONT_COLOR,
    height: TITLE_HEIGHT,
  },
  description: {
    ...Fonts.H6,
    color: Colors.GRAY_DARK,
    paddingTop: Sizes.size(5),
    flex: 1,
  },
});

export default ProductTitle;
