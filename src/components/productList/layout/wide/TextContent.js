import React from 'react';
import { StyleSheet, View } from 'react-native';

import ProductTitle from 'components/productList/components/Title';
import ProductPrice from 'components/productList/components/Price';
import ProductRatings from 'components/productList/components/Ratings';
import { Sizes } from 'styles';

const SmallItemTextContent = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProductTitle title={product.title} />
        <View>
          <ProductRatings
            variant="compact"
            rating={product.rating}
          />
        </View>
      </View>
      <ProductPrice amount={product.price} />
    </View>
  );
};

export default SmallItemTextContent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft: Sizes.size(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
