import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Fonts, Sizes } from 'styles';
import { useNavigation } from '@react-navigation/core';

const GoBack = ({ containerStyle, style }) => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.canGoBack() && navigation.goBack();
  }, [navigation]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, containerStyle]}
    >
      <Ionicons name="ios-chevron-back" style={[styles.back, style]} />
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
    ...Fonts.H1,
  },
});

export default GoBack;
