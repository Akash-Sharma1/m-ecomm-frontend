import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Sizes } from 'styles';

const GoBack = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.canGoBack() && navigation.goBack()}
      style={styles.container}
    >
      <Ionicons name="arrow-back" style={styles.back} />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: Sizes.RADIUS,
    padding: Sizes.PADDING,
  },
  back: {
    fontSize: Sizes.H4,
    color: Colors.DEFAULT_FONT_COLOR,
  },
});

export default GoBack;
