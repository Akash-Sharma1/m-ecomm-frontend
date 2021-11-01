import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Sizes } from 'styles';
import BackgroundFloater from 'components/BackgroundFloater';
import List from '../List';
import Carausal from '../Carausal';

const Card = ({ item, style }) => <Image
  source={{ uri: item }}
  style={[style, styles.rounded]}
/>;

const ProductImage = ({
  uri,
  uris,
  style,
  index,
  scale,
  enableDots,
  fullSize,
  rounded,
}) => {
  return (
    <View style={[styles.container, style]}>
      {!fullSize && (
        <BackgroundFloater
          index={index}
          scale={scale}
        />
      )}

      {uris ? (
        <Carausal data={uris} autoScroll>
          <Card />
        </Carausal>
      ) : (
        <Image
          source={{ uri }}
          style={[styles.image, rounded && styles.rounded]}
        />
      )}


      {/* {enableDots && (
        <Dots />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    flex: 1,
    // width: Sizes.SCREEN_WIDTH - 2 * Sizes.EDGE_HORIZONTAL_MARGIN,
    // marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
    // resizeMode: 'contain',
  },
  rounded: {
    borderRadius: Sizes.RADIUS_32,
  },
});

export { productImageSizes } from './utils';

export default ProductImage;
