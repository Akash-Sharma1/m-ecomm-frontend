import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Header, ProductTile, SwipableBottomPanel } from 'components';
import { Colors, ComponentAttributes, Layout, Sizes } from 'styles';
import Description from './components/Description';
import Footer from './components/Footer';

const ProductDetails = () => {
  const currentProductId = useSelector(
    (state) => state.products.currentProductId);

  const accentColorIndex = useSelector((state) => state.general.accentColorIndex);

  const products = useSelector((state) => state.products.products);
  const product = products[currentProductId];

  if (currentProductId == null) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={Layout.flexCol} showsVerticalScrollIndicator={false} >
        <ProductTile.ImageCarausal
          style={styles.image}
          product={product}
          tileColor={accentColorIndex}
        >
          <Header
            productId={product.id}
            enableGoBack
            enableBookmark
            isAbsolute
            containerStyle={styles.header}
            componentStyles={{ icon: styles.headerIcon }}
          />
        </ProductTile.ImageCarausal>

        <SwipableBottomPanel
          hideTouchBar
          topMargin={2 * PRODUCT_PAGE_HEADER_HEIGHT}
          style={styles.body}
        >
          <Description product={product} />
        </SwipableBottomPanel>
      </View>

      <View style={styles.footer}>
        <Footer product={product} />
      </View>
    </SafeAreaView>
  );
};

const PRODUCT_PAGE_HEADER_HEIGHT = Sizes.size(70);

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
  header: {
    height: PRODUCT_PAGE_HEADER_HEIGHT,
  },
  headerIcon: {
    paddingLeft: 2 * Sizes.PADDING,
    paddingRight: 2 * Sizes.PADDING,
  },
  body: {
    backgroundColor: Colors.WHITE,
    marginTop: 1.5 * Sizes.MARGIN,
    paddingVertical: 2 * Sizes.PADDING,
  },
  footer: {
    height: ComponentAttributes.FOOTER_HEIGHT,
  },
});

export default ProductDetails;
