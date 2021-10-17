import React from 'react';
import { Text } from 'react-native';


const ProductListItemMedium = ({
  onPress,
  product,
}) => {
  return (
    <Text>{product.title}</Text>
  );
};


export default ProductListItemMedium;
