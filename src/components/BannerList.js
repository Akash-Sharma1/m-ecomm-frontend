import React from 'react';
import { StyleSheet } from 'react-native';

import { ComponentAttributes, Sizes } from 'styles';
import List from 'components/List';
import Banner from 'components/Banner';

const BannerList = ({ style }) => {
  return (
    <List
      style={[styles.container, style]}
      data={[...Array(4)]}
      renderItem={({ item, index }) => (
        <Banner style={styles.banner} index={index}/>
      )}
      horizontal
      autoPlay
      snapOnItems
    />
  );
};

export default BannerList;

const styles = StyleSheet.create({
  container: {
    height: ComponentAttributes.BANNER_HEIGHT,
  },
  banner: {
    width: Sizes.SCREEN_WIDTH - 2 * Sizes.EDGE_HORIZONTAL_MARGIN,
  },
});
