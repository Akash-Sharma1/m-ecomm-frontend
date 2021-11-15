import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CHAT_MESSAGE_STATUSES } from '../../utils/chat';

import { Colors, Fonts, Mixins } from 'styles';

const MessageStatusTickIcon = ({ status, highlightColorIndex=0, iconStyle }) => {
  switch (status) {
  case CHAT_MESSAGE_STATUSES.PENDING:
    return (
      <MaterialCommunityIcons
        name="message-text-clock-outline"
        style={[styles.icon, iconStyle]}
      />
    );
  case CHAT_MESSAGE_STATUSES.SENT:
    return (
      <Ionicons
        name="ios-checkmark-outline"
        style={[styles.icon, iconStyle]}
      />
    );
  case CHAT_MESSAGE_STATUSES.DELIVERED:
    return (
      <Ionicons
        name="ios-checkmark-outline"
        style={[styles.icon, iconStyle]}
      />
    );
  case CHAT_MESSAGE_STATUSES.READ:
    return (
      <Ionicons name="ios-checkmark-done-outline"
        style={[
          styles.icon,
          Mixins.populateStyleProperty('color', Colors.SOLID_PALLATE), highlightColorIndex,
          iconStyle,
        ]}
      />
    );
  case CHAT_MESSAGE_STATUSES.ERROR_SENDING:
    return (
      <MaterialCommunityIcons
        name="message-alert-outline"
        style={[
          styles.icon,
          Mixins.populateStyleProperty('color', Colors.SOLID_PALLATE), highlightColorIndex,
          iconStyle,
        ]}
      />
    );
  default:
    return null;
  }
};

export default MessageStatusTickIcon;

const styles = StyleSheet.create({
  icon: {
    ...Fonts.H2,
    ...Fonts.BOLD,
  },
});
