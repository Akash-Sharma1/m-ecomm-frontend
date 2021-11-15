import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { fetchMessages } from 'store/reducers/chats';

import { List } from 'components';
import { Sizes } from 'styles';
import { getChatDateString, hasDateChangedInNextMessage } from 'utils/chat';
import Message from './Message';
import DaysLabel from './DaysLabel';


const MessageContainer = ({ item, index, messages }) => {
  const dateString = getChatDateString(item.sentOn || item.createdOn);
  const showDateString = index != messages.length - 1 &&
    hasDateChangedInNextMessage(
      item.sentOn || item.createdOn,
      messages[index + 1].sentOn || messages[index + 1].createdOn,
    );

  if (showDateString) {
    return (
      <View>
        <DaysLabel text={dateString} style={styles.message} />
        <Message message={item} style={styles.message} />
      </View>
    );
  } else {
    return (
      <Message message={item} style={styles.message} />
    );
  }
};

const MessageList = ({
  messages,
  currentConversationId,
}) => {
  const dispatch = useDispatch();

  const loadMore2 = React.useCallback(() => {
    if (messages.length <= 1) {
      dispatch(fetchMessages({ conversationId: currentConversationId }));
    }
  }, [dispatch, currentConversationId, messages]);

  const reversedMessages = messages;

  return (
    <List
      style={styles.container}
      data={reversedMessages}
      renderItem={({ item, index }) => (
        <MessageContainer
          item={item}
          index={index}
          messages={reversedMessages}
        />
      )}
      inverted
      onEndReached={loadMore2}
      onEndReachedThreshold={0.4}
    />
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    marginVertical: Sizes.MARGIN,
  },
});
