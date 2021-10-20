import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';
import BackgroundFloater from './ImageBackgroundFloater';

const ProductImage = ({ uri, style, index }) => {
  return (
    <View style={[styles.container, style]}>
      <BackgroundFloater style={styles.floater} color={index} />
      {/* <Image source={{ uri }} style={styles.image} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.GRAY_MEDIUM,
    padding: Sizes.size(2),
    position: 'relative',
  },
  // image: {
  //   flex: 0.8,
  //   borderRadius: Sizes.RADIUS_CIRCLE,
  //   width: '55%',
  //   height: '70%',
  //   top: '10%',
  //   left: '22%',
  // },
  floater: {
    position: 'absolute',
    width: '56%',
    height: '70%',
    top: '18%',
    left: '24%',
  },
});

export default ProductImage;
