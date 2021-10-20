import React from 'react';
import { Text, View } from 'react-native';

import ProductSmallImage from './Small';
import ProductMediumImage from './Medium';

const ProductImage = ({ style, uri }) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

ProductImage.Small = ProductSmallImage;
ProductImage.Medium = ProductMediumImage;

export default ProductImage;
