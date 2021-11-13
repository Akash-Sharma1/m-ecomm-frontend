import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Colors, Sizes } from 'styles';
import ChatTopHeader from './components/ChatTopHeader';
import ChatBottomHeader from './components/ChatBottomHeader';
import ChatFooter from './components/ChatFooter';
import EmptyConversation from './components/EmptyConversation';
import MessageList from './components/MessageList';


const Chat = () => {
  const currentConversationId = useSelector((state) => state.conversations.currentConversationId);
  const allConversationMessages = useSelector((state) => state.chats.conversationMessages);

  const messages = allConversationMessages[currentConversationId];

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
          <MessageList
            messages={messages}
            currentConversationId={currentConversationId}
          />
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
