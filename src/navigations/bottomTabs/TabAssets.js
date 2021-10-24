import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Colors, Fonts, Sizes } from 'styles';
import Animated, { EasingNode } from 'react-native-reanimated';

const AnimatedMaterialCommunityIcons = Animated.createAnimatedComponent(
  MaterialCommunityIcons);
const AnimatedIonicons = Animated.createAnimatedComponent(Ionicons);


export const BottomTabNavigationIcon = ({ name, focused }) => {
  const size = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (focused) {
      Animated.timing(size, {
        toValue: 1,
        duration: 1500,
        easing: EasingNode.bounce,
      }).start();
    } else {
      Animated.timing(size, {
        toValue: 0,
        easing: EasingNode.bounce,
        duration: 1500,
      }).start();
    }
  }, [focused, size]);

  const fontSize = size.interpolate({
    inputRange: [0, 1],
    outputRange: [Sizes.size(28), Sizes.size(34)],
  });

  const props = {
    name,
    style: [{ fontSize: fontSize }, focused && styles.focused],
  };

  if (name === 'chatbox-ellipses') {
    return <AnimatedIonicons {...props} />;
  } else {
    return (
      <AnimatedMaterialCommunityIcons {...props} />
    );
  }
};

export const BottomTabNavigationText = ({ label, focused }) => {
  return focused && (
    <Text style={[styles.text, focused && styles.focused]}>
      {label}
    </Text>
  ) && null;
};

const styles = StyleSheet.create({
  focused: {
    color: Colors.PRIMARY,
  },
  text: {
    position: 'relative',
    top: -(Sizes.size(5)),
    ...Fonts.H6,
  },
});

