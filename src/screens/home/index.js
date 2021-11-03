import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';

import { List, ProductTile, TopBar } from 'components';
import { Colors, Sizes } from 'styles';

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
          <ProductTile.LargeDetails
            product={products[item]}
            style={styles.tile}
            tileColor={index}
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
  },
  marginedContainer: {
    marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
  },
  tile: {
    marginBottom: Sizes.size(30),
  },
});

export default Home;
