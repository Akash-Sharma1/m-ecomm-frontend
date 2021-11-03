import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';
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

        <Price amount={product.price} style={[
          availablePriceColors[tileColor % availablePriceColors.length],
        ]} />
      </View>

      <OpenChat
        style={[availablePriceColors[tileColor % availablePriceColors.length]]}
        containerStyle={styles.chat}
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

const availablePriceColors = [
  { color: Colors.SECONDARY },
  { color: Colors.PRIMARY },
  { color: Colors.PURPLE },
  { color: Colors.GREEN },
];
