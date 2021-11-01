import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Card from 'components/Card';
import { Colors, ComponentAttributes, Fonts, Sizes } from 'styles';

const Banner = ({ style, index }) => {
  return (
    <Card rounded style={[styles.container, style, applyBgColor[index]]}>
      <Text style={styles.text}>
        Shree Ram
      </Text>
    </Card>
  );
};

export default Banner;

const applyBgColor = [
  { backgroundColor: Colors.PRIMARY_MUTED },
  { backgroundColor: Colors.BLUE_MUTED },
  { backgroundColor: Colors.PINK_MUTED },
  { backgroundColor: Colors.GREEN_MUTED },
];

const styles = StyleSheet.create({
  container: {
    height: ComponentAttributes.BANNER_HEIGHT,
    flex: 0,
    borderRadius: Sizes.RADIUS,
  },
  text: {
    ...Fonts.H4,
    ...Fonts.BOLD,
  },
});
