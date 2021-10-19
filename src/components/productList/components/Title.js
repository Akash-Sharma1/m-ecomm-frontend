import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Colors, Fonts } from 'styles';

const ProductTitle = ({ title }) => {
  return (
    <Text style={styles.title}>{title}</Text>
  );
};

const styles = StyleSheet.create({

  title: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    color: Colors.DARK_PRIMARY,
    flex: 0.7,
  },
});

export default ProductTitle;
