import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';
import { OpenChat, OpenProduct } from 'actions';
import BackgroundFloater from '../BackgroundFloater';
import Price from '../Price';

const LargeDetail = ({ product, index=0, style, ...remainingProps }) => {
  return (
    <OpenProduct
      productId={product.id}
      style={[
        styles.container,
        availableBackgroundColors[index%availableBackgroundColors.length],
        style,
      ]}
      {...remainingProps}
    >
      <BackgroundFloater index={index} containerStyle={styles.floaterContainerStyle} />
      <Image style={styles.images} source={{ uri: product.image }} />

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
    </OpenProduct>
  );
};

export default LargeDetail;

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
    resizeMode: 'contain',
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
  { backgroundColor: Colors.PURPLE_MUTED_2 },
  { backgroundColor: Colors.GREEN_MUTED_2 },
];

const availablePriceColors = [
  { color: Colors.SECONDARY },
  { color: Colors.PRIMARY },
  { color: Colors.PURPLE },
  { color: Colors.GREEN },
];
