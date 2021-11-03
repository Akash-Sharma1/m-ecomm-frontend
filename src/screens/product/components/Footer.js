import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AddToCart } from 'actions';
import { Colors, ComponentAttributes, Fonts, Sizes } from 'styles';
import { Price } from 'components';

const Footer = ({ product }) => {
  return (
    <View style={styles.container}>
      <Price
        amount={product.price}
        containerStyle={styles.price}
        style={styles.priceText}
      />

      <View style={styles.actions}>
        {/* <View style={styles.quantity}>
          <ChangeQuantity productId={product.id} />
        </View> */}

        <View style={styles.add}>
          <AddToCart productId={product.id} />
        </View>
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
    paddingTop: Sizes.PADDING_2,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
  },
  add: {
    marginLeft: Sizes.MARGIN,
    flex: 1,
  },
  price: {
    alignItems: 'center',
    marginRight: Sizes.size(30),
  },
  priceText: {
    ...Fonts.H3,
    ...Fonts.BOLD,
  },
  actions: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
