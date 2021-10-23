import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Colors, Mixins, Sizes } from 'styles';

const Card = ({
  noShadow,
  rounded,
  children,
  onPress,
  style,
}) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      style={[
        styles.card,
        rounded && styles.rounded,
        !noShadow && Mixins.simpleShadow(0.3),
        style,
      ]}
    >
      {children}
    </Pressable>
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
