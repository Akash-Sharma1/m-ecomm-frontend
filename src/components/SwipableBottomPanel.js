import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring,
} from 'react-native-reanimated';

import { Colors, ComponentAttributes, Mixins, Sizes } from 'styles';

// eslint-disable-next-line max-len
const FULL_SCREEN_HEIGHT = Sizes.SCREEN_HEIGHT - ComponentAttributes.TOP_BAR_HEIGHT - (Platform.OS === 'ios' ? Sizes.STATUS_BAR_SIZE : 0);
const INTIAL_HEIGHT = Sizes.size(180);
const CLOSED_HEIGHT = Sizes.size(180);

const SwipableBottomPanel = ({
  children,
  initialHeight = INTIAL_HEIGHT,
  maxHeight = FULL_SCREEN_HEIGHT,
  closedHeight = CLOSED_HEIGHT,
  rebounce = true,
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
        if (height <= maxHeight && height >= 0) {
          panelHeight.value = height;
        }
      } else {
        // if rebounce is false them not allow overlimit value
        if (height <= maxHeight && height >= closedHeight) {
          panelHeight.value = height;
        }
      }
    },

    onEnd: (_, ctx) => {
      const currentHeight = panelHeight.value;
      const startedFromHeight = ctx.translationY;

      if (currentHeight < startedFromHeight) {
        // This is below the closing limit, bounce back
        panelHeight.value = rebounce ? withSpring(closedHeight) : closedHeight;
      } else if (currentHeight > startedFromHeight) {
        // This is for snapping to full screen view after scrolling up
        panelHeight.value = rebounce ? withSpring(maxHeight) : maxHeight;
      }
    },
  }, [
    maxHeight, closedHeight,
  ]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: panelHeight.value,
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
    borderTopLeftRadius: Sizes.RADIUS_32,
    borderTopRightRadius: Sizes.RADIUS_32,
    backgroundColor: Colors.WHITE,
    height: Sizes.SCREEN_HEIGHT,
    ...Mixins.simpleShadow(),
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
    paddingVertical: Sizes.PADDING,
    paddingHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
  },
});
