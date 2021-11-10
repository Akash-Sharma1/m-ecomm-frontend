import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming,
} from 'react-native-reanimated';

import { Colors, Sizes } from 'styles';

// eslint-disable-next-line max-len
const FULL_SCREEN_HEIGHT = (
  Sizes.SCREEN_HEIGHT -
  Sizes.size(50) -
  (Platform.OS === 'ios' ? Sizes.STATUS_BAR_SIZE : 0)
);

const INTIAL_HEIGHT = Sizes.size(180);
const TOGGLE_THRESHOLD = Sizes.size(50);
const CLOSED_HEIGHT = Sizes.size(180);

const SwipableBottomPanel = ({
  children,
  initialHeight = INTIAL_HEIGHT,
  maxHeight = FULL_SCREEN_HEIGHT,
  topMargin = 0,
  closedHeight = CLOSED_HEIGHT,
  rebounce = true,
  toggleThreshold = TOGGLE_THRESHOLD,
  hideTouchBar=false,
  style,
}) => {
  const panelHeight = useSharedValue(initialHeight);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.translationY = panelHeight.value;
    },

    onActive: (event, ctx) => {
      const height = ctx.translationY - event.translationY;

      if (rebounce) {
        // if rebouce is true then allow any value, as it will bounce back
        if (height <= (maxHeight - topMargin) && height >= 0) {
          panelHeight.value = height;
        }
      } else {
        // if rebounce is false them not allow overlimit value
        if (height <= (maxHeight - topMargin) && height >= closedHeight) {
          panelHeight.value = height;
        }
      }
    },

    onEnd: (_, ctx) => {
      const currentHeight = panelHeight.value;
      const startedFromHeight = ctx.translationY;

      if (currentHeight < startedFromHeight - toggleThreshold) {
        // This is for snapping to closed view after scrolling down
        panelHeight.value = rebounce ? withSpring(closedHeight) : withTiming(closedHeight);
      } else if (currentHeight > startedFromHeight + toggleThreshold) {
        // This is for snapping to full screen view after scrolling up
        panelHeight.value = rebounce ?
          withSpring(maxHeight - topMargin) :
          withTiming(maxHeight - topMargin);
      }
    },
  }, [
    maxHeight, closedHeight, rebounce, toggleThreshold, topMargin,
  ]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: panelHeight.value,
    };
  }, []);

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyle, style]}>
        {!hideTouchBar && (
          <View style={styles.touchBarContainer}>
            <View style={styles.touchBar} />
          </View>
        )}
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
    borderTopLeftRadius: Sizes.RADIUS_32,
    borderTopRightRadius: Sizes.RADIUS_32,
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
  },
});
