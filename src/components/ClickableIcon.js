import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Fonts, Sizes } from 'styles';


const ClickableIcon = ({ containerStyle, style, onPress, iconName }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      <Ionicons name={iconName} style={[styles.icon, style]} />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Sizes.RADIUS,
    padding: Sizes.PADDING,
  },
  icon: {
    ...Fonts.H1,
  },
});

export default ClickableIcon;
