import React from 'react';
import { View } from 'react-native';
import { Chip } from 'components';
import Layout from 'styles/common/layout';


const Home = () => {
  return (
    <View style={Layout.flexRow}>
      <Chip label="Most Popular" />
      <Chip label="Most Popular 2" />
    </View>
  );
};

export default Home;
