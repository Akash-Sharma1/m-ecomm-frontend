import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Easing, Extrapolate, interpolate,
  useAnimatedStyle, useSharedValue, withTiming,
} from 'react-native-reanimated';

import { Colors, Sizes } from 'styles';

const TimeConfigurations = { duration: 200, easing: Easing.linear };

const Dot = ({ style, activeStyle, active }) => {
  const animatedValue = useSharedValue(0);

  const animatedDotStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animatedValue.value,
        [0, 1],
        [0.8, 0.9],
        Extrapolate.CLAMP,
      ),
      width: interpolate(
        animatedValue.value,
        [0, 1],
        [DOTS_SIZE, 2 * DOTS_SIZE],
        Extrapolate.CLAMP,
      ),
    };
  });

  React.useEffect(() => {
    if (active) {
      animatedValue.value = withTiming(1, TimeConfigurations);
    } else {
      animatedValue.value = withTiming(0, TimeConfigurations);
    }
  }, [active, animatedValue]);

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
