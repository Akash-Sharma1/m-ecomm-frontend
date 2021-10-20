import React from 'react';
import { StyleSheet, View } from 'react-native';

import Ratings from 'components/ratings';

const ProductRatings = ({ rating, style }) => {
  return (
    <View style={[styles.ratingContainer, style]}>
      <Ratings rating={rating} showSubText />
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flex: 1,
  },
});

export default ProductRatings;
