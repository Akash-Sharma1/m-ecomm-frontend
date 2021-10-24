import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Bookmark } from 'actions';
import DiscountChip from './DiscountChip';

const ProductListItemHeader = ({ product }) => {
  return (
    <View style={styles.container}>
      {product.discount ? (
        <DiscountChip discount={product.discount} />
      ) : <View />}
      <Bookmark productId={product.id} />
    </View>
  );
};

export default ProductListItemHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});