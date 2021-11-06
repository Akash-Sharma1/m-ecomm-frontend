import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

// TODO: USERNAME AUTO
const Avatar = ({ username, style }) => {
  return (
    <View style={[styles.container, style]}>
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
  text: {
    ...Fonts.H3,
    ...Fonts.BOLD,
  },
});

export default Avatar;
