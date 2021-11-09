import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { useSelector } from 'react-redux';

import { Colors, Fonts, Sizes } from 'styles';

const AddToCart = ({ productId }) => {
  // const product = useSelector((state) => state.products.products[productId]);

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Cart</Text>
    </TouchableOpacity>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    borderRadius: Sizes.RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Sizes.PADDING,
  },
  text: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    color: Colors.WHITE,
  },
});
