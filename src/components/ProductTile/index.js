import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';
import { OpenChat } from 'actions';
import BackgroundFloater from '../BackgroundFloater';
import Price from '../Price';

const ProductTile = ({ product, index, style, ...remainingProps }) => {
  return (
    <View
      style={[
        styles.container,
        availableBackgroundColors[index%availableBackgroundColors.length],
        style,
      ]}
      {...remainingProps}
    >
      <BackgroundFloater index={index} containerStyle={styles.floaterContainerStyle} />
      <Image style={styles.images} />
      <View style={styles.innerContainer}>
        <View style={styles.textContent}>
          <Text>Marble / Size: 7.5 foot</Text>

          <Text style={styles.heading} numberOfLines={1} ellipsizeMode="tail">
            {product.title}
          </Text>

          <Price amount={product.price} style={[
            availablePriceColors[index % availablePriceColors.length],
          ]} />
        </View>

        <OpenChat
          style={[availablePriceColors[index % availablePriceColors.length]]}
          containerStyle={styles.chatContainer}
        />
      </View>
    </View>
  );
};

export default ProductTile;

const PRODUCT_TILE_SIZE = Sizes.size(300);
const PRODUCT_TILE_IMAGE_SIZE = Sizes.size(200);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: Sizes.RADIUS_32,
    height: PRODUCT_TILE_SIZE,
    paddingVertical: Sizes.PADDING,
  },
  floaterContainerStyle: {
    justifyContent: 'flex-start',
    marginTop: Sizes.size(30),
  },
  images: {
    height: PRODUCT_TILE_IMAGE_SIZE,
  },
  innerContainer: {
    paddingHorizontal: Sizes.size(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContent: {
    flex: 1,
  },
  chatContainer: {
    padding: Sizes.size(8),
    borderRadius: Sizes.RADIUS,
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
    marginLeft: Sizes.MARGIN,
  },
  heading: {
    ...Fonts.H3,
    ...Fonts.BOLD,
    paddingTop: Sizes.size(5),
    paddingBottom: Sizes.size(5),
  },
});

const availableBackgroundColors = [
  { backgroundColor: Colors.SECONDARY_MUTED_2 },
  { backgroundColor: Colors.PRIMARY_MUTED_2 },
  { backgroundColor: Colors.TERTIARY_MUTED_2 },
  { backgroundColor: Colors.GREEN_MUTED_2 },
];

const availablePriceColors = [
  { color: Colors.SECONDARY },
  { color: Colors.PRIMARY },
  { color: Colors.TERTIARY },
  { color: Colors.GREEN },
];
