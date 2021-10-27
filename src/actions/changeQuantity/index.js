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

      <Text style={styles.text}>1</Text>

      <TouchableOpacity style={styles.action} onPress={increment}>
        <Text style={styles.actionText} >+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeQuantity;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    borderColor: Colors.PRIMARY,
    borderWidth: Sizes.size(1),
    borderRadius: Sizes.RADIUS_2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    ...Fonts.H4,
    ...Fonts.BOLD,
  },
  actionText: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    color: Colors.PRIMARY,
  },
  action: {
    paddingHorizontal: Sizes.PADDING,
    paddingVertical: Sizes.size(5),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
