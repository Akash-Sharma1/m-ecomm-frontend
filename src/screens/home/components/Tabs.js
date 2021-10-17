import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { ProductList } from 'components';
import { homeScreenStyles as styles } from 'styles';

const Tabs = () => {
  return (
    <View style={styles.tabsContainer}>
      <ProductList />
    </View>
  );
};

export default Tabs;
