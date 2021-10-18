import React from 'react';
import { Box } from 'native-base';

import styles from './styles';

const Card = ({
  noShadow,
  shadow = 4,
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

export default Card;
