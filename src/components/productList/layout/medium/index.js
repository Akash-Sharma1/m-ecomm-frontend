import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Sizes } from 'styles';
import Card from 'components/Card';
import ProductListItemHeader from 'components/productList/components/Header';
import ProductImage, { productImageSizes } from 'components/productImage';
import SmallItemTextContent from '../small/TextContent';

const ProductListItemMedium = ({
  product,
  style,
}) => {
  return (
    <Card rounded style={[styles.container, style]}>
      <View style={styles.header}>
        <ProductListItemHeader product={product} />
      </View>

      <View style={styles.imageContainer}>
        <ProductImage
          uri={product.image}
          index={product.id}
          scale={productImageSizes.MEDIUM_2}
        />
      </View>

      <View style={styles.detailsContainer}>
        <SmallItemTextContent product={product} />
      </View>
    </Card>
  );
};

const SMALL_ITEM_HEIGHT = Sizes.size(270);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: Sizes.size(SMALL_ITEM_HEIGHT),
  },
  imageContainer: {
    flex: 1.5,
  },
  detailsContainer: {
    flex: 1,
    paddingVertical: Sizes.PADDING,
  },
  header: {
    flex: 0.5,
  },
});

export default ProductListItemMedium;
