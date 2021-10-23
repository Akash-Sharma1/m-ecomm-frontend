import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { TopBar } from 'components';
import { ComponentAttributes } from 'styles';

const ProductDetails = () => {
  const currentProductId = useSelector(
    (state) => state.products.currentProductId);

  const products = useSelector((state) => state.products.products);

  const product = products[currentProductId];

  if (currentProductId == null) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title="Product"/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...ComponentAttributes.SCREEN_CONTAINER,
  },
});

export default ProductDetails;
