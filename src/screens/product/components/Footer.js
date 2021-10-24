import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AddToCart, ChangeQuantity } from 'actions';
import { Colors, ComponentAttributes, Sizes } from 'styles';

const Footer = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.quantity}>
        <ChangeQuantity productId={product.id} />
      </View>
      <View style={styles.add}>
        <AddToCart productId={product.id} />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: ComponentAttributes.FOOTER_HEIGHT,
    padding: Sizes.PADDING_2,
    backgroundColor: Colors.WHITE,
  },
  quantity: {
    paddingHorizontal: Sizes.PADDING_2,
    flex: 1,
  },
  add: {
    paddingHorizontal: Sizes.PADDING_2,
    flex: 2,
  },
});
