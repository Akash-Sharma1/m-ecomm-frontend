import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors, Sizes } from 'styles';

const BackgroundFloater = ({
  containerStyle,
  style,
  index=0,
  scale=1,
  children,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[
        styles.floater,
        scaleSize(scale),
        availableBackgroundlors[index%availableBackgroundlors.length],
        availableTransform[index % availableTransform.length],
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

const availableBackgroundlors = [
  { backgroundColor: Colors.SECONDARY_MUTED },
  { backgroundColor: Colors.PRIMARY_MUTED },
  { backgroundColor: Colors.PURPLE_MUTED },
  { backgroundColor: Colors.GREEN_MUTED },
];

export default BackgroundFloater;
