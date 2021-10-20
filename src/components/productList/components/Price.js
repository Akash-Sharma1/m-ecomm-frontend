import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

const ProductPrice = ({ amount, style, textStyle, currencyStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.currency, currencyStyle]}>{'\u20B9'}</Text>
      <Text style={[styles.text, textStyle]}>{`${amount}.00`}</Text>
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
    color: Colors.PRIMARY,
    paddingTop: Sizes.size(2),
    paddingHorizontal: Sizes.size(2),
  },
  text: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    color: Colors.PRIMARY,
  },
});

export default ProductPrice;
