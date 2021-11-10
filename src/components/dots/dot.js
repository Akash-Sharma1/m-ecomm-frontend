import React from 'react';
import { StyleSheet, Animated } from 'react-native';

import { Colors, Sizes } from 'styles';

const Dot = ({ style, activeStyle, active }) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const animatedDotStyle = {
      opacity: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 0.9]
      }),
      width: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [DOTS_SIZE, 2 * DOTS_SIZE]
      }),
  };

  React.useEffect(() => {
    if (active) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [active]);

  return (
    <Animated.View
      style={[
        styles.dot,
        animatedDotStyle,
        active && styles.activeDot,
        style,
        active && activeStyle,
      ]}
    />
  );
};

export default Dot;

const DOTS_SIZE = Sizes.size(8);

const styles = StyleSheet.create({
  dot: {
    borderColor: Colors.BLACK,
    borderWidth: Sizes.size(1),
    borderRadius: Sizes.RADIUS,
    width: DOTS_SIZE,
    height: DOTS_SIZE,
    marginHorizontal: DOTS_SIZE / 2,
  },
  activeDot: {
    backgroundColor: Colors.BLACK,
  },
});