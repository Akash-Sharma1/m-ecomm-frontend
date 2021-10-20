import React from 'react';
import { FlatList } from 'native-base';

import ProductListItemSmall from './layout/small';
import ProductListItemWide from './layout/wide';
import { StyleSheet } from 'react-native';
import { Sizes } from 'styles';

const Item = ({ variant, product, horizontal, ...remainingProps }) => {
  if (variant === 'small') {
    return (
      <ProductListItemSmall
        product={product}
        style={[
          styles.smallItem,
          horizontal && styles.horizontal,
        ]}
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
  horizontal,
  onPress,
  unqiueIndex,
  LisHeaderComponent,
  ListFooterComponent,
}) => {
  const props = {
    variant,
    onPress,
    horizontal,
  };

  const numColumns = !horizontal && (variant === 'small') ? 2 : null;

  return (
    <FlatList
      data={Object.keys(products)}
      horizontal={horizontal}
      renderItem={({ item: productId }) => (
        <Item product={products[productId]} {...props} />
      )}
      keyExtractor={(_, index) => index.toString()}
      numColumns={numColumns}
      listKey={`productList-${unqiueIndex}`}
      LisHeaderComponent={LisHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
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
  horizontal: {
    marginRight: Sizes.MARGIN_2,
  },
});

ProductList.SmallItem = ProductListItemSmall;
ProductList.WideItem = ProductListItemWide;

export default ProductList;
