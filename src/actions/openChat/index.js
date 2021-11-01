import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Fonts } from 'styles';

const OpenChat = ({
  style,
  containerStyle,
  productId,
}) => {
  return (
    <TouchableOpacity style={[containerStyle]}>
      <Ionicons name="chatbox-outline" style={[styles.icon, style]} />
    </TouchableOpacity>
  );
};

export default OpenChat;

const styles = StyleSheet.create({
  icon: {
    ...Fonts.H1,
  },
});
