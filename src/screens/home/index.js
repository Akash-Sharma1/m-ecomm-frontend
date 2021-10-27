import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { BannerList, ProductList, TopBar } from 'components';
import { Colors, ComponentAttributes, Sizes } from 'styles';
import Title from './components/Title';
import CategoryChips from './components/CategoryChips';

const Home = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <SafeAreaView style={styles.container} >
      <TopBar searchBar drawerMenu/>
      <View style={styles.innerContainer}>

        <ProductList variant="small" products={products}
          ListHeaderComponent={(
            <>
              <Title />
              <BannerList style={styles.banner} />
              {/* <View style={styles.categoryChips}>
                <CategoryChips />
              </View> */}
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
  },
  innerContainer: {
    ...ComponentAttributes.SCREEN_CONTAINER,
    flex: 1,
  },
  categoryChips: {
    marginTop: Sizes.size(10),
    marginVertical: Sizes.MARGIN_2,
  },
  banner: {
    marginBottom: 1.5 * Sizes.MARGIN,
  },
});

export default Home;
