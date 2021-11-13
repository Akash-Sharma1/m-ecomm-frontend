import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Avatar, ChatTicks } from 'components';
import { OpenChat } from 'actions';
import { Colors, Fonts, Sizes } from 'styles';
import { setAccentColorIndex } from 'store/reducers/general';
import { getLastMessage, getOtherParticipantInConversation } from 'utils/chat';

const ConverationRow = ({ conversation, style, accentColorIndex=0 }) => {
  const dispatch = useDispatch();

  const allConversationMessages = useSelector((state) => state.chats.conversationMessages);
  const lastMessage = getLastMessage(allConversationMessages[conversation.id]) || {};

  const otherParticipant = getOtherParticipantInConversation(conversation.participants);

  const handlePress = React.useCallback(() => {
    dispatch(setAccentColorIndex(accentColorIndex));
  }, [dispatch, accentColorIndex]);

  return (
    <OpenChat
      onPress={handlePress}
      containerStyle={[styles.container, style]}
      conversationId={conversation.id}
    >
      <Avatar rounded style={styles.avatar} accentColorIndex={accentColorIndex} />

      <View style={styles.textContainer}>
        <View style={styles.topRow}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {otherParticipant}
          </Text>

          <ChatTicks
            message={lastMessage}
            highlightColorIndex={accentColorIndex}
            iconStyle={styles.ticks}
          />
        </View>

        <View style={styles.secondRow}>
          <Text style={styles.subtext} numberOfLines={1} ellipsizeMode="tail">
            {lastMessage?.content}
          </Text>
        </View>
      </View>
    </OpenChat>
  );
};

export default ConverationRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: Sizes.size(60),
    height: Sizes.size(60),
  },
  textContainer: {
    flex: 1,
    paddingLeft: Sizes.PADDING_2,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Sizes.size(5),
  },
  secondRow: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    ...Fonts.H4,
    ...Fonts.BOLD,
    textTransform: 'capitalize',
    marginRight: 2 * Sizes.MARGIN,
    flex: 1,
  },
  ticks: {
    color: Colors.GRAY_DARK,
  },
  subtext: {
    ...Fonts.H5,
    color: Colors.GRAY_DARK,
  },
});
