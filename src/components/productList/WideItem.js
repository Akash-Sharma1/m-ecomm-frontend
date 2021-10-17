import React from 'react';
import { Text } from 'react-native';


const ProductListItemWide = ({
  onPress,
  product,
}) => {
  return (
    <Text>{product.title}</Text>
  );
};


export default ProductListItemWide;
