import React from 'react';
import { StyleSheet, View } from 'react-native';

import ProductTitle from 'components/productList/components/Title';
import ProductPrice from 'components/productList/components/Price';
import Ratings from 'components/ratings';

const NormalItemTextContent = ({ product }) => {
  return (
    <View style={styles.container}>
      <ProductTitle title={product.title} style={styles.title} />
      <ProductPrice
        amount={product.price}
        style={styles.price}
      />
      <View style={styles.rating}>
        <Ratings
          rating={product.rating}
          showSubText
        />
      </View>
    </View>
  );
};

export default NormalItemTextContent;

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
