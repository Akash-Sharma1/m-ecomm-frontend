import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts } from 'styles';

const ProductTitle = ({ title, style, textStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    color: Colors.DARK_PRIMARY,
    flex: 1,
  },
});

export default ProductTitle;
