import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CHAT_MESSAGE_STATUSES } from '../utils/chat';

import { Colors, Fonts, Mixins, Sizes } from 'styles';
import { convertDateStringToObject, convertDateTimeToRealtiveCasualLanguage } from 'utils/date';

const StatusIcon = ({ status, highlightColorIndex=0, iconStyle }) => {
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
  }
};

const ChatTicks = ({ message, containerStyle, iconStyle, textStyle }) => {
  const getRelativeCasualTime = convertDateTimeToRealtiveCasualLanguage(
    convertDateStringToObject(message.sentOn));

  return (
    <View style={[styles.container, containerStyle]}>
      <StatusIcon status={message.status} iconStyle={iconStyle} />
      {message.sentOn && (
        <Text style={[styles.timeText, textStyle]}>
          {getRelativeCasualTime}
        </Text>
      )}
    </View>
  );
};

export default ChatTicks;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    ...Fonts.H2,
    ...Fonts.BOLD,
  },
  timeText: {
    ...Fonts.H5,
    paddingLeft: Sizes.size(5),
  },
});
