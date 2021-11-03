import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Colors, Sizes } from 'styles';
import BackgroundFloater from '../BackgroundFloater';
import Carausal from '../Carausal';

const ImageCard = ({ item, index, style, ...remainingProps }) => {
  return (
    <View style={[styles.imageContainer, style]} {...remainingProps} >
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );
};

const ImageCarausal = ({ product, index=0, style, ...remainingProps }) => {
  const productImages = [product.image, product.image, product.image, product.image];

  return (
    <View
      productId={product.id}
      style={[
        styles.container,
        availableBackgroundColors[index%availableBackgroundColors.length],
        style,
      ]}
      {...remainingProps}
    >
      <BackgroundFloater
        index={index}
        containerStyle={styles.floaterContainerStyle}
        scale={1.4}
      />
      <Carausal
        data={productImages}
        dots
        dotsPosition="bottom"
        style={styles.carausal}
        contentContainerStyle={styles.carausalContainer}
        autoScroll
        containerSize={Sizes.SCREEN_WIDTH - 2 * Sizes.EDGE_HORIZONTAL_MARGIN}
        seperatorSize={0}
      >
        <ImageCard />
      </Carausal>
    </View>
  );
};

export default ImageCarausal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: Sizes.RADIUS_32,
    // height: PRODUCT_TILE_SIZE,
    paddingVertical: Sizes.PADDING,
  },
  floaterContainerStyle: {
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    padding: Sizes.size(20),
  },
  image: {
    // height: PRODUCT_TILE_IMAGE_SIZE,
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    // borderWidth: 2,
  },
});

const availableBackgroundColors = [
  { backgroundColor: Colors.SECONDARY_MUTED_2 },
  { backgroundColor: Colors.PRIMARY_MUTED_2 },
  { backgroundColor: Colors.PURPLE_MUTED_2 },
  { backgroundColor: Colors.GREEN_MUTED_2 },
];
