import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { BannerList, ProductList, TopBar } from 'components';
import { ComponentAttributes, Sizes } from 'styles';
import Title from './components/Title';
import CategoryChips from './components/CategoryChips';

const Home = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <SafeAreaView style={styles.container} >
      <TopBar avatar/>

      <Title />
      <View style={styles.categoryChips}>
        <CategoryChips />
      </View>
      <View>
        <BannerList style={styles.banner}/>
      </View>

      <ProductList variant="small" products={products}
        ListFooterComponent={(
          <ProductList variant="medium" horizontal products={products} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...ComponentAttributes.SCREEN_CONTAINER,
  },
  categoryChips: {
    marginVertical: Sizes.size(10),
  },
  banner: {
    marginVertical: Sizes.MARGIN,
  },
});

export default Home;
