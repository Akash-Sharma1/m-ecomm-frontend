import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Sizes } from 'styles';

const GoBack = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.canGoBack() && navigation.goBack()}
    >
      <Ionicons name="arrow-back" style={styles.back} />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  back: {
    fontSize: Sizes.H1,
    color: Colors.DEFAULT_FONT_COLOR,
  },
});

export default GoBack;
