import React from 'react';
import { Text } from 'react-native';


const ProductListItemSmall = ({
  onPress,
  product,
}) => {
  return (
    <Text>{product.title}</Text>
  );
};


export default ProductListItemSmall;
