import React from 'react';
import { StyleSheet, View } from 'react-native';

import Ratings from 'components/ratings';

const ProductRatings = ({ rating, style, variant, productId }) => {
  return (
    <View style={[styles.ratingContainer, style]}>
      <Ratings
        rating={rating}
        showSubText
        variant={variant}
        listKeyIndex={productId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flex: 1,
  },
});

export default ProductRatings;
