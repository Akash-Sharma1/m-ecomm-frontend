import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import BackgroundFloater from '../../BackgroundFloater';
import Carausal from '../../Carausal';
import { Sizes } from 'styles';

const ImageCard = ({ item, index, style, ...remainingProps }) => {
  return (
    <View style={[styles.imageContainer, style]} {...remainingProps} >
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );
};

const ProductTileCarausal = ({
  product,
  containerStyle,
}) => {
  const productImages = [product.image, product.image, product.image, product.image];

  return (
    <View style={[styles.container, containerStyle]}>
      <BackgroundFloater
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
    </View>
  );
};

export default ProductTileCarausal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
