import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts, Sizes } from 'styles';
import { convertDateStringToObject, timeFromDateObj } from 'utils/date';
import { convertDateTimeToRealtiveCasualLanguage } from './utils';
import MessageStatusTickIcon from './MessageStatusTickIcon';


const ChatTicks = ({
  message,
  containerStyle,
  iconStyle,
  textStyle,
  casualDateTime=false,
}) => {
  const getRelativeCasualTime = casualDateTime ?
    convertDateTimeToRealtiveCasualLanguage(convertDateStringToObject(message.sentOn)) :
    timeFromDateObj(convertDateStringToObject(message.sentOn));

  return (
    <View style={[styles.container, containerStyle]}>
      <MessageStatusTickIcon status={message.status} iconStyle={iconStyle} />
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
  timeText: {
    ...Fonts.H5,
    paddingLeft: Sizes.size(5),
  },
});
