import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Colors, Sizes } from 'styles';
import ChatTopHeader from './components/ChatTopHeader';
import ChatBottomHeader from './components/ChatBottomHeader';
import ChatFooter from './components/ChatFooter';


const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marginContainer}>
        <ChatTopHeader />
        <ChatBottomHeader />
      </View>

      <View style={styles.body}>
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
