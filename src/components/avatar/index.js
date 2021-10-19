import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts, Sizes } from 'styles';

// TODO: USERNAME AUTO
const Avatar = ({ username }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AK</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: Sizes.size(50),
    height: Sizes.size(50),
    backgroundColor: Colors.SECONDARY,
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
