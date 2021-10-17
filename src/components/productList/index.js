import React from 'react';

import ProductListItemSmall from './SmallItem';
import ProductListItemMedium from './MediumItem';
import ProductListItemWide from './WideItem';
import { FlatList } from 'native-base';

const Item = ({ variant, product, ...remainingProps }) => {
  if (variant === 'small') {
    return <ProductListItemSmall product={product} {...remainingProps} />;
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
      data={products}
      renderItem={({ item }) => <Item product={item} {...props} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

ProductList.SmallItem = ProductListItemSmall;
ProductList.MediumItem = ProductListItemMedium;
ProductList.WideItem = ProductListItemWide;

export default ProductList;
