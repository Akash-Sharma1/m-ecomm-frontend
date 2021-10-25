import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { ProductImage, SwipableBottomPanel, TopBar } from 'components';
import { Colors, ComponentAttributes, Sizes } from 'styles';
import Description from './components/Description';
import Footer from './components/Footer';

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
        <TopBar goBack title="Product" cart style={styles.topBar}/>
        <ScrollView style={styles.scrollContainer} >
          <View style={styles.image}>
            <ProductImage uri={product.image} />
          </View>
        </ScrollView>
        <SwipableBottomPanel closedHeight="300">
          <View style={styles.body}>
            <Description product={product} />
          </View>
        </SwipableBottomPanel>
        {/* <Footer product={product} /> */}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
  },
  topBar: {
    marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
  },
  image: {
    flex: 2,
  },
  body: {
    backgroundColor: Colors.WHITE,
    // flex: 1,
    padding: Sizes.EDGE_HORIZONTAL_MARGIN,
  },
  scrollContainer: {
    flex: 1,
  },
});

export default ProductDetails;
