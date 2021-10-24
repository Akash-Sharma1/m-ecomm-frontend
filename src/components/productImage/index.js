import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import BackgroundFloater from 'components/BackgroundFloater';

const ProductImage = ({ uri, style, index, scale }) => {
  return (
    <View style={[styles.container, style]}>
      <BackgroundFloater
        containerStyle={styles.floater}
        color={index}
        scale={scale}
      />
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  floater: {
    position: 'absolute',
  },
  image: {
    flex: 1,
  },
});

export { productImageSizes } from './utils';

export default ProductImage;
