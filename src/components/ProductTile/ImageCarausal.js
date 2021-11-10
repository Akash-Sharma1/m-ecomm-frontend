import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Colors, Mixins, Sizes } from 'styles';
import BackgroundFloater from '../BackgroundFloater';
import Carausal from '../Carausal';

const ImageCard = ({ item, index, style, ...remainingProps }) => {
  return (
    <View style={[styles.imageContainer, style]} {...remainingProps} >
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );
};

const ImageCarausal = ({
  product,
  tileColor=0,
  style,
  children,
  ...remainingProps
}) => {
  const productImages = [product.image, product.image, product.image, product.image];

  return (
    <View
      productId={product.id}
      style={[
        styles.container,
        Mixins.populateStyleProperty('backgroundColor', Colors.MUTED_2_PALLATE, tileColor),
        style,
      ]}
      {...remainingProps}
    >
      <BackgroundFloater
        tileColor={tileColor}
        containerStyle={styles.floaterContainerStyle}
        scale={1.4}
      />
      <Carausal
        data={productImages}
        dots
        dotsPosition='top'
        dotsContainerStyle={styles.dots}
        style={styles.carausal}
        contentContainerStyle={styles.carausalContainer}
        autoScroll
        containerSize={Sizes.SCREEN_WIDTH - 2 * Sizes.EDGE_HORIZONTAL_MARGIN}
        seperatorSize={0}
      >
        <ImageCard />
      </Carausal>
      {children}
    </View>
  );
};

export default ImageCarausal;

const PRODUCT_TILE_SIZE = Sizes.size(450);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: Sizes.RADIUS_32,
    height: PRODUCT_TILE_SIZE,
    paddingVertical: Sizes.PADDING,
    overflow: 'hidden',
  },
  floaterContainerStyle: {
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    padding: Sizes.size(10),
    paddingTop: Sizes.size(60),
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    // borderWidth: 2,
  },
  dots: {
    marginTop: 2.2 * Sizes.PADDING,
  },
});
