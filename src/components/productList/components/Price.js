import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

const ProductPrice = ({ amount, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.currency}>{'\u20B9'}</Text>
      <Text style={styles.text}>{`${amount}.00`}</Text>
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
    paddingTop: Sizes.size(7),
    paddingHorizontal: Sizes.size(2),
  },
  text: {
    ...Fonts.H1,
    ...Fonts.BOLD,
    color: Colors.PRIMARY,
  },
});

export default ProductPrice;
