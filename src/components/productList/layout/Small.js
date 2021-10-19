import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Bookmark } from 'actions';
import { Sizes } from 'styles';
import Card from '../../card';
import DiscountChip from '../components/Discount';
import Price from '../components/Price';
import Ratings from '../components/Ratings';
import Title from '../components/Title';
import ProductImage from '../components/Image';

const ProductListItemSmall = ({
  onPress,
  product,
}) => {
  return (
    <View style={styles.container}>
      <Card rounded>
        <View style={styles.header}>
          <DiscountChip discount={product.discount} />
          <Bookmark productId={product.id} />
        </View>

        <View style={styles.imageContainer}>
          <ProductImage uri={product.image} />
        </View>

        <View style={styles.detailsContainer}>
          <Title title={product.title} />
          <Price amount={product.price} />
          <Ratings rating={product.rating} />
        </View>
      </Card>
    </View>
  );
};


const SMALL_ITEM_HEIGHT = Sizes.size(300);
const SMALL_ITEM_IMAGE_WIDTH = Sizes.size(145);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Sizes.size(SMALL_ITEM_HEIGHT),
  },
  imageContainer: {
    flex: 2,
    width: Sizes.size(SMALL_ITEM_IMAGE_WIDTH),
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProductListItemSmall;
