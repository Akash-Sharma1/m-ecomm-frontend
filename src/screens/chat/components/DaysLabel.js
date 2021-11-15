import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts, Sizes } from 'styles';

const DaysLabel = ({ text, style }) => {
  return (
    <View style={styles.container, style}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default DaysLabel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...Fonts.H5,
    ...Fonts.BOLD,
    textAlign: 'center',
    marginVertical: Sizes.PADDING / 2,
    paddingVertical: Sizes.PADDING / 4,
  },
});
