import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles/Wide';

const ProductListItemWide = ({
  onPress,
  product,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <View style={styles.ratingContainer}></View>
      </View>
    </View>
  );
};


export default ProductListItemWide;
