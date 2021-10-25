import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Fonts, Sizes } from 'styles';
import { Routes } from 'constants';
import { useNavigation } from '@react-navigation/core';

const Cart = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Routes.CART)}>
      <Ionicons name="cart" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default Cart;

const styles = StyleSheet.create({
  icon: {
    fontSize: Sizes.H1,
    color: Colors.DEFAULT_FONT_COLOR,
  },
});
