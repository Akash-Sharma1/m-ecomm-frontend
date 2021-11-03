import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import { Colors, Fonts, Sizes } from 'styles';
import { Routes } from 'constants';

const OpenChat = ({
  style,
  containerStyle,
  productId,
}) => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();

  const onPress = useCallback(() => {
    // dispatch(setCurrentChatProductId(productId));
    navigation.navigate(Routes.CHAT);
  }, [navigation]);


  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <Ionicons name="chatbox-outline" style={[styles.icon, style]} />
    </TouchableOpacity>
  );
};

export default OpenChat;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: Sizes.RADIUS,
    padding: Sizes.PADDING,
  },
  icon: {
    ...Fonts.H1,
  },
});
