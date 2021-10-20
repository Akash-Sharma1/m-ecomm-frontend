import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import BackgroundFloater from 'components/backgroundFloater';

const ProductMediumImage = ({ uri, style, index }) => {
  return (
    <View style={[styles.container, style]}>
      <BackgroundFloater style={styles.floater} color={index} scale={1.1} />
      {/* <Image source={{ uri }} style={styles.image} /> */}
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
    top: '8%',
    left: '16%',
  },
});

export default ProductMediumImage;
