import React, from 'react';
import { StyleSheet, View } from 'react-native';
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring,
} from 'react-native-reanimated';

import { Colors, Sizes } from 'styles';

const DEFAULT_SIZE = 300;
const CLOSING_THRESHOLD = 200;

const SwipableBottomPanel = ({
  children,
  initialHeight = DEFAULT_SIZE,
  closingThreshold = CLOSING_THRESHOLD,
  closedSize = 50,
}) => {
  const panelHeight = useSharedValue(initialHeight);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.translationY = panelHeight.value;
    },
    onActive: (event, ctx) => {
      panelHeight.value = ctx.translationY - event.translationY;
    },
    onEnd: () => {
      const height = panelHeight.value;

      if (height < closingThreshold) {
        panelHeight.value = withSpring(closedSize);
      }
    },
  }, [closingThreshold, closedSize]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: panelHeight.value,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={styles.touchBarContainer}>
          <View style={styles.touchBar} />
        </Animated.View>
      </PanGestureHandler>
      <ScrollView style={styles.scrollView}>
        {children}
      </ScrollView>
    </Animated.View>
  );
};

export default SwipableBottomPanel;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: Sizes.RADIUS_2,
    borderTopRightRadius: Sizes.RADIUS_2,
    backgroundColor: Colors.WHITE,
  },
  touchBar: {
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: Sizes.RADIUS_2,
    height: Sizes.size(10),
    width: '40%',
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
