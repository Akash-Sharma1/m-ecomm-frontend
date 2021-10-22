import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Sizes } from 'styles';
import Card from 'components/Card';
import ProductListItemHeader from 'components/productList/components/Header';
import ProductImage, { productImageSizes } from 'components/productImage';
import SmallItemTextContent from './TextContent';

const ProductListItemNormal = ({
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
          scale={productImageSizes.MEDIUM}
        />
      </View>

      <View style={styles.detailsContainer}>
        <SmallItemTextContent product={product} />
      </View>
    </Card>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1.5,
  },
  detailsContainer: {
    flex: 1,
    paddingTop: Sizes.PADDING_2,
  },
  header: {
    flex: 0.5,
  },
});

export default ProductListItemNormal;
