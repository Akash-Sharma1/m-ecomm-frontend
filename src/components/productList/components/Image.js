import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

const ProductImage = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    margin: Sizes.PADDING,
    borderRadius: Sizes.RADIUS_2,
  },
});

export default ProductImage;
