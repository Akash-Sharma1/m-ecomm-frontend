import React from 'react';
import { FlatList } from 'native-base';

import ProductListItemSmall from './layout/Small';
import ProductListItemMedium from './layout/Medium';
import ProductListItemWide from './layout/Wide';

const Item = ({ variant, product, ...remainingProps }) => {
  if (variant === 'small') {
    return (
      <ProductListItemSmall product={product} {...remainingProps} />
    );
  } else if (variant === 'medium') {
    return <ProductListItemMedium product={product} {...remainingProps} />;
  } else if (variant === 'wide') {
    return <ProductListItemWide product={product} {...remainingProps} />;
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

  return (
    <FlatList
      data={Object.keys(products)}
      renderItem={({ item: productId }) => (
        <Item product={products[productId]} {...props} />
      )}
      keyExtractor={(_, index) => index.toString()}
      numColumns={2}
    />
  );
};

ProductList.SmallItem = ProductListItemSmall;
ProductList.MediumItem = ProductListItemMedium;
ProductList.WideItem = ProductListItemWide;

export default ProductList;
