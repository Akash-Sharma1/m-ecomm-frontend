import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Bookmark } from 'actions';
import { Sizes } from 'styles';
import Card from 'components/card';
import DiscountChip from 'components/productList/components/Discount';
import ProductImage from 'components/productImage';
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
          {product.discount ? (
            <DiscountChip discount={product.discount} />
          ) : <View />}
          <Bookmark productId={product.id} />
        </View>

        <View style={styles.imageContainer}>
          <ProductImage.Medium uri={product.image} index={product.id} />
        </View>

        <View style={styles.detailsContainer}>
          <SmallItemTextContent product={product} />
        </View>
      </Card>
    </View>
  );
};


const SMALL_ITEM_HEIGHT = Sizes.size(280);
const SMALL_ITEM_IMAGE_WIDTH = Sizes.size(145);

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
  },
  detailsContainer: {
    flex: 1,
    paddingVertical: Sizes.PADDING,
  },
  header: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProductListItemSmall;
