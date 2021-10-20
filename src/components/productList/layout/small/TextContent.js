import React from 'react';
import { StyleSheet, View } from 'react-native';

import ProductTitle from 'components/productList/components/Title';
import ProductPrice from 'components/productList/components/Price';
import ProductRatings from 'components/productList/components/Ratings';

const SmallItemTextContent = ({ product }) => {
  return (
    <View style={styles.container}>
      <ProductTitle title={product.title} style={styles.title} />
      <ProductPrice
        amount={product.price}
        style={styles.price}
      />
      <View style={styles.rating}>
        <ProductRatings
          rating={product.rating}
          productId={product.id}
        />
      </View>
    </View>
  );
};

export default SmallItemTextContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
  },
  price: {
    flex: 1,
    alignItems: 'center',
  },
  rating: {
    flex: 1,
  },
});
