import React from 'react';
import { FlatList } from 'native-base';

import ProductListItemSmall from './layout/small';
import ProductListItemMedium from './layout/medium';
import ProductListItemWide from './layout/wide';
import { StyleSheet } from 'react-native';
import { Sizes } from 'styles';

const Item = ({ variant, product, ...remainingProps }) => {
  if (variant === 'small') {
    return (
      <ProductListItemSmall
        product={product}
        style={styles.smallItem}
        {...remainingProps}
      />
    );
  } else if (variant === 'medium') {
    return (
      <ProductListItemMedium
        product={product}
        {...remainingProps}
      />
    );
  } else if (variant === 'wide') {
    return (
      <ProductListItemWide
        product={product}
        style={styles.wideItem}
        {...remainingProps}
      />
    );
  }
};

/**
 * @param {variant} string ['small', 'wide', 'medium']
 */
const ProductList = ({
  products,
  variant,
  onPress,
}) => {
  const props = {
    variant,
    onPress,
  };

  const numColumns = variant === 'small' ? 2 : null;

  return (
    <FlatList
      data={Object.keys(products)}
      renderItem={({ item: productId }) => (
        <Item product={products[productId]} {...props} />
      )}
      keyExtractor={(_, index) => index.toString()}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  smallItem: {
    marginBottom: Sizes.MARGIN_2,
  },
  wideItem: {
    marginBottom: Sizes.MARGIN_2,
  },
});

ProductList.SmallItem = ProductListItemSmall;
ProductList.MediumItem = ProductListItemMedium;
ProductList.WideItem = ProductListItemWide;

export default ProductList;
