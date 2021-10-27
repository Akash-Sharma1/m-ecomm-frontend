import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Sizes } from 'styles';
import BackgroundFloater from 'components/BackgroundFloater';
import List from '../List';

const ProductImage = ({
  uri,
  style,
  index,
  scale,
  carausal,
  fullSize,
  rounded,
}) => {
  return (
    <View style={[styles.container, style]}>
      <BackgroundFloater
        containerStyle={styles.floater}
        color={index}
        scale={scale}
      />

      {carausal ? (
        <List
          data={uri}
          renderitem={(item) => {
            <Image
              source={{ item }}
              style={[styles.image, rounded && styles.rounded]}
            />;
          }}
        />
      ) : (
        <Image
          source={{ uri }}
          style={[styles.image, rounded && styles.rounded]}
        />
      )}
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
  rounded: {
    borderRadius: Sizes.RADIUS,
  },
});

export { productImageSizes } from './utils';

export default ProductImage;
