import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Mixins, Sizes } from 'styles';
import { OpenChat } from 'actions';
import Price from '../../Price';

const ProductDetails = ({ product, style, tileColor }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Text style={styles.subtext}>Marble / Size: 7.5 foot</Text>

        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {product.title}
        </Text>

        <Price
          amount={product.price}
          style={Mixins.populateStyleProperty('color', Colors.SOLID_PALLATE, tileColor)}
        />
      </View>

      <OpenChat
        style={Mixins.populateStyleProperty('color', Colors.SOLID_PALLATE, tileColor)}
        containerStyle={styles.chat}
        enableIcon
        resourceId={product.id}
        resourceType="product"
        receiverName="seller"
      />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  subtext: {
    ...Fonts.H6,
  },
  chat: {
    marginLeft: Sizes.MARGIN,
  },
  title: {
    ...Fonts.H3,
    ...Fonts.BOLD,
    paddingVertical: Sizes.size(2),
  },
});
