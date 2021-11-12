import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Colors, Sizes } from 'styles';
import { fetchMessages } from 'store/reducers/chats';
import ChatTopHeader from './components/ChatTopHeader';
import ChatBottomHeader from './components/ChatBottomHeader';
import ChatFooter from './components/ChatFooter';
import EmptyConversation from './components/EmptyConversation';
import MessageList from './components/MessageList';


const Chat = () => {
  const dispatch = useDispatch();
  const { currentConversationId, conversations } = useSelector((state) => state.chats);
  const conversation = conversations[currentConversationId];
  const messages = conversation.messages;

  React.useEffect(() => {
    dispatch(fetchMessages({ conversationId: currentConversationId }));
  }, [dispatch, currentConversationId]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marginContainer}>
        <ChatTopHeader />
        <ChatBottomHeader />
      </View>

      <View style={styles.body}>
        {(!messages || messages.length === 0) ? (
          <EmptyConversation />
        ) : (
          <MessageList messages={messages} />
        )}
      </View>

      <View style={styles.marginContainer}>
        <ChatFooter />
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_BACKGROUND_COLOR,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.GRAY_LIGHT,
    paddingHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
  },
  marginContainer: {
    marginHorizontal: Sizes.EDGE_HORIZONTAL_MARGIN,
  },
});
