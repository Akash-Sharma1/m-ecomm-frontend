import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring,
} from 'react-native-reanimated';

import { Colors, Sizes } from 'styles';

const DEFAULT_SIZE = 300;
const CLOSING_THRESHOLD = 200;
const CLOSING_HEIGHT = 200;

const SwipableBottomPanel = ({
  children,
  initialHeight = DEFAULT_SIZE,
  closingThreshold = CLOSING_THRESHOLD,
  closedHeight = CLOSING_HEIGHT,
}) => {
  const panelHeight = useSharedValue(Sizes.SCREEN_HEIGHT - initialHeight);
  const closedHeightFromTop = Sizes.SCREEN_HEIGHT - closedHeight;
  const closingThresholdFromTop = Sizes.SCREEN_HEIGHT - closingThreshold;

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.translationY = panelHeight.value;
    },
    onActive: (event, ctx) => {
      const heightFromTop = ctx.translationY + event.translationY;
      if (heightFromTop >= 0) {
        panelHeight.value = heightFromTop;
      }
    },
    onEnd: () => {
      const heightFromTop = panelHeight.value;

      if (heightFromTop >= closingThresholdFromTop) {
        panelHeight.value = withSpring(closedHeightFromTop);
      }
    },
  }, [closingThresholdFromTop, closedHeightFromTop]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: panelHeight.value,
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={styles.touchBarContainer}>
          <View style={styles.touchBar} />
        </Animated.View>
      </PanGestureHandler>
      <View style={styles.scrollView}>
        {children}
      </View>
    </Animated.View>
  );
};

export default SwipableBottomPanel;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: Sizes.RADIUS_2,
    borderTopRightRadius: Sizes.RADIUS_2,
    backgroundColor: Colors.WHITE,
    height: Sizes.SCREEN_HEIGHT,
  },
  touchBar: {
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: Sizes.RADIUS_2,
    height: Sizes.size(10),
    width: '20%',
  },
  touchBarContainer: {
    height: Sizes.size(30),
    alignItems: 'center',
    paddingVertical: Sizes.PADDING,
    width: '100%',
  },
  scrollView: {
    flex: 1,
    padding: Sizes.PADDING,
  },
});
