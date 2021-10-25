import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Sizes } from 'styles';
import { setCurrentProductId } from 'store/reducers/products';
import { useNavigation } from '@react-navigation/core';
import { Routes } from 'constants';
import Card from 'components/Card';
import ProductImage from 'components/productImage';
import SmallItemTextContent from './TextContent';

const ProductListItemNormal = ({
  product,
  style,
  scale,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    dispatch(setCurrentProductId(product.id));
    navigation.navigate(Routes.PRODUCT);
  }, [navigation, product.id, dispatch]);

  return (
    <Card rounded style={[styles.container, style]} onPress={onPress}>
      <View style={styles.imageContainer}>
        <ProductImage
          uri={product.image}
          index={product.id}
          scale={scale}
        />
      </View>

      <View style={styles.detailsContainer}>
        <SmallItemTextContent product={product} />
      </View>
    </Card>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Sizes.PADDING,
  },
  imageContainer: {
    flex: 2.5,
  },
  detailsContainer: {
    flex: 1,
    paddingTop: Sizes.PADDING_2,
  },
});

export default ProductListItemNormal;
