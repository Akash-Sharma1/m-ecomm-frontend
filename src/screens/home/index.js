import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { BannerList, List, ProductList, TopBar } from 'components';
import { Colors, ComponentAttributes, Sizes } from 'styles';
import Title from './components/Title';
import CategoryChips from './components/CategoryChips';

const Home = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <SafeAreaView style={styles.container} >
      <TopBar searchBar drawerMenu/>

      <List
        ListHeaderComponent={(
          <>
            <Title style={styles.marginedContainer} />
            <BannerList style={styles.banner} />
          </>
        )}
        ListFooterComponent={(
          <ProductList variant="small" products={products} style={styles.marginedContainer}
            ListHeaderComponent={(
              <>
                <View style={styles.categoryChips}>
                  <CategoryChips />
                </View>
              </>
            )}
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
