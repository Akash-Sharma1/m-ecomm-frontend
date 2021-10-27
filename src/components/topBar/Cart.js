import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Sizes } from 'styles';
import { Routes } from 'constants';
import { useNavigation } from '@react-navigation/core';

const Cart = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(Routes.CART)}
      style={styles.container}
    >
      <Ionicons name="cart" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: Sizes.RADIUS,
    padding: Sizes.PADDING,
    marginLeft: Sizes.MARGIN,
  },
  icon: {
    fontSize: Sizes.H4,
    color: Colors.DEFAULT_FONT_COLOR,
  },
});
