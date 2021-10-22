import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { ProductList, TopBar } from 'components';
import { Sizes } from 'styles';
import Title from './components/Title';
import CategoryChips from './components/CategoryChips';

const Home = ({ navigation }) => {
  const { products } = useSelector((state) => state.products);

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.header}>
        <TopBar navigation={navigation} />
      </View>
      <ProductList variant="wide" products={products}
        ListHeaderComponent={(
          <>
            <Title />
            <View style={styles.categoryChips}>
              <CategoryChips />
            </View>
            <ProductList variant="large" horizontal products={products} />
          </>
        )}
        ListFooterComponent={(
          <>
            <ProductList variant="small" products={products} />
            <ProductList variant="medium" horizontal products={products} />
          </>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
    marginBottom: Sizes.size(110),
    flex: 1,
  },
  header: {
    paddingBottom: Sizes.PADDING,
  },
  categoryChips: {
    marginTop: Sizes.size(10),
    marginBottom: Sizes.size(20),
  },
});

export default Home;
