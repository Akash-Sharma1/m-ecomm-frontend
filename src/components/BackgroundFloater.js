import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors, Mixins, Sizes } from 'styles';

const BackgroundFloater = ({
  containerStyle,
  style,
  tileColor=0,
  scale=1,
  children,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[
        styles.floater,
        scaleSize(scale),
        Mixins.populateStylePropery('backgroundColor', Colors.MUTED_PALLATE, tileColor),
        availableTransform[tileColor % availableTransform.length],
        style,
      ]}>
        {children}
      </View>
    </View>
  );
};

const FLOATER_SIZE = 150;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  floater: {
    borderRadius: Sizes.RADIUS_32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const availableTransform = [
  {
    transform: [{
      rotate: '-15deg',
    }],
  },
  {
    transform: [{
      rotate: '15deg',
    }],
  },
];

const scaleSize = (scale) => ({
  width: Sizes.size(FLOATER_SIZE * scale),
  height: Sizes.size(FLOATER_SIZE * scale),
});

export default BackgroundFloater;
