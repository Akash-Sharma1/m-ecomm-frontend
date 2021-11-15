import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, Fonts, Sizes } from 'styles';
import { ChatTicks } from 'components';

const Message = ({ message, style }) => {
  const accentColorIndex = useSelector((state) => state.general.accentColorIndex);
  const myUserId = useSelector((state) => state.user.userId);
  const isMyMessage = myUserId === message.senderId;

  return (
    <View style={[
      styles.container,
      isMyMessage ? styles.alignRight : styles.alignLeft,
      style,
    ]}>
      <LinearGradient
        colors={[
          isMyMessage ? Colors.LIGHT_PALLATE[accentColorIndex] : Colors.GRAY_MEDIUM,
          isMyMessage ? Colors.MUTED_2_PALLATE[accentColorIndex] : Colors.GRAY_LIGHT,
        ]}
        style={styles.card}
      >
        <Text style={styles.text}>
          {message.content}
          {message.sentOn}
          <Text style={styles.invisibleText}>
            placholder
          </Text>
        </Text>

        <ChatTicks
          containerStyle={styles.ticksStyle}
          message={message}
        />
      </LinearGradient>
    </View>
  );
};

export default Message;

const MESSAGE_CARD_WIDTH = '80%';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    position: 'relative',
    width: MESSAGE_CARD_WIDTH,
    justifyContent: 'center',
    paddingVertical: Sizes.PADDING,
    paddingHorizontal: Sizes.PADDING_2,
    borderRadius: Sizes.RADIUS_2,
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  alignLeft: {
    alignItems: 'flex-start',
  },
  text: {
    ...Fonts.H4,
  },
  ticksStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingHorizontal: Sizes.PADDING_2,
    paddingVertical: Sizes.PADDING / 2,
  },
  invisibleText: {
    opacity: 0,
  },
});
