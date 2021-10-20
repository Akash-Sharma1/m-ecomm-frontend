import React from 'react';
import { StyleSheet } from 'react-native';
import { Box } from 'native-base';

import { Colors, Sizes } from 'styles';

const Card = ({
  noShadow,
  shadow = 1,
  rounded,
  children,
  style = {},
}) => {
  const shadowVar = noShadow ? null : shadow;

  return (
    <Box shadow={shadowVar} style={[
      styles.card,
      style,
      rounded && styles.rounded,
    ]}>
      {children}
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: Sizes.PADDING,
  },
  rounded: {
    borderRadius: Sizes.RADIUS_2,
  },
});

export default Card;
