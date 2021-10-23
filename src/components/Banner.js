import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Card from 'components/Card';
import { ComponentAttributes, Sizes } from 'styles';

const Banner = ({ style, index }) => {
  return (
    <Card rounded style={[styles.container, style]}>
      <Text>
        Hello There
        {index}
      </Text>
    </Card>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    height: ComponentAttributes.BANNER_HEIGHT,
    flex: 0,
    borderRadius: Sizes.RADIUS_0,
  },
});
