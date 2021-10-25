import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring,
} from 'react-native-reanimated';

import { Colors, Sizes } from 'styles';

const DEFAULT_SIZE = 300;
const CLOSING_THRESHOLD = 300;
const CLOSING_HEIGHT = 200;
const FULL_SCREEN_SNAPPING_THRESHOLD_FROM_TOP = 300;

const SwipableBottomPanel = ({
  children,
  marginFromTop = 0,
  initialHeight = DEFAULT_SIZE,
  closingThreshold = CLOSING_THRESHOLD,
  closedHeight = CLOSING_HEIGHT,
  fullScreenSnapThresholdFromTop = FULL_SCREEN_SNAPPING_THRESHOLD_FROM_TOP,
  rebounce=true,
}) => {
  const closedHeightFromTop = Sizes.SCREEN_HEIGHT - closedHeight;

  const panelHeight = useSharedValue(Sizes.SCREEN_HEIGHT - initialHeight > (
    Sizes.SCREEN_HEIGHT - closingThreshold
  ) ? (Sizes.SCREEN_HEIGHT - initialHeight) : closedHeightFromTop);

  const closingThresholdFromTop = closedHeightFromTop > (
    Sizes.SCREEN_HEIGHT - closingThreshold
  ) ? (Sizes.SCREEN_HEIGHT - closingThreshold) : closedHeightFromTop;
  console.log(closingThresholdFromTop, Sizes.SCREEN_HEIGHT - closingThreshold);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.translationY = panelHeight.value;
    },
    onActive: (event, ctx) => {
      const heightFromTop = ctx.translationY + event.translationY;
      console.log(heightFromTop, closingThresholdFromTop);

      if (rebounce) {
        // if rebouce is true then allow any value, as it will bounce back
        if (heightFromTop >= marginFromTop) {
          // Once Reached the topmost part dont allow any more translation
          panelHeight.value = heightFromTop;
        }
      } else {
        // if rebounce is false them not allow overlimit value
        if (heightFromTop >= marginFromTop &&
            heightFromTop < closingThresholdFromTop) {
          panelHeight.value = heightFromTop;
        }
      }
    },
    onEnd: () => {
      const heightFromTop = panelHeight.value;

      if (heightFromTop >= closingThresholdFromTop) {
        // This is below the closing limit, bounce back
        panelHeight.value = rebounce ?
          withSpring(closedHeightFromTop) :
          closedHeightFromTop;
      } else if (heightFromTop < fullScreenSnapThresholdFromTop) {
        // This is for snapping to full screen view after hitting threshold
        panelHeight.value = rebounce ?
          withSpring(marginFromTop) :
          marginFromTop;
      }
    },
  }, [
    closingThresholdFromTop, closedHeightFromTop,
    rebounce, marginFromTop, fullScreenSnapThresholdFromTop,
  ]);

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
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Animated.View style={styles.touchBarContainer}>
          <View style={styles.touchBar} />
        </Animated.View>
        <View style={styles.scrollView}>
          {children}
        </View>
      </Animated.View>
    </PanGestureHandler>
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
