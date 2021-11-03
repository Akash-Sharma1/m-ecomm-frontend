import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { Colors, Sizes } from 'styles';

const Dot = ({ style, activeStyle, active }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
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

// Position can be top, bottom
const Dots = ({
  currentIndex = 0,
  totalDots = 0,
  style,
  activeStyle,
  containerStyle,
  position='bottom',
}) => {
  return (
    <View style={[
      position === 'top' && styles.moveToTop,
      position === 'bottom' && styles.moveToBottom,
      styles.container,
      containerStyle,
    ]}>
      {[...Array(totalDots)].map((_, index) => (
        <Dot
          key={index}
          style={style}
          activeStyle={activeStyle}
          active={(currentIndex === (index % totalDots))}
        />
      ))}
    </View>
  );
};

export default Dots;

const DOTS_SIZE = Sizes.size(8);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
  },
  moveToTop: {
    top: 0,
    width: '100%',
  },
  moveToBottom: {
    bottom: 0,
    width: '100%',
  },
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
