import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors, Fonts, Sizes } from 'styles';

const ChangeQuantity = ({ productId, vertical }) => {
  const product = useSelector((state) => state.products.products[productId]);

  const decrement = useCallback(() => {

  }, []);

  const increment = useCallback(() => {

  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.action} onPress={decrement}>
        <Text style={styles.actionText} >-</Text>
      </TouchableOpacity>

      <View style={styles.action}>
        <Text style={styles.text}>1</Text>
      </View>

      <TouchableOpacity style={styles.action} onPress={increment}>
        <Text style={styles.actionText} >+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeQuantity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: Colors.ACTION,
    borderWidth: Sizes.size(1),
    borderRadius: Sizes.RADIUS_0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...Fonts.H4,
    ...Fonts.BOLD,
  },
  actionText: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    color: Colors.ACTION,
  },
  action: {
    flex: 1,
    padding: Sizes.PADDING,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
