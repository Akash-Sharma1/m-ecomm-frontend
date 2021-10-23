import React from 'react';

import { StyleSheet } from 'react-native';
import { Sizes } from 'styles';
import { ItemSizes } from './utils/constants';
import { productImageSizes } from 'components/productImage';
import ProductListItemNormal from './layout/normal';
import ProductListItemWide from './layout/wide';
import List from 'components/List';

const Item = ({
  variant,
  product,
  index,
  horizontal,
  numColumns,
  ...remainingProps
}) => {
  const itemStyles = [
    styles.bottomMargin,
    styles[`${variant}Item`],
    numColumns > 1 && (index % 2 == 0) && styles.rightMargin,
    horizontal && styles.rightMargin,
  ];

  if (variant === 'wide') {
    return (
      <ProductListItemWide
        product={product}
        style={itemStyles}
        {...remainingProps}
      />
    );
  } else {
    return (
      <ProductListItemNormal
        product={product}
        style={itemStyles}
        scale={productImageSizes[`${variant}`.toLocaleUpperCase()]}
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
  ListHeaderComponent,
  ListFooterComponent,
  horizontal,
}) => {
  const numColumns = (variant === 'small') ? 2 : null;

  const props = {
    variant,
    onPress,
    numColumns,
    horizontal,
  };

  return (
    <List
      data={Object.keys(products)}
      horizontal={horizontal}
      renderItem={({ item: productId, index }) => (
        <Item
          product={products[productId]}
          index={index}
          {...props}
        />
      )}
      numColumns={numColumns}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
};

const styles = StyleSheet.create({
  rightMargin: {
    marginRight: Sizes.MARGIN,
  },
  bottomMargin: {
    marginBottom: Sizes.MARGIN_2,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  smallItem: {
    ...ItemSizes.SMALL,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  wideItem: {
    ...ItemSizes.WIDE,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  mediumItem: {
    ...ItemSizes.MEDIUM,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  largeItem: {
    ...ItemSizes.LARGE,
  },
});

ProductList.NORMAL = ProductListItemNormal;
ProductList.WIDE = ProductListItemWide;

export default ProductList;
