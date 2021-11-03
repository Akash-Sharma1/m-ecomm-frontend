import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { ProductTile } from 'components';
import { Colors, Sizes } from 'styles';
import Description from './components/Description';
import HeaderActions from './components/HeaderActions';

const ProductDetails = () => {
  const currentProductId = useSelector(
    (state) => state.products.currentProductId);

  const products = useSelector((state) => state.products.products);
  const product = products[currentProductId];


  if (currentProductId == null) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ProductTile.ImageCarausal
        style={styles.image}
        product={product}
      >
        <HeaderActions />
      </ProductTile.ImageCarausal>

      <View style={styles.body}>
        <Description product={product} />
      </View>
    </SafeAreaView>
  );
};

// const BUBBLES_LIST_HEIGHT = Sizes.size(100);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
    marginTop: Sizes.MARGIN,
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
    position: 'relative',
  },
  image: {
    flex: 1.2,
  },
  body: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    padding: Sizes.PADDING,
  },
});

export default ProductDetails;
