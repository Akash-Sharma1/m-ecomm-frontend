import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

const Price = ({ amount, containerStyle, style, currencyStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.currency, style, currencyStyle]}>{'\u20B9'}</Text>
      <Text style={[styles.text, style]}>{`${amount}.00`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  currency: {
    ...Fonts.H5,
    ...Fonts.BOLD,
    color: Colors.DEFAULT_FONT_COLOR,
    paddingHorizontal: Sizes.size(2),
    paddingTop: Sizes.size(1),
  },
  text: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    color: Colors.DEFAULT_FONT_COLOR,
  },
});

export default Price;
