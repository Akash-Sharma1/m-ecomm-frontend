import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, View } from 'react-native';

import { ProductList, TopBar } from 'components';
import styles from './styles';
import Title from './components/Title';
// import Tabs from './components/Tabs';


const Home = ({ navigation }) => {
  const { products } = useSelector((state) => state.products);

  return (
    <SafeAreaView style={styles.container} >
      <TopBar navigation={navigation} />
      <View style={styles.container}>
        <Title />
        <ProductList variant="small" products={products} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
