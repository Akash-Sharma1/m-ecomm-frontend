import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Sizes } from 'styles';
import Ratings from '../../ratings/index';

const ProductRatings = ({ rating }) => {
  return (
    <View style={styles.ratingContainer}>
      <Ratings rating={rating} showSubText />
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    padding: Sizes.size(5),
    flex: 0.8,
  },
});

export default ProductRatings;
