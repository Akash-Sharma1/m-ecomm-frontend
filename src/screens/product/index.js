import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { ProductImage, SwipableBottomPanel, TopBar } from 'components';
import { Colors, Sizes } from 'styles';
import Description from './components/Description';
import FloatingBubbles from './components/FloatingBubbles';

const ProductDetails = () => {
  const currentProductId = useSelector(
    (state) => state.products.currentProductId);

  const products = useSelector((state) => state.products.products);
  const product = products[currentProductId];


  if (currentProductId == null) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TopBar goBack searchBar cart style={styles.topBar}/>

        <View style={styles.image}>
          <ProductImage
            // eslint-disable-next-line max-len
            uris={[product.image, product.image, product.image, product.image, product.image, product.image, product.image, product.image, product.image, product.image]}
            rounded
            fullSize
            enableDots
          />
        </View>

        <View style={styles.bubbles}>
          <FloatingBubbles product={product} />
        </View>
      </SafeAreaView>

      <SwipableBottomPanel >
        <View style={styles.body}>
          <Description product={product} />
        </View>
      </SwipableBottomPanel>
    </View>
  );
};

const BUBBLES_LIST_HEIGHT = Sizes.size(100);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
  },
  image: {
    flex: 6,
    // paddingHorizontal: Sizes.size(20),
  },
  body: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  bubbles: {
    height: BUBBLES_LIST_HEIGHT,
    padding: Sizes.PADDING,
  },
});

export default ProductDetails;
