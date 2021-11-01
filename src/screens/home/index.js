import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { BannerList, List, ProductList, ProductTile, TopBar } from 'components';
import { Colors, ComponentAttributes, Sizes } from 'styles';
import Title from './components/Title';
import CategoryChips from './components/CategoryChips';

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const productIds = Object.keys(products);

  return (
    <SafeAreaView style={styles.container} >
      <TopBar searchBar drawerMenu/>
      <List
        style={styles.marginedContainer}
        data={productIds}
        renderItem={({ item, index }) => (
          <ProductTile
            product={products[item]}
            style={styles.tile}
            index={index}
          />
        )}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
    borderBottomLeftRadius: Sizes.RADIUS,
    borderBottomRightRadius: Sizes.RADIUS,
    marginBottom: ComponentAttributes.BOTTOM_TABS_HEIGHT +
    ComponentAttributes.BOTTOM_TABS_ABSOLUTE_BOTTOM,
  },
  marginedContainer: {
    marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
  },
  tile: {
    marginBottom: Sizes.size(30),
  },
  categoryChips: {
    marginTop: Sizes.size(10),
    marginVertical: Sizes.MARGIN_2,
  },
  banner: {
    marginTop: 2 * Sizes.PADDING,
    marginBottom: 1.5 * Sizes.MARGIN,
  },
});

export default Home;
