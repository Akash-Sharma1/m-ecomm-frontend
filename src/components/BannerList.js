import React from 'react';
import { StyleSheet } from 'react-native';

import { ComponentAttributes, Sizes } from 'styles';
import List from 'components/List';
import Banner from 'components/Banner';
import Carausal from './Carausal';

const BannerList = ({ style }) => {
  return (
    <Carausal
      style={[styles.container, style]}
      data={[...Array(4)]}
      autoScroll
    >
      <Banner style={styles.banner} />
    </Carausal>
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
