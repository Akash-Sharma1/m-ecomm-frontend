import React from 'react';
import { StyleSheet, View } from 'react-native';

import ProductTitle from 'components/productList/components/Title';
import ProductPrice from 'components/productList/components/Price';
import { Bookmark } from 'actions';
import { Sizes } from 'styles';

const NormalItemTextContent = ({ product }) => {
  return (
    <View style={styles.container}>
      <ProductTitle title={product.title} style={styles.title} />
      <View style={styles.footer}>
        <ProductPrice
          amount={product.price}
          style={styles.price}
        />
        <Bookmark productId={product.id} />
      </View>
    </View>
  );
};

export default NormalItemTextContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    flex: 1.8,
  },
  price: {
    flex: 1,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Sizes.size(5),
  },
});
