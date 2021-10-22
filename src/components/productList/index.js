import React from 'react';

import ProductListItemSmall from './layout/small';
import ProductListItemWide from './layout/wide';
import ProductListItemMedium from './layout/medium';
import { StyleSheet } from 'react-native';
import { Sizes } from 'styles';
import List from 'components/List';

const Item = ({ variant, product, index, ...remainingProps }) => {
  if (variant === 'small') {
    return (
      <ProductListItemSmall
        product={product}
        style={[styles.bottomMargin, (index % 2 == 0) && styles.rightMargin]}
        {...remainingProps}
      />
    );
  } else if (variant === 'medium') {
    return (
      <ProductListItemMedium
        product={product}
        style={styles.mediumItem}
        {...remainingProps}
      />
    );
  } else if (variant === 'wide') {
    return (
      <ProductListItemWide
        product={product}
        style={styles.bottomMargin}
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
  unqiueIndex,
  LisHeaderComponent,
  ListFooterComponent,
}) => {
  const props = {
    variant,
    onPress,
  };

  const numColumns = (variant === 'small') ? 2 : null;
  const horizontal = variant === 'medium';

  return (
    <List
      data={Object.keys(products)}
      horizontal={horizontal}
      renderItem={({ item: productId, index }) => (
        <Item product={products[productId]} index={index} {...props} />
      )}
      numColumns={numColumns}
      LisHeaderComponent={LisHeaderComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
};

const styles = StyleSheet.create({
  bottomMargin: {
    marginBottom: Sizes.MARGIN_2,
  },
  rightMargin: {
    marginRight: Sizes.MARGIN_2,
  },
  mediumItem: {
    flex: 2,
    width: Sizes.size(220),
    marginBottom: Sizes.MARGIN_2,
    marginRight: Sizes.MARGIN_2,
  },
});

ProductList.SmallItem = ProductListItemSmall;
ProductList.WideItem = ProductListItemWide;

export default ProductList;
