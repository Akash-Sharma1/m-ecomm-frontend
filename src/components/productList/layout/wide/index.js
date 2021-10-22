import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card from 'components/Card';
import WideItemTextContent from './TextContent';
import ProductImage, { productImageSizes } from 'components/productImage';

const ProductListItemWide = ({
  product,
  style,
}) => {
  return (
    <Card rounded style={[styles.container, style]} >
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
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1.15,
  },
  detailsContainer: {
    justifyContent: 'center',
    flex: 3,
  },
});

export default ProductListItemWide;
