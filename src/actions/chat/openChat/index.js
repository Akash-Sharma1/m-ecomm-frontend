import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';

import { Colors, Fonts, Sizes } from 'styles';
import { Routes } from 'constants';
import { selectOrCreateConversation } from 'store/reducers/chats';

const OpenChat = ({
  style,
  containerStyle,
  enableIcon=false,
  recieverId,
  recieverName,
  resourceType,
  children,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    dispatch(selectOrCreateConversation({
      recieverId,
      recieverName,
      resourceType,
    }));

    navigation.navigate(Routes.CHAT);
  }, [navigation, recieverId, recieverName, resourceType, dispatch]);


  return (
    <TouchableOpacity style={[
      !enableIcon && styles.container, enableIcon && styles.iconContainer, containerStyle,
    ]} onPress={onPress}>
      {enableIcon && (
        <Ionicons name="chatbox-outline" style={[styles.icon, style]} />
      )}
      {children}
    </TouchableOpacity>
  );
};

export default OpenChat;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: Sizes.RADIUS,
    padding: Sizes.PADDING,
  },
  container: {
    flex: 1,
  },
  icon: {
    ...Fonts.H1,
  },
});
