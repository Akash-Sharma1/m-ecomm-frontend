import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ProductTitle from 'components/productList/components/Title';
import ProductPrice from 'components/productList/components/Price';
import { Colors, Fonts, Sizes } from 'styles';
import Ratings from 'components/ratings';

const WideItemTextContent = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ProductTitle title={product.title} />
        <View>
          <Ratings
            rating={product.rating}
            showSubText
            variant="compact"
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


export default WideItemTextContent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: Sizes.size(50),
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: Sizes.PADDING,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Sizes.size(1),
    alignItems: 'center',
  },
  discount: {
    ...Fonts.H6,
    color: Colors.GRAY_DARK,
  },
});
