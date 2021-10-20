import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors, Sizes } from 'styles';

const BackgroundFloater = ({ style, color=0 }) => {
  return (
    <View style={[
      styles.floater,
      availableBackgroundlors[color%availableBackgroundlors.length],
      style,
    ]}>
      <View style={styles.insideBorderedCircle} />
    </View>
  );
};

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

const availableBackgroundlors = [
  { backgroundColor: Colors.PINK_MUTED },
  { backgroundColor: Colors.BLUE_MUTED },
  { backgroundColor: Colors.GREEN_MUTED },
  { backgroundColor: Colors.YELLOW_MUTED },
];

export default BackgroundFloater;
