import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Mixins, Sizes } from 'styles';

// TODO: USERNAME AUTO
const Avatar = ({ username, style, rounded, accentColorIndex=0 }) => {
  return (
    <View style={[
      styles.container,
      rounded && styles.rounded,
      Mixins.populateStyleProperty('backgroundColor', Colors.LIGHT_PALLATE, accentColorIndex),
      style,
    ]}>
      <Text style={styles.text}>AK</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: Sizes.size(50),
    height: Sizes.size(50),
    backgroundColor: Colors.SECONDARY_LIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Sizes.RADIUS,
  },
  rounded: {
    borderRadius: Sizes.RADIUS_32,
  },
  text: {
    ...Fonts.H3,
    ...Fonts.BOLD,
  },
});

export default Avatar;
