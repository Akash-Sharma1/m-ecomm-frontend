import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Bookmark } from 'actions';
import { Sizes } from 'styles';
import Card from 'components/card';
import DiscountChip from 'components/productList/components/Discount';
import ProductImage from 'components/productList/components/Image';
import SmallItemTextContent from './TextContent';

const ProductListItemSmall = ({
  onPress,
  product,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Card rounded>
        <View style={styles.header}>
          <DiscountChip discount={product.discount} />
          <Bookmark productId={product.id} />
        </View>

        <View style={styles.imageContainer}>
          <ProductImage uri={product.image} index={product.id} />
        </View>

        <View style={styles.detailsContainer}>
          <SmallItemTextContent product={product} />
        </View>
      </Card>
    </View>
  );
};


const SMALL_ITEM_HEIGHT = Sizes.size(250);
const SMALL_ITEM_IMAGE_WIDTH = Sizes.size(145);
// const SMALL_ITEM_IMAGE_HEIGHT = Sizes.size(120);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Sizes.size(SMALL_ITEM_HEIGHT),
  },
  imageContainer: {
    flex: 1.5,
    width: Sizes.size(SMALL_ITEM_IMAGE_WIDTH),
    // height: Sizes.size(SMALL_ITEM_IMAGE_HEIGHT),
  },
  detailsContainer: {
    flex: 1,
  },
  header: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProductListItemSmall;
