import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { ProductList, TopBar } from 'components';
import { Sizes } from 'styles';
import Title from './components/Title';

const Home = ({ navigation }) => {
  const { products } = useSelector((state) => state.products);

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scrollableContainer}>
        <TopBar navigation={navigation} />
        <View style={styles.content}>
          <Title />
          <View>
            <ProductList variant="wide" products={products} />
          </View>
          <ProductList variant="small" products={products} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollableContainer: {
    flex: 1,
    paddingHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
  },
  content: {
    flex: 1,
  },
});

export default Home;
