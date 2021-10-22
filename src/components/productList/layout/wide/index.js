import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Sizes } from 'styles';
import Card from 'components/Card';
import WideItemTextContent from './TextContent';
import ProductImage, { productImageSizes } from 'components/productImage';

const ProductListItemWide = ({
  product,
  style,
}) => {
  return (
    <View style={[styles.container, style]} >
      <Card rounded style={styles.container}>
        <View style={styles.imageContainer}>
          <ProductImage
            uri={product.image}
            index={product.id}
            scale={productImageSizes.SMALL}
          />
        </View>

        <View style={styles.detailsContainer}>
          <WideItemTextContent product={product} />
        </View>
      </Card>
    </View>
  );
};


const WIDE_ITEM_IMAGE_HEIGHT = Sizes.size(90);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1.15,
    height: Sizes.size(WIDE_ITEM_IMAGE_HEIGHT),
  },
  detailsContainer: {
    justifyContent: 'center',
    flex: 3,
  },
});

export default ProductListItemWide;
