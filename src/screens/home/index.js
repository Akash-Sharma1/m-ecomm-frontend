import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

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

      <ScrollView
        style={styles.scrollableContainer}
        showsVerticalScrollIndicator={false}
      >
        <Title />
        <View style={styles.categoryChips}>
          <CategoryChips />
        </View>
        <View>
          <ProductList
            variant="medium"
            products={products} unqiueIndex={3}
          />
        </View>
        <View>
          <ProductList variant="wide" products={products} unqiueIndex={1} />
        </View>
        <ProductList variant="small" products={products} unqiueIndex={2} />
      </ScrollView>
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
  scrollableContainer: {
    flex: 1,
  },
  categoryChips: {
    marginTop: Sizes.size(10),
    marginBottom: Sizes.size(20),
  },
});

export default Home;
