import React from 'react';
import { StyleSheet } from 'react-native';

import { Colors, Fonts } from 'styles';
import Chip from 'components/chip';

const ProductDiscountChip = ({ discount }) => {
  return (
    <Chip
      containerStyle={styles.discount}
      style={styles.discountText}
      label={`${discount * 100}%`}
    />
  );
};

const styles = StyleSheet.create({
  discount: {
    backgroundColor: Colors.LIGHT_PRIMARY,
    borderWidth: 0,
    flex: 0,
  },
  discountText: {
    ...Fonts.H5,
    ...Fonts.BOLD,
  },
});

export default ProductDiscountChip;
