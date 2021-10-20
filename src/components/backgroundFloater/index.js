import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors, Sizes } from 'styles';

const BackgroundFloater = ({ style, color=0, scale=1 }) => {
  return (
    <View style={[
      styles.floater,
      scaleSize(scale),
      availableBackgroundlors[color%availableBackgroundlors.length],
      style,
    ]}>
      <View style={styles.insideBorderedCircle} />
    </View>
  );
};

const FLOATER_SIZE = 90;

const styles = StyleSheet.create({
  floater: {
    borderRadius: Sizes.RADIUS_CIRCLE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideBorderedCircle: {
    backgroundColor: Colors.TRANSPARENT,
    borderRadius: Sizes.RADIUS_CIRCLE,
    borderColor: Colors.WHITE,
    width: '90%',
    height: '90%',
    borderWidth: Sizes.size(2),
  },
});

const scaleSize = (scale) => ({
  width: Sizes.size(FLOATER_SIZE * scale),
  height: Sizes.size(FLOATER_SIZE * scale),
});

const availableBackgroundlors = [
  { backgroundColor: Colors.PINK_MUTED },
  { backgroundColor: Colors.BLUE_MUTED },
  { backgroundColor: Colors.GREEN_MUTED },
  { backgroundColor: Colors.YELLOW_MUTED },
];

export default BackgroundFloater;
