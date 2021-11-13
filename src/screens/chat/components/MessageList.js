import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import { fetchMessages } from 'store/reducers/chats';

import { List } from 'components';
import { Sizes } from 'styles';
import Message from './Message';

const MessageList = ({
  messages,
  currentConversationId,
}) => {
  const dispatch = useDispatch();

  const loadMore = React.useCallback(() => {
    console.log('start reached');
    dispatch(fetchMessages({ conversationId: currentConversationId }));
  }, [dispatch, currentConversationId]);

  const loadMore2 = React.useCallback(() => {
    console.log('end reached');
    dispatch(fetchMessages({ conversationId: currentConversationId }));
  }, [dispatch, currentConversationId]);

  return (
    <List
      style={styles.container}
      data={messages}
      renderItem={({ item }) => (
        <Message message={item} style={styles.message} />
      )}
      onStartReached={loadMore}
      onEndReached={loadMore2}
      onEndReachedThreshold={0.4}
      onStartReachedThreshold={0.4}
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
