import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { ProductList, TopBar } from 'components';
import { Sizes } from 'styles';
import Title from './components/Title';

const Home = ({ navigation }) => {
  const { products } = useSelector((state) => state.products);

  return (
    <SafeAreaView style={styles.container} >
      <TopBar navigation={navigation} />
      <View style={styles.content}>
        <Title />
        <ProductList variant="small" products={products} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
  },
  content: {
    flex: 1,
  },
});

export default Home;
