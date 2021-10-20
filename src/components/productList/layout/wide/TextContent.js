import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ProductTitle from 'components/productList/components/Title';
import ProductPrice from 'components/productList/components/Price';
import ProductRatings from 'components/productList/components/Ratings';
import { Sizes } from 'styles';
import { Fonts } from 'styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SmallItemTextContent = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ProductTitle title={product.title} />
        <View>
          <ProductRatings
            variant="compact"
            rating={product.rating}
          />
        </View>
      </View>

      <View style={styles.row}>
        <ProductPrice
          amount={product.price}
        />
        {product.discount ? (
          <View>
            <Text style={styles.discount}>
              {`${product.discount * 100}%`}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default SmallItemTextContent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft: Sizes.PADDING,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Sizes.size(1),
    alignItems: 'center',
  },
  discount: {
    ...Fonts.H6,
    color: Colors.GRAY_MEDIUM,
  },
});
