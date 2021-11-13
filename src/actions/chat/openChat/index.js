import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';

import { Colors, Fonts, Sizes } from 'styles';
import { Routes } from 'constants';
import { selectConversation, setNewConversationResource } from 'store/reducers/conversations';

const OpenChat = ({
  style,
  containerStyle,
  enableIcon=false,
  receiverId,
  resourceId,
  resourceType,
  conversationId=null,
  onPress,
  children,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = useCallback(() => {
    dispatch(selectConversation({ conversationId }));

    if (conversationId === null) {
      dispatch(setNewConversationResource({
        receiverId, resourceId, resourceType,
      }));
    }

    onPress && onPress();

    navigation.navigate(Routes.CHAT);
  }, [
    navigation, conversationId, dispatch, onPress,
    receiverId, resourceId, resourceType,
  ]);


  return (
    <TouchableOpacity style={[
      !enableIcon && styles.container, enableIcon && styles.iconContainer, containerStyle,
    ]} onPress={handlePress}>
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
